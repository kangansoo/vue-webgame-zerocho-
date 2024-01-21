<template>
  <div>
    <div>
      <h1>구구단</h1>
      <h2>{{ first }}곱하기 {{ second }}는?</h2>
      <form @submit="onSubmitForm">
        <!-- input에서 받는 값을 데이터로 연결하기 -> v-model -->
        <input type="number" ref="answer" v-model="value"/>
        <button type="submit">입력</button>
        <!-- <div>{{ value }}</div> <- 이런 식으로 데이터 잘 들어가는지 확인 가능(양방향 바인딩) -->
      </form>
      <div>{{ result }}</div>
    </div>
    <WordRelay startWord="초밥"/>
    <WordRelay startWord="자장면"/>
    <NumberBaseball />
    <ResponseCheck />
    <RockScissorsPaper />
    
  </div>
</template>
<script>
import WordRelay from './components/WordRelay.vue';
import NumberBaseball from './components/NumberBaseball.vue';
import ResponseCheck from './components/ResponseCheck.vue';
import RockScissorsPaper from './components/RockScissorsPaper.vue';
export default {
  name: 'App', //vue 인스턴스
  data() {
    return {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    }
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      console.log('this :', this)
      console.log('value :', this.value)
      if (this.first * this.second === parseInt(this.value)){
        this.result= '정답';
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.value = '';
        // answer라는 이름의 ref를 선택하여 focus
        this.$refs.answer.focus();
      } else {
        this.result= '땡';
        this.value = '';
        this.$refs.answer.focus();
      }
    },
  },
  components: {
    WordRelay,
    NumberBaseball,
    ResponseCheck,
    RockScissorsPaper,
  }
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
