import React, { useState } from 'react';
import { Wallet, HDNodeWallet } from "ethers";
import { generateMnemonic, mnemonicToSeed, validateMnemonic } from 'bip39';
import './index.css'
import { Buffer } from 'buffer';

// Polyfill Buffer
window.Buffer = Buffer;
function App() {
  const [currentIndex,setCurrentIndex]=useState(0)
  const [address,setAddress]=useState([])

  const [mnemoic,setMnemonic]=useState(null)
 function generateMnemonicFun(){

  const m=generateMnemonic( );
  
   
  setMnemonic(m);
  console.log(m)
 }

return <>

<div className='container'>
 <div className='row'>
 <div className='col-6 generation'>    <h1>Mnemonics seed</h1>
    <button onClick={generateMnemonicFun}>generate Mnemonic</button>
    <br />
  <div className='display'>
  {mnemoic && mnemoic.split(" ").map((m,currentIndex)=>{
    return <section className='show-m' key={currentIndex}>{m}</section>
   })}
  </div>
    
</div>
 <div className='col-6'>
  <br />

       <button 
       onClick={async()=>{

        const seed =await mnemonicToSeed(mnemoic);
        console.log(seed);
        const derivetionPath=`m/44'/60'/${currentIndex}'`;
        console.log(derivetionPath);
        const hdnode=HDNodeWallet.fromSeed(seed);
        console.group(hdnode);
        const child=hdnode.derivePath(derivetionPath)
        console.log(child)
        const privateKey = child.privateKey;
        const publickey= child.publicKey;


        console.log(privateKey);
        const wallet = new Wallet(privateKey);
        console.log(wallet);

        const keypair={
          address:wallet.address,
          privateKey:privateKey,
          publickey:publickey
        }
        setCurrentIndex(currentIndex+1);
        setAddress([...address,keypair])
       }}
       > Add eth wallet</button>
        <br />
        {address.map((a,currentIndex)=>{
          return <div style={{borderRadius:'20px',
            backgroundColor:'burlywood',
            border: '1px solid black',
            padding:'20px',
            margin:'20px'
          }} className='box-card'>
            <h5>{currentIndex}</h5>
             <p>{a.address}</p>
             <p>{a.publicKey}</p>
             <p>{a.privateKey}</p>
          </div>
        })}







 </div>
 </div>

</div>

</>
}
 

export default App;
