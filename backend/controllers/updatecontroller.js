import { student } from "../config/models/student.js"
import { tutor } from "../config/models/tutor.js"

export const updatecontroller = async (req,res) => {
const data=req.body
if(data.role=="student"){
  const user=await student.findOne({email:data.email})

  if(!user){
    return res.json({message:"user not found"})
  }

  user.name=data.name
  user.native=data.native
  user.password=data.password
  user.description=data.description
  await user.save()
  return res.json({message:"user updated",status:true,data:user})


}
else{
    const user=await tutor.findOne({email:data.email})

    if(!user){
      return res.json({message:"user not found"})
    }   
    user.name=data.name
    user.language=data.lang
    user.password=data.password
    user.description=data.description
    user.native=data.native
    await user.save()
    return res.json({message:"user updated",status:true,data:user})


}
}

export default updatecontroller
