"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) => [...prev, Math.random()]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="snowfall">
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${flake * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
