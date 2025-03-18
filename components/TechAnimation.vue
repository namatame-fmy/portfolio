<template>
  <div class="svg-animation-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="tech-animation">
      <!-- 中央の円 -->
      <circle
        cx="250"
        cy="250"
        r="50"
        fill="none"
        stroke="#e11d48"
        stroke-width="2"
        class="center-circle"
      />

      <!-- 周りを回る小さな円 -->
      <circle cx="250" cy="150" r="10" fill="#e11d48" class="orbiting-circle orbit-1" />
      <circle cx="350" cy="250" r="10" fill="#38bdf8" class="orbiting-circle orbit-2" />
      <circle cx="250" cy="350" r="10" fill="#4ade80" class="orbiting-circle orbit-3" />
      <circle cx="150" cy="250" r="10" fill="#facc15" class="orbiting-circle orbit-4" />

      <!-- 接続線 -->
      <line
        x1="250"
        y1="250"
        x2="250"
        y2="150"
        stroke="#e11d48"
        stroke-width="1"
        class="connection-line line-1"
      />
      <line
        x1="250"
        y1="250"
        x2="350"
        y2="250"
        stroke="#38bdf8"
        stroke-width="1"
        class="connection-line line-2"
      />
      <line
        x1="250"
        y1="250"
        x2="250"
        y2="350"
        stroke="#4ade80"
        stroke-width="1"
        class="connection-line line-3"
      />
      <line
        x1="250"
        y1="250"
        x2="150"
        y2="250"
        stroke="#facc15"
        stroke-width="1"
        class="connection-line line-4"
      />

      <!-- 六角形のグリッド背景 -->
      <path
        d="M50,150 L100,125 L150,150 L150,200 L100,225 L50,200 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />
      <path
        d="M150,150 L200,125 L250,150 L250,200 L200,225 L150,200 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />
      <path
        d="M250,150 L300,125 L350,150 L350,200 L300,225 L250,200 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />
      <path
        d="M350,150 L400,125 L450,150 L450,200 L400,225 L350,200 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />

      <path
        d="M100,225 L150,200 L200,225 L200,275 L150,300 L100,275 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />
      <path
        d="M200,225 L250,200 L300,225 L300,275 L250,300 L200,275 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />
      <path
        d="M300,225 L350,200 L400,225 L400,275 L350,300 L300,275 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />

      <path
        d="M150,300 L200,275 L250,300 L250,350 L200,375 L150,350 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />
      <path
        d="M250,300 L300,275 L350,300 L350,350 L300,375 L250,350 Z"
        fill="none"
        stroke="#333"
        stroke-width="1"
        class="hex-grid"
      />

      <!-- コード線 -->
      <path
        d="M250,150 C300,150 350,200 350,250"
        fill="none"
        stroke="#e11d48"
        stroke-width="1"
        class="code-line code-1"
        stroke-dasharray="5,5"
      />
      <path
        d="M350,250 C350,300 300,350 250,350"
        fill="none"
        stroke="#38bdf8"
        stroke-width="1"
        class="code-line code-2"
        stroke-dasharray="5,5"
      />
      <path
        d="M250,350 C200,350 150,300 150,250"
        fill="none"
        stroke="#4ade80"
        stroke-width="1"
        class="code-line code-3"
        stroke-dasharray="5,5"
      />
      <path
        d="M150,250 C150,200 200,150 250,150"
        fill="none"
        stroke="#facc15"
        stroke-width="1"
        class="code-line code-4"
        stroke-dasharray="5,5"
      />
    </svg>
  </div>
</template>

<style scoped>
.svg-animation-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-animation {
  max-width: 100%;
  max-height: 100%;
}

.center-circle {
  animation: pulse 3s infinite;
}

.orbiting-circle {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.orbit-1 {
  animation-name: orbit1;
}

.orbit-2 {
  animation-name: orbit2;
}

.orbit-3 {
  animation-name: orbit3;
}

.orbit-4 {
  animation-name: orbit4;
}

.connection-line {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.line-1 {
  animation-name: line1;
}

.line-2 {
  animation-name: line2;
}

.line-3 {
  animation-name: line3;
}

.line-4 {
  animation-name: line4;
}

.hex-grid {
  opacity: 0.2;
  animation: glow 5s infinite alternate;
}

.code-line {
  animation: dash 20s linear infinite;
  opacity: 0.7;
}

@keyframes pulse {
  0% {
    r: 50;
    opacity: 0.7;
  }
  50% {
    r: 55;
    opacity: 1;
  }
  100% {
    r: 50;
    opacity: 0.7;
  }
}

@keyframes orbit1 {
  from {
    transform: rotate(0deg) translateY(-100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(-100px) rotate(-360deg);
  }
}

@keyframes orbit2 {
  from {
    transform: rotate(90deg) translateY(-100px) rotate(-90deg);
  }
  to {
    transform: rotate(450deg) translateY(-100px) rotate(-450deg);
  }
}

@keyframes orbit3 {
  from {
    transform: rotate(180deg) translateY(-100px) rotate(-180deg);
  }
  to {
    transform: rotate(540deg) translateY(-100px) rotate(-540deg);
  }
}

@keyframes orbit4 {
  from {
    transform: rotate(270deg) translateY(-100px) rotate(-270deg);
  }
  to {
    transform: rotate(630deg) translateY(-100px) rotate(-630deg);
  }
}

@keyframes line1 {
  from {
    transform-origin: 250px 250px;
    transform: rotate(0deg);
  }
  to {
    transform-origin: 250px 250px;
    transform: rotate(360deg);
  }
}

@keyframes line2 {
  from {
    transform-origin: 250px 250px;
    transform: rotate(90deg);
  }
  to {
    transform-origin: 250px 250px;
    transform: rotate(450deg);
  }
}

@keyframes line3 {
  from {
    transform-origin: 250px 250px;
    transform: rotate(180deg);
  }
  to {
    transform-origin: 250px 250px;
    transform: rotate(540deg);
  }
}

@keyframes line4 {
  from {
    transform-origin: 250px 250px;
    transform: rotate(270deg);
  }
  to {
    transform-origin: 250px 250px;
    transform: rotate(630deg);
  }
}

@keyframes glow {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.3;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>
