<template>
  <div id="app">

    <router-link to="/index">首页</router-link>
    <router-link to="/userInfo">个人中心</router-link>
    <router-link to="/demo">例子</router-link>
    <router-link to="/aaaa">aaaa</router-link>

    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
