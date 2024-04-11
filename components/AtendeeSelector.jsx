"use client";
import { useState, useEffect } from "react";

function AtendeeSelector({ eventId }) {
  const [attendeesData, setAttendeesData] = useState([]);
  const [fetched, setfetch] = useState(false);

  useEffect(() => {
    console.log("in the attendees");
    console.log(eventId);
    console.log("getting data");
    if (!fetched) {
      try {
        fetch("/api/get-attendees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId: "1" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAttendeesData(data.data);
          });
        setfetch(true);
      } catch (err) {
        console.error(err);
      }
    }
  });

  function updatecheckbox(event, index) {
    let dumyAD = [...attendeesData];
    dumyAD[index].selected = !dumyAD[index].selected;
    setAttendeesData(dumyAD);
  }

  function save(event) {
    event.preventDefault();
    console.log(attendeesData);
    try {
      fetch("/api/save-attendees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendeesData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.error(err);
    }
  }

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
            {attendeesData.map((ad, ind) => {
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      key={ad.Name}
                      checked={ad.selected}
                      onClick={(event) => {
                        updatecheckbox(event, ind);
                      }}
                    />
                  </td>
                  <td>{ad.name}</td>
                  <td>{ad.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button type="button" onClick={(event) => save(event)}>
          save
        </button>
      </div>
    </div>
  );
}

export default AtendeeSelector;
