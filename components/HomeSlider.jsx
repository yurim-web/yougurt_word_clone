"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "600px",
        padding: "80px 100px",
        backgroundColor: "#f3f8ff",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #eeee",
          borderRadius: "30px",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          navigation={true}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
          }}
        >
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                height: "100vw",
                backgroundImage:
                  "url('https://www.yogurtworld.co.kr/data/file/main_main/f2272113e2cbb9fbc8bbb482c14eebbc_G6yn3Q8j_5ee75a492b8839f32abc866afe604f13982ebf7a.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                height: "100vw",
                backgroundImage:
                  "url('https://www.yogurtworld.co.kr/data/file/main_main/f2272113e2cbb9fbc8bbb482c14eebbc_ISiCANDW_3b2c0e4eb894a6c9670b56050461e8a1c4865dc0.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: " repeat-x",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100vw",
                height: "100vw",
                backgroundImage:
                  "url('https://www.yogurtworld.co.kr/data/file/main_main/2_copy_8_f2272113e2cbb9fbc8bbb482c14eebbc_EIBOz5cx_43b784d9e7b6094b565a2ac2815cdab78646ec3b.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
