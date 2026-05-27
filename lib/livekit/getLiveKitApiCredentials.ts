import { LiveKitApiCredentials } from './livekit.types';

export function getLiveKitApiCredentials(): LiveKitApiCredentials | undefined {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) return undefined;

  return { apiKey, apiSecret };
}
