import { useEffect, useMemo, useRef } from "react";
import "@/styles/text-flip.css";

export default function TextFlip() {
  const words = useMemo(
    () => [
      "helps serve the underserved",
      "helps make a difference",
      "helps our community",
      "helps spread God’s love",
      "helps serve the underserved",
    ],
    [],
  );

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div className="box-content flex flex-col gap-4 text-3xl font-semibold">
      <p className="title-text text-foreground">Your gift</p>
      <div
        ref={tallestRef}
        className="word-flip flex flex-col overflow-hidden text-white"
      >
        {words.map((word, index) => (
          <span key={index} className="animate-flip-words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
