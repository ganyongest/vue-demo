<template>
  <div id="ccc">
    <h1>I am another page </h1>
    <a> written by {{author}}</a>
    <p>感谢{{teacher}}对我的指导</p>
  </div>


</template>
<script>
  export default{
      data :function(){
          return {
              author:'张三同学',
              teacher:'张三老师'
          }
      }

  }


</script>
