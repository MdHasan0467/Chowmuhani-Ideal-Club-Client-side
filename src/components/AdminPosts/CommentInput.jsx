const CommentInput = ({ value, onChange, onSubmit, placeholder }) => (
  <>
    <input
      type="text"
      className="input input-bordered input-xs sm:input-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <button
      className="btn btn-primary btn-xs sm:btn-sm transition hover:scale-105"
      onClick={onSubmit}
    >
      {placeholder.includes("Reply") ? "Reply" : "Comment"}
    </button>
  </>
);

export default CommentInput;