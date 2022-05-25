<template>
  <div class="hello">
    <slot name="title"></slot>
    <p>渡された文字列[{{name}}]</p>
    <slot name="tekitou">
        <h1>何も渡されなかったときに表示される文字列</h1>
    </slot>
    <slot name="user" :user="user"></slot>
    <slot>デフォルトスロット</slot>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color: darkcyan;
}
</style>
