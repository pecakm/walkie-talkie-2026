export function getLiveKitHost(): string | undefined {
  const url = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  if (!url) return undefined;
  
  return url.replace(/^wss:/, 'https:').replace(/^ws:/, 'http:');
}
