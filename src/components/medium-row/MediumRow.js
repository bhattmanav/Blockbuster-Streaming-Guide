import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios/Axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MediumRow.css";
function MediumRow({ title, fetchURL, mediaType }) {
  const navigate = useNavigate();
  const [blockbusterMedia, setBlockbusterMedia] = useState([]);
  const [blockbusterMediaExists, setBlockbusterMediaExists] = useState(false);
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original/"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchURL);
        setBlockbusterMedia(request.data.results);
        setBlockbusterMediaExists(true);
      } catch (error) {}
      //   return request;
    };

    fetchData();
  }, []);

  const navigateToPage = (slide) => {
    if (slide.media_type === "movie") {
      navigate(`/movie/${slide.id}`);
    } else if (slide.media_type === "tv") {
      navigate(`/tv/${slide.id}`);
    } else if (mediaType === "movie") {
      navigate(`/movie/${slide.id}`);
    } else if (mediaType === "tv") {
      navigate(`/tv/${slide.id}`);
    }
  };

  return (
    <div className="medium-row-wrapper">
      <h4 className="medium-row__title">{title}</h4>

      <div className="medium-row-carousel">
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
              slidesPerView: 5,
            },
            2560: {
              slidesPerView: 7,
              spaceBetween: 30,
              slidesPerGroup: 7,
            },
          }}
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {blockbusterMediaExists ? (
            <div className="medium-row__slides-exists">
              {blockbusterMedia.map((slide, index) => {
                return (
                  <SwiperSlide
                    className="medium-row__media-cards"
                    style={{
                      backgroundImage: `url(${imageURL}${slide?.poster_path})`,
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    onClick={() => {
                      navigateToPage(slide);
                    }}
                  >
                    {/* {index} */}
                  </SwiperSlide>
                );
              })}
            </div>
          ) : (
            <div className="medium-row__slides">
              <SwiperSlide className="medium-row__media-cards">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 4
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 5
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 6
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 7
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 8
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 9
              </SwiperSlide>
              <SwiperSlide className="medium-row__media-cards">
                Slide 10
              </SwiperSlide>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default MediumRow;
