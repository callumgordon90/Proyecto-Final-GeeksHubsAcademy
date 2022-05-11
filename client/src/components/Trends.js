import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrends } from '../actions/post.actions';
import { isEmpty } from './tools';
import { Navlink } from 'react-router-dom';

const Trends = () => {
    const posts = useSelector((state) => state.allPostsReducer);
    const userData = useSelector((state) => state.usersReducer);
    const trendList = useSelector((state) => state.trendingReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEmpty(posts[0])){
            const postsArr = Object.keys(posts).map((i) => posts[i]);
            let sortedArray = postsArr.sort((a, b) => {
                return b.likers.length - a.likers.length;
            })
            sortedArray.length = 3;
            dispatch(getTrends(sortedArray))
        }
    
    }, [posts, dispatch])


    return (
        <div className="trending-container">
            <h4>Trending</h4>
            <Navlink exact to="/trending">
                <ul>
                    {trendList.length && 
                        trendList.map((post) => {
                            return (
                                <li key={post._id}>
                                    <div>
                                        {post.picture && <img src={post.picture} alt="post-pic" /> }
                                        {post.video && (
                                            <iframe
                                            src={post.video}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write;
                                            encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={post._id}
                                            ></iframe>
                                        )}
                                        {isEmpty(post.picture) && isEmpty(post.video) && (
                                            <img src={usersData[0] && usersData.map((user) => {
                                                if (user._id === post.posterId) {
                                                    return user.picture;
                                                } else return null;
                                            })
                                            .join("")
                                        } alt="profile-pic" />
                                        )}
                                    </div>
                                    <div className="trend-context">
                                        <p>[post.message]</p>
                                        <span>Read</span>
                                    </div>

                                </li>
                            );
                        })}
                </ul>
            </Navlink>
        </div>
    );
};

export default Trends;