import { useState } from "react";
import PilihanBahan from "./PilihanBahan";
import KomposisiBahan from "./KomposisiBahan"
export default function Bahan({ dataBahan }) {
  const [bahanUse,setBahanUse] = useState([
    {
      id:1,
      prosentase:20,
      harga:2000
    }
  ])
    
  return (
    <div>
      <PilihanBahan dataBahan={dataBahan}></PilihanBahan>
      <KomposisiBahan bahanUse={bahanUse}></KomposisiBahan>
    </div>
  );
}
