const router = require('express').Router();
const { race } = require('./config')
const op = require('./db');
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/student',async (req,res)=>{
    let student = await op.getStudent();
    res.render('student',{student});
})
router.get('/add',async (req,res)=>{
    res.render('add',{race});
})
router.get('/display',async (req,res)=>{
    let student = await op.getStudent();
    res.render('display',{student});
})

router.post('/student',async (req,res)=>{
    let student = req.body;
    try{
        await op.addStudent(student);
        res.status(200).send({code:0})
    }catch(e){
        res.status(200).send({code:1})
    }
})
router.delete('/student',async (req,res)=>{
    let id = req.body.id;
    try{
        await op.deleteStudent(id);
        res.status(200).send({code:0})
    }catch(e){
        console.log(e)
        res.status(200).send({code:1})
    }
})
router.put('/student',async (req,res)=>{
    let s = req.body;
    try{
        await op.updateStudent(s);
        res.status(200).send({code:0})
    }catch(e){
        console.log(e)
        res.status(200).send({code:1})
    }
})

module.exports = router;
