<template>
  <div>
    <h1>끝말잇기</h1>
    <h2>{{ word }}</h2>
    <form @submit="onSubmitForm">
      <input type="text" ref="answer" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>{{ result }}</div>
  </div>
</template>
<script>
export default {
    name: 'WordRelay',
    props: ['startWord'],
    data() {
        return {
            word: this.startWord,
            result: '',
            value: '',
        }
    },
    methods: {
        onSubmitForm(e){
            e.preventDefault();
            if (this.word[this.word.length - 1] === this.value[0]) {
                this.result = '딩동댕';
                this.word = this.value;
                this.value = '';
                this.$refs.answer.focus();
            }else{
                this.result = "땡";
                this.value = '';
                this.$refs.answer.focus();
            }
        }
    },
};
</script>
<style>
</style>
