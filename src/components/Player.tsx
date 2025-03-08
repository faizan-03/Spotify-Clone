import { PlayIcon, ForwardIcon, BackwardIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';
import { images } from '../assets/images';

const Player = () => {
  return (
    <div className="player h-player px-4">
      <div className="flex items-center justify-between h-full">
        {/* Now Playing */}
        <div className="flex items-center w-1/3">
          <img
            src={images.currentSong}
            alt="Album Cover"
            className="h-14 w-14 rounded shadow-lg"
          />
          <div className="ml-4">
            <h4 className="text-base-content font-medium">Song Title</h4>
            <p className="text-secondary text-sm">Artist Name</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <button className="player-button">
              <BackwardIcon className="h-5 w-5" />
            </button>
            <button className="button-primary rounded-full p-2">
              <PlayIcon className="h-6 w-6" />
            </button>
            <button className="player-button">
              <ForwardIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-xs text-secondary">1:23</span>
            <div className="flex-1 progress-bar">
              <div className="progress-bar-fill w-1/3"></div>
            </div>
            <span className="text-xs text-secondary">3:45</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center justify-end w-1/3">
          <button className="player-button">
            <SpeakerWaveIcon className="h-5 w-5" />
          </button>
          <div className="w-24 progress-bar ml-2">
            <div className="progress-bar-fill w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player; 