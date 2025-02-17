
interface Form {
  onSubmit: (genre: string, maxPrice: string) => void;
}

const GameForm = () => {
  return (
      <form className="max-w-md mx-auto">
        <div className="relative min-h-[300px] flex items-center justify-center">
          <div className="w-3xl space-y-6 p-8 bg-gray-800 rounded-lg shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white text-center">Que tipo de jogo você gosta?</h2>
                  <div className="space-y-2">
                    <select
                        className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="">Selecione um gênero</option>
                      <option value="shooter">Tiro</option>
                      <option value="rpg">RPG</option>
                      <option value="strategy">Estratégia</option>
                      <option value="sports">Esporte</option>
                    </select>
                  </div>
                  <button
                      type="button"
                      className="w-full py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Próximo
                  </button>
              </div>

              <div className="space-y-4 hidden">
                <h2 className="text-2xl font-bold text-white text-center">Quanto quer gastar?</h2>
                <div className="space-y-2">
                  <select
                      className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="">Selecione um preço máximo</option>
                    <option value="0">Grátis</option>
                    <option value="10">$10</option>
                    <option value="40">$40</option>
                    <option value="70">$70</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <button
                      type="button"
                      className="w-full py-2 px-4 border border-sky-500 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    Voltar
                  </button>
                  <button
                      type="submit"
                      className="w-full py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Encontrar jogos
                  </button>
                </div>
            </div>
          </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 pb-4">
              <div
                  className={`h-2 w-2 rounded-full transition-colors duration-300 bg-sky-600`}/>
              <div
                  className={`h-2 w-2 rounded-full transition-colors duration-300 bg-gray-700`}/>
            </div>
          </div>
      </form>
  );
};

export default GameForm;