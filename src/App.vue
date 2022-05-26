<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>

    <button @click="currentComponent = 'TekitouHome'">home</button>
    <button @click="currentComponent = 'TekitouAbout'">about</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <!--
      modelの本来の形
      valueはprops vueが勝手にpropsを作っている
      propsが複数とか､だったら本来の書き方をしないと行けないはず
      でも部品なので複数にするような形にしなければokだと思う
    <event-title
      :value="eventData.title"
      @input="eventData.title = $event"
    ></event-title>
    -->

    <event-title v-model.trim="eventData.title"></event-title>

    <event-participant v-model.number="eventData.number"></event-participant>

    <event-host v-model.trim="eventData.host"></event-host>

    <event-detail v-model.trim="eventData.detail"></event-detail>

    <event-is-private v-model="eventData.isPrivate"></event-is-private>

    <event-age v-model="eventData.targets"></event-age>
    <p>pairent:{{eventData.targets}}</p>

    <event-price v-model="eventData.price"></event-price>

    <event-location
    :locations="locations"
    @input="eventData.location = $event"
    ></event-location>
    <p>{{eventData.location}}</p>
  </div>
</template>

<script>
import EventTitle from "./components/EventTitle.vue";
import EventParticipant from './components/EventParticipant.vue';
import EventHost from './components/EventHost.vue';
import EventDetail from './components/EventDetail.vue';
import EventIsPrivate from './components/EventIsPrivate.vue';
import EventAge from './components/EventAge.vue';
import EventPrice from './components/EventPrice.vue';
import EventLocation from './components/EventLocation.vue';
import TekitouHome from './components/TekitouHome.vue';
import TekitouAbout from './components/TekitouAbout.vue';



export default {
  name: 'App',
  data(){
    return{
      locations:["tokyo","oosaka","nagoya"],
      currentComponent:"TekitouHome",
      eventData:{
        title:"文字を変えるとここも変わるよ",
        number:0,
        host:"",
        detail:"",
        isPrivate:false,
        targets:[],
        price:"free",
        location:"tokyo"
      }
    }
  },
  components: {
    EventTitle,
    EventParticipant,
    EventHost,
    EventDetail,
    EventIsPrivate,
    EventAge,
    EventPrice,
    EventLocation,
    TekitouHome,
    TekitouAbout
},
  methods:{
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
