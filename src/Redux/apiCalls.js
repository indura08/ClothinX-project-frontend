import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login" , user);
        console.log(user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}