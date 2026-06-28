import { ImageResponse } from "next/og";

// iOS home-screen ("Add to Home Screen") icon. iOS rounds the corners itself,
// so we render a full-bleed tile.
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
          background: "linear-gradient(150deg, #201c1a 0%, #131316 100%)",
          color: "#ffb5a1",
          fontSize: 104,
          fontWeight: 800,
          letterSpacing: -10,
          fontFamily: "sans-serif",
        }}
      >
        AA
      </div>
    ),
    { ...size }
  );
}
