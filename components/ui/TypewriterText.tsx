"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({
  strings,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {text}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}
