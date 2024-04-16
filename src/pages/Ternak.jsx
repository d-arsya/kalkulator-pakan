import { useEffect, useState } from "react";
export default function Ternak() {
  const ternak = JSON.parse(localStorage.getItem("ternak"));
  return (
    <div className="container">
      <h5 className="text-center">Kebutuhan Ternak</h5>
      <table className="table">
        <thead className="position-sticky top-0 bg-secondary">
          <tr>
            <th style={{ width: "10vw" }}>Nama</th>
            <th style={{ width: "5vw" }}>BK</th>
            <th style={{ width: "5vw" }}>PK</th>
            <th style={{ width: "5vw" }}>LK</th>
            <th style={{ width: "5vw" }}>Abu</th>
            <th style={{ width: "5vw" }}>Ca</th>
            <th style={{ width: "5vw" }}>P</th>
            <th style={{ width: "5vw" }}>NDF</th>
            <th style={{ width: "5vw" }}>TDN</th>
          </tr>
        </thead>
        <tbody>
          {ternak.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.nama}</td>
                <td>{e.BK}</td>
                <td>{e.PK}</td>
                <td>{e.LK}</td>
                <td>{e.Abu}</td>
                <td>{e.Ca}</td>
                <td>{e.P}</td>
                <td>{e.NDF}</td>
                <td>{e.TDN}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
