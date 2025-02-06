import { Heart } from "lucide-react";
import { Game } from '../types/Games.ts';

interface GameCardProps {
  game: Game;
  onFavorite: (game: Game) => void;
  isFavorite: boolean;
}

const GameCard = ({ game, onFavorite, isFavorite }: GameCardProps) => {
  return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:animate-card-hover">
        <img
            src={game.imageUrl}
            alt={game.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white">{game.name}</h3>
            <button
                onClick={() => onFavorite(game)}
                className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${
                    isFavorite ? "text-purple-500" : "text-gray-400"
                }`}
            >
              <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <p className="text-gray-300 text-sm line-clamp-3">{game.description}</p>

          <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
            {game.genre}
          </span>
            <span className="text-white font-bold">
            {game.price === 0 ? "Grátis" : `$${game.price}`}
          </span>
          </div>

          <a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
          >
            <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors">
              View on Steam
            </button>
          </a>
        </div>
      </div>
  );
};

export default GameCard;