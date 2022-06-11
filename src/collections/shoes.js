import useFecth from "../usefetch"
import Sidebar from "../components/sidebar"

export default function Shoes () {
    const {collections} = useFecth(
        `https://api.unsplash.com/search/photos?page=10&per_page=20&color=black&orientation=portrait&query=sneakers&client_id=nA3LZo6pyRihCEWnmhgjqDy2lpFrvUcHVvFe8CUPXgg`
        )
    
        return (
            <div className="flexbox">
                <Sidebar/>
                <div className="flex-wrap">
                    {collections}          
                </div>
            </div>
        )
    }

