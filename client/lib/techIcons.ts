export const techIcons: Record<string, string> = {
  // Frontend
  "React": "⚛️",
  "React Js": "⚛️",
  "HTML": "🌐",
  "CSS": "🎨",
  "JavaScript": "📜",
  "Bootstrap": "📦",
  "Tailwind CSS": "🌬️",
  "TypeScript": "📘",
  "Next.js": "▲",
  "Three.js": "🎭",
  "Framer Motion": "✨",
  "GSAP": "🎬",
  "Material UI": "🎯",
  "Vue.js": "💚",

  // Backend
  "Python": "🐍",
  "MySQL": "🗄️",
  "Firebase": "🔥",
  "PHP": "🐘",
  "Flask": "🍶",
  "Express.js": "⚡",
  "Node.js": "🟢",
  "MongoDB": "🍃",
  "Django": "🎪",
  "PostgreSQL": "🐘",

  // Android
  "Java": "☕",
  "XML": "📝",
  "Android Studio": "🤖",
  "Flutter": "🦋",
  "Dart": "🎯",

  // Others
  "Canva": "🖼️",
  "GitHub": "🐙",
  "Netlify": "🚀",
  "VS Code": "💻",
  "Jupyter Notebook": "📓",
  "Figma": "🎨",
  "Vercel": "▲",
  "Zustand": "🏪",
  "Supabase": "🐘",
  "FastAPI": "⚡",
  "LangChain": "🔗",
  "Google Gemini": "✨",
  "Deep Learning": "🧠",
  "Transformers": "🤖",
  "3D CNN": "🧠",
  "Stripe": "💳",
  "TensorFlow": "📊",
  "Plotly": "📈",
  "Leaflet": "🗺️",
  "OpenCV": "📷",
  "Selenium": "🤖",
  "Tesseract OCR": "👁️",
  "Easy OCR": "👁️",
  "Vite": "⚡",
  "Storybook": "📚",
  "Git": "🔄",
};

export function getTechIcon(tech: string): string {
  return techIcons[tech] || "💾";
}
