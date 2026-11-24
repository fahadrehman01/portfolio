import { ImageResponse } from "next/og";
import { person } from "@/app/resources/content";

export const runtime = "edge";

export async function GET(request: Request) {
  const title = (
    new URL(request.url).searchParams.get("title") || person.role
  ).slice(0, 140);
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px",
        background: "#091624",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
        borderTop: "12px solid #5eead4",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#7dd3fc" }}>
        {person.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 60,
          lineHeight: 1.15,
          letterSpacing: "-2px",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#cbd5e1" }}>
        Mobile apps · Web products · Business value
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
