<template>
    <div>
        <label for="eventHost"></label>
        <input type="text"
        id="eventHost"
        :value="value"
        @input="$emit('input',$event.target.value)"
        >
        <p>host:{{value}}</p>
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
