import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  url: string;
  loop: boolean;
  height: number;
  width: number;
};

export default function VideoPlayer({ url, loop, height, width }: VideoPlayerProps) {
  return (
    <div className='mt-6 max-w-[256px]'>
      <ReactPlayer url={url} controls={true} loop={loop} height={height} width={width} />
      <small>MRI 1. Janet Beck. Voiceless bilabial plosive. Seeing Speech. Glasgow: University of Glasgow, 2018. <a href="https://seeingspeech.ac.uk/ipa-charts/" target='_blank' className='hover:underline'>🌐 Web URL</a></small>
    </div>
  );
}