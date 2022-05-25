<template>
    <div>
        <input type="checkbox"
        id="isPrivate"
        name="isPrivate"
        :checked="value"
        @input="$emit('input', $event.target.checked)"
        >
        <label for="isPrivate">非公開</label>
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
