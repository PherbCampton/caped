import useFecth from "../usefetch"
import { useContext } from "react"
import { InputContext } from "../Helper/context"


export default function Search () {

    const {img, setImg} = useContext(InputContext)

    const {collections} = useFecth(
        `https://api.unsplash.com/search/photos?page=1&per_page=28&query=${img}&client_id=nA3LZo6pyRihCEWnmhgjqDy2lpFrvUcHVvFe8CUPXgg`
        )
    
        return (
                <div className="no-sidebar">
                    {collections}
                </div>
        )
    }

