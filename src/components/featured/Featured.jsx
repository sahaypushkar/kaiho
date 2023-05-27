import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cdn.ceoworld.biz/wp-content/uploads/2020/11/Kyoto-Japan-3.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kyoto</h1>
                <h2>230 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.moneycontrol.com/static-mcnews/2021/08/Kashi-Vishwanath.jpg?impolicy=website&width=1600&height=900" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Varanasi</h1>
                <h2>302 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://static.toiimg.com/photo/54443614/.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Cambodia</h1>
                <h2>120 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured