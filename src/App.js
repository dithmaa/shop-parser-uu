import './App.css';
import Post from './components/Post';
import React from 'react';
import axios from 'axios';
import { setPosts } from './redux/posts-reducer';
import { connect } from 'react-redux';
import result from './result.json';

class App extends React.Component {


  fetchPosts = () => {
    axios.get('https://6202384ab8735d00174cb884.mockapi.io/posts').then(({ data }) => {
      this.props.setPosts(data);
    })
    
  }
  componentDidMount() {
    this.fetchPosts();
    
  }
  render() {
    const {posts} = this.props;
    return (
      <div className="App">
        <div className='container flex fww jcc'>
          {
            !posts.length ? <span>Loadin'...</span>
              : posts.map(({ title, description, image, price, rating }, key) => {
                return (
                  <Post
                    key={key}
                    title={title}
                    description={description}
                    image={image}
                    price={price}
                    
                    rating={rating}
                  />
                )
              })
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{ 
    posts: state.postsPage.posts
  }
}
export default connect(mapStateToProps, {setPosts})(App);