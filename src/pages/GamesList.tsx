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
  const [currentGamesList, setCurrentGamesList] = useState<"suggestions" | "favorites">("suggestions");

  return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
            <button
                onClick={() => setCurrentGamesList("suggestions")}
                className={`px-4 py-2 rounded-md transition-colors text-white cursor-pointer hover:opacity-70 ${currentGamesList === "suggestions" ? "bg-purple-600" : "bg-gray-800"}`}
            >
              Sugestões
            </button>
            <button
                onClick={() => setCurrentGamesList("favorites")}
                className={`px-4 py-2 rounded-md transition-colors text-white cursor-pointer hover:opacity-70 ${currentGamesList === "favorites" ? "bg-purple-600" : "bg-gray-800"}`}
            >
              Favoritos
            </button>
          </div>
          <button
              onClick={onReset}
              className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Recomeçar
          </button>
        </div>

        {currentGamesList === "suggestions" &&
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
        }

        {currentGamesList === "favorites" &&
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
        }
      </div>
  );
};

export default GameList;