import {React} from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post.actions';

const DeleteCard = (props) => {

    const dispatch = useDispatch();

    const deleteQuote = () => dispatch(deletePost(props.id))

    
    return (
        <div 
            onClick={() => {
                if (window.confirm("Would you like to delete this post?")) { 
                    deleteQuote();
                }
            }}
        >
            <img src="./img/icons/trash.svg" alt="rubbish" />
        </div>
    );
};

export default DeleteCard;