import React from "react";

function Tugas7(props) {
  return (
    <div className="Content">
      <h1>Data diri peserta kelas Reactjs</h1>
      <hr />
      <ul>
        <li>Nama: {props.name}</li>
        <li>Kelas: {props.kelas}</li>
        <li>Email: {props.email}</li>
      </ul>
    </div>
  );
}

export default Tugas7;