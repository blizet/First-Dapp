import {createGlobalState} from 'react-hooks-global-state'


const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
    connectedAccount: '',
    nft:null,
    nfts:[],
    transcations:[],
    contract: null
})

const truncate=(text,startChars,endChars,maxLength)=>{
    if(text.length > maxLength){
        var start=text.substring(0,startChars)
        var end= text.substring(text.length-endChars,text.length)
        while(start.length + end.length < maxLength){
            start= start + "."
        }
        return start + end
    }
    return text
}

export {
    useGlobalState,
    getGlobalState,
    setGlobalState
}