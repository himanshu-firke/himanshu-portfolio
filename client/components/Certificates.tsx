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

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
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
      const distance = position === 1 ? 380 : 520;
      const depth = position === 1 ? -150 : -280;
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
    const distance = absPosition === 1 ? 380 : 520;
    const depth = absPosition === 1 ? -150 : -280;
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
            height: 400px;
          }

          .carousel-item {
            width: 400px;
            height: 280px;
          }

          .carousel-btn {
            width: 50px;
            height: 50px;
            font-size: 1.8rem;
            background: rgba(255, 255, 255, 0.15);
            border: 2px solid rgba(255, 255, 255, 0.7);
          }

          .carousel-btn.prev {
            left: 5px;
          }

          .carousel-btn.next {
            right: 5px;
          }
        }

        @media (max-width: 480px) {
          .carousel-item {
            width: 300px;
            height: 200px;
          }

          .carousel-wrapper {
            height: 300px;
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
