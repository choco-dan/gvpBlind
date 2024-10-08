import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import './postPage.css';
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';
import Notification from '../HomePage/Notification';

const CreatePost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { usermail } = useContext(UserContext);
  console.log("createpost usermail: ", usermail);
  const [title, setTitle] = useState('');
  const [contentHTML, setContentHTML] = useState('');
  const [post, setPost] = useState("");
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

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

  const handlequill = (content, delta, source, editor) => {
    setContentHTML(content);
    setPost(editor.getText());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length > 300) return;
    const contentInput = document.querySelector(".ql-editor");
    const post = contentInput.textContent;
    const communities = getCommunity(post);

    console.log({ title:title, post:post, communities:communities, contentHTML:contentHTML });

    try {
      await axios.post("https://gvpblind.onrender.com/post", {
        usermail:usermail, 
        title:title, 
        post:post, 
        communities:communities, 
        contentHTML:contentHTML
      });
      navigate('/HomePage', { state: { showNotification: true } });
    } catch(error) {
      console.error("there was an error creating the post:", error);
      setNotification({ show: true, message: 'Post not pushed. Please try again.', type: 'error' });
    }
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
    <>
      <div className='post-page-container'>
        <Notification
          message={notification.message}
          show={notification.show}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />

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
                  maxLength={300}
                  required
                />
                <div className="char-counter">{title.length}/300</div>
              </div>
              <div className="form-group">
                <ReactQuill
                  id="quill"
                  placeholder="Body"
                  onChange={handlequill}
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
      </div>
      <footer className='authfooter'>
    <div className='footercontent'>
    <div className= 'socialicons'>
        <p>
            <a href="https://github.com/danixDe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> danixDe
            </a> |&nbsp;
            <a href="https://www.linkedin.com/in/arvix17" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> AravindB
            </a>
        </p>
        <p>
            <a href="https://github.com/DileepKumarRambarki" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> DileepKumarRambarki
            </a> |&nbsp;
            <a href="https://www.linkedin.com/in/dileepkumarrambarki" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> Dileep Kumar
            </a>
        </p>
        <hr style={{marginTop:'5px',backgroundColor:'black'}}/>
        <p >&copy; 2024 Project by DileepKumar.R & Aravind.B</p>
    </div>
    </div>
</footer>  
    </>
  );
}

export default CreatePost;
