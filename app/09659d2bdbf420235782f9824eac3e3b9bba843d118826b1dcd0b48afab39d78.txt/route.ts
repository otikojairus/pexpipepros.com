const token = "09659d2bdbf420235782f9824eac3e3b9bba843d118826b1dcd0b48afab39d78";

export function GET() {
  return new Response(token, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
