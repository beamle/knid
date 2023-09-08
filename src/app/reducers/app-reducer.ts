const initialState: AppReducerInitialStateType = {
    error: null,
    status: "updating-info"
}

export const appReducer = (state: AppReducerInitialStateType = initialState, action: ActionsType): AppReducerInitialStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

//AC
const setError = (error: string | null) => ({type: "SET-ERROR", error} as const)
//TODO set Status to app "loading", "success" ,"failed","idle"
//types
type ActionsType = ReturnType<typeof setError>

type AppReducerInitialStateType = {
    error: null | string
    status: AppStatusTypes
}

export type AppStatusTypes = "idle" | "updating-info"

