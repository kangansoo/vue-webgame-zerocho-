module.exports = {
    entry: {
        app: '../src/main.js', //하나로 합칠 파일의 이름
    },
    module: {},
    plugins: [],
    output: {
        filename: '[name].js', // entry에서 설정한 이름이 들어감
        path: '../src/dist' //dist라는 폴더를 만들어 app.js 생성
    },
};