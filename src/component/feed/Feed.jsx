import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Post from "../post/Post";
import { db } from "./firebase";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import FlipMove from "react-flip-move";
import "./Feed.css";



const Feed = () => {

  const user = useSelector(selectUser);

  const { posts, setPosts } = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    });
    
  });

  const sendPost = (event) => {
    event.preventDefault();


    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
    
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#0088ff" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="lightgreen"
          />
        </div>
      </div>
       {/*Post*/}

       <FlipMove>
       {posts &&
        posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}

       </FlipMove>
      

      <Post
        name="dawayne"
        description="clone project"
        massage="let get this coding "
      />
    </div>
  );
};

export default Feed;
