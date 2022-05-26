<template>
  <div>
    <p v-border:solid.round.shadow="{width:'5px',color:'black'}">home</p>
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
  //ローカルに登録する場合はこんな
  // directives:{
  //   border(el,binding){
  //     el.style.borderWidth = binding.value.width;
  //     el.style.borderColor = binding.value.color;
  //     el.style.borderStyle = binding.arg;
  //     if (binding.modifiers.round) {el.style.borderRadius = " 0.5rem"}
  //     if (binding.modifiers.shadow) {el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)"}
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
