import React, { useState } from "react";
import { Grommet, Box } from "grommet";
import theme from "./theme";
import withFirebaseAuth, {
  WrappedComponentProps
} from "react-with-firebase-auth";
import firebase from "firebase";
import firebaseConfig from "./fire";
import "firebase/auth";
import LandingPage from "./pages/landing";
import DashboardPage from "./pages/dashboard";

// Rather than initializing the app in
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
  loading
}) {
  const [themeMode, setThemeMode] = useState(true);

  return (
    <Grommet themeMode={themeMode?"dark":"light"} theme={theme}>
      <Box animation={["fadeIn", "zoomIn"]}>
        <React.Fragment>
          {/* This is the switch statement that loads auth for dashboards  */}
          {user ? (
            <DashboardPage
              changeTheme={() => {
                setThemeMode(!themeMode);
                console.log(theme);
              }}
              user={user}
              signOut={signOut}
            />
          ) : (
            <LandingPage signIn={signInWithGoogle} />
          )}
        </React.Fragment>
      </Box>
    </Grommet>
  );
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
