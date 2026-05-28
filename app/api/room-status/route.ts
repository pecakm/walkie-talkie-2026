import { NextResponse } from 'next/server';
import { RoomServiceClient } from 'livekit-server-sdk';

import {
  getLiveKitApiCredentials,
  getLiveKitHost,
  RoomName,
} from '@/lib/livekit';

export async function GET() {
  const host = getLiveKitHost();
  const credentials = getLiveKitApiCredentials();

  if (!host || !credentials) {
    return NextResponse.json(
      { error: 'Missing LiveKit configuration' },
      { status: 500 }
    );
  }

  const roomService = new RoomServiceClient(
    host,
    credentials.apiKey,
    credentials.apiSecret
  );

  try {
    const participants = await roomService.listParticipants(RoomName);
    return NextResponse.json({ participantCount: participants.length });
  } catch {
    return NextResponse.json({ participantCount: 0 });
  }
}
