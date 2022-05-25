<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <p>親に渡されたlikeCount({{counterName}})</p>
    <LikeCounter
      propsLikeCount=5
      propsName="likeCounterA"
      @my-click="changeCounterName"
    >
    </LikeCounter>
    <LikeCounter
      propsLikeCount=0
      propsName="likeCounterB"
      @my-click="changeCounterName"
    ></LikeCounter>
  </div>
</template>

<script>
import LikeCounter from './components/LikeCounter.vue';
export default {
  name: 'App',
  data(){
    return{
      counterName:""
    }
  },
  components: {
    LikeCounter
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
