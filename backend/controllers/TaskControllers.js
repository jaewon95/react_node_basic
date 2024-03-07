const TaskModel = require('../model/TaskModel');

// read? 읽기?
const getTasks = async (req,res) => { 
    const tasks = await TaskModel.find()
    console.log(tasks)
    if(tasks.length === 0){
        res.send('---> 아직 없어여');
    } else {
        res.send(tasks);
    }
}


// 저장해주기 . req.body 값 받기? 그런거인듯
const saveTasks = (req,res) => {
    const {task} = req.body // 구조분해할당
    TaskModel.create({task})
    .then( (data)=>{
        console.log('save 성공');
        res.status(201).send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.send({error: err, msg:"돌아가 인마 틀렸어"});
    })
}


// 수정 . req.body 값 받기? id? 그런거인듯. req.params; 이것도 나옴
const updateTasks = (req,res) => {
    const {id} = req.params;
    const {task} = req.body // 구조분해할당
    TaskModel.findByIdAndUpdate(id,{task})
    .then( ()=>{
        res.send('업데이트 성공');
    })
    .catch((err)=>{
        console.log(err);
        res.send({error: err, msg:"돌아가 인마 수정 틀렸어"});
    })
}


// 삭제 id? 그런거인듯. req.params; 이것도 나옴
const deleteTasks = (req,res) => {
    const {id} = req.params;
    
    TaskModel.findByIdAndDelete(id)
    .then( ()=>{
        res.send('삭제 성공');
    })
    .catch((err)=>{
        console.log(err);
        res.send({error: err, msg:"돌아가 인마 삭제 틀렸어"});
    })
}



module.exports = {getTasks, saveTasks, updateTasks, deleteTasks};

// module.exports.getTasks = async(req,res)=>{
//     res.send('hi')
// };
