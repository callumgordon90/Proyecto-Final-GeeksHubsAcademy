import React, { useContext, useContext, useEffect } from 'react';
import { UidContext } from "../AppContext";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch } from 'react-redux';
import { likePost } from '../../actions/post.actions';

const LikeButton = ({ post }) => {
    const [liked, setLiked] = useEffect(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();


    const like = () => {
        dispatch(likePost(post._id, uid))
        setLiked(true);
    };


    const unlike = () => {
        dispatch(unlikePost(post._id, uid))
        setLiked(false);
    }




    useEffect(() => {
        if (post.likers.includes(uid)) setLiked(true);
        else setLiked(false);
    }, [uid, post.likers, liked]);



    return (
        <div className="like-container">
            {uid === null && (
            <Popup trigger={<img src="./img/icons/heart.svg" alt="like" />} position={
            ['bottom center', 'bottom right', 'bottom left']} closeOnDocumentClick>
                <div>Connect in order to like a post!</div>   
                </Popup>
            )}
            {uid && liked === false && (
                <img src="./img/icons/heart.svg" onClick={like} alt="like" />
            )}
            {uid && liked && (
                <img src="./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
            )}
            <span>{post.likers.length}</span>
        </div>
    );
    
};

export default LikeButton;