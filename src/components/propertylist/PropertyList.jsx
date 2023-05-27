import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>278 hotels</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://apollostore.blob.core.windows.net/legacyflats/uploads/assets/legacyflats.3fae1c2e-35b7-474e-9c13-38ffeaf92b4d.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>318 Apartments</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9b/44/ca/nirali-resorts.jpg?w=700&h=-1&s=1" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>138 Resorts</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>78 Villas</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://www.nhhomemagazine.com/content/uploads/2020/02/JWH_5617.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>118 Cabins</h2>
        </div>
        </div>
    </div>
  )
}

export default PropertyList