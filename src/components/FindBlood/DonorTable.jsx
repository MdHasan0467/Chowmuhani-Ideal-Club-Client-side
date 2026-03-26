const DonorTable = ({ donors }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="table w-full">
        <thead>
          <tr>
            <th>নাম</th>
            <th>জেলা</th>
            <th>Blood</th>
            <th>মোবাইল</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.district}</td>
              <td className="text-red-500">{d.blood}</td>
              <td>{d.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorTable;