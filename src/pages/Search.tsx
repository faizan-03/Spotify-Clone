import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const CATEGORIES = [
  { name: 'Podcasts', color: 'bg-primary' },
  { name: 'Live Events', color: 'bg-accent' },
  { name: 'Made For You', color: 'bg-secondary' },
  { name: 'New Releases', color: 'bg-primary' },
  { name: 'Pop', color: 'bg-accent' },
  { name: 'Hip-Hop', color: 'bg-secondary' },
  { name: 'Rock', color: 'bg-primary' },
  { name: 'Latin', color: 'bg-accent' }
];

const Search = () => {
  return (
    <main className="flex-1 bg-base-100 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="input w-full h-12 pl-12 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-base-content">Browse All</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              className={`aspect-square rounded-lg overflow-hidden relative hover:brightness-110 transition-all cursor-pointer ${category.color}`}
            >
              <h3 className="text-xl font-bold p-4 text-primary-content">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Search; 