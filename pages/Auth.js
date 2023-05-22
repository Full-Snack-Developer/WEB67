import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

const uiConfig = {
  signInSuccessUrl: "/DashboardScreen",
  signInOption: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <h1>LOgin</h1>
      <p>Plesa sign in</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
