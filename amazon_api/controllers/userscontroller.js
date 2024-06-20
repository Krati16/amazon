// const db = require('../config/db');
const users = require('../config/mongodb_connect')
const multer = require('multer');
const md5 = require('md5');

const express = require('express')
const app = express()
const cors = require('cors')
exports.userlist = async(request,response)=>{
    // db.query('select * from users',[],(error,result)=>{
    //     if(error){
    //         response.send(JSON.stringify({'error':error.message,'message':''}))
    //     }else{
    //         response.send(JSON.stringify({'error':'','message':result}))
    //     }
    // })
    let result = await users.find();   
    response.send(JSON.stringify({'error':'','message':result}))
}

exports.singleuserlist = async(request,response)=>{
    let users_id = {users_id:request.params.id}
    // db.query('select * from users where ?',[users_id],(error,result)=>{
    //     if(error){
    //         response.send(JSON.stringify({'error':error.message,'message':''}))
    //     }else{
    //         response.send(JSON.stringify({'error':'','message':result}))
    //     }
    // })
    let result = await users.findById(request.params.id)
    response.send(JSON.stringify({'error':'','message':result}))
}
exports.registration = (request,response)=>{
    const hashPassword = md5(request.body.password)
    let registrationData =  {firstname:request.body.firstname,lastname:request.body.lastname,
        email:request.body.email,password:hashPassword,phoneno:request.body.phoneno,image:request.file.path}
        const user = new users(registrationData)
                    user.save();
    // db.query('insert into users set ?',[registrationData],(error,result)=>{
//         if(error){
//             response.send(JSON.stringify({'error':error.message,'message':''}))
//         }else{
//             const user = new users(registrationData)
//             user.save();
//             response.send(JSON.stringify({'error':'','message':result}))
//         }
//     })
}
    exports.login = async(request,response)=>{
   
        const hashPassword = md5(request.body.password)
        let result = await users.findOne({email:request.body.email})
        //console.log(hashPassword)
        //console.log(result.password);
        if(hashPassword != result.password){
            response.send(JSON.stringify({'error':'','message':'email or password doesnot match'}))
        }else{
            response.send(JSON.stringify({'error':'','message':result}))
       }

    }
    // db.query('select * from users where email=? and password=?',[email,hashPassword],(error,result)=>{
    //     if(error){
    //         response.send(JSON.stringify({'error':error.message,'message':''}))
    //     }else{
    //         response.send(JSON.stringify({'error':'','message':result}))
    //     }
    // })

exports.deleteuser = async (request,response) =>{
    let users_id = {users_id:request.params.id}
    // db.query('delete from users where ?',[users_id],(error,result)=>{
    //     if(error){
    //         response.send(JSON.stringify({'error':error.sqlMessage,'message':''}))
    //     }else{
    //         response.send(JSON.stringify({'error':'','message':'User deleted sucessfully'}))
    //     }
    // })
    const result = await users.findByIdAndDelete(request.params.id)
    response.send(JSON.stringify({'error':'','message':'User deleted sucessfully'}))
}
exports.updateuser = (request,response) =>{
    let users_id = {users_id:request.params.id}
    // db.query('update users set ? where ?',[request.body,users_id],(error,result)=>{
    //     if(error){
    //         response.send(JSON.stringify({'error':error.sqlMessage,'message':''}))
    //     }else{
    //         response.send(JSON.stringify({'error':'','message':'User Updated sucessfully'}))
    //     }
    // })

}
exports.updateuser = async(request,response) =>{
    let users_id = {users_id:request.params.id}
    let registrationData =  {firstname:request.body.firstname,lastname:request.body.lastname,
        email:request.body.email,phoneno:request.body.phoneno}
    const result = await users.findByIdAndUpdate(request.params.id,registrationData)
    response.send(JSON.stringify({'error':'','message':'User updated sucessfully'}))

}

const storage = multer.diskStorage({
    destination:function(request,file,cb){
        cb(null,'./public')
    },
    filename:function(request,file,cb){
        cb(null,file.originalname)
    },
})
exports.uploadImage = multer({storage:storage}).single('image');

// const upload = multer({ storage: storage })

// app.use(cors())

