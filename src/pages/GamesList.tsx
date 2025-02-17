import GameCard from '../components/GameCard';
import { Game } from '../types/Games.ts';

interface GameListProps {
  games: Game[];
  favorites: Game[];
  onFavorite: (game: Game) => void;
  onReset: () => void;
}

const GameList = ({ games, favorites, onFavorite, onReset }: GameListProps) => {
  return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
            <button
                className={`px-4 py-2 rounded-md transition-colors bg-purple-600 text-white`}
            >
              Suggestions
            </button>
            <button
                className={`px-4 py-2 rounded-md transition-colors bg-purple-600 text-white`}
            >
              Favorites
            </button>
          </div>
          <button
              onClick={onReset}
              className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Recomeçar
          </button>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
          {favorites.map((game) => (
              <GameCard
                  key={game.id}
                  game={game}
                  onFavorite={onFavorite}
                  isFavorite={favorites.some(fav => fav.id === game.id)}
              />
          ))}
        </div>
      </div>
  );
};

export default GameList;