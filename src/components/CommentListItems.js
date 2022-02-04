import video from "../data/video";

function CommentListItems() {
  const commentList = video.comments.map((comment) => {
    return (
      <div>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
      </div>
    );
  });

  return (
    <div>
      {commentList}
      {/* <h3>{video.comments[0].user}</h3>
      <p>{video.comments[0].comment}</p>
      <h3>{video.comments[1].user}</h3>
      <p>{video.comments[1].comment}</p> */}
    </div>
  );
}
export default CommentListItems;
