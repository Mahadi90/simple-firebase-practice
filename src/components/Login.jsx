import React, { useState } from "react";
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Card } from "react-bootstrap";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const Login = () => {
  const [user, setUser] = useState(null);

  const handleSignInWithGoolge = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggededUser = result.user;
        console.log(loggededUser);
        setUser(loggededUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
        const loggededUser = result.user;
        console.log(loggededUser)
        setUser(loggededUser)
    })
    .catch(error => {
        console.log(error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <div className="text-center">
      {user ? (
        <button onClick={handleSignOut} className="btn btn-danger mt-5 ms-2">
          Sign Out
        </button>
      ) : <div>
        <button
          onClick={handleSignInWithGoolge}
          className="btn btn-primary mt-5"
        >
          Login with google
        </button>
        <button onClick={handleSignInWithGitHub} className="btn btn-secondary mt-5 ms-3">Login with Github</button>
        </div>}

      {user && (
        <Card className="mx-auto mt-4" style={{ width: "18rem" }}>
          <img className="w-50 mx-auto" src={user.photoURL} alt="" />
          <Card.Body>
            <Card.Title>{user.displayName}</Card.Title>
            <p>Email: {user.email}</p>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Login;
