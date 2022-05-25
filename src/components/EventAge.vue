<template>
    <div>
        <p>参加年齢</p>
        <label for="10">10代</label>
        <input
        type="checkbox"
        id="10"
        name="age"
        value="10代"
        @change="updateValue"
        >
        <label for="20">20代</label>
        <input
        type="checkbox"
        id="20"
        name="age"
        value="20代"
        @change="updateValue"
        >
        <label for="30">30代</label>
        <input
        type="checkbox"
        id="30"
        name="age"
        value="30代"
        @change="updateValue"
        >
        <p>child{{values}}</p>
    </div>
</template>

<script>
export default {
  data() {
      return{
          values:[]
      }
  },
  computed:{

  },
  methods: {
    updateValue: function(e) {
        console.log("updateValue");
        //チェックボックスをtrueにした時(チェックをつけた時)
        if (e.target.checked) {this.values.push(e.target.value);}
        //チェックボックスをfalseにした時(チェックをつけた時)
        else {
          this.values = this.values.filter(v => v !== e.target.value);
        }
        this.$emit("input", this.values);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
