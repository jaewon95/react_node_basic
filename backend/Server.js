const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;
const routes = require('./routes/TaskRoute');

app.use(express.json()); // ? json 쓴다고 따로 명시?
app.use(cors()); // ?
app.use("/api",routes); // /api 요청 들어오면 routes 를 쓰겠다. ㅇㅋ?


// ========= no.1 끝

app.listen(PORT, ()=>{ 
    console.log(`SERVER ON ${PORT}`);
});

// ========= no.2 테스트 끝

mongoose.connect(process.env.MONGO_URI) // mongodb 연결
.then(()=>{
    console.log('mongoDB Connected');
}).catch((err)=>{
    console.log(err);
})

// ========= 몽고디비연결




app.get('/', (req,res)=>{
    res.send('HI HI');
})