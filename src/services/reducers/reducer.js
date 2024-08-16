import { ADD, REMOVE } from "../Constants";


const Alltasks = {
    tasks: [],
    alreadyAvailable: false
}



// const tasks = []

function allReadyExits(value, newItem) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] === newItem) {
            // console.log("true")
            return true
        }
    }
    // console.log('false')
    return false
}

function filterArray(state, value) {
    return state.filter((item) => item !== value)
}

export default function handleTask(state = Alltasks, action) {
    let temp;
    
    switch (action.type) {
        case ADD:
            if (allReadyExits(state.tasks, action.payload))
                return {
                    ...state,
                    alreadyAvailable: true
                };
            else {
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],
                    alreadyAvailable: false
                }
            }


        case REMOVE:

            temp = filterArray(state.tasks, action.payload)

            return {
                ...state,
                tasks: temp
            }
        case "REMOVE_POP_UP":
            return {
                ...state,
                alreadyAvailable: false
            }
        default:
            return state;
    }
}

