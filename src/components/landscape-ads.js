
export default function LandscapeAds({src}) {


    return (
        <div className="landscape">
            <img src={require(`../images/${src}`)} className="landscape" alt="landscape ads"/>
        </div>
    )
}