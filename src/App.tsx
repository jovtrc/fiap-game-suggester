import GameForm from "./pages/Form.tsx";
import {useState} from "react";
import {Game} from "./types/Games.ts";
import {games} from "./data/games.ts"
import GamesList from "./pages/GamesList.tsx";

function App() {
  const [shouldShowGamesList, setShouldShowGamesList] = useState(false);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);

  const handleSubmit = (genre: string, price: string) => {
    const newFilteredGames = games.filter((game) => {
      return game.genre === genre && game.price <= parseInt(price)
    })

    setFilteredGames(newFilteredGames)
    setShouldShowGamesList(true)
  }

  const handleFavoriteGame = (game: Game) => {
    setFavoriteGames((previousFavorites) => {
      if (previousFavorites.some((favorite) => favorite.id === game.id)) {
        return previousFavorites.filter((favorite) => favorite.id !== game.id)
      }

      return [...previousFavorites, game]
    })
  }

  const handleReset = () => {
    setShouldShowGamesList(false)
    setFilteredGames([])
  }

  return (
      <div className="min-w-screen min-h-screen flex items-center justify-center from-slate-900 to-slate-950 bg-gradient-to-br">
        <div className="max-w-6xl w-full">
          {!shouldShowGamesList &&
              <GameForm onSubmit={handleSubmit} />
          }

          {shouldShowGamesList &&
              <GamesList games={filteredGames} favorites={favoriteGames} onFavorite={handleFavoriteGame} onReset={handleReset} />
          }
        </div>
      </div>
  )
}

export default App
