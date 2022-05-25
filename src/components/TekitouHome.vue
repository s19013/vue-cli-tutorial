<template>
  <div>
    <p>home</p>
  </div>
</template>

<script>
export default {
  data() {
      return {
          user:{
              firstname:"jack",
              middlename:" o ",
              lastname:"lantan"
          }
        }
  },
  props: {
      propsName:{
          type:String,
          default:"none"
      },
  },
  computed:{
      
  },
  methods: {
      
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
