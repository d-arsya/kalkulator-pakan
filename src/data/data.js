let dataBahan, dataTernak, initialState;
initialState = {
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
};
await fetch("https://script.google.com/macros/s/AKfycbwgcwSOROmoKE26pyN3YkBAS2_MpaM2zC_ySZc8z0lo9_0HZXx_bJMZTFULsKVAydNiCg/exec?nama=Bahan")
.then(res=>res.json())
.then(res=>dataBahan=res.data)

await fetch("https://script.google.com/macros/s/AKfycbwgcwSOROmoKE26pyN3YkBAS2_MpaM2zC_ySZc8z0lo9_0HZXx_bJMZTFULsKVAydNiCg/exec?nama=Ternak")
.then(res=>res.json())
.then(res=>dataTernak=res.data)


export default { dataBahan, dataTernak, initialState };
