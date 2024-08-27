import { useGif } from '../hooks/useGif'

//functional component
export const GifApp = () => {

    const {handleGetGif, gif} = useGif()

    return(
        //fragment
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <button onClick={handleGetGif} className="btn btn-outline-success">Generar GIF</button>
            </div>
            <div className="d-flex flex-row justify-content-center alig-items-center">
                <img className="w-50 m-5" src={gif} alt="image"/>
            </div>
        </>
    )
}