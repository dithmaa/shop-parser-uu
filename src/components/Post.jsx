import Rating from "../utils/Rating";
import css from './Post.module.css';

const Post = ({image,title,description,price, rating}) => {
    return (
        <div className={css.post + ' flex aic'}>
            <div className={css.postImageWrapper}>
                <div className={css.postImage} style={{"backgroundImage": `url(${image})`}}></div>
            </div>
            <div className={css.postInfo + ' flex fxdc aic'}>
                <h3 className={css.postTitle}>{title}</h3>  
                {/* <p>{description}</p>   */}
                {
                    
                    <div className={css.postRating} style={rating ? {"opacity": "1"} : 
                    {"opacity": "0"}}>
                        <Rating ratingAmount={rating}/>
                    </div>
                }
                

                <div className={css.postPriceWrapper}>
                    <span className={css.postPrice}>{price} ₽</span>
                </div>
            </div>
                     
        </div>
    )
}
export default Post;