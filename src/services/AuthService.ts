import { auth } from '../firebase'; // Firebase config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the user object
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Sign up failed: ' + error.message);
    } else {
      throw new Error('Sign up failed: Unknown error');
    }
  }
};

export const logInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the user object
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Login failed: ' + error.message);
    } else {
      throw new Error('Login failed: Unknown error');
    }
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Logout failed: ' + error.message);
    } else {
      throw new Error('Logout failed: Unknown error');
    }
  }
};