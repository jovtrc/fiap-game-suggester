import GameCard from '../components/GameCard';
import { Game } from '../types/Games.ts';
import {useState} from "react";

interface GameListProps {
  games: Game[];
  favorites: Game[];
  onFavorite: (game: Game) => void;
  onReset: () => void;
}

const GameList = ({ games, favorites, onFavorite, onReset }: GameListProps) => {
  const [activeTab, setActiveTab] = useState<'suggestions' | 'favorites'>('suggestions');

  return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
            <button
                onClick={() => setActiveTab('suggestions')}
                className={`px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'suggestions'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                }`}
            >
              Suggestions
            </button>
            <button
                onClick={() => setActiveTab('favorites')}
                className={`px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'favorites'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                }`}
            >
              Favorites
            </button>
          </div>
          <button
              onClick={onReset}
              className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Start Over
          </button>
        </div>

        {activeTab === 'suggestions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
              <GameCard
                  key={game.id}
                  game={game}
                  onFavorite={onFavorite}
                  isFavorite={favorites.some(fav => fav.id === game.id)}
              />
          ))}
        </div>
        )}

        {activeTab === 'favorites' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((game) => (
              <GameCard
                  key={game.id}
                  game={game}
                  onFavorite={onFavorite}
                  isFavorite={favorites.some(fav => fav.id === game.id)}
              />
          ))}
        </div>
        )}
      </div>
  );
};

export default GameList;