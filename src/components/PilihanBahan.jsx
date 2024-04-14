import { useState } from "react";
export default function PilihanBahan({ dataBahan }) {
  const [jumlahBahan, setJumlahBahan] = useState(3);
  return (
    <div>
      <h5 className="my-3 text-center">Pemilihan Bahan</h5>
      <div className="input-group">
        <input
          type="number"
          value={jumlahBahan}
          onChange={(e) => setJumlahBahan(e.target.value)}
          className="form-control"
        />
        <span class="input-group-text">Bahan</span>
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
          {[...Array(parseInt(jumlahBahan ? jumlahBahan : 1))].map((x, i) => (

            <tr>
              <td>
                <select className="form-select">
                  <option>Pilih Bahan</option>
                  {dataBahan.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.Nama}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <div className="input-group">
                  <input type="number" name="" id="" className="form-control" />
                </div>
              </td>
              <td>
                <div className="input-group">
                  <input type="number" name="" id="" className="form-control" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
