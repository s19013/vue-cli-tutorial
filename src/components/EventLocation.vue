<template>
    <div>
        <p>開催場所</p>
        <select @change="$emit('input',$event.target.value)">
            <option
            v-for="location in locations"
            :key="location"
            :value="location"
            >{{location}}</option>
        </select>
    </div>
</template>

<script>
export default {
  data() {
      return{
      }
  },
  props:["locations"],
  computed:{
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
