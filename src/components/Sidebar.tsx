import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Search', path: '/search', icon: MagnifyingGlassIcon },
    { name: 'Your Library', path: '/library', icon: BuildingLibraryIcon },
  ];

  return (
    <aside className="sidebar w-sidebar flex flex-col">
      {/* Navigation */}
      <nav className="p-6">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 text-secondary ${
                      isActive ? '!opacity-100' : ''
                    }`
                  }
                >
                  <Icon className="sidebar-icon" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Playlists */}
      <div className="mt-6 px-6">
        <button className="flex items-center gap-4 text-secondary">
          <PlusCircleIcon className="sidebar-icon" />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center gap-4 mt-4 text-secondary">
          <HeartIcon className="sidebar-icon" />
          <span>Liked Songs</span>
        </button>
      </div>

      <div className="border-t border-base-300 mt-4 mx-6"></div>

      {/* Playlist List */}
      <nav className="flex-1 overflow-y-auto p-6 pt-4">
        <ul className="space-y-2">
          {Array.from({ length: 50 }, (_, i) => (
            <li key={i}>
              <a href="#" className="text-secondary text-sm">
                My Playlist #{i + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 