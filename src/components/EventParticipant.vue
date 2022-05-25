<template>
    <div>
        <label for="participant"></label>
        <input type="number" 
        id="participant" 
        :value="value"
        @input="$emit('input',$event.target.value)">
        <p>participant:{{value}}</p>
    </div>
</template>

<script>
export default {
  data() {
      return{}
  },
  props: ["value"],
  computed:{
      
  },
  methods: {
      
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
