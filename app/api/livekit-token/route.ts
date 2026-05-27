import { NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

import { getLiveKitApiCredentials, RoomName } from '@/lib/livekit';

export async function GET() {
  const credentials = getLiveKitApiCredentials();

  if (!credentials) {
    return NextResponse.json(
      { error: 'Missing LiveKit API credentials' },
      { status: 500 }
    );
  }

  const identity = `guest-${crypto.randomUUID()}`;

  const token = new AccessToken(
    credentials.apiKey,
    credentials.apiSecret,
    {
      identity,
      name: 'Guest',
      ttl: '1h',
    }
  );

  token.addGrant({
    room: RoomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
  });

  return NextResponse.json({
    token: await token.toJwt(),
  });
}
