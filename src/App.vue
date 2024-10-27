<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/layout/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
