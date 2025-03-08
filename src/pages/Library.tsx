import { useState } from 'react';
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';

const PLAYLISTS = [
  { 
    id: 1, 
    name: 'Liked Songs', 
    type: 'Playlist', 
    owner: 'You', 
    lastPlayed: '2 hours ago', 
    imageUrl: 'https://picsum.photos/id/90/300/300' 
  },
  { 
    id: 2, 
    name: 'Your Top Songs 2023', 
    type: 'Playlist', 
    owner: 'Spotify', 
    lastPlayed: 'Yesterday', 
    imageUrl: 'https://picsum.photos/id/91/300/300' 
  },
  { 
    id: 3, 
    name: 'Discover Weekly', 
    type: 'Playlist', 
    owner: 'Spotify', 
    lastPlayed: '3 days ago', 
    imageUrl: 'https://picsum.photos/id/92/300/300' 
  },
  { 
    id: 4, 
    name: 'Daily Mix 1', 
    type: 'Mix', 
    owner: 'Spotify', 
    lastPlayed: 'A week ago', 
    imageUrl: 'https://picsum.photos/id/93/300/300' 
  }
];

const Library = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <main className="flex-1 bg-base-100 overflow-y-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-base-content">Your Library</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('grid')}
            className={`button-secondary p-2 rounded-full ${
              view === 'grid' ? 'bg-base-300' : ''
            }`}
          >
            <Squares2X2Icon className="h-5 w-5" />
          </button>
          <button
            onClick={() => setView('list')}
            className={`button-secondary p-2 rounded-full ${
              view === 'list' ? 'bg-base-300' : ''
            }`}
          >
            <ListBulletIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Playlists Grid/List View */}
      {view === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {PLAYLISTS.map((playlist) => (
            <div
              key={playlist.id}
              className="playlist-card group cursor-pointer"
            >
              <img
                src={playlist.imageUrl}
                alt={playlist.name}
                className="w-full aspect-square object-cover rounded-md shadow-lg mb-4"
              />
              <h3 className="font-semibold truncate text-base-content">{playlist.name}</h3>
              <p className="text-sm text-secondary">{playlist.type} • {playlist.owner}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {PLAYLISTS.map((playlist) => (
            <div
              key={playlist.id}
              className="flex items-center p-4 hover-effect rounded-md cursor-pointer"
            >
              <img
                src={playlist.imageUrl}
                alt={playlist.name}
                className="h-12 w-12 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-base-content">{playlist.name}</h3>
                <p className="text-sm text-secondary">{playlist.type} • {playlist.owner}</p>
              </div>
              <span className="text-sm text-secondary">{playlist.lastPlayed}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Library; 