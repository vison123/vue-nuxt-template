<template>
  <div>
    <header>
      <nav-menu>
      </nav-menu>
    </header>
    <main class="main-content">
      <nuxt/>
    </main>
    <footer>
      <foot-view></foot-view>
    </footer>
  </div>
</template>

<script>
  import NavMenu from '~/components/nav-menu/nav-menu.vue'
  import FootView from '~/components/footer/footer.vue'

  export default {
    components: {
      NavMenu,
      FootView
    }
  }
</script>

<style>
</style>
