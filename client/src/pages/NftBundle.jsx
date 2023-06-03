import React from 'react'
import Nft from './Nft'
import profilepic from "../images/profile.jpg"
import nft from "../images/nft.jpg"

const NftBundle = () => {
  return (
    <>
    <div className="horizontal" style={{display:"flex"}}>
    <Nft link="https://openseauserdata.com/files/e2ee13d4fbbf988317cd46f7c0b29010.gif?auto=format&dpr=1&w=512"/>
    <Nft link="https://i.seadn.io/gcs/files/fd9bb17ff06748fae24770fc0b12f179.png?auto=format&dpr=1&w=512"/>
    <Nft link="https://i.seadn.io/gcs/files/7a3c5d21ac64353fd52d148c4fc5d517.jpg?auto=format&dpr=1&w=512"/>
    <Nft link="https://i.seadn.io/gae/YKhtPrANgaObbW8Ph4DXQS_cXH5c5wG1GX3wAIn6m4pM6BeCuoDuDkwXDqOGJuUihoNfr0wxhSZmNJDOhb8NR6dpdvJXRda-xsTzOQ?auto=format&dpr=1&w=512"/>
    </div>
    </>
  )
}

export default NftBundle