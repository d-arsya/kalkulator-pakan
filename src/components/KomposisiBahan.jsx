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
    for(let key in totalBahan){
      console.log(totalBahan[key],e[key],e.prosentase)
      totalBahan[key]+=parseFloat(e[key])*parseFloat(e.prosentase)/100
    }
    console.table(totalBahan)
    // console.table(totalBahan)
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
      <h5 className="text-end">
        Rp{" "}
        {totalHarga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
      </h5>
      <p className="text-end">
        Rp{" "}
        {(totalHarga/berat).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}/Kg
      </p>

      <h5 className="my-3 text-center">Nutrisi Bahan</h5>
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{width:"10vw"}}>BK</th>
            <th style={{width:"10vw"}}>PK</th>
            <th style={{width:"10vw"}}>LK</th>
            <th style={{width:"10vw"}}>Abu</th>
            <th style={{width:"10vw"}}>Ca</th>
            <th style={{width:"10vw"}}>P</th>
            <th style={{width:"10vw"}}>NDF</th>
            <th style={{width:"10vw"}}>TDN</th>
          </tr>
        </thead>
        <tbody>
          
          <td>{totalBahan.BK.toFixed(2)}</td>
          <td>{totalBahan.PK.toFixed(2)}</td>
          <td>{totalBahan.LK.toFixed(2)}</td>
          <td>{totalBahan.Abu.toFixed(2)}</td>
          <td>{totalBahan.Ca.toFixed(2)}</td>
          <td>{totalBahan.P.toFixed(2)}</td>
          <td>{totalBahan.NDF.toFixed(2)}</td>
          <td>{totalBahan.TDN.toFixed(2)}</td>
        </tbody>
      </table>
    </div>
  );
}
