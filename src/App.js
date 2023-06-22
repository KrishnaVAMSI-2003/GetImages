import { createContext, useState } from "react"
import SearchBar from "./components/searchbar"
import RenderImages from "./components/RenderImages"
import './style.css'

const Variables = createContext()

export default function App() {
  const [keyword, setKeyword] = useState()
  const [images, setImages] = useState([])
  return(
    <div className="box">
      <Variables.Provider value={{keyword,setKeyword,setImages}}>
        <SearchBar/>
      </Variables.Provider>
      <RenderImages images={images}/>
    </div>
  )
}

export {Variables}