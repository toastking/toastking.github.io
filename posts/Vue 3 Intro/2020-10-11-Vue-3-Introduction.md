---
layout: post
title: Vue 3 Introduction By Example
date: '2020-10-23'
---

Vue 3 was released back in September so we've had some time to kick the tires on it now. It brings a lot of new features and also a lot of breaking changes. But, a lot of the breaking changes lay the groundwork for better tooling in the future. In this post we'll introduce Vue 3 by building a weather application using some of the new features.

# Composition API

## Getting Started

The Composition API is probably the biggest new addition. It's similar to React Hooks. It's a way to share logic between components by writing them in a functional manner. It will also better Typescript compatibility in Vue 3.

To start using the Composition API (with Typescript) we'll call the `defineComponent` function and return it from our Single File Component. That function takes an object representing a Vue component. Inside of that we'll implement a `setup` function.

The `setup` function is how you start using the Composition API. The function returns an object containing any values you want to use.

## Reactivity with ref and computed

The old way of writing components is now called the Options API. In the Options API reactive objects could be created by returning them from the `data` or `computed` fields in the component.

In the Composition API you implement reactive objects by calling `ref` or `computed`.

`ref` corresponds to objects returned from `data`. The function returns reactive objects that can be updated in other places.

`computed` works the same way as the Options API. You pass in a function, whenever a reactive dependency in that function changes the function is run and the value is updated.

To start our weather app we'll make a component with `defineComponent` and create a reactive variable with `ref` that represents the weekly forecast. We'll return this value from the `setup` function so we can access it in the template.

```vue
<!-- Forecast.vue -->
<template>
  <div class="forecast">
    <daily-weather
      v-for="forecast of forecasts"
      :key="forecast.name"
      :forecast="forecast"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    /** Weather forecasts for the week */
    const forecasts = ref<Array<Forecast>>([])

    return { forecasts }
  },
  components: { DailyWeather },
})
</script>
```

# Plugins

## Provide and Inject

Many Vue Plugins in Vue 2 would extend the Vue object. For example, Vuex adds a the `$store` value to the Vue object.

The Composition API is functional, it doesn't have the same `this` context as the Options API. That means we can't access values from plugins that extend the Vue object.

We'll use the `provide` and `inject` to access plugin values in the Composition API. These functions allow for dependency injection. We define a value somewhere up the component tree with `provide` and use it in any of it's child components with `inject`.

## Location Plugin

For our weather app we need a way to get the user's current location. We'll make a plugin that calls the HTML5 Geolocation API to get the user's current location.

In the `install` function for the plugin we'll provide it at the app level. We'll also add a function to use the provided value in components. That's the recommended way to do it as opposed to calling inject in the app component.

In Vue 2 plugins would be provided with the Vue instance to the install function of the plugin. Now it provides an App instance. As you can see in the example above, instead of extending the Vue prototype we add a property to `app.config.globalProperties`. This is the same as `Vue.prototype`. The `app` object also has a `provide` object. This is how we provide the location function at the top level.

```typescript
//location-plugin.ts

/**
 * Get the users current location using the HTML5 GeoLocation API.
 *  We wrap it in a promise to use with async/await.
 */
function getLocation(): Promise<Position> {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        resolve(position) // Resolve with location. location can now be accessed in the .then method.
      },
      err => reject(err) // Reject with err. err can now be accessed in the .catch method.
    )
  })
}

/** Symbol to access the location function */
const locationSymbol = Symbol('location')

const LocationPlugin: Plugin = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app, options) {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$location = getLocation

    app.provide(locationSymbol, getLocation)
  },
}

/** Type of the location function */
type LocationFunction = typeof getLocation

/** Function to use the location function from the API */
export function useLocation() {
  /** Function to get the geolocation */
  const locationFunction: LocationFunction | undefined = inject(locationSymbol)

  if (!locationFunction) {
    throw new Error('Could not get inject LocationPlugin')
  }

  return locationFunction
}

export default LocationPlugin
```

## Using the Plugin

Using plugins in somewhat similar in Vue 3. Instead of calling `Vue.use` and then instantiating the Vue instance you need to create the app first with `createApp`. Then you call `use` on the object returned from `createApp`. After that, call `mount` to instantiate the app.

```ts
//main.ts

import { createApp } from 'vue'
import App from './App.vue'
import LocationPlugin from './location-plugin/location-plugin'

const app = createApp(App)

// Use the location plugin we wrote
app.use(LocationPlugin)

app.mount('#app')
```

Now we have a location function we can call to get the users location.

# Lifecycle Hooks

In the Options API lifecycle hooks such as `onMounted` are properties of the component object. In the Composition API they're, you guessed it, functions!

We want to load the weather forecast from the [NWS Weather API](https://www.weather.gov/documentation/services-web-api) when the Forecast component is loaded. Normally this is done in the `onMounted` hook. We'll call the `onMounted` function, which takes a function as a parameter. We need the user's location to get the current forecast so we'll use our plugin.

```vue
<template>
  <div class="forecast">
    <daily-weather
      v-for="forecast of forecasts"
      :key="forecast.name"
      :forecast="forecast"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue'
import fetchWeather, { Forecast } from '../fetch_weather'
import DailyWeather from './DailyWeather.vue'
import { useLocation } from '../location-plugin/location-plugin'

export default defineComponent({
  setup() {
    /** Weather forecasts for the week */
    const forecasts = ref<Array<Forecast>>([])

    const getLocation = useLocation()

    // Register a function to be called in the onMounted lifecycle
    onMounted(async () => {
      if (getLocation) {
        const location = await getLocation()
        forecasts.value = await fetchWeather(location)
      }
    })

    return { forecasts }
  },
  components: { DailyWeather },
})
</script>
```

# Fragments

Another quality of life improvement to Vue 3 is multi-root components. This means components can have more than one root node now. Instead of wrapping all your components in a div you can just add them.

```vue
<!-- App.vue -->

<template>
  <page-header />
  <forecast />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Forecast from './components/Forecast.vue'
import PageHeader from './components/PagerHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    Forecast,
    PageHeader,
  },
  setup() {
    return {}
  },
})
</script>
```

# Completed Code

You can see the completed code on Github at [https://github.com/toastking/vue3-weather-example](https://github.com/toastking/vue3-weather-example).
