import React, { Component } from "react";
import "./Header.css";
import Swiper from "react-id-swiper";

class Header extends Component {
  render() {
    const params = {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true
      },
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
    return (
      <div>
        <span>Header component</span>
        <div className="carusel">
          <Swiper {...params}>
            <div>
              <img src="/images/boot-adidas-copa.webp" alt="" />
              <span>adidas copa</span>
            </div>
            <div>
              <img src="/images/boot-adidas-predator.webp" alt="" />
            </div>
            <div>
              <img src="/images/boot-diadora-baggio.webp" alt="" />
            </div>
            <div>
              <img src="/images/boot-furon.webp" alt="" />
            </div>
            <div>
              <img src="/images/boot-lotto-solista.webp" alt="" />
            </div>
            <div>
              <img src="/images/boot-nike-superfly.webp" alt="" />
            </div>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Header;
