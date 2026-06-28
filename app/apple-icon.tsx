import { ImageResponse } from "next/og";

// iOS home-screen ("Add to Home Screen") icon. iOS rounds the corners itself,
// so the tile is a full-bleed coral gradient with a dark interlocking AA.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ff6a3d 0%, #ffae90 100%)",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path d="M44 142 L72 46 L100 142" stroke="#1b1410" strokeWidth="13" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M56 106 L88 106" stroke="#1b1410" strokeWidth="13" strokeLinecap="round" />
          <path d="M80 142 L108 46 L136 142" stroke="#1b1410" strokeWidth="13" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M92 106 L124 106" stroke="#1b1410" strokeWidth="13" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
