import React, { useState } from "react";
import "./index.css";
function App() {
    const [tweets, setTweets] = useState([
      { id: 1, text: "Hello, world! 🚀", username: "JohnDoe" },
      { id: 2, text: "React is awesome! 🎉", username: "JaneSmith" },
    ]);
    const [text, setText] = useState("");
  
    const postTweet = () => {
      if (text.trim() !== "") {
        setTweets([{ id: Date.now(), text, username: "You" }, ...tweets]);
        setText("");
      }
    };
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Twitter Clone</h1>
        <div className="w-full max-w-md">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 w-full rounded-md mb-2"
            placeholder="Write a tweet..."
          />
          <button
            onClick={postTweet}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Tweet
          </button>
        </div>
        <div className="mt-4 w-full max-w-md">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="bg-white p-4 shadow rounded-md my-2">
              <p className="text-lg font-semibold">@{tweet.username}</p>
              <p className="text-gray-800">{tweet.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default App;
  