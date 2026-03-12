import { useState, useEffect } from "react";
import PostCard from "../components/AdminPosts/PostCard";

const initialPosts = [
  {
    id: 1,
    name: "মোঃ হাসান",
    role: "পরিচালক",
    club: "চৌমহনী আইডিয়াল কাব",
    date: new Date("2026-03-11T14:45:00"),
    avatar: "https://i.pravatar.cc/150?img=12",
    message: [
      "আসসালামু আলাইকুম,",
      "চৌমুহনী আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
      "যদি আপনার কোনো প্রশ্ন বা পরামর্শ থাকে, দয়া করে নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন। আমরা আপনার মতামত গ্রহণের জন্য আমরা সবসময় প্রস্তুত আছি ইনশা-আল্লাহ।"
    ],
    comments: [
      { text: "ধন্যবাদ! খুব সুন্দর পোস্ট।", avatar: "https://i.pravatar.cc/150?img=32", replies: [] }
    ],
    likes: 3,
  },
  {
    id: 2,
    name: "মোঃ হাসান",
    role: "পরিচালক",
    club: "চৌমহনী আইডিয়াল কাব",
    date: new Date("2026-03-11T14:45:00"),
    avatar: "https://i.pravatar.cc/150?img=15",
    message: [
      "আসসালামু আলাইকুম,",
      "চৌমুহনী আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
      "যদি আপনার কোনো প্রশ্ন বা পরামর্শ থাকে, দয়া করে নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন। আমরা আপনার মতামত গ্রহণের জন্য আমরা সবসময় প্রস্তুত আছি ইনশা-আল্লাহ।"
    ],
    comments: [],
    likes: 0,
  },
    {
    id: 3,
    name: "মোঃ হাসান",
    role: "পরিচালক",
    club: "চৌমহনী আইডিয়াল কাব",
    date: new Date("2026-03-12T19:45:00"),
    avatar: "https://i.pravatar.cc/150?img=12",
    message: [
      "আসসালামু আলাইকুম,",
      "চৌমুহনী আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
      "যদি আপনার কোনো প্রশ্ন বা পরামর্শ থাকে, দয়া করে নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন। আমরা আপনার মতামত গ্রহণের জন্য আমরা সবসময় প্রস্তুত আছি ইনশা-আল্লাহ।"
    ],
    comments: [
      { text: "ধন্যবাদ!", avatar: "https://i.pravatar.cc/150?img=32", replies: [] }
    ],
    likes: 2,
  },
    {
    id: 4,
    name: "মোঃ হাসান",
    role: "পরিচালক",
    club: "চৌমহনী আইডিয়াল কাব",
    date: new Date("2026-03-12T14:45:00"),
    avatar: "https://i.pravatar.cc/150?img=12",
    message: [
      "আসসালামু আলাইকুম,",
      "চৌমুহনী আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
      "যদি আপনার কোনো প্রশ্ন বা পরামর্শ থাকে, দয়া করে নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন। আমরা আপনার মতামত গ্রহণের জন্য আমরা সবসময় প্রস্তুত আছি ইনশা-আল্লাহ।"
    ],
    comments: [
      { text: "সহমত", avatar: "https://i.pravatar.cc/150?img=32", replies: [] }
    ],
    likes: 1,
  },
];

const AdminPosts = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newComments, setNewComments] = useState(0);

  // Count new comments across all posts
  useEffect(() => {
    const count = posts.reduce((acc, post) => acc + post.comments.length, 0);
    setNewComments(count);
  }, [posts]);

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg md:text-2xl font-semibold">
          পরিচালকের সকল পোষ্ট
        </h1>
        {newComments > 0 && (
          <span className="badge badge-primary">{newComments} New</span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} updatePost={updatePost} />
        ))}
      </div>
    </div>
  );
};

export default AdminPosts;