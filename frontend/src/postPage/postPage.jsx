import React, { useState,useRef, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './postPage.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');



  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', { title, content });
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
    <div className = 'post-body'>
      <h2>Create a Post</h2>

      <div className="create-post-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="title"
              className = 'title'
              placeholder='Title*'
              value={title}
              onChange={handleTitleChange}
              required
            />
            <div className="char-counter">{title.length}/300</div>
          </div>
          <div className="form-group">
            <ReactQuill
              placeholder='Body'
              value={content}
              onChange={handleContentChange}
              modules={modules}
              formats={formats}

            />
        

          </div>
          <div className="form-actions">
            <button type="submit" className="post">Post</button>
          </div>
        </form>
      </div>




    </div>
    
  );
};

export default CreatePost
