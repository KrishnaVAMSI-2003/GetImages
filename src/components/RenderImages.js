import '../style.css'

export default function RenderImages(props) {
    return(
        <div className="container">

            {   props.images ?

                    (props.images.length>0 ? 
                    props.images.map((img)=>{
                        return <img src={img.urls.regular} alt=""/>
                    }) : <p>No images found</p>)
                    :
                    <></>
            }
        </div>
    )
}