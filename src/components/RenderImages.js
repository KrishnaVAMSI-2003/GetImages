

export default function RenderImages(props) {
    return(
        <div>
            {props.images.map((img)=>{
                return <img src={img.urls.regular}/>
            })}
        </div>
    )
}