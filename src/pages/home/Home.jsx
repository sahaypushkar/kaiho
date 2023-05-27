import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertylist/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;














































// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "../home/Home";
// import Hotel from "../hotel/Hotel";
// import List from "../list/List";
// import "./home.css";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import Featured from "../../components/featured/Featured"
// import MailList from "../../components/mailList/MailList"
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
// import PropertyList from "../../components/propertylist/PropertyList"


// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <div className="homeContainer">
//         <Featured />
//         <h1 className="homeTitle"> Browse by property</h1>
//         <PropertyList />
//         <h1 className="homeTitle">Homes Guests Love</h1>
//         <FeaturedProperties />
//         <MailList / >
//       </div>
//     </div>

//   );
// };



// export default App;
















// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/hotels" element={<List/>}/>
//         <Route path="/hotels/:id" element={<Hotel />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }