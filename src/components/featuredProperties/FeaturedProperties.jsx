import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://static.wixstatic.com/media/f58739_ad82fde7345149a7ad41cb99e368b5e1~mv2.jpg/v1/fill/w_708,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_ad82fde7345149a7ad41cb99e368b5e1~mv2.jpgs" alt="" className="fpImg" />
        <span className="fpName">Aarish</span>
        <span className="fpCity">Rishikesh</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://static.wixstatic.com/media/f58739_4b1142a91cf14246a2802aab5ecdc009~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_4b1142a91cf14246a2802aab5ecdc009~mv2.jpg" alt="" className="fpImg" />
        <span className="fpName">Jungle House</span>
        <span className="fpCity">Rajasthan</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.7</button>
            <span>Excellent</span>
        </div>

        </div>
        <div className="fpItem">
        <img src="https://static.wixstatic.com/media/f58739_21241c79a5244c59a6d3e074ff8b9a48~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_21241c79a5244c59a6d3e074ff8b9a48~mv2.jpg" alt="" className="fpImg" />
        <span className="fpName">Aashraya</span>
        <span className="fpCity">Mukteshwar</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>

        </div>

        
        <div className="fpItem">
        <img src="https://static.wixstatic.com/media/f58739_952d8fb3df6640259f5dadbe2db9781d~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_952d8fb3df6640259f5dadbe2db9781d~mv2.jpg" alt="" className="fpImg" />
        <span className="fpName">On The Slope</span>
        <span className="fpCity">Gulmarg</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.4</button>
            <span>Very Good</span>
        </div>

        </div>
    </div>
  )
}

export default FeaturedProperties