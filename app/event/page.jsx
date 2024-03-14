import React from "react";
import Image from "next/image";
import ViewIcon from "../../public/images/viewicon.svg";
import EventLinkIcon from "../../public/images/eventlinkicon.svg"
import EditIcon from "../../public/images/editframeicon.svg";
import DeleteIcon from "../../public/images/deleteicon.svg";

function page() {
  return (

    <div className={"py-8 px-[100px]"}>

      {/*insert breadcrumb*/}
      <div className={"flex gap-6"}>
        <div>Home</div>
        <div>/</div>
        <div>Events</div>
      </div>

      {/* Creating Table */}
      <div className={"bg-white"}>

        <div> {/* Header */}

        </div>


        <table className={""}>
          {/* Row 1 */}
          <tr>
            <th><input type="checkbox"></input></th>
            <th>Event Name</th>
            <th>Ticket Selling Period</th>
            <th>Ticket Price</th>
            <th>Action</th>
          </tr>

          {/* Row 2 */}
          <tr>
            <td>14587</td>
            <td>JKT 48 11th Anniversary Concert</td>
            <td>Sep 1, 2023 - Dec 1, 2023</td>
            <td>25467</td>
            <td>£110</td>
            <td>
              <div className={"flex"}>
                <Image src={ViewIcon} alt={""} />
                <Image src={EventLinkIcon} alt={""} />
                <Image src={EditIcon} alt={""} />
                <Image src={DeleteIcon} alt={""} />
              </div>
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td>14587</td>
            <td>Coldplay Concert - From The Ground to The Sky</td>
            <td>Sep 1, 2023 - Dec 1, 2023</td>
            <td>20480</td>
            <td>£115</td>
            <td>
              <div className={"flex"}>
                <Image src={ViewIcon} alt={""} />
                <Image src={EventLinkIcon} alt={""} />
                <Image src={EditIcon} alt={""} />
                <Image src={DeleteIcon} alt={""} />
              </div>
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td>14587</td>
            <td>Neck Deep - From The Deep and More to Deep</td>
            <td>Sep 1, 2023 - Dec 1, 2023</td>
            <td>18188</td>
            <td>£94</td>
            <td>
              <div className={"flex"}>
                <Image src={ViewIcon} alt={""} />
                <Image src={EventLinkIcon} alt={""} />
                <Image src={EditIcon} alt={""} />
                <Image src={DeleteIcon} alt={""} />
              </div>
            </td>
          </tr>

        </table>

      </div>

    </div>
  );
}

export default page;