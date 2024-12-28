import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Vedas College";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://www.hashtag.vedascollege.edu.np"
      : "http://localhost:3000";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <img
          src={url + "/logo.png"}
          alt="Vedas College"
          height="630"
          width="1200"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
