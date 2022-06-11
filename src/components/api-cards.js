import { useState } from "react"

export default function ApiCards (props) {
    const [isFavorite, setIsFavorite] = useState(false)
    function togglefavorite (){
        setIsFavorite(!isFavorite)
    }
    return (
            <div className="portrait">
                <div className="card--price">${props.price}</div>
                <img onClick={togglefavorite}className="favorite" src={require(`../icons/${isFavorite ? "filled" : "unfilled"}-heart-icon.png`)} alt="favorite" />
                <img src={props.src} className="apicard" alt="cards" />
            </div>
        )
}