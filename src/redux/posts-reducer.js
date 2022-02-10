// import posts from './posts.json';

let initialState = {
    posts: []
}
const postsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case REMOVE_POST: {
            return {
                ...state,

            }
        }
        default:
           return state;
    }
}

const SET_POSTS = "SET_POSTS";
const REMOVE_POST = "REMOVE_POST";


export let setPosts = (posts) => ({type: SET_POSTS, payload: posts });



export default postsReducer;