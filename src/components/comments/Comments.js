import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import useHttp, { httpStatus } from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, data: comments, status } = useHttp(getAllComments);
  const params = useParams();
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let commentsTemplate;

  if (status === httpStatus.pending) {
    commentsTemplate = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === httpStatus.completed) {
    commentsTemplate =
      comments && comments.length > 0 ? (
        <CommentsList comments={comments} />
      ) : (
        <p>No added comments!</p>
      );
  }

  const startAddCommentHandler = () => setIsAddingComment(true);
  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddedComment={addedCommentHandler}
          quoteId={quoteId}
        />
      )}
      {commentsTemplate}
    </section>
  );
};

export default Comments;
