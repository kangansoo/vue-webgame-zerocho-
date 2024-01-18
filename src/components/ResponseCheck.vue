<template>
    <div>
        <h1>반응 속도 체크</h1>
        <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
        <div v-show="result.length"> 
        <!-- v-show가 트루일 때 보이고 아니면 안 보임
        v-if와의 차이. v-if는 개발자 도구에서 태그를 안 보이게 하고 
        v-show는 태그에서 style을 display:none으로 설정 -->
            <div>평균 시간: {{ average }}ms</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>
<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
    name: 'ResponseCheck',
    data() {
        return{
            result: [],
            state: 'waiting',
            message: '클릭해서 시작하세요'
        }
    },
    computed: {
        average() {
            return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
        }
    },
    methods: {
        onReset() {
            this.result=[];
        },
        onClickScreen() {
            if(this.state === 'waiting'){
                this.state = 'ready';
                this.message = '초록색이 되면 클릭하세요';
                timeout = setTimeout(()=>{
                    this.state = 'now';
                    this.message = '지금 클릭!';
                    startTime = new Date();
                }, Math.floor(Math.random()*1000) + 2000); //2~3초
            }else if(this.state === 'ready'){
                clearTimeout(timeout);
                this.state = 'waiting';
                this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요';
            }else if(this.state === 'now'){
                endTime = new Date();
                this.state = 'waiting'
                this.message = '클릭해서 시작하세요.';
                this.result.push(endTime-startTime);
            }
        }
    },
}
</script>
<style scoped>
/* style에 scoped를 붙이면 해당 컴포넌트에서만 css가 적용됨 */
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>