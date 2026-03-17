import { useState } from "react";
import { BsAwardFill } from "react-icons/bs";
import "../css/DonationCertificate/DonationCertificate.css";

const DonationCertificate = () => {
  const [donor, setDonor] = useState({ name: "", type: "", date: "" });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    const certificate = document.getElementById("certificate");
    const newWin = window.open("", "_blank", "width=900,height=700");
    newWin.document.write(`
      <html>
        <head>
          <title>Donation Certificate</title>
          <style>
            ${document.getElementById("certificate-styles").innerHTML}
          </style>
        </head>
        <body>
          ${certificate.outerHTML}
        </body>
      </html>
    `);
    newWin.document.close();
    newWin.focus();
    newWin.print();
  };

  return (
    <div className="certificate-wrapper">
      <h2>Create Donation Certificate</h2>

      <div className="certificate-container">
        {/* Admin Form */}
        <form className="certificate-form">
          <label>
            Donor Name:
            <input
              type="text"
              name="name"
              value={donor.name}
              onChange={handleChange}
              placeholder="Enter donor name"
              required
            />
          </label>
          <label>
            Donation Type:
            <input
              type="text"
              name="type"
              value={donor.type}
              onChange={handleChange}
              placeholder="Blood Donation, Money, etc."
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={donor.date}
              onChange={handleChange}
              required
            />
          </label>

          <button onClick={handlePrint} className="download-btn" type="button">
            Download / Print Certificate
          </button>
        </form>

        {/* Certificate Preview */}
        <div id="certificate">
          {/* BsAwardFill in top-left corner */}
          <BsAwardFill className="award-icon-corner" />

          {/* Company Logo in center */}
          <img src="/logo-removebg.png" alt="Logo" className="company-logo-center" />

          <div className="organization">CHOWMUHANI IDEAL CLUB (CIC)</div>
          <h1>Donation Certificate</h1>
          <p>This certificate is proudly presented to</p>
          <h2>{donor.name || "Donor Name"}</h2>
          <p>
            For your generous contribution in <strong>{donor.type || "Donation"}</strong>
          </p>
          <p>On <strong>{donor.date || "Date"}</strong></p>

          {/* Signature placeholder bottom-right */}
          <div className="signature-placeholder">Authority / Signature</div>
        </div>
      </div>

      <style id="certificate-styles">{`
        body { font-family: 'Arial', sans-serif; background: #fff; margin:0; padding:0; }

        .certificate-wrapper { padding: 20px; display: flex; flex-direction: column; align-items: center; }
        .certificate-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; width: 100%; max-width: 1200px; }
        .certificate-form { display: flex; flex-direction: column; gap: 15px; min-width: 250px; }
        .certificate-form label { display: flex; flex-direction: column; font-weight: bold; }
        .certificate-form input { padding: 8px; font-size: 14px; border-radius: 4px; border: 1px solid #ccc; }
        .download-btn { padding: 10px 15px; background: #e74c3c; color: #fff; border: none; border-radius: 6px; cursor: pointer; margin-top: 10px; }
        .download-btn:hover { background: #c0392b; }

        #certificate { 
          width: 90%; max-width: 800px; padding: 40px; border: 5px solid #000; border-radius: 20px; 
          text-align: center; position: relative; box-sizing: border-box; background: #fff; min-height: 500px;
        }

        /* BsAwardFill corner */
        .award-icon-corner {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 80px;
          color: #e74c3c;
          opacity: 0.85;
        }

        /* Company Logo center */
        .company-logo-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          opacity: 0.2;
          z-index: 0;
        }

        #certificate h1, #certificate h2, #certificate p, .organization, .signature-placeholder {
          position: relative; 
          z-index: 1;
        }

        #certificate h1 { font-size: 32px; margin-bottom: 10px; color: #000; }
        #certificate h2 { font-size: 24px; margin-bottom: 10px; font-weight: bold; color: #2c3e50; }
        #certificate p { font-size: 16px; margin: 5px 0; color: #34495e; }
        #certificate .organization { font-weight: bold; font-size: 20px; margin-bottom: 15px; color: #155dfc; }

        /* Signature bottom-right */
        #certificate .signature-placeholder {
          position: absolute;
          bottom: 40px;
          right: 50px;
          width: 180px;
          text-align: center;
          border-top: 2px dashed #000;
          padding-top: 5px;
          font-weight: bold;
          font-size: 16px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          #certificate { width: 100%; padding: 25px; border-width: 6px; min-height: 450px; }
          #certificate h1 { font-size: 28px; }
          #certificate h2 { font-size: 20px; }
          #certificate p { font-size: 14px; }
          #certificate .organization { font-size: 18px; }
          #certificate .signature-placeholder { width: 150px; font-size: 14px; right: 20px; bottom: 20px; }
          .award-icon-corner { font-size: 60px; top: 15px; left: 15px; }
          .company-logo-center { width: 150px; }
        }

        @media (max-width: 500px) {
          #certificate { padding: 20px; }
          #certificate h1 { font-size: 24px; }
          #certificate h2 { font-size: 18px; }
          #certificate p { font-size: 13px; }
          #certificate .organization { font-size: 16px; }
          #certificate .signature-placeholder { width: 130px; font-size: 12px; right: 15px; bottom: 15px; }
          .award-icon-corner { font-size: 50px; top: 10px; left: 10px; }
          .company-logo-center { width: 120px; }
        }
      `}</style>
    </div>
  );
};

export default DonationCertificate;