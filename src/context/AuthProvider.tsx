import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';



const AuthContext = createContext<any>(null);
 
export const AuthProvider = ({
    children } :  any) => {
    const [user, setUser] = useState<any>(null);

    

    }

