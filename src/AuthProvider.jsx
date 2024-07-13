/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // login
  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // updateProfile while creating user
  const upProfile = (name, imageUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
  };
  
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
      })
      return ()=>{unSubscribe()}
  },[]) 

  const authValue = {
    user,
    upProfile,
    createUser,
    logIn,
    logOut,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
