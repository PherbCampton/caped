import useState from "react"

export default function PortraitAds({src, price}) {


    return (
        <div className="portrait">
            <div className="card--price">{price}</div>
            <img className="favorite" src={require(`../icons/filled-heart-icon.png`)} alt="favorite" />
            <img src={require(`../images/${src}`)} className="portrait" alt="portrait ads"/>
        </div>
    )
}