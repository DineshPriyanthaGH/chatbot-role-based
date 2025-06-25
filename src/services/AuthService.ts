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

