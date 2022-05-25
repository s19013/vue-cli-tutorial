<template>
    <div>
        <label for="eventDetail"></label>
        <textarea type="text"
        id="eventDetail"
        :value="value"
        @input="$emit('input',$event.target.value)"
        ></textarea>
        <pre>detail:{{value}}</pre>
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
