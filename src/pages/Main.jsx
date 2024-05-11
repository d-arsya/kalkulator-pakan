import { useState,useEffect } from 'react'
import Ternak from '../components/Ternak'
import Bahan from "../components/Bahan"
function Main(){
    const [ternak,setTernak] = useState({
        id: "",
      nama: "",
      BK: 0,
      PK: 0,
      LK: 0,
      Abu: 0,
      Ca: 0,
      P: 0,
      NDF: 0,
      TDN: 0,
      })
      const [dataTernak,setDataTernak] = useState(false)
      const [dataBahan,setDataBahan] = useState(false)
      useEffect(()=>{  
        localStorage.clear()
        let tmp = localStorage.getItem("dataTernak")
        if(tmp){
          setDataTernak(JSON.parse(localStorage.getItem("dataTernak")))
          setDataBahan(JSON.parse(localStorage.getItem("dataBahan")))
        }else{
          fetch("https://raw.githubusercontent.com/d-arsya/alibaba-server/main/ternak.json")
          .then(res=>res.json())
          .then(res=>{
            setDataTernak(res.data)
            localStorage.setItem("dataTernak",JSON.stringify(res.data))
        })
          fetch("https://raw.githubusercontent.com/d-arsya/alibaba-server/main/bahan.json")
          .then(res=>res.json())
          .then(res=>{
            setDataBahan(res.data)
            localStorage.setItem("dataBahan",JSON.stringify(res.data))
          })

        }
      },[])
    
      if(dataBahan&&dataTernak){
        return (
          <div className="main-cont container">
            
          <Ternak ternak={ternak} setTernak={setTernak} dataTernak={dataTernak}></Ternak>
          <Bahan ternak={ternak} dataBahan={dataBahan}></Bahan>
        </div>
        )
      }else{
        return(
          <div className='container d-flex flex-column flex-wrap justify-content-center align-items-center' style={{height:"100vh"}}>
            <div className='progress'></div>
            <h1>Kalkulator Pakan</h1>
          </div>
        )
      }
}
export default Main