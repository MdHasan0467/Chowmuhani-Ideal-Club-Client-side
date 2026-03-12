import { useState } from "react";
import CommentInput from "./CommentInput";

const Comment = ({ comment, post, index, updatePost }) => {
  const [replyText, setReplyText] = useState("");
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleAddReply = () => {
    if (!replyText) return;
    const updatedComments = post.comments.map((c, i) =>
      i === index ? { ...c, replies: [...c.replies, { text: replyText, avatar: "https://i.pravatar.cc/150?img=40" }] } : c
    );
    updatePost({ ...post, comments: updatedComments });
    setReplyText("");
  };

  const handleDelete = () => {
    const updatedComments = post.comments.filter((_, i) => i !== index);
    updatePost({ ...post, comments: updatedComments });
  };

  const handleSaveEdit = () => {
    const updatedComments = post.comments.map((c, i) =>
      i === index ? { ...c, text: editText } : c
    );
    updatePost({ ...post, comments: updatedComments });
    setEditing(false);
  };

  return (
    <div className="bg-gray-50 p-2 rounded-lg flex flex-col space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={comment.avatar} className="w-6 h-6 rounded-full" alt="commenter" />
          {editing ? (
            <input
              className="input input-sm w-full"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <p className="text-sm sm:text-base">{comment.text}</p>
          )}
        </div>
        <div className="flex space-x-1">
          {editing ? (
            <button className="btn btn-xs btn-primary" onClick={handleSaveEdit}>Save</button>
          ) : (
            <button className="btn btn-xs btn-ghost" onClick={() => setEditing(true)}>Edit</button>
          )}
          <button className="btn btn-xs btn-error" onClick={handleDelete}>Delete</button>
        </div>
      </div>

      {comment.replies.map((r, idx) => (
        <div key={idx} className="flex items-center space-x-2 ml-6 bg-gray-100 p-1 rounded">
          <img src={r.avatar} className="w-5 h-5 rounded-full" alt="replier" />
          <p className="text-sm sm:text-base">↳ {r.text}</p>
        </div>
      ))}

      <div className="flex space-x-2 ml-6 mt-1">
        <CommentInput
          value={replyText}
          placeholder="Reply..."
          onChange={(e) => setReplyText(e.target.value)}
          onSubmit={handleAddReply}
        />
      </div>
    </div>
  );
};

export default Comment;