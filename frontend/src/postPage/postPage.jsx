import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import './postPage.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [contentHTML, setContentHTML] = useState('');

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setTitle(value);
    }
    if (value.length === 300) {
      vibrateCounter();
    }
  };

  const vibrateCounter = () => {
    const counterElement = document.querySelector('.char-counter');
    counterElement.classList.add('vibrate');
    setTimeout(() => {
      counterElement.classList.remove('vibrate');
    }, 100);
  };

  const handleContentHTML = (value) => {
    setContentHTML(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length > 300) return;
    const contentInput = document.querySelector(".ql-editor");
    const post = contentInput.textContent;
    const communities = getCommunity(post);
    await axios.post("http://localhost:3000/userpost", { title, post, communities });
  };

  const getCommunity = (post) => {
    let communities = [];
    if (post) {
      const regex = /#[^\s#]+/g;
      let match;
      while ((match = regex.exec(post)) !== null) {
        communities.push(match[0].substring(1));
      }
    }
    return communities;
  };
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
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
    <div className='post-body'>
      <div className="create-post-container">
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="title"
              className="title"
              placeholder='Title*'
              value={title}
              onChange={handleTitleChange}
              maxLength={300} // Set the maximum length
              required
            />
            <div className="char-counter">{title.length}/300</div>
          </div>
          <div className="form-group">
            <ReactQuill
              value={contentHTML}
              placeholder="Body"
              onChange={handleContentHTML}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="post-btn">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
