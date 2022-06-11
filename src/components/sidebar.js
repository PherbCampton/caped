import {Link} from "react-router-dom"

export default function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebar-top-section">
                <h2>Explore</h2>
                <Link to="/new"><h3><img className="sidebar-icons" src={require("../icons/thunderbolt-icon.png")} alt="New" />New in</h3></Link>
                <Link to="/clothing"><h3><img className="sidebar-icons" src={require("../icons/cloth-icon.png")} alt="Clothing" />Clothing</h3></Link>
                <Link to="/shoes"><h3><img className="sidebar-icons" src={require("../icons/shoe-icon.png")} alt="Shoes" />  Shoes</h3></Link>
                <Link to="/accessories"><h3><img className="sidebar-icons" src={require("../icons/bag-icon.png")} alt="Accessories" /> Accessories</h3></Link>
                <Link to="/activewears"><h3><img className="sidebar-icons" src={require("../icons/flip-icon.png")} alt="Activewears" /> Activewears</h3></Link>
                <Link to="/gift"><h3><img className="sidebar-icons" src={require("../icons/gift-icon.png")} alt="Gift" /> Gifts & Living</h3></Link>
                <Link to="/inspiration"><h3><img className="sidebar-icons" src={require("../icons/gem-icon.png")} alt="Inspiration" />Inspiration</h3></Link>
            </div>
            <div className="sidebar-bottom-section">
                <h3><img src={require("../icons/help-icon.png")} alt="Chat" /></h3>
                <h3>Help Center</h3>
            </div>
        </div>
    )
}