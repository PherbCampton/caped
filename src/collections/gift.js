import useFecth from "../usefetch"
import Sidebar from "../components/sidebar"

export default function Gift () {
  
  const {collections} = useFecth(
    `https://api.unsplash.com/search/photos?page=1&per_page=20&color=black&query=gift&client_id=nA3LZo6pyRihCEWnmhgjqDy2lpFrvUcHVvFe8CUPXgg`
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
 

