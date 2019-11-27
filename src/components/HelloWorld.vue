<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <aaa></aaa>
<ul>
  <li> <router-link to="/demo1">跳转到demo1</router-link> </li>
  <li> <router-link to="/demo2">跳转到demo2</router-link> </li>

</ul>
  </div>
</template>

<script>
  import aaa from './demo1.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ' 欢迎来到我的第一个 vue app'
    }
  },
  components: {aaa}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
