import React, {useState} from 'react';
import PostCard from '../Components/PostCard';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';


const PostDisplay = props => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = "";
    const [content, setContent] = "";

    const renderPosts = () => {
         return props.posts.map(post => <PostCard key={post.id} info={post} />)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    const changeHandle = () => {
        
    }

    return (
        <div>
            <h1>Post Display</h1>
            {renderPosts()}
            <button onClick={handleOpen}>Write Post</button>
            <Modal
                open={open}
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
        posts: state.posts
    }
}

export default connect (msp)(PostDisplay);