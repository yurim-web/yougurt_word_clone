import { useSwiper } from "swiper/react";

const NextButton = () => {
  const swiper = useSwiper(); // useswiper 은 swiper를 다루는 리모콘
  const handleNext = () => {
    swiper.slideNext();
  };
  return <button onClick={handleNext}>다음</button>;
};

export default NextButton;
