import { useState } from "react";
export default function KomposisiBahan({ bahanUse,ternak }) {
  let totalHarga = 0;
  const [berat, setBerat] = useState(1);
  function hitungBerat(ber) {
    ber = ber?ber:0
    return parseFloat((parseInt(ber) / 100) * berat).toFixed(1);
  }
  let totalBahan = {
    bk: 0,
    pk: 0,
    lk: 0,
    abu: 0,
    ca: 0,
    p: 0,
    ndf: 0,
    tdn: 0,
  };
  let kesimpulanBahan = {
    bk: 0,
    pk: 0,
    lk: 0,
    abu: 0,
    ca: 0,
    p: 0,
    ndf: 0,
    tdn: 0,
  };
  let semua = [...bahanUse].map((e) => {
    totalHarga +=
      hitungBerat(e.prosentase) * e.harga
        ? hitungBerat(e.prosentase) * e.harga
        : 0;
    for(let key in totalBahan){
      totalBahan[key]+=parseFloat(e[key])*parseFloat(e.prosentase)/100
      kesimpulanBahan[key] = totalBahan[key]-ternak[key]
    }
    e.harga = e.harga?e.harga:0
    return {
      ...e,
      berat: hitungBerat(e.prosentase),
      hargaTotal:
        hitungBerat(e.prosentase) * e.harga,
    };
  });
  return (
    <div>
      <p className="my-3 text-center">Komposisi Bahan</p>
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
            <td style={{ width: "50vw" }}>Bahan</td>
            <td style={{ width: "20vw" }}>Berat</td>
            <td style={{ width: "30vw" }}>Harga</td>
          </tr>
        </thead>
        <tbody>
          {semua.map((e,i) => {
            return (
              <tr key={i}>
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
            {Object.keys(totalBahan).map(e=>{
              if(e!="ndf")return <td key={e} style={{widtd:"10vw"}}>{e.toUpperCase()}</td>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(totalBahan).map(e=>{
              if(e!="ndf")return <td key={e}>{totalBahan[e].toFixed(2)}</td>
            })}

          </tr>
          <tr>
            {Object.keys(kesimpulanBahan).map(e=>{
              if(e!="ndf")return <td key={e} className={kesimpulanBahan[e]>=0?"bg-success":"bg-warning"}>{kesimpulanBahan[e].toFixed(2)}</td>
            })}

          </tr>
        </tbody>
      </table>
    </div>
  );
}
