import { useEffect, useState } from "react";
import AnimatedBg from "./AnimatedBg";

const TypeWriter = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["Web Developer", "Full Stack Developer", "Software Engineer"];
  const currentWord = words[wordIndex];
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseDuration = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentWord]);

  return (
    <span className="text-primary font-bold">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 w-full mt-2 md:mt-4 lg:mt-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-12 items-center">
          {/* Profile Image - Shows first on mobile */}
          <div className="relative h-[350px] group overflow-visible w-full order-1 lg:order-2 bg-transparent">
            {/* 3D Animated Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <AnimatedBg />
            </div>
            
            {/* Floating Orbs Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
              <div className="floating-orb orb-3"></div>
            </div>

            {/* Moving Particles/Asteroids */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
              <div className="particle particle-6"></div>
              <div className="particle particle-7"></div>
              <div className="particle particle-8"></div>
              <div className="particle particle-9"></div>
              <div className="particle particle-10"></div>
              <div className="particle particle-11"></div>
              <div className="particle particle-12"></div>
              <div className="particle particle-13"></div>
              <div className="particle particle-14"></div>
              <div className="particle particle-15"></div>
              <div className="particle particle-16"></div>
              <div className="particle particle-17"></div>
              <div className="particle particle-18"></div>
              <div className="particle particle-19"></div>
              <div className="particle particle-20"></div>
            </div>

            <style>{`

              /* subtle lightning background behind profile image */
              @keyframes lightningPulse {
                0% { opacity: 0; transform: scale(0.98); }
                20% { opacity: 0.12; transform: scale(1); }
                40% { opacity: 0.06; transform: scale(1.01); }
                70% { opacity: 0.10; transform: scale(0.995); }
                100% { opacity: 0; transform: scale(0.98); }
              }

              .lightning-effect {
                position: absolute;
                inset: 0;
                pointer-events: none;
                mix-blend-mode: screen;
                border-radius: 9999px;
                background-image: radial-gradient(circle at 30% 25%, rgba(96,165,250,0.14), transparent 18%), radial-gradient(circle at 70% 75%, rgba(236,72,153,0.10), transparent 22%);
                filter: blur(6px) saturate(120%);
                opacity: 0;
                animation: lightningPulse 4.5s ease-in-out infinite;
              }

              /* thin flash strokes */
              .lightning-stroke {
                position: absolute;
                inset: 0;
                pointer-events: none;
                opacity: 0.08;
                mix-blend-mode: screen;
                filter: blur(0.6px);
              }

              /* Floating Orbs 3D Animation */
              @keyframes float {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(10px, -15px) scale(1.1); }
                50% { transform: translate(-15px, 10px) scale(0.9); }
                75% { transform: translate(15px, 15px) scale(1.05); }
              }

              @keyframes float2 {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                33% { transform: translate(-20px, 15px) rotate(120deg); }
                66% { transform: translate(20px, -10px) rotate(240deg); }
              }

              @keyframes float3 {
                0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                50% { transform: translate(-10px, -20px) scale(1.2) rotate(180deg); }
              }

              .floating-orb {
                position: absolute;
                border-radius: 50%;
                filter: blur(40px);
                opacity: 0.6;
                pointer-events: none;
              }

              .orb-1 {
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.2));
                top: 10%;
                left: 10%;
                animation: float 8s ease-in-out infinite;
              }

              .orb-2 {
                width: 150px;
                height: 150px;
                background: radial-gradient(circle, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.2));
                bottom: 20%;
                right: 15%;
                animation: float2 10s ease-in-out infinite;
              }

              .orb-3 {
                width: 180px;
                height: 180px;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.2));
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: float3 12s ease-in-out infinite;
              }

              /* Moving Particles/Asteroids */
              @keyframes moveParticle1 {
                0% { 
                  transform: translate(-150px, -100px) scale(1);
                  opacity: 0;
                }
                5% { opacity: 0.4; }
                50% { 
                  transform: translate(200px, 150px) scale(1);
                  opacity: 0.3;
                }
                95% { opacity: 0; }
                100% { 
                  transform: translate(550px, 400px) scale(1);
                  opacity: 0;
                }
              }

              @keyframes moveParticle2 {
                0% { 
                  transform: translate(-100px, -80px) scale(1);
                  opacity: 0;
                }
                5% { opacity: 0.35; }
                50% { 
                  transform: translate(250px, 180px) scale(1);
                  opacity: 0.25;
                }
                95% { opacity: 0; }
                100% { 
                  transform: translate(600px, 440px) scale(1);
                  opacity: 0;
                }
              }

              @keyframes moveParticle3 {
                0% { 
                  transform: translate(-120px, -90px) scale(1);
                  opacity: 0;
                }
                5% { opacity: 0.3; }
                50% { 
                  transform: translate(220px, 160px) scale(1);
                  opacity: 0.25;
                }
                95% { opacity: 0; }
                100% { 
                  transform: translate(560px, 410px) scale(1);
                  opacity: 0;
                }
              }

              .particle {
                position: absolute;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.95), rgba(133, 76, 230, 0.6), rgba(133, 76, 230, 0.3));
                box-shadow: 0 0 15px rgba(133, 76, 230, 0.8), 0 0 25px rgba(133, 76, 230, 0.5), 0 0 35px rgba(133, 76, 230, 0.3);
                pointer-events: none;
              }

              .particle-1 {
                top: 20%;
                left: 0;
                animation: moveParticle1 8s linear infinite;
                animation-delay: -2s;
              }

              .particle-2 {
                top: 40%;
                right: 0;
                animation: moveParticle2 10s linear infinite;
                animation-delay: -5s;
              }

              .particle-3 {
                bottom: 30%;
                left: 20%;
                animation: moveParticle3 12s linear infinite;
                animation-delay: -7s;
              }

              .particle-4 {
                top: 60%;
                left: 0;
                animation: moveParticle1 9s linear infinite;
                animation-delay: -3s;
                width: 3px;
                height: 3px;
              }

              .particle-5 {
                top: 10%;
                right: 10%;
                animation: moveParticle2 11s linear infinite;
                animation-delay: -6s;
                width: 5px;
                height: 5px;
              }

              .particle-6 {
                bottom: 20%;
                right: 0;
                animation: moveParticle3 13s linear infinite;
                animation-delay: -4s;
              }

              .particle-7 {
                top: 50%;
                left: 10%;
                animation: moveParticle1 10s linear infinite;
                animation-delay: -8s;
                width: 3px;
                height: 3px;
              }

              .particle-8 {
                top: 80%;
                right: 20%;
                animation: moveParticle2 14s linear infinite;
                animation-delay: -9s;
                width: 4px;
                height: 4px;
              }

              .particle-9 {
                top: 30%;
                left: 50%;
                animation: moveParticle3 9s linear infinite;
                animation-delay: -1s;
                width: 3px;
                height: 3px;
              }

              .particle-10 {
                top: 70%;
                right: 30%;
                animation: moveParticle1 11s linear infinite;
                animation-delay: -10s;
                width: 4px;
                height: 4px;
              }

              .particle-11 {
                top: 15%;
                left: 30%;
                animation: moveParticle2 13s linear infinite;
                animation-delay: -11s;
                width: 5px;
                height: 5px;
              }

              .particle-12 {
                bottom: 40%;
                right: 40%;
                animation: moveParticle3 10s linear infinite;
                animation-delay: -5.5s;
                width: 3px;
                height: 3px;
              }

              .particle-13 {
                top: 25%;
                left: 15%;
                animation: moveParticle1 9s linear infinite;
                animation-delay: -6s;
                width: 4px;
                height: 4px;
              }

              .particle-14 {
                top: 55%;
                right: 25%;
                animation: moveParticle2 11s linear infinite;
                animation-delay: -7s;
                width: 5px;
                height: 5px;
              }

              .particle-15 {
                bottom: 35%;
                left: 40%;
                animation: moveParticle3 12s linear infinite;
                animation-delay: -3.5s;
                width: 4px;
                height: 4px;
              }

              .particle-16 {
                top: 45%;
                left: 5%;
                animation: moveParticle1 10s linear infinite;
                animation-delay: -9s;
                width: 3px;
                height: 3px;
              }

              .particle-17 {
                top: 65%;
                right: 15%;
                animation: moveParticle2 13s linear infinite;
                animation-delay: -4.5s;
                width: 5px;
                height: 5px;
              }

              .particle-18 {
                bottom: 25%;
                left: 55%;
                animation: moveParticle3 11s linear infinite;
                animation-delay: -6.5s;
                width: 4px;
                height: 4px;
              }

              .particle-19 {
                top: 35%;
                right: 45%;
                animation: moveParticle1 14s linear infinite;
                animation-delay: -2.5s;
                width: 3px;
                height: 3px;
              }

              .particle-20 {
                bottom: 50%;
                right: 5%;
                animation: moveParticle2 9s linear infinite;
                animation-delay: -8.5s;
                width: 5px;
                height: 5px;
              }
            `}</style>

            {/* Profile Image Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[350px] h-[350px] transition-transform duration-500 ease-in-out hover:scale-110">

                {/* Lightning animated background */}
                <div className="lightning-effect" aria-hidden />
                <svg className="lightning-stroke" viewBox="0 0 800 800" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lg" x1="0" x2="1">
                      <stop offset="0%" stopColor="rgba(96,165,250,0.12)" />
                      <stop offset="100%" stopColor="rgba(236,72,153,0.10)" />
                    </linearGradient>
                  </defs>
                  <path d="M120 200 C200 100, 300 300, 400 180 S600 80, 680 200" fill="none" stroke="url(#lg)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Profile Image (circular placeholder, no pink rounded rectangle) */}
                <div className="absolute inset-0 rounded-full bg-transparent overflow-hidden flex items-center justify-center shadow-2xl group-hover:shadow-pink-500/60 transition-shadow duration-300 border-2 border-primary/40">
                  {/* Background fill (covers circle) to avoid left/right gaps while keeping the main photo uncropped */}
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1545954023e849dbaa09268f617fe103%2F9430b5832eb34c89b21d38bb5757e73c?format=webp&width=800"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-105 filter blur-sm brightness-75"
                  />

                  {/* Foreground image - full photo without cropping */}
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1545954023e849dbaa09268f617fe103%2F9430b5832eb34c89b21d38bb5757e73c?format=webp&width=800"
                    alt="Himanshu Firke"
                    className="relative w-full h-full object-contain object-center rounded-full bg-transparent z-10"
                  />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-pink-500/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Text Content - Shows second on mobile */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6 animate-fadeInUp z-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-1 md:space-y-2 lg:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-tight font-poppins">
                Hi, I'm
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-poppins leading-tight tracking-tight drop-shadow-lg">
                Himanshu
                <br />
                Firke
              </h2>
            </div>

            <div className="text-base sm:text-lg md:text-lg lg:text-xl text-foreground/90 leading-relaxed font-poppins">
              <p className="mb-1">I am a <TypeWriter /></p>
            </div>

            <p className="text-xs sm:text-sm md:text-sm lg:text-base text-foreground/70 leading-relaxed max-w-xl font-montserrat">
              A passionate developer who loves building innovative solutions. Specialized in full-stack web development and creating beautiful user experiences. Always exploring new technologies and pushing boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 text-xs sm:text-sm md:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <a href="mailto:himanshufirke04@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                  himanshufirke04@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📱</span>
                <a href="tel:+917038253789" className="text-foreground/80 hover:text-primary transition-colors">
                  +91 7038253789
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-1 md:pt-2">
              <a
                href="https://drive.google.com/file/d/1RLEeBvSVyMudb7K0cjcky9ouDYr_nUKO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-background font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 font-poppins text-sm md:text-base lg:text-lg text-center"
              >
                📄 Check Resume
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 border-2 border-pink-500 text-primary hover:bg-pink-500/10 font-bold rounded-full transition-all duration-300 border-pink-500 hover:border-purple-500 font-poppins text-sm md:text-base lg:text-lg text-center"
              >
                📧 Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-pink-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
