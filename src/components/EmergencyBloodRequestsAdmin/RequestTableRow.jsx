// Desktop Table Row Component

import { FaTint, FaHospital } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";

const RequestTableRow = ({ req, getRowStyle, getActionButton }) => (
              <tr key={req.id} className={`border-t hover:shadow-md transition-shadow ${getRowStyle(req)}`}>
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {req.patient}
                    </p>
                </td> 
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {req.gender}
                    </p>
                </td> 
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        <span className="mt-1">
                            <FaTint className="text-red-500" /> 
                        </span> 
                        <span>{req?.blood}</span> 
                    </p>
                </td> 
                <td className="px-4 py-3 items-center wrap-break-word"> 
                    <p className="flex gap-1"> 
                        <span className="mt-1">
                            <FaHospital />
                        </span> 
                        <span>{req?.hospitalName}</span> 
                    </p> 
                </td>                
                <td className="px-4 py-3 items-center wrap-break-word"> 
                    <p className="flex gap-1"> 
                        <span className="mt-1">
                            <BsFillGeoAltFill />
                        </span> 
                        <span>{req?.hospitalLocation}</span> 
                    </p> 
                </td>
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {req.date}
                        <p className="text-gray-400 text-xs">{req.time}</p>
                    </p>
                </td> 
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {req.bags}
                    </p>
                </td> 
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {req.priority}
                    </p>
                </td> 
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {req.guardian}
                    </p>
                </td> 
                <td className="px-4 py-3 items-center"> 
                    <p className="flex gap-1"> 
                        {getActionButton(req)}
                    </p>
                </td> 
              </tr>

  
);

export default RequestTableRow;