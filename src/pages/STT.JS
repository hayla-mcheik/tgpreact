import React from 'react';
import { useState, useEffect } from 'react';
import scrollArrow from '../../assets/backtotop.svg'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return (
      <div>
        {isVisible && (
          <div className="d-flex justify-content-center btt">
            <button className="scroll-to-top-btn" onClick={scrollToTop}>
              <img src={scrollArrow} alt="scroll to top arrow" />
            </button>
            <p className='text-white back-to-top' onClick={scrollToTop}>Back To Top</p>
          </div>
        )}
        <style jsx>{`
          .scroll-to-top-btn {
            bottom: 20px;
            background-color: #232323;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
  export default ScrollToTop;