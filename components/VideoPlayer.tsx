import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  url: string;
  loop: boolean;
  height: number;
  width: number;
};

export default function VideoPlayer({ url, loop, height, width }: VideoPlayerProps) {
  return (
    <div className='mt-6'>
      <ReactPlayer url={url} controls={true} loop={loop} height={height} width={width} />
    </div>
  );
}