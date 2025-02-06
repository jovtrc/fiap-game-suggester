import { useState } from 'react'
import GameForm from "./pages/Form.tsx";

import { games } from "./data/games.ts"
import GamesList from "./pages/GamesList.tsx";

function App() {
  const [showGamesList, setShowGamesList] = useState(true)
  const [filteredGames, setFilteredGames] = useState<typeof games>([])
  const [favoriteGames, setFavoriteGames] = useState<typeof games>([])

  const handleFormSubmit = (genre: string, maxPrice: string) => {
    const filteredGames = games.filter(
        game => game.genre === genre && game.price <= parseInt(maxPrice)
    );
    setFilteredGames(filteredGames);
    setShowGamesList(true);
  };

  const handleFavoriteGame = (game: typeof games[0]) => {
    setFavoriteGames((prev) => {
        if (prev.some((fav) => fav.id === game.id)) {
            return prev.filter((fav) => fav.id !== game.id);
        }
        return [...prev, game];
    })
  }

  const handleReset = () => {
    setShowGamesList(false);
    setFilteredGames([]);
  };

  return (
      <div className="min-w-screen min-h-screen flex items-center justify-center from-slate-900 to-slate-950 bg-gradient-to-br">
        <div className="max-w-6xl w-full">
        {!showGamesList && (
            <GameForm onSubmit={handleFormSubmit} />
        )}

        {showGamesList && (
            <GamesList
                games={filteredGames}
                favorites={favoriteGames}
                onFavorite={handleFavoriteGame}
                onReset={handleReset}
            />
        )}
        </div>
      </div>
  )
}

export default App
