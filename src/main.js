import Vue from 'vue'
import App from './App.vue'


//ここに書き込めばグローバルに登録することになる

Vue.config.productionTip = false
Vue.directive("border",function(el,binding){
  // el.style.border="solid";
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;
  if (binding.modifiers.round) {el.style.borderRadius = " 0.5rem"}
  if (binding.modifiers.shadow) {el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)"}
});

//el
//ディレクティブをつけたタグが入ると思えば良い
//今回はpタグが入る
//binding
//=""の中に入ってるやつ勝手にvalueという変数の中に入っている
//arg :の後ろについてるやつをさす
//修飾子
//.のやつ


//基本はbindとupdateを使う
// Vue.directive("border",{
//   bind() {//ディレクティブが初めて対象の要素に紐づいた時

//   },
//   inserted() {//親nodeに挿入された時

//   },
//   update() {//コンポーネントが更新される度｡子供コンポーネントが更新される前

//   },
//   componentUpdated() {//コンポーネントが更新される度｡子供コンポーネントが更新される後

//   },
//   unbind() {//ディレクティブがひもづいている要素から取り除かれた時

//   },
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
