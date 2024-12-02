"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Promotion = () => {
  const boxcss = {
    width: "180px",
    height: "280px",
    border: "1px solid #0863d2 ",
    backgroundColor: "white",
    borderRadius: "10px",
    marginTop: "20px",
  };
  const fontcss = {
    color: "#a4bedf",
    fontSize: "13px",
    marginTop: "20px",
  };

  const font2css = {
    fontSize: "13px",

    fontWeight: 600,
    padding: "5px",
  };

  return (
    <section
      style={{
        width: "100vw",
        height: "600px",
        padding: "80px 100px",

        backgroundColor: "skyblue",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#0863d2", fontWeight: 700, fontSize: "40px" }}>
        Promotion
      </h1>
      <p style={font2css}>요거트월드의 다양한 혜택과 이벤트를 만나보세요.</p>

      <Swiper
        style={{ maxWidth: "1000px", margin: "0 auto" }}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        loop={true}
        slidesPerView={4}
      >
        <SwiperSlide>
          <div style={boxcss}>
            <img
              style={{ borderRadius: "10px", border: "1px solid #0863d2 " }}
              src="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg"
              alt=""
            />
            <p style={fontcss}>2024-11-14 ~ 2024-11-30</p>
            <p style={font2css}>요거트월드 케이터링 무료 지...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={boxcss}>
            <img
              style={{ borderRadius: "10px", border: "1px solid #0863d2 " }}
              src="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_AGaMl8V6_a6526a19eb071e3f896b37381788c5da6cca6ce8.jpg"
              alt=""
            />
            <p style={fontcss}>2024-11-14 ~ 2024-11-30</p>
            <p style={font2css}>요거트월드 케이터링 무료 지...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={boxcss}>
            <img
              style={{ borderRadius: "10px", border: "1px solid #0863d2 " }}
              src="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_DxWLeyJ1_9decfa8f4520d7c7aef4662e9e0c125657345258.jpg"
              alt=""
            />
            <p style={fontcss}>2024-11-14 ~ 2024-11-30</p>
            <p style={font2css}>요거트월드 케이터링 무료 지...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={boxcss}>
            <img
              style={{ borderRadius: "10px", border: "1px solid #0863d2 " }}
              src="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg"
              alt=""
            />
            <p style={fontcss}>2024-11-14 ~ 2024-11-30</p>
            <p style={font2css}>요거트월드 케이터링 무료 지...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={boxcss}>
            <img
              style={{ borderRadius: "10px", border: "1px solid #0863d2 " }}
              src="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg"
              alt=""
            />
            <p style={fontcss}>2024-11-14 ~ 2024-11-30</p>
            <p style={font2css}>요거트월드 케이터링 무료 지...</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Promotion;
