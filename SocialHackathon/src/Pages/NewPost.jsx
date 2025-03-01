import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Redux/postSlice";
import "../styles/NewPost.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || skills.length === 0 || !image) return;

    const base64Image = await convertToBase64(image);

    const newPost = {
      title,
      description,
      imageUrl: base64Image, 
      skills,
    };

    dispatch(addPost(newPost));

    setTitle("");
    setDescription("");
    setImage(null);
    setSkills([]);
  };

  const handleSkillChange = (e) => {
    const selectedSkills = Array.from(e.target.selectedOptions, (option) => option.value);
    setSkills(selectedSkills);
  };

  return (
    <div className="newpost-container">
      <h1 className="newpost-title">Create a New Post</h1>
      <form className="newpost-form" onSubmit={handleSubmit}>
        <input
          className="newpost-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
        <textarea
          className="newpost-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          required
        />
        

        <input 
          type="file" 
          accept="image/*" 
          className="newpost-file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />


        <select 
          className="newpost-skills"
          multiple
          onChange={handleSkillChange}
          required
        >
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
          <option value="Data Science">Data Science</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Blockchain">Blockchain</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>


        {image && <img className="newpost-image-preview" src={URL.createObjectURL(image)} alt="Preview" />}

        <button className="newpost-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
