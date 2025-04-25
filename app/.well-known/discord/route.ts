// app/.well-known/discord/route.ts
import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse(
    'dh=33021ef4c68ad50d1ca47a1bcdbde2c3ebf942ce',
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
