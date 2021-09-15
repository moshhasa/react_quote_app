import { useRef, useEffect } from 'react';
import { useParams } from 'react-router';
import useHttp, { httpStatus } from '../../hooks/use-http';
import { addComment } from '../../lib/api';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const params = useParams();
  const {sendRequest, status} = useHttp(addComment)

  
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    sendRequest({quoteId : params.quoteId, commentData : { text : commentTextRef.current.value}});
    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
