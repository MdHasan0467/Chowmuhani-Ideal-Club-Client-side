import { formatDistanceToNow } from "date-fns";
import CommentSection from "./CommentSection";
import { useState } from "react";

const PostCard = ({ post, updatePost }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    updatePost({ ...post, likes: liked ? post.likes - 1 : post.likes + 1 });
    setLiked(!liked);
  };

//   const handleShare = () => {
//     alert(`You shared "${post.name}" post!`);
//   };

  return (
    <div className="card w-full bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg flex flex-col">
      <div className="card-body p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h2 className="text-sm sm:text-base font-semibold">{post.name}</h2>
              <span className="badge badge-xs badge-secondary text-[0.65rem]">{post.role}</span>
            </div>
          </div>
          <h4 className="text-xs sm:text-sm text-gray-400">
            {formatDistanceToNow(post.date, { addSuffix: true })}
          </h4>
        </div>

        {/* Club & Message */}
        <h3 className="font-semibold text-sm sm:text-base mb-2">{post.club}</h3>
        {post.message.map((msg, i) => (
          <p key={i} className="text-sm sm:text-base mb-1">{msg}</p>
        ))}

        {/* Actions */}
        <div className="flex items-center justify-start mt-3 mb-2 space-x-3">
          <button
            className={`btn btn-outline btn-sm sm:btn-md transition transform duration-150 ${liked ? "btn-primary scale-110" : ""}`}
            onClick={handleLike}
          >
            👍 Like ({post.likes})
          </button>

          {/* <button className="btn btn-outline btn-sm sm:btn-md ml-auto" onClick={handleShare}>
            Share
          </button> */}
        </div>

        {/* Comment Section */}
        <CommentSection post={post} updatePost={updatePost} />
      </div>
    </div>
  );
};

export default PostCard;