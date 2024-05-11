import { useState } from "react";
import PilihanBahan from "./PilihanBahan";
import KomposisiBahan from "./KomposisiBahan";
import ModalBahan from "./ModalBahan";
export default function Bahan({ dataBahan,ternak }) {
  const [jumlahBahan, setJumlahBahan] = useState(3);
  const [bahanUse,setBahanUse] = useState([])
  const [bahanModal,setBahanModal] = useState([])
  function onModal(e){
    setBahanModal(e)
  }
  function getBahan(id){
    return dataBahan.filter(e=>{return e.id==id})[0]
  }
  function onBahan(e,i){
    let skg = bahanUse
    let namaForm = e.target.name
    if(namaForm=="nama"){
      skg[i]={...skg[i],
        ...getBahan(e.target.value)
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
  return (
    <div>
      <PilihanBahan onModal = {onModal} jumlahBahan={jumlahBahan} setBahanUse={setBahanUse} bahanUse={bahanUse} setJumlahBahan={setJumlahBahan} onBahan={onBahan} dataBahan={dataBahan}></PilihanBahan>
      <KomposisiBahan ternak={ternak} bahanUse={bahanUse}></KomposisiBahan>
      <ModalBahan data={bahanModal}></ModalBahan>
    </div>
  );
}
