import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost, addComment } from "../Redux/postSlice";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)
  const [commentText, setCommentText] = useState({})
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleAddComment = (postId) => {
    if (!commentText[postId] || commentText[postId].trim() === "") return;
    dispatch(addComment({ postId, comment: commentText[postId] }));
    setCommentText((prev) => ({ ...prev, [postId]: "" })); 
  };

  const handleInputChange = (postId, value) => {
    setCommentText((prev) => ({ ...prev, [postId]: value }));
  };

  return (
    <div className="home-container">
      <h1>Posts</h1>
      {posts.length === 0 ? <p>No posts found.</p> : (
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              {post.imageUrl && (
                <img
                  className="post-image"
                  src={post.imageUrl}
                  alt="Post"
                  onClick={() => setSelectedImage(post.imageUrl)}
                />
              )}
              <h2>{post.title}</h2>
              <p>{post.description}</p>


              <div className="post-skills">
                <h3>Skills:</h3>
                <ul>
                  {post.skills && post.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>


              <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>

              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentText[post.id] || ""}
                  onChange={(e) => handleInputChange(post.id, e.target.value)}
                />
                <button className="comment-btn" onClick={() => handleAddComment(post.id)}>Comment</button>
              </div>

              
              <div className="comments-list">
                {post.comments && post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <p key={index} className="comment">{comment}</p>
                  ))
                ) : <p className="no-comments">No comments yet.</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Size" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Home;
