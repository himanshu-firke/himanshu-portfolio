import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  { title: "Certificate 1", image: "/cert1.png" },
  { title: "Certificate 2", image: "/cert2.png" },
  { title: "Certificate 3", image: "/cert3.png" },
  { title: "Certificate 4", image: "/cert4.png" },
];

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setWindowWidth] = useState(window.innerWidth);

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Update on window resize for responsive positioning
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const getItemStyle = (index: number) => {
    const totalItems = certificates.length;
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + totalItems) % totalItems);
    
    let position = normalizedDiff;
    if (position > totalItems / 2) {
      position = position - totalItems;
    }

    // Responsive distances based on viewport width
    const width = window.innerWidth;
    let distance1, distance2, depth1, depth2;
    
    if (width <= 340) {
      // Very small screens (336px - 340px) - iPhone SE
      distance1 = 150;
      distance2 = 240;
      depth1 = -70;
      depth2 = -130;
    } else if (width <= 380) {
      // Small screens (341px - 380px) - iPhone 6/7/8
      distance1 = 170;
      distance2 = 270;
      depth1 = -80;
      depth2 = -150;
    } else if (width <= 480) {
      // Medium mobile (381px - 480px) - iPhone 11 Pro Max
      distance1 = 190;
      distance2 = 300;
      depth1 = -90;
      depth2 = -170;
    } else if (width <= 768) {
      // Tablets
      distance1 = 280;
      distance2 = 400;
      depth1 = -120;
      depth2 = -220;
    } else {
      // Desktop
      distance1 = 380;
      distance2 = 520;
      depth1 = -150;
      depth2 = -280;
    }

    // Center item (fully visible)
    if (position === 0) {
      return {
        x: 0,
        z: 100,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
      };
    }
    
    // Right side items
    if (position > 0) {
      const angle = position === 1 ? 55 : 65;
      const distance = position === 1 ? distance1 : distance2;
      const depth = position === 1 ? depth1 : depth2;
      return {
        x: distance,
        z: depth,
        rotateY: -angle,
        scale: position === 1 ? 0.85 : 0.7,
        opacity: position === 1 ? 0.6 : (position === 2 ? 0.4 : 0),
        zIndex: 10 - position,
      };
    }
    
    // Left side items
    const absPosition = Math.abs(position);
    const angle = absPosition === 1 ? 55 : 65;
    const distance = absPosition === 1 ? distance1 : distance2;
    const depth = absPosition === 1 ? depth1 : depth2;
    return {
      x: -distance,
      z: depth,
      rotateY: angle,
      scale: absPosition === 1 ? 0.85 : 0.7,
      opacity: absPosition === 1 ? 0.6 : (absPosition === 2 ? 0.4 : 0),
      zIndex: 10 - absPosition,
    };
  };

  return (
    <section id="certificates" className="carousel-container" aria-label="Certificates carousel">
      <style>{`
        .carousel-container {
          width: 100%;
          background: hsl(261 69% 4%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 20px 60px 20px;
          overflow: hidden;
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 80px;
          z-index: 20;
        }

        .carousel-header h1 {
          font-size: 3.8rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px 0;
          letter-spacing: 0.5px;
        }

        .carousel-header p {
          font-size: 1.1rem;
          color: #9ca3af;
          margin: 0;
          font-weight: 400;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1600px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-scene {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1800px;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-item {
          position: absolute;
          width: 550px;
          height: 360px;
          transform-style: preserve-3d;
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .carousel-item:hover {
          filter: brightness(1.1);
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
          border: 2px solid rgba(168, 85, 247, 0.4);
          background: #2a2a3e;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.5);
          color: #ffffff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 100;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .carousel-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
        }

        .carousel-btn.prev {
          left: 10px;
        }

        .carousel-btn.next {
          right: 10px;
        }

        .carousel-indicators {
          display: flex;
          gap: 12px;
          margin-top: 60px;
          z-index: 20;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .indicator.active {
          background: #ffffff;
          width: 32px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .carousel-header h1 {
            font-size: 2.5rem;
          }

          .carousel-header p {
            font-size: 1rem;
          }

          .carousel-wrapper {
            height: 350px;
          }

          .carousel-item {
            width: 350px;
            height: 230px;
          }

          .carousel-btn {
            width: 50px;
            height: 50px;
            font-size: 1.8rem;
            background: rgba(168, 85, 247, 0.9);
            border: 2px solid rgba(255, 255, 255, 0.8);
            z-index: 150;
          }

          .carousel-btn.prev {
            left: 8px;
          }

          .carousel-btn.next {
            right: 8px;
          }
        }

        /* iPhone 11 Pro Max and similar (414px) */
        @media (max-width: 480px) {
          .carousel-header h1 {
            font-size: 2rem;
          }

          .carousel-item {
            width: 240px;
            height: 160px;
          }

          .carousel-wrapper {
            height: 240px;
            padding: 0 60px;
          }

          .carousel-scene {
            perspective: 900px;
          }

          .carousel-btn {
            width: 42px;
            height: 42px;
            font-size: 1.6rem;
            background: rgba(168, 85, 247, 0.95);
            border: 2px solid rgba(255, 255, 255, 0.95);
            z-index: 150;
            box-shadow: 0 4px 15px rgba(168, 85, 247, 0.6);
          }

          .carousel-btn.prev {
            left: 10px;
          }

          .carousel-btn.next {
            right: 10px;
          }

          .carousel-indicators {
            margin-top: 35px;
          }
        }

        /* iPhone 6/7/8 and similar (375px) */
        @media (max-width: 380px) {
          .carousel-header h1 {
            font-size: 1.9rem;
          }

          .carousel-item {
            width: 220px;
            height: 145px;
          }

          .carousel-wrapper {
            height: 220px;
            padding: 0 55px;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .carousel-btn.prev {
            left: 8px;
          }

          .carousel-btn.next {
            right: 8px;
          }

          .carousel-indicators {
            margin-top: 30px;
          }
        }

        /* iPhone SE and very small (336px - 360px) */
        @media (max-width: 340px) {
          .carousel-header h1 {
            font-size: 1.7rem;
          }

          .carousel-item {
            width: 200px;
            height: 130px;
          }

          .carousel-wrapper {
            height: 200px;
            padding: 0 50px;
          }

          .carousel-scene {
            perspective: 800px;
          }

          .carousel-btn {
            width: 38px;
            height: 38px;
            font-size: 1.4rem;
          }

          .carousel-btn.prev {
            left: 5px;
          }

          .carousel-btn.next {
            right: 5px;
          }

          .carousel-indicators {
            margin-top: 25px;
          }
        }
      `}</style>

      <div className="carousel-header">
        <h1>Certificates</h1>
        <p>Here are some of the certificates I've earned recently.</p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-scene">
          {certificates.map((item, index) => {
            const style = getItemStyle(index);
            return (
              <motion.div
                key={index}
                className="carousel-item"
                initial={false}
                animate={{
                  x: style.x,
                  z: style.z,
                  rotateY: style.rotateY,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 60,
                  damping: 25,
                  mass: 0.8,
                  duration: 0.8,
                }}
                style={{
                  zIndex: style.zIndex,
                }}
              >
                <img src={item.image} alt={item.title} />
              </motion.div>
            );
          })}

          <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          <button className="carousel-btn next" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </div>
      </div>

      <div className="carousel-indicators">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
