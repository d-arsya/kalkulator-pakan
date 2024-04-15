import { useState } from "react";
import PilihanBahan from "./PilihanBahan";
import KomposisiBahan from "./KomposisiBahan"
export default function Bahan({ dataBahan }) {
  const [jumlahBahan, setJumlahBahan] = useState(3);
  const [bahanUse,setBahanUse] = useState([])
  const [berat,setBerat] = useState(1)
  function onBahan(e,i){
    let skg = bahanUse
    let namaForm = e.target.name
    if(namaForm=="nama"){
      skg[i]={...skg[i],
        nama:e.target.value
      }
    }else if(namaForm=="prosentase"){
      skg[i]={...skg[i],
        prosentase:e.target.value
      }
    }else{
      skg[i]={...skg[i],
        harga:e.target.value
      }
    }
    let now = skg.slice(0,skg.length)
    setBahanUse(now)
  }
  function onBerat(e){
    setBerat(e)
    console.log(berat)
    let skg = bahanUse
    let now = skg.slice(0,skg.length)
    setBahanUse(now)
    
  }
     
  return (
    <div>
      <PilihanBahan jumlahBahan={jumlahBahan} setBahanUse={setBahanUse} bahanUse={bahanUse} setJumlahBahan={setJumlahBahan} onBahan={onBahan} dataBahan={dataBahan}></PilihanBahan>
      <KomposisiBahan berat={berat} onBerat={onBerat} bahanUse={bahanUse}></KomposisiBahan>
    </div>
  );
}
