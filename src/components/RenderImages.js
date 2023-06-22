import '../style.css'

export default function RenderImages(props) {
    return(
        <div className="container">
            {props.images.map((img)=>{
                return <img src={img.urls.regular} alt=""/>
            })}
        </div>
    )
}