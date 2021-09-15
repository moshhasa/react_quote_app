import { useEffect, useRef } from "react";
import useHttp, { httpStatus } from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if(status === httpStatus.completed && !error){
      onAddedComment();
    }
  }, [status, error, onAddedComment])

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      quoteId: props.quoteId,
      commentData: { text: commentTextRef.current.value },
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === httpStatus.pending && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
