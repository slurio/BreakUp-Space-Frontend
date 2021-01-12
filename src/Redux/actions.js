const POSTS_URL = 'http://localhost:3000/posts/';
const BREAKUPMESSAGES_URL = 'http://localhost:3000/breakup_messages/';
const USERS_URL = 'http://localhost:3000/users/';

export const getPosts = () => {
    return function (dispatch) {
        fetch(POSTS_URL)
        .then(resp => resp.json())
        .then(posts => dispatch({type: "GET_POSTS", payload: posts}))
    }
};

export const savePost = (postObj) => {
    return function (dispatch) {
        fetch(POSTS_URL, {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                accepts: "application/json"
            },
            body: JSON.stringify(postObj)
        })
        .then(resp => resp.json())
        .then(savedPost => console.log(savedPost))
    }
}

export const getBreakUpMessages = () => {
    return function (dispatch) {
        fetch(BREAKUPMESSAGES_URL)
        .then(resp => resp.json())
        .then(messages => dispatch({type: "GET_MESSAGES", payload: messages}))
    }
};

export const fetchUsers = () => {
    return function(dispatch) {
        fetch(USERS_URL)
        .then(resp => resp.json())
        .then(users => dispatch({type: "FETCH_USERS", payload: users}))
    }
};

export const loginUser = user => ({type: "SET_USER", payload: user});

// 