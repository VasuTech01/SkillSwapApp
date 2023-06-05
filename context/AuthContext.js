import { auth } from "../config/firebase";
import { createContext, useState, useTransition } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword ,signOut} from "firebase/auth";

export const AuthContext = createContext();

const SignInUser = async (email,password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user.currentUser);
        return { ok: true, user };
    } catch (e) {
        console.log(e);
        return {ok:false,message:e.message};
     }  
}
const SignUpUser = async (email, password) => {   
    try {
        const user =await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        return {ok:true,user};
    } catch (e) {
        console.log(e);
        return {ok:false,message:e.message};
    }  
}

const SignOutUser = async () => {
    try {
        const auth = await signOut(auth);
        console.log(auth);
    
    } catch (e) {
        console.log(e);
        return { ok: false, message: e.message };
    }
}

const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState(auth?.currentUser);

    const value = {
      SignInUser,SignUpUser,SignOutUser,user,setUser
    }

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}

export default AuthContextProvider;














