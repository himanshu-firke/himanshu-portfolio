export default function AnimatedBg() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
        </linearGradient>

        <path
          id="path_0"
          d="M 250,250 m -150,0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0"
          fill="none"
        />
        <path
          id="path_1"
          d="M 250,250 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
          fill="none"
        />
        <path
          id="path_2"
          d="M 250,250 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
          fill="none"
        />
      </defs>

      {/* Animated orbiting elements */}
      <g opacity="0.6">
        <ellipse
          cx="250"
          cy="100"
          rx="60"
          ry="80"
          fill="url(#grad1)"
          filter="blur(40px)"
        >
          <animateMotion dur="20s" repeatCount="indefinite">
            <mpath href="#path_0" />
          </animateMotion>
        </ellipse>
      </g>

      <g opacity="0.5">
        <ellipse
          cx="250"
          cy="150"
          rx="50"
          ry="70"
          fill="url(#grad2)"
          filter="blur(35px)"
        >
          <animateMotion dur="25s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#path_1" />
          </animateMotion>
        </ellipse>
      </g>

      <g opacity="0.4">
        <ellipse
          cx="250"
          cy="70"
          rx="70"
          ry="90"
          fill="url(#grad3)"
          filter="blur(45px)"
        >
          <animateMotion dur="30s" repeatCount="indefinite">
            <mpath href="#path_2" />
          </animateMotion>
        </ellipse>
      </g>

      {/* Static accent lines */}
      <line
        x1="250"
        y1="50"
        x2="250"
        y2="150"
        stroke="#a855f7"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="150"
        y1="250"
        x2="250"
        y2="250"
        stroke="#06b6d4"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
}
