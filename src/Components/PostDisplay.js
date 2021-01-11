import React, {useState} from 'react';
import PostCard from '../Components/PostCard';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';


const PostDisplay = props => {
    const [open, setOpen] = useState(false);

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
                        <input type='textarea' placeholder='text goes here!'/>
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