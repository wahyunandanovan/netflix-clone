import { useEffect } from "react";
import { Authentication } from "../services/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthStateChangeProvider = () => {
  const initiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("user is autenticated");
        console.log(user);
      } else {
        console.log("user is not autenticated");
      }
    });
  };

  useEffect(() => {
    initiateAuthStateChange();
  }, []);
  return <></>;
};

export default AuthStateChangeProvider;
