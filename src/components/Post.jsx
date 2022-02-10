const Post = ({image,title,description,price}) => {
    return (
        <div className="post flex aic">
            <div className="post__image" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center" , backgroundSize: "contain","min-width": "200px", "height": "200px"}}></div>
            <div className="post__info">
                <h2 className="post__title">{title}</h2>  
                <p>{description}</p>  
                <span>{price} ₽</span>
            </div>
                     
        </div>
    )
}
export default Post;