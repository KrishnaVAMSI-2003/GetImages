import { Variables } from "../App"
import { useContext } from "react"
import axios from 'axios'


export default function SearchBar() {
    const {keyword, setKeyword,setImages,setRender} = useContext(Variables)
    
    const handleChange = (event) => {
        setKeyword(event.target.value)
        setRender(false)
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
        setRender(true)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}/>
            </form>
        </div>
    )
}