import { Variables } from "../App"
import { useContext } from "react"
import axios from 'axios'
import '../style.css'

export default function SearchBar() {
    const {keyword, setKeyword,setImages} = useContext(Variables)
    
    const handleChange = (event) => {
        setKeyword(event.target.value)
    }
    const handleSubmit = async(event)=>{
        event.preventDefault()
        const data = await axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID gL2jYebJQ7_e8_WlQqKPWjuNDXQLGlCv9C875LaADdQ'
            },
            params: {
                query : keyword
            }
        })
        setImages(data.data.results)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder='enter a keyword' className="search-bar"/>
            </form>
        </div>
    )
}