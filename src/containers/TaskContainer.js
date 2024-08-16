import { connect } from "react-redux";
import Taskbar from "../components/Taskbar";
import { addTask, removeTask } from "../services/actions/action";


const mapStateToProps=state=>({
    taskData:state
})


const mapDispatchToProps=(dispatch)=>({
    addTask:data=>dispatch(addTask(data))


})


export default connect(mapStateToProps,mapDispatchToProps)(Taskbar)