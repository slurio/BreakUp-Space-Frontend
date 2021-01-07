const POSTS_URL = 'http://localhost:3000/posts/';
const BREAKUPMESSAGE_URL = 'http://localhost:3000/breakup_messages/'

export const getPosts = () => {
    return function (dispatch) {
        fetch(POSTS_URL)
        .then(resp => resp.json())
        .then(posts => dispatch({type: "GET_POSTS", payload: posts}))
    }
};

export const getBreakUpMessages = () => {
    return function (dispatch) {
        fetch(BREAKUPMESSAGE_URL)
        .then(resp => resp.json())
        .then(messages => dispatch({type: "GET_MESSAGES", payload: messages}))
    }
}

// 