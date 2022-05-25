<template>
    <div>
        <p>参加費</p>
        <label for="free">free</label>
        <input
        type="radio"
        name="price"
        value="free"
        id="free"
        @change="$emit('input', $event.target.value)"
        checked
        >
        <label for="paid">paid</label>
        <input
        type="radio"
        name="price"
        value="paid"
        id="paid"
        @change="$emit('input', $event.target.value)"
        >
        <p>{{value}}</p>
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
