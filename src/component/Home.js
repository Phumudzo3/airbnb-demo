// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Cards from "./Cards";
import "./Home.css";
// import { listListing } from "../actions/listingActions";

const Home = () => {
  // const dispatch = useDispatch();
  // const listingList = useSelector((state) => state.listingList);
  // const { loading, error, listings } = listingList;

  // useEffect(() => {
  //   dispatch(listListing());
  // }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      
      <div className="home_section">
        <Cards
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/73/89/ae/peermont-metcourt-at.jpg?w=700&h=-1&s=1"
          title="Khoroni Hotels, South Africa"
          decription="Khoroni Hotel, Casino & Convention Resort is a premier destination located in the vibrant town of Thohoyandou, South Africa. Renowned for its blend of luxury, entertainment, and hospitality, Khoroni offers a comprehensive range of facilities and services designed to cater to both leisure and business travelers."
          price="R8000/5days"
        />
        <Cards
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/64/28/56/2ten-hotel.jpg?w=700&h=-1&s=1"
          title="2TEN hotel, South Africa"
          decription="2Ten Hotel is a luxurious and modern accommodation located in the heart of Thohoyandou, South Africa. Known for its stylish design and excellent service, the hotel offers a range of amenities to ensure a comfortable and enjoyable stay for guests. These amenities include spacious and elegantly decorated rooms, each equipped with modern conveniences such as air conditioning, flat-screen TVs, and complimentary Wi-Fi."
          price="R2300/1night"
        />
        <Cards
          src="https://www.premierhotels.co.za/wp-content/uploads/2024/02/slide-Thohoyandou-300x169.jpg"
          title="Premier Hotel , South Africa"
          decription="Premier Hotel offers an exquisite accommodation experience, blending modern luxury with exceptional service. Nestled in a prime location in South Africa, Premier Hotel is known for its elegant design, comfortable rooms, and a range of top-notch amenities designed to cater to the needs of both leisure and business travelers."
          price="R2000/1day"
        />
        
      </div>

      <div className="home_section">
        <Cards
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoXz6S4RIIwgTdEgNlULhOPJWdv73Y7eq_Q&s"
          title="
Thavhani Guest House, South Africa"
          decription="Thavhani Guest House is a charming and welcoming accommodation situated in the heart of Thohoyandou, South Africa. Known for its warm hospitality and comfortable ambiance, Thavhani Guest House provides a home-away-from-home experience for both leisure and business travelers."
          price="R4000/2nights"
        />
        <Cards
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/474760236.jpg?k=b67e94b41452875feb3c75aa2ba08c821839a4c039998f254131ca676b8a9e5e&o=&hp=1"
          title="Muofhe Graceland Lodge"
          decription="Muofhe Graceland Lodge is a serene and stylish retreat located in the scenic surroundings of Thohoyandou, South Africa. Known for its tranquil atmosphere and exceptional hospitality, the lodge offers a perfect blend of comfort and luxury, making it an ideal choice for both leisure and business travelers."
          price="R4500/1night"
        />
        <Cards
          src="https://mgbhotel.co.za/wp-content/uploads/2020/12/mgbat2ten-081.jpg"
          title="MGB hotel, South Africa"
          decription="Muofhe Graceland Lodge is a serene and stylish retreat located in the scenic surroundings of Thohoyandou, South Africa. Known for its tranquil atmosphere and exceptional hospitality, the lodge offers a perfect blend of comfort and luxury, making it an ideal choice for both leisure and business travelers"
          price="R7500/4days"
        />
       
      </div>
    </div>
  );
};

export default Home;
