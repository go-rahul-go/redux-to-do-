
import Taskbar from "./components/Taskbar";
import TaskContainer from "./containers/TaskContainer";
import TaskItemsContainer from "./containers/TaskItemsContainer";



function App() {
    return (
        <section className="w-full main">
            <div className="text-gray-200 text-3xl uppercase w-full bg-black py-2 text-center font-bold">
                <h1>to do's</h1>

            </div>
            <TaskItemsContainer />
            <TaskContainer />
        </section>
    )

}

export default App;
