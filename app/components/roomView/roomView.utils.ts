import { LocalParticipant, RemoteParticipant, Track } from 'livekit-client';

export function isSomeoneUnmuted(
  participants: (LocalParticipant | RemoteParticipant)[],
  localParticipant: LocalParticipant
): boolean {
  const unmutedParticipants = participants.filter((participant) => {
    if (participant.identity === localParticipant.identity) {
      return false;
    }

    const microphonePublication = participant.getTrackPublication(Track.Source.Microphone);

    if (!microphonePublication) {
      return false;
    }
    
    return !microphonePublication.isMuted;
  });

  return unmutedParticipants.length > 0;
}
