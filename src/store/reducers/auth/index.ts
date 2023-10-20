import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnam, AuthState } from "./Types";

const initialState: AuthState = {
    isAuth: false,
    error: "",
    user: {} as IUser,
    isLoading: false,
}

export default function authReducer (state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnam.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnam.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionEnam.SET_USER:
            return {...state, user: action.payload}
        case AuthActionEnam.SET_IS_LOGIN:  
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}