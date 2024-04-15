import { useState } from "react";
export default function KomposisiBahan({ bahanUse }) {
  let totalHarga = 0;
  const [berat, setBerat] = useState(1);
  function hitungBerat(ber) {
    return parseFloat((parseInt(ber) / 100) * berat).toFixed(1);
  }
  let totalBahan = {
    BK: 0,
    PK: 0,
    LK: 0,
    Abu: 0,
    Ca: 0,
    P: 0,
    NDF: 0,
    TDN: 0,
  };
  console.table(totalBahan)
  let semua = [...bahanUse].map((e) => {
    totalHarga +=
      hitungBerat(e.prosentase) * e.harga
        ? hitungBerat(e.prosentase) * e.harga
        : 0;
    totalBahan.BK += parseFloat(e.BK)
    totalBahan.PK += parseFloat(e.PK)
    totalBahan.LK += parseFloat(e.LK)
    totalBahan.Abu += parseFloat(e.Abu)
    totalBahan.Ca += parseFloat(e.Ca)
    totalBahan.P += parseFloat(e.P)
    totalBahan.NDF += parseFloat(e.NDF)
    totalBahan.TDN += parseFloat(e.TDN)
    return {
      ...e,
      berat: hitungBerat(e.prosentase) ? hitungBerat(e.prosentase) : 0,
      hargaTotal:
        hitungBerat(e.prosentase) * e.harga
          ? hitungBerat(e.prosentase) * e.harga
          : 0,
    };
  });
  return (
    <div>
      <h5 className="my-3 text-center">Komposisi Bahan</h5>
      <div className="input-group">
        <input
          type="number"
          value={berat}
          onChange={(e) => setBerat(e.target.value)}
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
          {semua.map((e) => {
            return (
              <tr>
                <td>{e.nama}</td>
                <td>{e.berat} Kg</td>
                <td>
                  Rp{" "}
                  {e.hargaTotal
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 className="text-end">
        Rp{" "}
        {totalHarga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
      </h2>

      <h5 className="my-3 text-center">Total Bahan</h5>
      <table>
        <thead>
          <tr className="text-center">
            <th style={{width:"10vw"}}>BK</th>
            <th style={{width:"10vw"}}>LK</th>
            <th style={{width:"10vw"}}>PK</th>
            <th style={{width:"10vw"}}>Abu</th>
            <th style={{width:"10vw"}}>Ca</th>
            <th style={{width:"10vw"}}>P</th>
            <th style={{width:"10vw"}}>NDF</th>
            <th style={{width:"10vw"}}>TDN</th>
          </tr>
        </thead>
        <tbody>
          <td>{totalBahan.BK}</td>
          <td>{totalBahan.LK}</td>
          <td>{totalBahan.PK}</td>
          <td>{totalBahan.Abu}</td>
          <td>{totalBahan.Ca}</td>
          <td>{totalBahan.P}</td>
          <td>{totalBahan.NDF}</td>
          <td>{totalBahan.TDN}</td>
        </tbody>
      </table>
    </div>
  );
}
