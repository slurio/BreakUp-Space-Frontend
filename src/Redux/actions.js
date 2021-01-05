const POSTS_URL = 'http://localhost:3000/posts/';

export const getPosts = () => {
    return function (dispatch) {
        fetch(POSTS_URL)
        .then(resp => resp.json())
        .then(posts => console.log(posts))
    }
}

// dispatch({type: "GET_POSTS_FROM_FETCH", payload: posts})