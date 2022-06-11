import { useState, useEffect } from "react"
import ApiCards from "./components/api-cards";

export default function useFecth (url) {

    const [img, setImg] = useState("")
    const [res, setRes] = useState([])

    const fetchRequest = async () => {
        const data = await fetch(url);
        const dataJ = await data.json();
        const result = dataJ.results;
        setRes(result);
      };
      useEffect(() => {
        fetchRequest();
      }, [url]);

      const submit = () => {
        fetchRequest();
        setImg("");
      };

      const collections = res.map(item => {
        return (
            <ApiCards
                key={item.id}
                src={item.urls.small}
                price={item.likes}
                isFavorite={item.liked_by_user}
            />
        )
      })  

      return {res, setRes, submit, fetchRequest, collections,}
}