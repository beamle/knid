import {appReducer, AppReducerInitialStateType, setErrorAC, setStatusAC} from "./app-reducer";

const startState: AppReducerInitialStateType = {
    error: null,
    status: "idle"
}

test("app error should be changed", () => {
    const error = "Error in authorization!"
    const endState = appReducer(startState, setErrorAC(error))

    expect(endState.error).toBe(error)
})

test("app status should be changed", () => {
    const status = "updating-info"
    const endState = appReducer(startState, setStatusAC(status))

    expect(endState.status).toBe(status)
})