import React from "react";
import { Grommet, Box } from "grommet";
import theme from './theme';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import firebase from 'firebase';
import firebaseConfig from './fire';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();


function App({
  /** These props are provided by withFirebaseAuth HOC */
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  signInWithTwitter,
  signInAnonymously,
  signOut,
  setError,
  user,
  error,
  loading,
}) {
  return (
    <React.Fragment>
    {
      user
        ? <h1>Hello, {user.displayName}</h1>
        : <h1>Log in</h1>
    }
 
    {
      user
        ? <button onClick={signOut}>Sign out</button>
        : <button onClick={signInWithGoogle}>Sign in with Google</button>
    }
 
    {
      loading && <h2>Loading..</h2>
    }
    </React.Fragment>
  );
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({providers, firebaseAppAuth})(App)