import { createContext, useState } from "react"
import SearchBar from "./components/searchbar"
import RenderImages from "./components/RenderImages"

const Variables = createContext()

export default function App() {
  const [keyword, setKeyword] = useState()
  const [images, setImages] = useState([])
  const [render, setRender] = useState(false)
  return(
    <div>
      <Variables.Provider value={{keyword,setKeyword,setImages,setRender}}>
        <SearchBar/>
      </Variables.Provider>
      {render ? <RenderImages images={images}/> : <></>}
    </div>
  )
}

export {Variables}