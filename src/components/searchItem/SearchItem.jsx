import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        src="https://static.wixstatic.com/media/f58739_952d8fb3df6640259f5dadbe2db9781d~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_952d8fb3df6640259f5dadbe2db9781d~mv2.jpg"
        alt="" className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Aashraya Resort</h1>
            <span className="siDistance">400m from City Centre</span>
            <si className="siTaxiOp">Free airport Taxi</si>
            <span className="siSubtitle">
                An Exotic Resort with AC
            </span>
            <span className="siFeatures">
                Entire Cottage · 2 Bathroom · 25 sq.m full bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel anytime before the D-day
            </span>

        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>9.1</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$85</span>
                <span className="siTaxOp">Includes Taxes & Charges</span>
                <br />
                <button className="siCheckButton">See availability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem