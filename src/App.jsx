import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./App.css"
const slides = [
  { id: 1, name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg", review: "This product is amazing! It works just as described and exceeded my expectations." },
  { id: 2, name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg", review: "Good quality but could be better. I like it, but there’s room for improvement." },
  { id: 3, name: "Sam Brown", image: "https://randomuser.me/api/portraits/men/3.jpg", review: "Very disappointed with the product. It didn’t meet my expectations at all." },
  { id: 4, name: "Emily Clark", image: "https://randomuser.me/api/portraits/women/4.jpg", review: "Absolutely love it! Excellent value for money. Will definitely buy again." },
  { id: 5, name: "Michael Johnson", image: "https://randomuser.me/api/portraits/men/5.jpg", review: "It works fine, but the delivery was slower than expected. Overall, not bad." },
  { id: 6, name: "Lisa White", image: "https://randomuser.me/api/portraits/women/6.jpg", review: "The quality is top-notch! I’m really impressed and would recommend it to others." },
  { id: 7, name: "David Green", image: "https://randomuser.me/api/portraits/men/7.jpg", review: "It’s okay, but I’ve seen better alternatives. I wouldn't recommend it for long-term use." },
  { id: 8, name: "Sophia Harris", image: "https://randomuser.me/api/portraits/women/8.jpg", review: "Perfect for what I needed! It’s simple, efficient, and does the job really well." },
  { id: 9, name: "William King", image: "https://randomuser.me/api/portraits/men/9.jpg", review: "Not worth the price. I had higher expectations based on the reviews, but it didn’t perform well." },
  { id: 10, name: "Olivia Lewis", image: "https://randomuser.me/api/portraits/women/10.jpg", review: "This is exactly what I was looking for. Great quality and amazing features. Highly recommended!" }
];



const App = () => {
  const swiperRef=useRef(null)
  return (
    <div className='container'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        speed={1000}
        breakpoints={{300:{slidesPerView:1},600:{slidesPerView:2},960:{slidesPerView:3}}}
        loop={true}
        autoplay={{ delay: 3000 ,}}
        allowTouchMove={true}
        simulateTouch={true} 
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='slide-container'>
              <img src={slide.image} alt="img" />
              <h2 className='name'>{slide.name}</h2>
              <h5 className='review'>{slide.review}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => swiperRef.current?.slidePrev()} className='btn-left'><FaArrowLeft /></button>
      <button onClick={() => swiperRef.current?.slideNext()} className='btn-right'><FaArrowRight /></button>
    </div>
  )
}

export default App