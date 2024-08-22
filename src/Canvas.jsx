import { useEffect } from "react";
import "./canvas.css";

export default function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector(".backgroundCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    window.addEventListener("mousemove", function (e) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ctx.shadowColor = "rgb(0, 255, 8)";
      // ctx.shadowBlur = 50;
      ctx.fillStyle = "rgb(0, 255, 8)";
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, 70, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.filter = "blur(30px)";
    });
  })

  return (
    <canvas className="backgroundCanvas"></canvas>
  )
}