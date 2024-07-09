import { tutor } from "../config/models/tutor.js"

export const tutor_data =async(req,res)=>{
    try{

        const data=await tutor.find()

        res.send({data})
    }
    catch(err){
        console.log(err)
     res.send("error")
    }
}