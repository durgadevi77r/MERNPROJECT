import React, { useReducer } from 'react'

const initiavalue = { count: 0 }
const reducerfun = (state, action) => {
    switch (action.type) {//action.type the type is define the type function we are going to execute 
        case "Increment":
           return {count:state.count+1}//so that we are using state.count for the incremant 
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
           return {count:0}
        default:
            return {count:0}
    }

}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducerfun, initiavalue)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
            {/* the value is store in the action */}
            <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        </div>
    )
}

export default Reducer