import { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSection = ({ post, updatePost }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (!commentText) return;
    const newComment = { text: commentText, avatar: "https://i.pravatar.cc/150?img=50", replies: [] };
    updatePost({ ...post, comments: [...post.comments, newComment] });
    setCommentText("");
  };

  return (
    <div className="mt-3">
      <h4 className="font-semibold text-sm sm:text-base mb-2">
        Comments ({post.comments.length})
      </h4>

      <div className="space-y-2 max-h-48 overflow-y-auto mb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {post.comments.map((cmt, i) => (
          <Comment key={i} comment={cmt} post={post} index={i} updatePost={updatePost} />
        ))}
      </div>

      <CommentInput
        value={commentText}
        placeholder="Add a comment..."
        onChange={(e) => setCommentText(e.target.value)}
        onSubmit={handleAddComment}
      />
    </div>
  );
};

export default CommentSection;