import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react"



const mot = {
  start: {
    x: "100vw",
    opacity: 0
  },
  end: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, delay: 0.1, type: "spring", stiffness: 60 }
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 0.2, delay: 0.2 }
  }
}

const TaskPage = (props) => {


  console.log(props.taskData.handleTask.tasks)

  useEffect(() => {
    let len = props.taskData.handleTask.tasks.length;
    if (len === 0) {
      document.title = `redux to do - no tasks left`
    }
    else {
      document.title = `${props.taskData.handleTask.tasks[len - 1]}`
    }


    return () => {
      document.title = "Redux to do"
    }

  }, [props.taskData.handleTask.tasks])


  return (
    <>
      <div className="flex flex-col text-gray-100 task-page justify-start items-center gap-[10px]">
        <AnimatePresence>
          {
            props.taskData.handleTask.tasks.map((item, index) => {

              return (

                <motion.div key={index} className="task-item w-[90%] md:w-[70%] lg:w-[40%]" variants={mot} initial="start" animate="end" exit="exit">
                  {item}
                  <button
                    onClick={() => props.removeTask(item)}
                    className="border-2 border-red-500 text-red-500 p-[5px] capitalize rounded-lg delete-btn">delete</button>
                </motion.div>


              )

            })
          }
        </AnimatePresence>
      </div>
      {
        <Available props={props} />
      }
    </>
  )

}

export default TaskPage


function Available({ props }) {

  console.log("available ")
  const timerRef = useRef()

  useEffect(() => {
    if (props.taskData.handleTask.alreadyAvailable) {
      timerRef.current = setTimeout(() => {
        props.removePopUp(false);
      }, 3000)

    }


    return () => {
      clearTimeout(timerRef.current)
    }
  })

  return (
    <div className={props.taskData.handleTask.alreadyAvailable ? "w-[100%] h-[100%] available" : "not-available"}>
      <p className="text-white text-4xl">Already available</p>
      <button onClick={() => props.removePopUp(false)} className="bg-white text-black px-7 py-2 uppercase font-semibold rounded-xl hover:bg-blue-500 hover:text-gray-100"> ok</button>
    </div>
  )
}