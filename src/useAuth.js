import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import app from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { doc, collection, getDoc } from 'firebase/firestore';

const dbUsersUIDcollection = collection(db, "usersUID");

const AuthContext = createContext({});

// const dbUsersUIDcollection = db.collection(db, "usersUID");

export const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

//pri vsqka promqna na authState-a na firebase se storva novata informaciq vuv user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);

      if(authUser){
        const docRef = doc(dbUsersUIDcollection, `${authUser.uid}`)
        getDoc(docRef).then(res =>{
          if(res.data().role == "teacher"){
            setUserRole(res.data().role)
          }else if(res.data().role == "student"){
            setUserRole(res.data().role)
          }else{
            userSingOut();
            alert("Грешен имейл или парола!")
          }
        })
      }

    });
    return unsubscribe;
  }, []);


  function userSingOut () {
    auth.signOut(auth).then(() =>{
        console.log("SignOut")
    }).catch(err => {
    });
}

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
//sega mojem da predadem promenlivata user na vseki komponent wrap-nat v AuthProvider-a
