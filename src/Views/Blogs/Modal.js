import { useState } from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Modal = ({closeModal}) => {
    const [blogTitle,setBlogTitle]=useState("");
    const [blogBody,setBlogBody]=useState("");
    const navigate=useNavigate();
    const postBlog=()=>{
        axios.post('http://localhost:3500/blogs',{
          title:blogTitle,
          body:blogBody
        })
        .then((response)=>{
          console.log(response.data)
            setBlogTitle("");
            setBlogBody("");
            closeModal();
        })
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="heading">
          <h2>Enter the details of the blog</h2>
        </div>
        <div className="modalDescription">
          <div className="title">
            <label htmlFor="title" className="labels">Enter the title</label>
            <input type="text" value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)}/>
          </div>
          <div className="description">
            <label htmlFor="body" className="labels">Enter the description</label>
            <textarea type="text" value={blogBody} onChange={(e)=>setBlogBody(e.target.value)}/>
          </div>
        </div>
        <div>
            <button className="saveButton" onClick={()=>postBlog()}>Save</button>
            <button className="cancelButton"  onClick={()=>closeModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
