import { useState } from "react";
import FindBloodDonarInfoModal from "../../Modals/FindBlood/FindBloodDonarInfoModal";

const DonorTable = ({ donors }) => {
  const [selectedDonor, setSelectedDonor] = useState(null);
  console.log('table', donors)

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="table w-full">
        <thead>
          <tr>
            <th>নাম</th>
            <th>Blood</th>
            <th>মোবাইল</th>
            <th>বিস্তারিত</th>
            <th>জেলা</th>
          </tr>
        </thead>
        <tbody>
          {donors?.map((d) => (
            <tr key={d?.id}>
              <td>{d?.name}</td>
              <td className="text-red-500">{d?.blood}</td>
              <td>{d?.mobile}</td>
              <td>
                <button
                  onClick={() => setSelectedDonor(d)}  // ✅ শুধু ঐ ডোনর
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  বিস্তারিত
                </button>
              </td>
              <td>{d?.district}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDonor && (
        <FindBloodDonarInfoModal
          donor={selectedDonor}  // ✅ Prop নাম ঠিক করা
          closeModal={() => setSelectedDonor(null)}
        />
      )}
    </div>
  );
};

export default DonorTable;