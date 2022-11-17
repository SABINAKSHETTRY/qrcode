import QRCode from 'qrcode';
import './App.css';
import {useState} from 'react'

function App() {
  const[url,seturl]=useState('')
  const [qrc,setqrc]=useState('')

  const GeneratorCode =()=>{
    QRCode.toDataURL(url,(err,url)=>{
      if(err) return console.error(err)
      console.log(url)
      setqrc(url)
    })

    
  }
   // to Qrcode.todataurl le chai eauta paramater 
      // linxa jastai ki kunai url or kunai text ani teslai chai
      //  qrcode ma convert garera tyo qrcode image ko url
      //   return garxa ani tya dai le tyo return gareko qrcode ko
      //    url lai tya state ma rakhnu bhayo ani ya tara image ma
      //     display garnu bhayo



  return (
    <div className="App">
      <h1>  QR Code Generator</h1>
      <input type="text" placeholder='https://google.com' value={url} 
       onChange={(e)=>seturl(e.target.value)}></input>
      <button onClick={GeneratorCode}>Generate QR code</button>
      {qrc && <> 
      {/* qrc ma kei value xa bhane paxadi ko display garxa  natra empty xs bhane jsx kei dekhinna */}
        <img src={qrc}  />
        <a href={qrc} download="qrc.png">Download</a>
     </> }
     

      
    </div>
  );
}

export default App;
