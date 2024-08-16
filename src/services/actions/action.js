import { ADD,REMOVE } from "../Constants";


const addTask=(data)=>{
  
    return{
        type:ADD,
        payload:data
    }

}
const removeTask=(data)=>{
    console.log(data)
    return {
        type:REMOVE,
        payload:data
    }
}

const removePopUp=(data)=>{
    return {
        type:"REMOVE_POP_UP",
        payload:data
    }
}
export {addTask,removeTask,removePopUp}