import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type AudioPlayerProps = {
  url: string;
  loop: boolean;
}

export default function Player({ url, loop }: AudioPlayerProps) {
  return (
    <AudioPlayer
      autoPlay
      src={url}
      loop={loop ?? false}
      preload='none'
    />
  );
}