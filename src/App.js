import React, { Component } from 'react';
import logo from './assets/logo.svg';

//components
import BlogHero from './components/BlogHero';
import BlogPost from './components/BlogPost';
import BlogModal from './components/BlogModal';

//JS libraries
import axios from 'axios';
import $ from 'jquery';
var month = require('month');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
     url: 'https://cko-dev-test.firebaseio.com/cko/joethedeveloper42/posts.json', 
     blogPosts: {},
     newBlogTitle: '',
     newBlogImageUrl:'',
     newBlogSummary: ''
    }
  }

  componentDidMount() {
    this.getBlogPosts();
  }

  showBlogPosts = () => {
    let { blogPosts } = this.state;
    return Object.keys(blogPosts).map( obj => {
      // format date correctly
      let year = blogPosts[obj].postDate.slice(0,4)
      let convertedMonth = month((blogPosts[obj].postDate.slice(5,7)));
      let day = (blogPosts[obj].postDate.slice(8,10));
      return (
        <BlogPost 
          key={obj} 
          blogId={obj}
          imageUrl={blogPosts[obj].imageUrl} 
          postDate={`${convertedMonth.toUpperCase()} ${day}, ${year}`} 
          summary={blogPosts[obj].summary} 
          title={blogPosts[obj].title}
          deleteBlogPost={this.deleteBlogPost}
        />
      )
    })
  }

  getBlogPosts = () => {
    axios.get(this.state.url)
    .then( res => {
      this.setState({
        blogPosts: res.data
      })
    })
  }

  deleteBlogPost = (id) => {
    axios.delete(`https://cko-dev-test.firebaseio.com/cko/joethedeveloper42/posts/${id}.json`)
    .then( res => {
      this.getBlogPosts();
    })
  }

  postBlogPost = () => {
    let { newBlogSummary, newBlogTitle, newBlogImageUrl } = this.state;
    let date = new Date();
    axios.post(this.state.url, {
      imageUrl: newBlogImageUrl,
      summary: newBlogSummary,
      title: newBlogTitle,
      postDate: date
    })
    .then( res => {
      this.getBlogPosts();
    })
    .catch( err => {
      console.log(err);
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.postBlogPost();
    this.setState({
      newBlogTitle: '',
      newBlogImageUrl:'',
      newBlogSummary: ''
    })
    //resetting modal fields
    $("input[name^='new']").val('');
    $("textarea[name='newBlogSummary']").val('');
    $('#submitModal').modal('toggle');
  }

  render() {
    return (
      <div className="App container">

        <BlogHero logo={logo} heading="Latest Blog Post" buttonText="ADD POST" />

        <div className="col-md-10 offset-md-1">
          {this.showBlogPosts()}
        </div>

        <BlogModal 
          handleSubmit={this.handleSubmit}
          handleDataChange={this.handleChange}
          newBlogTitle={this.newBlogTitle}
          newBlogImageUrl={this.newBlogImageUrl}
          newBlogSummary={this.newBlogSummary}
        />
        
      </div>
    );
  }
}

export default App;
