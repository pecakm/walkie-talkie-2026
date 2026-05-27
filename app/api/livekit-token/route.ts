import { NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

const roomName = 'public-room';

export async function GET() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'Missing LiveKit API credentials' },
      { status: 500 }
    );
  }

  const identity = `guest-${crypto.randomUUID()}`;

  const token = new AccessToken(
    apiKey,
    apiSecret,
    {
      identity,
      name: 'Guest',
      ttl: '1h',
    }
  );

  token.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
  });

  return NextResponse.json({
    token: await token.toJwt(),
  });
}
