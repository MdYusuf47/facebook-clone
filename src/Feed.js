import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from "./firebase";
function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {/* <Post
                profilePic="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675"
                message="woow this works!"
                timestamp="This is time stamp"
                username="Md Yusuf"
                image="https://cdn.mos.cms.futurecdn.net/aTK8YBkBAbqCSzNGxt8adL-1200-80.jpg"
            />
            <Post />
            <Post />
            <Post /> */}
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
