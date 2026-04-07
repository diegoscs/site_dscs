import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Parâmetros da URL
  const title = searchParams.get("title") || "Diego Candido";
  const description = searchParams.get("description") || "Full Stack Developer";
  const category = searchParams.get("category") || "DSCS";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#0f1419",
          backgroundImage:
            "linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%)",
          fontFamily: '"Inter", sans-serif',
          justifyContent: "space-between",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", zIndex: 1 }}>
          {/* Category badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#10b981",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            {category}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: "700",
              color: "#ffffff",
              lineHeight: "1.2",
              maxWidth: "90%",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "24px",
              color: "#cbd5e1",
              lineHeight: "1.6",
              maxWidth: "90%",
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1,
          }}
        >
          {/* Left: URL */}
          <div
            style={{
              fontSize: "18px",
              color: "#64748b",
              fontWeight: "500",
            }}
          >
            dscs.com.br
          </div>

          {/* Right: Logo/Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "20px",
              fontWeight: "700",
              color: "#10b981",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "6px",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0f1419",
                fontSize: "18px",
              }}
            >
              ◆
            </div>
            DSCS
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
