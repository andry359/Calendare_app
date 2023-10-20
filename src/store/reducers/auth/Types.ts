import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean,
    user: IUser;
    isLoading: boolean,
    error: string;
};

export enum AuthActionEnam {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOGIN = "SET_IS_LOGIN",

};

export interface SetAuthAction {
    type: AuthActionEnam.SET_AUTH;
    payload: boolean;
};
export interface SetErrorAction {
    type: AuthActionEnam.SET_ERROR;
    payload: string;
};
export interface SetUserAction {
    type: AuthActionEnam.SET_USER;
    payload: IUser;
};
export interface SetIsLoadingAction {
    type: AuthActionEnam.SET_IS_LOGIN;
    payload: boolean;
};

export type AuthAction = SetAuthAction | SetErrorAction | SetUserAction | SetIsLoadingAction;