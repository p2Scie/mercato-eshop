<template>
  <Header/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  components: {
    Header
  }
}
</script>

<style>
@import 'assets/normalize.css';

html, body {
  width: 100%;
  height: 100%;
}

body {
  padding: 2rem;
  background-color: var(--surface-ground);
}

a {
  text-decoration: none;
  text-color: inherit;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

main {
  margin-top: 4.625rem;
}

.card {
  background-color: var(--surface-card);
  padding: 1.5rem;
  color: var(--surface-900);
  margin-bottom: 1rem;
  border-radius: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08) !important;
}
</style>