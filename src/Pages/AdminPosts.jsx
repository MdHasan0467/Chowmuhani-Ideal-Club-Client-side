import { useState, useRef, useEffect } from "react";
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
      "দুর্গাপুর আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
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
      "দুর্গাপুর আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
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
      "দুর্গাপুর আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
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
      "দুর্গাপুর আইডিয়াল ক্লাবে আপনাকে স্বাগতম!",
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
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  // কোন পোস্টগুলো দেখানো হবে
  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  // Smooth animation জন্য max-height set করা
  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(`${containerRef.current.scrollHeight}px`);
    }
  }, [showAll, posts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-lg md:text-2xl font-semibold text-center mb-6">
        পরিচালকের সকল পোষ্ট
      </h1>

      {/* Animated container */}
      <div
        ref={containerRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: showAll ? maxHeight : "1500px" }} // 1500px as fallback for 3 posts
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visiblePosts.map(post => (
            <PostCard key={post.id} post={post} updatePost={updatePost} />
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      {posts.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-outline btn-sm sm:btn-md transition transform hover:scale-105"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "কম দেখবো" : "আরো দেখুন..."}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPosts;