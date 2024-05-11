import { useState } from "react";
export default function Ternak({ dataTernak,ternak,setTernak }) {
  
  function getTernak(id) {
    let itu = dataTernak.filter((e) => {
      return e.id == id;
    })[0];
    return itu;
  }
  function TernakSelected() {
    let namaBahan = [];
    let nilaiBahan = [];
    for (let key in ternak) {
      if (key != "id" && key != "nama") {
        namaBahan.push(key);
        nilaiBahan.push(parseFloat(ternak[key]).toFixed(1));
      }
    }
    return (
      <table className="table text-center">
        <thead>
          <tr>
            {namaBahan.map((e,i) => {
              return <td key={i} style={{width:"10vw"}}>{e.toUpperCase()}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {nilaiBahan.map((e,i) => {
              return <td key={i}>{e}</td>;
            })}
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <div className="container">
      <select
        className="form-select"
        onChange={(e) => setTernak(getTernak([e.target.value][0]))}
      >
        <option>Jenis Ternak</option>
        {dataTernak.map((e) => {
          return (
            <option key={e.id} value={e.id}>
              {e.nama}
            </option>
          );
        })}
      </select>
      <p className="my-3 text-start">Kebutuhan :</p>
      <TernakSelected></TernakSelected>
    </div>
  );
}
