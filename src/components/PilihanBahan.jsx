import { useState } from "react";
export default function PilihanBahan({ dataBahan,onBahan,jumlahBahan,setJumlahBahan,bahanUse,setBahanUse }) {
  
  return (
    <div>
      <p className="my-3 text-start">Pemilihan Bahan</p>
      <div className="input-group">
        <input
          type="number"
          value={jumlahBahan>=0?jumlahBahan:1}
          onChange={(e) => {
            setJumlahBahan(e.target.value)
            setBahanUse(bahanUse.slice(0,jumlahBahan-1))
          }}
          className="form-control"
        />
        <span className="input-group-text">Bahan</span>
      </div>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50vw" }}>Bahan</th>
            <th style={{ width: "20vw" }}>Prosentase</th>
            <th style={{ width: "30vw" }}>Harga</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(parseInt(jumlahBahan>0 ? jumlahBahan : 1))].map((x, i) => (

            <tr key={i}>
              <td>
                <select key={i} onChange={(e)=>{onBahan(e,i)}}name="nama" className="form-select">
                  <option value="pilih">Pilih Bahan</option>
                  {dataBahan.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.nama}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <div className="input-group">
                  <input type="number" onChange={(e)=>{onBahan(e,i)}} name="prosentase" id="" className="form-control" />
                </div>
              </td>
              <td>
                <div className="input-group">
                  <input type="number" onChange={(e)=>{onBahan(e,i)}} name="harga" id="" className="form-control" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

