import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';



const AuthContext = createContext<any>(null);
 
export const AuthProvider = ({
    children } :  any) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);
  
    const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};  

export const useAuth = () => useContext(AuthContext);
