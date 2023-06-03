import React, { useState } from 'react'
import "../css/CreateNft.css"
import close from "../images/close.png"
import {Buffer} from "buffer"
import "../css/UserProf.css"
import kick from "../images/kick.png"
import {create} from "ipfs-http-client"
import { setGlobalState } from '../store'
import { mintNFT } from '../Blockchain.services'

const privateKey="da932eba7969a2396005";
const secretKey="b4f8491111b8119a3b1b54b8903efe3958b3de63690de2525dd5ff2f5d8eb2cf"

const auth =
 'Basic ' +
 Buffer.from(
  privateKey + ':' + secretKey,
 ).toString('base64')

const client = create({
 host: 'infura-ipfs.io',
 port: 5001,
 protocol: 'https',
 headers: {
   authorization: auth,
 },
})

const CreateNft = (props) => {

  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState('');
  const [fileUrl,setFileUrl]=useState('');
  const [imgBase64, setImgBase64]=useState(null);

  const uploadToIPFS = async (file) => {
    const formData = new FormData()
    formData.append("file", file);
    console.info("uploadToIPFS:file: ",file);
    console.info("uploadToIPFS:40: ",formData.get("file"));
    const resFile = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        'pinata_api_key': privateKey,
        'pinata_secret_api_key': secretKey,
      },
      body: formData
    });
    const resultJson = await resFile.json();
    return resultJson.IpfsHash;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description || !price) return
    try {
      // const created = await client.add(fileUrl);
      // const metadataURI = `https://ipfs.infura.io/ipfs/${created.path}`
      // const IpfsHash = await uploadToIPFS(fileUrl);
      // const metadataURI = `https://ipfs.io/ipfs/${IpfsHash}`
      // const nft = { title, description, price, metadataURI }
      const nft = {
        "title": "21",
        "description": "2",
        "price": "1",
        "metadataURI": "https://ipfs.io/ipfs/QmVNNJZtT4bY6AHqn9Y3HF8jGN8fP9UuW13uXxDSEFX9is"
    };
      console.log(nft);
      await mintNFT(nft)

      props.onClose()
      alert('Nft Uploaded,Approved transaction')
    } catch (error) {
      console.info(error);
      console.log("error uploading file:", error)
      alert("Minting failed")
    }
    props.onClose()

  }

  const changeImage=async(e)=>{
    const reader= new FileReader()
    if(e.target.files[0]) reader.readAsDataURL(e.target.files[0])

    reader.onload=(readerEvent)=>{
      const file=readerEvent.target.result
      setImgBase64(file)
      setFileUrl(e.target.files[0])
    }
  }

  const resetForm =()=>{
    setDescription('')
    setFileUrl('')
    setImgBase64(null)
    setPrice('')
    setTitle('')
  }


  return (
    <div className="fixed_top">
      <button className='close' onClick={props.onClose}><img id='close' src={close} alt="" /></button>
        <h1>Create Nft</h1>
        <form onSubmit={handleSubmit} className='createNft'>
          
          <img src={imgBase64 ||  kick} alt="" className="hero" />
          <h4>Add Nft</h4>
          <label ><span>
            Choose Profile Photo</span><input onChange={changeImage}  className='try' type="file" accept='image/png,image/gif,image/jpeg,image/webp,image/jpg' required /></label>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" className='title' name='title' placeholder='Title'/>
            <input onChange={(e)=>setPrice(e.target.value)} name='price' type="number" placeholder='Price(Eth)' className="title" />
            <textarea onChange={(e)=>setDescription(e.target.value)} name='description' type="text" placeholder='Description' className="title" />
            <button type='submit'  className='invest chan' >Mint Now</button>
        </form>
    </div>
  )
}

export default CreateNft