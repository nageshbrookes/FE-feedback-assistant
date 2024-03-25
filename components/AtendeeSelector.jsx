import { AttendeeData } from "@data/attendee";

function AtendeeSelector() {
  return (
    <div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Select</th>
              <th>Attendee Name</th>
              <th>Attendee Email</th>
            </tr>
          </thead>
          <tbody>
            {AttendeeData.map((ad) => {
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={ad.Selected ? "true" : "false"}
                      onChange={(ad) => {
                        console.log("hi");
                        ad.Selected = !ad.Selected;
                      }}
                    />
                  </td>
                  <td>{ad.Name}</td>
                  <td>{ad.Email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AtendeeSelector;
