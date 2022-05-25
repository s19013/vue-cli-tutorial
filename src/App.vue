<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <like-header propsName="tekitou">
      <p>デフォルトスロット用</p>
      <h4>デフォルトスロット用</h4>
      <template v-slot:title>
        <h2>hello</h2>
      </template>
      <template v-slot:tekitou>
        <h1>親に渡されたlikeCount({{counterName}})</h1>
      </template>
      <template v-slot:user="slotProps">
        <h2>{{slotProps}}</h2>
        <h2>{{slotProps.user.firstname}} {{slotProps.user.middlename}} {{slotProps.user.lastname}}</h2>
      </template>

    </like-header>
    <like-counter
      :propsLikeCount=5
      propsName="likeCounterA"
      @my-click="changeCounterName"
    >
    </like-counter>
    <like-counter
      :propsLikeCount=0
      propsName="likeCounterB"
      @my-click="changeCounterName"
    ></like-counter>
  </div>
</template>

<script>
import LikeCounter from './components/LikeCounter.vue';
import LikeHeader from './components/likeHeader.vue';
export default {
  name: 'App',
  data(){
    return{
      counterName:""
    }
  },
  components: {
    LikeCounter,
    LikeHeader
  },
  methods:{
    changeCounterName(arg){
      console.log(arg);
      this.counterName = arg;
    }
  },
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
