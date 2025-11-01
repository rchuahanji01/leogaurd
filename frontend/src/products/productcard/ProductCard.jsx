


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Added Autoplay
// import FaceCreamImg from "../../assets/productCard/faceCream.png";
// import FaceScrubImg from "../../assets/productCard/faceScrub.jpg";
// import FaceSerumImg from "../../assets/productCard/faceSerum.webp";
// import FaceWashImg from "../../assets/productCard/facewash.webp";
// import SunProtectionImg from "../../assets/productCard/sunProtection.jpeg";
// import ShampooImg from "../../assets/productCard/shampoo.jpeg";
// import BodyLotionImg from "../../assets/productCard/lotion.jpeg";
// import "./ProductCard.css";

// const products = [
//   { img: FaceCreamImg, label: "Face Cream" },
//   { img: FaceScrubImg, label: "Face Scrub" },
//   { img: FaceSerumImg, label: "Face Serum" },
//   { img: FaceWashImg, label: "Face Wash" },
//   { img: SunProtectionImg, label: "Sun Protection" },
//   { img: ShampooImg, label: "Shampoo" },
//   { img: BodyLotionImg, label: "Body Lotion" },
// ];

// const ProductCarousel = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto py-10 ">
//       <h1 className="header"> OUR PRODUCTS</h1>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]} // ✅ Autoplay included
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 3000, // 3 seconds between slides
//           disableOnInteraction: false, // keep autoplay after user interacts
//         }}
//         loop={true} // ✅ Infinite loop
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 },
//         }}
//       >
//         {products.map((product, index) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                 padding: "16px",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//               }}
//               className="product-card"
//             >
//               <img
//                 src={product.img}
//                 alt={product.label}
//                 style={{
//                   height: "230px",
//                   width: "auto",
//                   objectFit: "contain",
//                   marginBottom: "12px",
//                 }}
//               />
//               <h3
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   color: "#333",
//                   textAlign: "center",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {product.label}
//               </h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx>{`
//         /* Hover effect */
//         .product-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
//         }

//         /* Navigation arrows color */
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #1bfe4d;
//         }

//         /* Pagination bullets */
//         .swiper-pagination-bullet {
//           background: #ccc;
//           opacity: 1;
//         }
//         .swiper-pagination-bullet-active {
//           background: #1bfe4d;
//         }

//         @media (max-width: 1024px) {
//           .product-card img {
//             height: 110px;
//           }
//         }

//         @media (max-width: 768px) {
//           .product-card img {
//             height: 100px;
//           }
//           .product-card h3 {
//             font-size: 0.95rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductCarousel;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import FaceCreamImg from "../../assets/productCard/faceCream.png";
import FaceScrubImg from "../../assets/productCard/faceScrub.jpg";
import FaceSerumImg from "../../assets/productCard/faceSerum.webp";
import FaceWashImg from "../../assets/productCard/facewash.webp";
import SunProtectionImg from "../../assets/productCard/sunProtection.jpeg";
import ShampooImg from "../../assets/productCard/shampoo.jpeg";
import BodyLotionImg from "../../assets/productCard/lotion.jpeg";
import "./ProductCard.css";

const products = [
  { img: FaceCreamImg, label: "Face Cream" },
  { img: FaceScrubImg, label: "Face Scrub" },
  { img: FaceSerumImg, label: "Face Serum" },
  { img: FaceWashImg, label: "Face Wash" },
  { img: SunProtectionImg, label: "Sun Protection" },
  { img: ShampooImg, label: "Shampoo" },
  { img: BodyLotionImg, label: "Body Lotion" },
];

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <h1 className="header">OUR PRODUCTS</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1} // Default for small screens
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          300: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1600: { slidesPerView: 5 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={product.img} alt={product.label} />
              <h3>{product.label}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;

