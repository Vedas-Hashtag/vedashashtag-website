import { ImageResponse } from "next/og";

export const runtime = "edge"; // Use Edge runtime for better performance

// Metadata for the image
export const alt = "Vedas College";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function GET() {
  // Determine the base URL based on the environment
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.hashtag.vedascollege.edu.np"
      : "http://localhost:3000";
  try {
    // Create a dynamic Open Graph image response
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            fontSize: "48px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          <img
            src={`${baseUrl}/logo.png`}
            alt="Vedas College Logo"
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
            }}
          />
        </div>
      )
    );
  } catch (e) {
    return new Response("Unable to generate a image", { status: 500 });
  }
}
