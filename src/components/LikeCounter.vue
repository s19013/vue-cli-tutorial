<template>
  <div class="hello">
    <p>{{counterName}}</p>
    <p>いいね({{likeCount}})</p>
    <p>{{halfCount}}</p>
    <button @click="countUp">+1</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          likeCount:this.propsLikeCount,
          counterName:this.propsName,
        }
  },
  props: {
      propsLikeCount:{
          type:Number,
          default:0
      },
      propsName:{
          type:String,
          default:"none"
      },
  },
  computed:{
      halfCount(){return this.likeCount/2}
  },
  methods: {
      countUp(){
          this.likeCount+=1;
          this.$emit("my-click",this.counterName)
        }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
