import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.congig";
 

 
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] =useState(true)

        const googleProvider = new GoogleAuthProvider();


        const createUser = (email, password) => {
                setLoading(false)
                return createUserWithEmailAndPassword(auth, email, password)
        } 

        const signIn = (email, password) => {
                setLoading(true)
               return signInWithEmailAndPassword(auth ,email, password)
        }

        const logOut = () => {
                setLoading(true)
                return signOut(auth);
        }
        const updateUserProfile = (name, photo) => {
             return updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                      });
                      
        }
        const googleSignIn = () => {
                setLoading(true)
                return signInWithPopup(auth, googleProvider)
         }

        useEffect(() => {
              const unsubscibe =  onAuthStateChanged(auth, currentUser => {
                        setUser(currentUser)
                        console.log(currentUser, 'current user')
                        setLoading(false)
                       
                });
                return () => {
                        return unsubscibe;
                }
        },[])

        const authInfo = {
                user,
                loading,
                createUser,
                signIn,
                logOut,
                updateUserProfile,
                googleSignIn

        }
        return (
                <AuthContext.Provider value={authInfo}>
                        {children}
                </AuthContext.Provider>
        );
};

export default AuthProvider;