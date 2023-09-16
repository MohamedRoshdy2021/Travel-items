import React, { useState } from "react";

function Renderelements({ array, setarray }) {
  let style = {
    display: "flex",
    listStyle: "none",
    gap: "0.6rem",
    flexDirection: "row-reverse",
  };

  function line(id) {
    return setarray((prev) =>
      prev.map((val) =>
        val.id === id ? { ...val, ispacked: !val.ispacked } : val
      )
    );
  }

  function deleteitem(id) {
    setarray((del) => del.filter((val) => val.id !== id));
  }

  const [sort, setsort] = useState("inputcontrol");

  let sorted;

  if (sort === "inputcontrol")
    sorted = array
      .slice()
      .sort((a, b) => a.inputcontrol.localeCompare(b.inputcontrol));

  if (sort === "ispacked")
    sorted = array
      .slice()
      .sort((a, b) => Number(a.ispacked) - Number(b.ispacked));

  function handledeleteall() {
    const alert = window.confirm("are you sure");
    if (alert) setarray([]);
  }

  return (
    <div
      style={{
        backgroundColor: "chocolate",
        color: "white",
        height: "500px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {sorted.map((obj) => (
        <ul key={obj.id} style={{ display: "flex" }}>
          <li>
            <input onClick={() => line(obj.id)} type="checkbox"></input>
          </li>
          <li style={obj.ispacked ? { textDecoration: "line-through" } : style}>
            {obj.num ? obj.num : obj.inputcontrol}
          </li>
          <li style={obj.ispacked ? { textDecoration: "line-through" } : style}>
            {obj.name ? obj.name : obj.catgcontrol}
          </li>
          <li style={{ cursor: "pointer" }} onClick={() => deleteitem(obj.id)}>
            ❌
          </li>
        </ul>
      ))}
      <div
        style={{ height: "40px", position: "fixed", top: "60%", left: "40%" }}
      >
        <select
          value={sort}
          onChange={(e) => setsort(e.target.value)}
          style={{
            border: "none",
            borderRadius: "15px",
            backgroundColor: "linen",
            padding: "0.5rem",
            margin: "0 0.5rem",
          }}
        >
          <option value="inputcontrol">set according to the alphpatical</option>
          <option value="ispacked">set according to the packed status</option>
        </select>
        <button
          style={{
            border: "none",
            borderRadius: "15px",
            backgroundColor: "linen",
            padding: "0.5rem",
          }}
          onClick={handledeleteall}
        >
          clear all
        </button>
      </div>
    </div>
  );
}

export default Renderelements;
