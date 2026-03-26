import { useState } from "react";

const MemberVerification = ({ onVerified }) => {
  const [memberId, setMemberId] = useState("");
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  const verifyMember = async () => {
    setError("");

    if (!memberId) {
      setError("মেম্বার আইডি দিন।");
      return;
    }

    try {
      setChecking(true);

      const res = await fetch(`/api/check-member/${memberId}`);
      const data = await res.json();

      setChecking(false);

      if (!data.exists) {
        setError(
          "আইডি মিল পাওয়া যায়নি। আপনি যদি সদস্য না হয়ে থাকেন তবে সদস্য হন।"
        );
        return;
      }

      // verified
      onVerified(memberId);
    } catch (err) {
      setChecking(false);
      setError("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">মেম্বার যাচাই</h2>

      <input
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        placeholder="আপনার DIC আইডি"
        className="input input-bordered w-full"
      />

      <button
        type="button"
        onClick={verifyMember}
        className="btn btn-primary w-full"
      >
        যাচাই করুন
      </button>

      {checking && <p className="text-gray-500">আইডি যাচাই হচ্ছে...</p>}

      {error && (
        <p className="text-red-600 font-semibold">
          {error}{" "}
          {!error.includes("সার্ভার") && (
            <a
              href="/add/new/member"
              className="underline text-blue-700"
              target="_blank"
            >
              সদস্য হন
            </a>
          )}
        </p>
      )}
    </div>
  );
};

export default MemberVerification;