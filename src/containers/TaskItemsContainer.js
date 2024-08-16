import { connect } from "react-redux";
import { removeTask,removePopUp } from "../services/actions/action";
import TaskPage from "../components/TaskPage"
const mapStateToProps = state => ({
    taskData: state
})

const mapDispatchToProps=dispatch=>(
    {
        removeTask:data=>dispatch(removeTask(data)),
        removePopUp:data=>dispatch(removePopUp(data))
    }   
)




export default connect(mapStateToProps,mapDispatchToProps)(TaskPage)

