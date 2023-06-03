import Web3 from "web3"
import { getGlobalState,setGlobalState } from "./store"
import abi from "./abis/TimelessNFT.json"


const  {ethereum} = window
window.web3= new Web3(ethereum)
window.web3=new  Web3(window.web3.currentProvider)

const getEthereumContract = async()=>{
    const connectedAccount= getGlobalState("connectedAccount")
    console.info("getEthereumContract: ", Boolean(connectedAccount));
    
    if(connectedAccount){
        const web3=window.web3
        const networkId= await web3.eth.net.getId()
        const networkData = abi.networks[networkId]

        if(networkData){
            const contract =new web3.eth.Contract(abi.abi, networkData.address)
            return contract
        }else{
            return null
        }
    }else{
       return  getGlobalState('contract')
    }
}

const connectWallet=async()=>{
    try {
        if(!ethereum) return alert("Please install Metamask")
        const accounts= await ethereum.request({method: "eth_requestAccounts"})

        setGlobalState("connectedAccount",accounts[0].toLowerCase())
    } catch (error) {
        alert(error)
    }
}

const isWalletConnected=async ()=>{
    try {
        if(!ethereum) return alert("Please install Metamask")
        const accounts= await ethereum.request({method: "eth_requestAccounts"})

        window.Ethereum.on("chainChanged",async(chainId)=>{
            window.location.reload()
        })
    
        window.Ethereum.on("accountsChanged",async()=>{
            setGlobalState("connectedAccount",accounts[0].toLowerCase())
            await isWalletConnected()
        })

        if(accounts.length){
            setGlobalState("connectedAccount",accounts[0].toLowerCase())
        }else{
            alert("Please connect your wallet")
            console.log("No accounts found")
        }

    } catch (error) {
        
    }
}

const mintNFT=async({title,description,metadataURI,price})=>{
    try {
        price=window.web3.utils.toWei(price.toString(),'ether')
        const contract =await getEthereumContract()
        const account= getGlobalState('connectedAccount')
        const mintPrice=window.web3.utils.toWei('0.01','ether')
        await contract.methods
        .payToMint(title,description,metadataURI,price)
        .send({from:account,value:mintPrice})

        return true
    } catch (error) {
        console.info(error);
        alert(error)
    }
}


 

export {connectWallet, isWalletConnected,mintNFT}