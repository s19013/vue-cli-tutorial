<template>
    <div>
        <label for="eventTitle">イベントのタイトル</label>
        <input
        id="eventTitle"
        type="text"
        :value="value"
        @input="$emit('input',$event.target.value)"
        >
        <p>title:{{value}}</p>
    </div>
</template>

<script>
export default {
  data() {
      return{}
  },
  props: {
      value:{
          type:String,
          default:""
      }
  },
  computed:{
      
  },
  methods: {
      
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
