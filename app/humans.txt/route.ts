// route to serve humans.txt

export const runtime = "edge";

export async function GET() {
  const body = `Junaid Shaikh (zjunaidz)\n Github: zjunaidz\nFrom: India\nSite: https://zjunaidz.me\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
