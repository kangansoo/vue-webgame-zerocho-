<template>
    <div>
        <h1>숫자 야구</h1>
        <h1>{{ result }}</h1>
        <form @submit.prevent="onSubmitForm"> 
            <input ref="answer" maxlength="4" v-model="value" />
            <button>입력</button>
        </form>
        <div>시도: {{ tries.length }}</div>
        <ul>
            <li v-for="(t, i) in tries" :key="i">
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
const getNumbers = () => {
    const candidates = [1, 2, 3 , 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i <4; i += 1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
    name: "NumberBaseball",
    data() {
        return {
            answer: getNumbers(), // ex) [1, 4, 2, 4] 배열 형식
            tries: [],
            value: '',
            result: '',
        }
    },
    methods: {
        onSubmitForm(){
            if (this.value === this.answer.join('')) {
            //value는 문자형이기 때문에 join(배열을 하나의 문자열로 바꾸기)을 통해서 비교 가능하도록 해야 함
                this.tries.push({
                    try: this.value,
                    result: '홈런'
                });
                this.result = '홈런';
                alert('게임을 다시 실행합니다.')
                this.value = '';
                this.tries = [];
                this.$refs.answer.focus();
            } else {
                if (this.tries.length > 9){
                    this.result = `10번 초과하여 실패! 정답은 ${this.answer.join(',')}입니다.`
                    alert('게임을 다시 실행합니다.')
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                }
                let strike = 0;
                let ball = 0;
                const answerArray = this.value.split('').map(v => parseInt(v));
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.answer[i]){ //숫자 자릿수 모두 정답
                        strike++;
                    } else if (this.answer.includes(answerArray[i])){
                        ball++;
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                })
            }
            this.$refs.answer.focus();
            this.value= '';
        }
    }
};
</script>
<style lang="">
    
</style>