import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://static.wixstatic.com/media/f58739_952d8fb3df6640259f5dadbe2db9781d~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_952d8fb3df6640259f5dadbe2db9781d~mv2.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/f58739_21241c79a5244c59a6d3e074ff8b9a48~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_21241c79a5244c59a6d3e074ff8b9a48~mv2.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/f58739_9e4ecabdeddc4a58afdcc5f73da2eb78~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_9e4ecabdeddc4a58afdcc5f73da2eb78~mv2_d_6016_4016_s_4_2.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/f58739_0d40de3b36324dd49c7df99f5ea9f45c~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_0d40de3b36324dd49c7df99f5ea9f45c~mv2_d_6016_4016_s_4_2.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/f58739_eedbf6c45a5e433eb37caab6a8939200~mv2.jpg/v1/fill/w_710,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_eedbf6c45a5e433eb37caab6a8939200~mv2.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/f58739_9266fc09c91e4ea8829688b856311e86~mv2.jpg/v1/fill/w_708,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f58739_9266fc09c91e4ea8829688b856311e86~mv2.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Aashraya Cottage</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mukteshwar, Uttarakhand</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              As you walk towards the house through a blissful setting consisting of peach, plum and apricot orchards, it almost feels as if you are leaving behind what's real and stepping into a Claude Monet painting: Colourful Scenery, clear blue skies, cotton clouds and virgin mountains for as far as the eye can see. Walk a little further and the striking wooden cottage rises against a majestic backdrop of snow-covered peaks of the Himalayas. 
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the real heart of Mukteshwar, this property has an
                excellent location score of 9.1!
              </span>
              <h2>
                <b>$425</b> (5 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;