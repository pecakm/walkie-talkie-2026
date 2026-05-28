import { useEffect, useState } from 'react';

const RoomStatusPollMs = 5000;

export function useParticipantCount() {
  const [participantCount, setParticipantCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRoomStatus() {
      try {
        const res = await fetch('/api/room-status');

        if (!res.ok || cancelled) return;
        
        const data = await res.json();
        setParticipantCount(data.participantCount);
      } catch {
        // ignore transient fetch errors
      }
    }

    fetchRoomStatus();
    const intervalId = setInterval(fetchRoomStatus, RoomStatusPollMs);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, []);

  return participantCount;
}
