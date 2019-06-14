const { Client } = require('pg');
const { pg_confog,sql } = require('./config')
const client = new Client(pg_confog);
client.connect((err,result)=>{
    if(err) console.log('database connect failed! please check your config..')
    console.log('database connected successful! \n start init..');
    client.query(sql.$init,(err,data)=>{
        if(err) console.log('init failed')
        console.log('init completed!');
    });
})
module.exports = {
    getStudent(){
        return new Promise((resolve,reject)=>{
            client.query(sql.$select,(err,data)=>{
                if(err) reject(err)
                resolve(data.rows);
            })
        })
    },
    addStudent(s){
        return new Promise((resolve,reject)=>{
            client.query(sql.$insert,
                [s.name, s.weight, s.height, s.haircolor, s.eyescolor, s.race, s.gpa, s.skin],
                (err,data)=>{
                    if(err) reject(err)
                    resolve(true);
            })
        })
    },
    deleteStudent(id){
        return new Promise((resolve,reject)=>{
            client.query(sql.$delete,[id],(err,data)=>{
                if(err) reject(err)
                resolve(true);
            })
        })
    },
    updateStudent(s){
        return new Promise((resolve,reject)=>{
            client.query(sql.$update,
                [s.name, s.weight, s.height, s.haircolor, s.eyescolor, s.race, s.gpa, s.skin,s.id],
                (err,data)=>{
                    if(err) reject(err)
                    resolve(true);
            })
        })
    },
    selectOne(id){
        return new Promise((resolve,reject)=>{
            client.query(sql.$selectOne,
                [id],
                (err,data)=>{
                    if(err) reject(err)
                    resolve(data.rows);
            })
        })
    },
}