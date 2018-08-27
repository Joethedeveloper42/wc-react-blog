import React from 'react';

const BlogPost = ({imageUrl, postDate, summary, title, blogId, deleteBlogPost, editBlogPostModal}) => {
  return (
      <div className="row blog-post no-gutters my-4 bg-light">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid" alt={title} />
          </div>
          <div className="col-md-8 right-side-blog d-flex flex-column justify-content-center">
            <div className="px-2">
                <p>{postDate}</p>
                <button className="btn delete-btn" onClick={() => deleteBlogPost(blogId)}>Delete</button>
              <h5 className="card-text">{title}</h5>
              <p className="card-text">{summary}</p>
            </div>
          </div>
    </div>
  );
}

export default BlogPost;