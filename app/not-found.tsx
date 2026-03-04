// pages/404.tsx
"use client";
import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/video/vidfig.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />

      {/* Overlay Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
          padding: "0 1rem",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            marginBottom: "1rem",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          Oops! Page Not Found
        </p>
        <Link href="/">
          <button
            style={{
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#ff4d4d",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Go Home
          </button>
        </Link>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 4rem !important;
          }
          p {
            font-size: 1.2rem !important;
          }
          button {
            padding: 0.6rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 3rem !important;
          }
          p {
            font-size: 1rem !important;
          }
          button {
            padding: 0.5rem 1rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Custom404;