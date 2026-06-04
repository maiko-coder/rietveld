import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#262626",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Red vertical accent bar (left edge, like Rietveld logo) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 4,
            width: 4,
            background: "#ed1c23",
            display: "flex",
          }}
        />

        {/* R letter */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 3,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1,
              letterSpacing: "-0.5px",
            }}
          >
            R
          </span>
        </div>

        {/* Bottom colour stripe: red / yellow / cyan */}
        <div
          style={{
            height: 4,
            background: "linear-gradient(90deg, #ed1c23 0%, #fecb09 50%, #00adef 100%)",
            display: "flex",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
