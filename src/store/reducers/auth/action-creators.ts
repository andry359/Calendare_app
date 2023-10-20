import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionEnam, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./Types";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnam.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnam.SET_AUTH, payload: auth}),
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({type: AuthActionEnam.SET_IS_LOGIN, payload: loading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnam.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers();
                const mockUser = response.data.find(user => user.username === username && user.password === password); 
                if (mockUser) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", mockUser.username);
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setIsAuth(true));
                }   else {
                    dispatch(AuthActionCreators.setError('Пользователь не найден!'))
                }    
                dispatch(AuthActionCreators.setIsLoading(false));  
            }, 1500)
        } catch (e) {
            dispatch(AuthActionCreators.setError('error')); 
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false));
    },
};