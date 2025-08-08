export const runtime = "edge";

export async function GET() {
  const body = `Contact: mailto:junaidshaikh3967@gmail.com\nExpires: ${new Date(
    Date.now() + 1000 * 60 * 60 * 24 * 180
  ).toISOString()}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
