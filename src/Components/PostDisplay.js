import React, {useState} from 'react';
import PostCard from '../Components/PostCard';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import {savePost} from '../Redux/actions';

const PostDisplay = props => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const renderPosts = () => {
        let sortedPosts = props.posts.sort((a,b) => b.up_votes - a.up_votes)
         return sortedPosts.map(post => <PostCard key={post.id} info={post} />)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var today = new Date()
        let post = {
            title: title,
            content: content,
            user_id: props.user.id,
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            time: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + 'T' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ".000Z",
            up_votes: 0
        }
        props.savePost(post)
    }

    const changeHandle = (event) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value)
        } else if (event.target.name === 'content') {
            setContent(event.target.value)
        }
    }

    return (
        <div>
            <h1>Post Display</h1>
            {renderPosts()}
            <button onClick={handleOpen}>Write Post</button>
            <Modal
         s      open={open}
                onClose={handleClose}
            >
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='title' placeholder='title goes here!' onChange={changeHandle}/>
                        <input type='textarea' name='content' placeholder='text goes here!' onChange={changeHandle}/>
                        <button>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

const msp = state => {
    return {
        posts: state.posts,
        user: state.user
    }
}

const mdp = dispatch => {
    return {
        savePost: (postObj) => dispatch(savePost(postObj))
    }
}

export default connect (msp, mdp)(PostDisplay);