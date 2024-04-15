import { useState } from "react";
export default function KomposisiBahan({bahanUse}) {
  let totalHarga = 0
  const [berat,setBerat] =useState(1)
  function hitungBerat(ber){
    return parseInt(ber)/100*berat
  }
  let semua = [...bahanUse].map(e=>{
    totalHarga += hitungBerat(e.prosentase)*e.harga
    return{
      ...e,
      berat:hitungBerat(e.prosentase),
      hargaTotal:hitungBerat(e.prosentase)*e.harga
    }
  })
  function reducer(accumulator, currentValue, index) {
    return accumulator.hargaTotal + currentValue.hargaTotal;
  }
  return (
    <div>
      <h5 className="my-3 text-center">Komposisi Bahan</h5>
      <div className="input-group">
        <input
          type="number"
          value={berat}
          onChange={(e)=>setBerat(e.target.value)}
          className="form-control"
        />
        <span className="input-group-text">KG</span>
      </div>
      <table className="table">
        <thead className="text-center">
            <tr>
            <th style={{ width: "50vw" }}>Bahan</th>
            <th style={{ width: "20vw" }}>Berat</th>
            <th style={{ width: "30vw" }}>Harga</th>
            </tr>
        </thead>
        <tbody>
          {semua.map((e)=>{
            return(
              <tr>
                <td>{e.nama}</td>
                <td>{e.berat} Kg</td>
                <td>Rp {e.hargaTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h2 className="text-end">Rp {totalHarga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}</h2>
    </div>
  );
}
