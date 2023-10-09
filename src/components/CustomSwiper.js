import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext , useEffect} from "react";
import StateContext from "../../Contexts/StateContext";
import Image from "next/image";

const CustomSwiper = () => {
  const { swiperData, setSwiperData } = useContext(StateContext);
  const fetchData = (url, setData) => {
    fetch(`${url}`).then(response => response.json()).then(response => setData(response))
  };
  useEffect(() => {
    fetchData("http://localhost:3001/swiperData", setSwiperData);
  } , []);


  return(
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {swiperData.map(el => {
        return(
          <SwiperSlide>
            <div className="custom-swiper">
              <Image src={`${el.image}`} width={500} height={500} />
            </div>
          </SwiperSlide>
        )
      })}
      
    </Swiper>
  )
};
export default CustomSwiper;
