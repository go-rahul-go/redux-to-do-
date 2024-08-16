import { useState } from "react";


const Taskbar = (props) => {

  const [task, updateTask] = useState("")

  function clearTask() {
    updateTask("")
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(task)
    clearTask();
  }
  return (
    <div className="w-full h-[60px] task-bar pl-1">
      <div className="w-[100%] h-[55px] lg:w-[85%] flex justify-start items-center gap-[10px] ">
        <form className="w-[98%] h-[75%] flex gap-4 " onSubmit={(e) => handleSubmit(e)}>
          <input type="text" id="task" className="w-[80%] h-[100%] px-1 rounded-xl bg-gray-500 text-white" value={task} onChange={(e) => updateTask(e.target.value)} required maxLength={40}/>
          <button className="add-btn"
          onSubmit={() => {
            props.addTask(task)
            clearTask();
          }}>add task</button>
        </form>
        
      </div>
    </div>
  )
}

export default Taskbar;