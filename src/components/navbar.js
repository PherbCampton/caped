import React, {useContext} from "react"
import useFecth from "../usefetch"
import {Link} from "react-router-dom"
import { InputContext } from "../Helper/context"


export default function Navbar() {

    const {submit} = useFecth()
    const {img, setImg} = useContext(InputContext)
    
    return (
            <nav>
               <Link to="/"><img src={require("../icons/logo.png")} alt="Logo" /></Link>
                <div className="nav-menu">
                    <div className="nav-search">
                        <Link to="/search"><input type="image" id="image"
                        src={require("../icons/search-icon.png")}
                        alt="Search"
                        onClick={submit}/>
                        </Link>
                        <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search store"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    <div className="nav-links">
                        <Link to="/"><button className="nav-buttons">Products</button></Link>
                        <Link to="/story"><button className="nav-buttons">Story</button></Link>
                        <Link to="/manufacturing"><button className="nav-buttons">Manufacturing</button></Link>
                        <Link to="/packaging"><button className="nav-buttons">Packaging</button></Link>
                    </div>
                    <div className="nav-icons">
                        <img src={require("../icons/basket-icon.png")} alt="Cart" />
                        <img src={require("../icons/person-icon.png")} alt="Profile" />
                    </div>
                </div>
            </nav>
    )
}

