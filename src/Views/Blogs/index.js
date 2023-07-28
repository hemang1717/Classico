import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { useEffect, useState } from "react";
import { getBlog, searchBlog, sortData } from "../../Redux/action";
import Modal from "./Modal";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogSearch,setBlogSearch]=useState("");
  const [showModal,setShowModal]=useState(false);
  const dispatch = useDispatch();
  

  let blogs = useSelector((state) => state.blogs);
  let blogsOnSinglePage = Math.ceil(blogs?.length / 10);
  let lastBlogId = blogsOnSinglePage * currentPage;
  let firstBlogId = lastBlogId - blogsOnSinglePage;

  
  useEffect(() => {
     dispatch(getBlog());
  }, []);

  const searchBlogs=(e)=>{
    dispatch(searchBlog(e.target.value));
    setBlogSearch(e.target.value)
  }
  const closeModal=()=>{
    setShowModal(false)
  }
  return (
    <div className="blogs">
      <div className="blogHeading">
        <h1>Blogs</h1>
      </div>
      <div className="blogsPagination">
        <button
          className={
            currentPage === 1
              ? "paginationButton prevDisable"
              : "paginationButton"
          }
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <h1>{currentPage}</h1>
        <button
          className={
            lastBlogId === blogs.length
              ? "paginationButton nextDisable"
              : "paginationButton"
          }
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div className="filterOptions">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search the Blog...🔍"
            className="searchBar"
            value={blogSearch}
            onChange={(e)=>searchBlogs(e)}
          />
        </div>
        <div className="sortSelect">
            <label htmlFor="">Sort By:  </label>
            <select name="sorting" id="sorting" onChange={(e)=>dispatch(sortData(e.target.value))}>
            <option value="select">Select Value</option>
            <option value="title">Title</option>
            <option value="body">Body</option>
            </select>
        </div>
      </div>
      <div className="addBlog">
        <button className="addBlogButton" onClick={()=>setShowModal(true)}>Add Blog</button>
      </div>
      {
        showModal && <Modal closeModal={closeModal}/>
      }
      <div className="blogItems">
        {blogs?.slice(firstBlogId, lastBlogId).map((item) => (
          <div className="blogData" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
