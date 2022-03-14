import React, { useState } from "react";
import axios from "../axios/Axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Cast.css";
function Cast({ blockbusterCast, blockbusterCastExists }) {
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original/"
  );
  // const [displayCastMember, setDisplayCastMember] = useState(false);

  return (
    <div className="cast-wrapper">
      <h4 className="cast-row__title">Cast</h4>
      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 15,
            slidesPerGroup: 7,
          },
          2560: {
            slidesPerView: 10,
            spaceBetween: 30,
            slidesPerGroup: 10,
          },
        }}
        slidesPerView={7}
        spaceBetween={15}
        slidesPerGroup={7}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {blockbusterCastExists ? (
          <div className="cast-row__slides-exists">
            {blockbusterCast.map((cast, index) => {
              return (
                <SwiperSlide
                  className="cast-row__media-cards"
                  style={{
                    backgroundImage: `url(${imageURL}${cast.profile_path})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  // onMouseEnter={() => setDisplayCastMember(true)}
                  // onMouseLeave={() => setDisplayCastMember(false)}
                >
                  {/* {index} */}
                  {/* <p className="cast-row__actor-name">{cast.name}</p>
                  <p className="cast-row__name">{cast.character}</p> */}

                  <div className="cast-row__fade-bottom">
                    <p className="cast-row__actor-name">{cast.name}</p>
                    <p className="cast-row__name">{cast.character}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        ) : (
          <div className="cast-row__slides">
            <SwiperSlide className="cast-row__media-cards">Slide 1</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 2</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 3</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 4</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 5</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 6</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 7</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 8</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">Slide 9</SwiperSlide>
            <SwiperSlide className="cast-row__media-cards">
              Slide 10
            </SwiperSlide>
          </div>
        )}
      </Swiper>
    </div>
  );
}

export default Cast;
