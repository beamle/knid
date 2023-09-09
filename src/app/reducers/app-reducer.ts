const initialState: AppReducerInitialStateType = {
    error: null,
    status: "idle"
}

export const appReducer = (state: AppReducerInitialStateType = initialState, action: ActionsType): AppReducerInitialStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, error: action.error}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

//AC
export const setErrorAC = (error: string | null) => ({type: "SET-ERROR", error} as const)
export const setStatusAC = (status: AppStatusTypes) => ({type: "SET-STATUS", status} as const)
//TODO set Status to app "loading", "success" ,"failed","idle"
//types
export type SetAppStatusType = ReturnType<typeof setStatusAC>
export type SetAppErrorType = ReturnType<typeof setErrorAC>
type ActionsType = SetAppErrorType | SetAppStatusType

export type AppReducerInitialStateType = {
    error: null | string
    status: AppStatusTypes
}

export type AppStatusTypes = "idle" | "updating-info" | "loading"

