import React from 'react';

const BlogModal = ({ handleSubmit, handleDataChange, newBlogTitle, newBlogImageUrl, newBlogSummary }) => {
  return (
  <div className="modal fade" id="submitModal" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
  
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
  
              <div className="d-flex flex-column container py-3">
                <input placeholder="Enter post title" type="text" name="newBlogTitle" value={newBlogTitle} onChange={handleDataChange} />
                <input className="my-3" placeholder="Post Image URL" type="text" name="newBlogImageUrl" value={newBlogImageUrl} onChange={handleDataChange} />
  
                <textarea placeholder="Enter summary" type="text" name="newBlogSummary" value={newBlogSummary} className="modal-body" onChange={handleDataChange}></textarea>
                <div className="justify-content-start py-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
  
          </form>
        </div>
  
    </div>
  </div>
  );
}

export default BlogModal;


