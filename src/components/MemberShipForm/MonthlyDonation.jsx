const MonthlyDonation = ({
  donationChoice,       // yes / no choice
  setDonationChoice,    // setState function for choice
  donationAmount,       // donation amount
  setDonationAmount,    // setState function for amount
  donationError,        // validation message
  setDonationError,     // setState function for validation
}) => {

  
  return (
    <div className="space-y-4">

      {/* Section title */}
      <h2 className="text-xl font-bold">মাসিক চাঁদা দিতে পারবেন কি?</h2>

      {/* Radio buttons for yes/no */}
      <div className="flex items-center space-x-6">

        {/* Yes option */}
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="donationChoice"
            value="yes"
            checked={donationChoice === "yes"}
            onChange={(e) => {
              setDonationChoice(e.target.value);
              setDonationError(""); // choice change হলে error clear
            }}
          />
          <span>হ্যাঁ</span>
        </label>

        {/* No option */}
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="donationChoice"
            value="no"
            checked={donationChoice === "no"}
            onChange={(e) => {
              setDonationChoice(e.target.value);
              setDonationAmount(""); // no হলে amount clear
              setDonationError("");   // error clear
            }}
          />
          <span>না</span>
        </label>

      </div>

      {/* Amount input - only if Yes selected */}
      {donationChoice === "yes" && (
        <div className="space-y-1">

          {/* Input field */}
          <input
            type="number"
            placeholder="মাসিক চাঁদার পরিমাণ"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            onBlur={() => {
              // input unfocus হলে validation check
              if (!donationAmount || donationAmount < 20) {
                setDonationError("কমপক্ষে ২০ টাকা লিখুন");
              } else {
                setDonationError(""); // ভুল না থাকলে clear
              }
            }}
            className="input input-bordered w-full"
            min={20} // browser default validation
          />

          {/* Validation message */}
          {donationError && (
            <p className="text-red-600 text-sm">{donationError}</p>
          )}

        </div>
      )}
    </div>
  );
};

export default MonthlyDonation;