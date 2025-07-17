import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from './Button';
import {
    faAngleDown,
    faAngleUp,
    faPlusCircle,
    faPlusSquare,
    faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Item = ({ post }) => {
    const [addComment, setaddComment] = useState(false);
    const [item, setitem] = useState(post);
    const [comment, setcomment] = useState("");
    const [reviewToggle, setReviewToggle] = useState(false);
    
    const handleChange = (e) => setcomment(e.target.value);
    
    const postComment = () => {
        if (!comment.trim()) {
            alert("Please enter a comment");
            return;
        }
        
        console.log("Comment posted:", comment);
        alert("Comment functionality is disabled in demo mode");
        setcomment("");
        setaddComment(false);
    };
    
    const like = () => {
        alert("Like functionality is disabled in demo mode");
    };
    
    return (
        <><div>
            {/* {item.comments.length !== 0 && (
                <span
                    style={{ cursor: "pointer" }}
                    className='text-primary'
                    onClick={() =>
                        setReviewToggle(!reviewToggle)
                    }>
                    View {item.comments.length} Comments{" "}
                    <span>
                        <FontAwesomeIcon
                            icon={
                                !reviewToggle
                                    ? faAngleDown
                                    : faAngleUp
                            }
                        />
                    </span>
                </span>
            )} */}
            <span onClick={() => setaddComment(!addComment)}>
                <FontAwesomeIcon
                    className='mr-1'
                    icon={faPlusSquare}
                />
                                Comment
                            </span>
        </div>
            <div>
                {reviewToggle &&
                    // item.comments.map((comment, ind) => (
                    //     <div className='review'>
                    //         <strong>
                    //             {comment?.author?.username} :{" "}
                    //         </strong>
                    //         {comment.text}
                    //     </div>))
                    <div>Hello</div>
                    }
            </div>
            {addComment && (
                <div className='d-flex flex-row new-comment'>
                    <label className='d-flex flex-column justify-content-center m-0'>
                        <strong>
                            {/* {context?.user?.username} :{" "} */}
                        </strong>
                    </label>
                    <div className='flex-grow-1 ml-1 d-flex flex-row justify-content-between'>
                        <input
                            type='textarea'
                            name='comment'
                            id='comment'
                            placeholder='add a comment ...'
                            onChange={handleChange}
                            className='flex-grow-1 mr-1'
                            value={comment}
                            rows={1}
                        />
                        <Button>Post</Button>
                    </div>
                </div>
            )}

        
        </>
    );
};
export default Item;