import { useState } from "react";
export default function KomposisiBahan() {
  const [komposisi, setKomposisi] = useState(0);
  return (
    <div>
      <h5 className="my-3 text-center">Komposisi Bahan</h5>
      <div className="input-group">
        <input
          type="number"
          value={komposisi}
          onChange={(e) => setKomposisi(e.target.value)}
          name=""
          id=""
          className="form-control"
        />
        <span class="input-group-text">KG</span>
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
            <tr>
                <td>rumput</td>
                <td className="text-end">20kg</td>
                <td className="text-end">3000</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
