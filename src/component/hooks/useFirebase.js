import { getAuth, GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase=()=>{
   const [user,setUser]=useState({});
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [name,setName]=useState('');
   const [isLoading,setIsLoading]=useState(true);


const signInUsingGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
}

const createNewAccount=()=>{
   return createUserWithEmailAndPassword(auth, email, password)
}

const signInUsingEmail=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

const updateName=()=>{
    updateProfile(auth.currentUser, {
        displayName:name})
        .then(() => {
      })
}

useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
            setUser('');
        }
        setIsLoading(false);
      });
      return () => unsubscribed;
},[])


const logOut=()=>{
    signOut(auth)
    .then()
}

return {
    user,setUser,
    setEmail,email,
    setPassword,password,
    setName,updateName,
    createNewAccount,
    signInUsingEmail,
    signInUsingGoogle,
    logOut,
    isLoading,setIsLoading
}

}


export default useFirebase;