import React, { useState } from "react";
import "./index.css";
import './App.css';

function App() {
    const [tweets, setTweets] = useState([
      { 
        id: 1, 
        text: "NUKI TA PUCI SYNIN🚀", 
        username: "FLORI PUCI",
        avatar: "https://api.dicebear.com/6.x/personas/svg?seed=TechDev",
        timestamp: "2h ago",
        likes: 42,
        retweets: 12,
        comments: 5
      },
      { 
        id: 2, 
        text: "Learning React has completely changed my approach to frontend development. What frameworks are you all using these days? #webdev #javascript", 
        username: "CodeMaster",
        avatar: "https://api.dicebear.com/6.x/personas/svg?seed=CodeMaster",
        timestamp: "5h ago",
        likes: 28,
        retweets: 7,
        comments: 15
      },
      {
        id: 3,
        text: "Beautiful day for a hike! 🏔️ #nature #outdoors",
        username: "AdventureTime",
        avatar: "https://api.dicebear.com/6.x/personas/svg?seed=AdventureTime",
        timestamp: "Yesterday",
        likes: 187,
        retweets: 23,
        comments: 8
      }
    ]);
    const [text, setText] = useState("");
  
    const postTweet = () => {
      if (text.trim() !== "") {
        setTweets([
          { 
            id: Date.now(), 
            text, 
            username: "You",
            avatar: "https://api.dicebear.com/6.x/personas/svg?seed=You",
            timestamp: "Just now",
            likes: 0,
            retweets: 0,
            comments: 0
          }, 
          ...tweets
        ]);
        setText("");
      }
    };

    const handleLike = (id) => {
      setTweets(tweets.map(tweet => 
        tweet.id === id ? {...tweet, likes: tweet.likes + 1} : tweet
      ));
    };

    const handleRetweet = (id) => {
      setTweets(tweets.map(tweet => 
        tweet.id === id ? {...tweet, retweets: tweet.retweets + 1} : tweet
      ));
    };
  
    return (
      <div className="app-container p-6 min-h-screen flex flex-col items-center">
        <h1 className="app-title text-3xl font-bold mb-4">Twitter Clone</h1>
        <div className="tweet-input-container w-full max-w-lg">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="tweet-input border p-3 w-full rounded-lg mb-2 resize-none"
            placeholder="What's happening?"
            rows="3"
          />
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {280 - text.length} characters remaining
            </div>
            <button
              onClick={postTweet}
              disabled={text.trim() === "" || text.length > 280}
              className={`tweet-button px-5 py-2 rounded-full font-bold ${
                text.trim() === "" || text.length > 280
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className="tweets-container mt-6 w-full max-w-lg">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="tweet bg-white p-5 rounded-xl my-4">
              <div className="flex items-start mb-3">
                <img 
                  src={tweet.avatar} 
                  alt={tweet.username} 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="flex items-center">
                    <p className="tweet-username font-bold">{tweet.username}</p>
                    <span className="text-gray-500 text-sm ml-2">• {tweet.timestamp}</span>
                  </div>
                  <p className="tweet-text mt-1">{tweet.text}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4 text-gray-500 border-t pt-3">
                <button 
                  className="tweet-action flex items-center hover:text-blue-500" 
                  title="Comment"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <span>{tweet.comments}</span>
                </button>
                <button 
                  className="tweet-action flex items-center hover:text-green-500"
                  onClick={() => handleRetweet(tweet.id)}
                  title="Retweet"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                  <span>{tweet.retweets}</span>
                </button>
                <button 
                  className="tweet-action flex items-center hover:text-red-500"
                  onClick={() => handleLike(tweet.id)}
                  title="Like"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>{tweet.likes}</span>
                </button>
                <button 
                  className="tweet-action flex items-center hover:text-blue-500"
                  title="Share"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default App;
