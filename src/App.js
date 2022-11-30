import React, { useEffect } from "react";
import Header from "./component/header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./component/redux/userSlice.js";
import Sidebar from "./component/sidebar/Sidebar";
import Feed from "./component/feed/Feed.jsx";
import Login from "./component/login/Login.js";
import Widget from "./component/widget/Widget.jsx";
import "./App.css";
import { auth } from "./component/feed/firebase.js";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(() => {
auth.onAuthStateChanged(userAuth => {
  if (userAuth) {
    // user is logged in
    dispatch(login({
      email: userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
      photoUrl: userAuth.photoURL

    }))

  } else {
    // user is logged out
    dispatch(logout());
  }
})
}, [])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />

          <Feed />

          {/*Widgets */}
         <Widget />

        </div>
      )}
    </div>
    
  );
}

export default App;
