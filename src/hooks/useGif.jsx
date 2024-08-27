import {useState} from 'react'

export const useGif =() => {

    const[gif, setGif] = useState('')

    const reqGif = async() => {
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=ZHNtI1aU51ZNDlNgGmtpXsZfOlZ1jdWt').then(async(resp) =>{
            await resp.json().then(({data})=>{
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }

    const handleGetGif = () => {
        reqGif()
    }

    //retorno hook
    return{
        handleGetGif,
        gif
    }
}