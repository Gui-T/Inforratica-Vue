<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/computadores">Computadores</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
