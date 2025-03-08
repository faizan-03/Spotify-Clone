import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/solid';
import { SwatchIcon } from '@heroicons/react/24/outline';
import { useRef, useEffect, useState } from 'react';

const THEMES = [
  { id: 'light', name: 'Light', icon: '☀️' },
  { id: 'dark', name: 'Dark', icon: '🌑' },
  { id: 'spotify', name: 'Spotify', icon: '🎵' }
];

const FEATURED_PLAYLISTS = [
  {
    id: 1,
    title: 'Today\'s Top Hits',
    description: 'Jung Kook is on top of the Hottest 50!',
    imageUrl: 'https://picsum.photos/id/65/300/300'
  },
  {
    id: 2,
    title: 'RapCaviar',
    description: 'New music from Drake, Travis Scott, and more',
    imageUrl: 'https://picsum.photos/id/68/300/300'
  },
  {
    id: 3,
    title: 'All Out 2010s',
    description: 'The biggest songs of the 2010s',
    imageUrl: 'https://picsum.photos/id/71/300/300'
  },
  {
    id: 4,
    title: 'Rock Classics',
    description: 'Rock legends & epic songs',
    imageUrl: 'https://picsum.photos/id/76/300/300'
  },
  {
    id: 5,
    title: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits',
    imageUrl: 'https://picsum.photos/id/80/300/300'
  }
];

const RECENT_PLAYED = [
  {
    id: 1,
    title: 'Liked Songs',
    type: 'Playlist',
    imageUrl: 'https://picsum.photos/id/100/300/300'
  },
  {
    id: 2,
    title: 'Daily Mix 1',
    type: 'Mix',
    imageUrl: 'https://picsum.photos/id/101/300/300'
  },
  {
    id: 3,
    title: 'Discover Weekly',
    type: 'Playlist',
    imageUrl: 'https://picsum.photos/id/102/300/300'
  },
  {
    id: 4,
    title: 'Release Radar',
    type: 'Playlist',
    imageUrl: 'https://picsum.photos/id/103/300/300'
  },
  {
    id: 5,
    title: 'Your Top Songs',
    type: 'Playlist',
    imageUrl: 'https://picsum.photos/id/104/300/300'
  },
  {
    id: 6,
    title: 'Summer Mix',
    type: 'Mix',
    imageUrl: 'https://picsum.photos/id/105/300/300'
  },
  {
    id: 7,
    title: 'Chill Vibes',
    type: 'Playlist',
    imageUrl: 'https://picsum.photos/id/106/300/300'
  },
  {
    id: 8,
    title: 'Rock Classics',
    type: 'Playlist',
    imageUrl: 'https://picsum.photos/id/107/300/300'
  }
];

const MainContent = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useState('spotify');

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'spotify';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  const handleThemeChange = (themeId: string) => {
    document.documentElement.setAttribute('data-theme', themeId);
    setCurrentTheme(themeId);
    localStorage.setItem('theme', themeId);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-base-100">
      {/* Header */}
      <header className="sticky top-0 bg-base-100 z-10 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="btn btn-circle btn-sm bg-base-200 hover:bg-base-300 border-none text-base-content"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="btn btn-circle btn-sm bg-base-200 hover:bg-base-300 border-none text-base-content"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm gap-2 normal-case bg-base-200 hover:bg-base-300 border-none text-base-content">
              <SwatchIcon className="h-5 w-5" />
              <span>{THEMES.find(t => t.id === currentTheme)?.icon}</span>
              <span>{THEMES.find(t => t.id === currentTheme)?.name}</span>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-200 rounded-box w-52 mt-2">
              {THEMES.map((theme) => (
                <li key={theme.id}>
                  <button 
                    onClick={() => handleThemeChange(theme.id)}
                    className={`flex items-center justify-between hover:bg-base-300 text-base-content ${
                      currentTheme === theme.id ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{theme.icon}</span>
                      <span>{theme.name}</span>
                    </span>
                    {currentTheme === theme.id && (
                      <span className="text-primary">✓</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn btn-sm bg-base-200 hover:bg-base-300 border-none text-base-content normal-case">
            Sign Up
          </button>
          <button className="btn btn-primary btn-sm normal-case">
            Log In
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="p-6">
        {/* Recently Played Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-base-content">Recently Played</h2>
          <div 
            ref={sliderRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {RECENT_PLAYED.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[180px] bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors group cursor-pointer snap-start"
              >
                <div className="relative mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-xl hover:scale-105 transition-all">
                    <PlayIcon className="h-6 w-6 text-primary-content" />
                  </button>
                </div>
                <h3 className="font-semibold truncate text-base-content">{item.title}</h3>
                <p className="text-sm text-base-content/60">{item.type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Playlists */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-base-content">Featured Playlists</h2>
            <a href="#" className="text-sm font-semibold text-base-content/60 hover:text-base-content hover:underline">
              Show all
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {FEATURED_PLAYLISTS.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors group cursor-pointer"
              >
                <div className="relative mb-4">
                  <img
                    src={playlist.imageUrl}
                    alt={playlist.title}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-xl hover:scale-105 transition-all">
                    <PlayIcon className="h-6 w-6 text-primary-content" />
                  </button>
                </div>
                <h3 className="font-semibold mb-1 truncate text-base-content">{playlist.title}</h3>
                <p className="text-base-content/60 text-sm line-clamp-2">{playlist.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent; 