import { ReactComponent as DominoIcon } from './icons/6dots.svg'
import cakeImg from './images/photo1.png'

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen max-w-screen-lg p-6 mx-auto">
      <div className="my-4">
        <h1 className="font-serif font-bold text-5xl mb-4">
          Classic Cheesecake Recipe
        </h1>
        <div className="flex text-sm  text-gray-700">
          <div className="flex items-end  mr-2" style={{ height: '1em' }}>
            <DominoIcon />
          </div>
          <p className="italic max-w-lg">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
      </div>
      <img className="my-4" src={cakeImg} alt="cake" />
      <div className="flex justify-between my-4">
        <div>Ingredients</div>
        <div>Info</div>
      </div>
      <div className="text-center text-xs mt-20">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
