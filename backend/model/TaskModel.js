const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({}); // 스키마 생성하기

const taskSchema = new mongoose.Schema({
    task: { // 컬럼명(?)
        type: String, // 타입지정
        required : true // 필수값 지정
    },
})

// 모듈로 빼주는데. taskSchema를 "Task" 라는 변수에 담는다? 뭐 이런?
module.exports = mongoose.model("Task", taskSchema); 
