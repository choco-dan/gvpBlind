import React, { useState,useRef, useCallback } from 'react';
import ReactQuill from 'react-quill';
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import './postPage.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentHTML,setContentHTML]=useState();
  const postbtn=useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentHTML = (value) => {
    setContentHTML(value);
  };
  const getCommunity = (post) => {
    let communities=[];
    if (post) {
        const regex = /#[^\s#]+/g;
        let match;
        while ((match = regex.exec(post)) !== null) {
             
            communities.push(match[0].substring(1))
        }
    }
    return communities;
};
  const handleSubmit =async (e) => {
    e.preventDefault();
    let contentInput=document.querySelector(".ql-editor");
    const post=contentInput.textContent;
    setContent(post);
    const communities=getCommunity(post);
    await axios.post("http://localhost:3000/userpost",{title,post,communities});

  };
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <div className="create-post-container">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <p className="error-message">Please fill out this field.</p>
          <div className="char-counter">{title.length}/300</div>
        </div>
        <div className="form-group">
          <label htmlFor="content">Body</label>
          <ReactQuill
            value={contentHTML}
            onChange={handleContentHTML}
            modules={modules}
            formats={formats}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="post" >Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost
