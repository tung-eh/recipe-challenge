import React from 'react'

import { ReactComponent as ClockIcon } from './icons/schedule-24px.svg'
import { ReactComponent as DominoIcon } from './icons/6dots.svg'
import { ReactComponent as MealIcon } from './icons/restaurant_menu-24px.svg'
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import cakeImg from './images/photo1.png'

const Info = ({ Icon, title, value, color = 'gray-700', className }) => (
  <div
    className={
      `grid grid-cols-info items-center gap-x-1 md:gap-x-3 text-sm md:text-base text-${color} ` +
      className
    }
  >
    <Icon className="row-span-2" width="2em" height="2em" />
    <div className="uppercase font-bold text-xsem text-gray-400">{title}</div>
    <div className="text-smem">{value}</div>
  </div>
)

function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen max-w-screen-lg p-6 mx-auto">
      <div className="my-5">
        <h1 className="font-serif font-bold text-3xl md:text-5xl mb-4">
          Classic Cheesecake Recipe
        </h1>
        <div className="flex text-sm  text-gray-700">
          <div className="flex items-end mr-2" style={{ height: '1em' }}>
            <DominoIcon />
          </div>
          <p className="italic max-w-lg">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
      </div>
      <img className="my-5" src={cakeImg} alt="cake" />
      <div className="flex flex-col-reverse md:flex-row items-start justify-between my-5">
        <div className="grid gap-9 max-w-xl">
          <h1 className="font-serif font-bold text-2xl">Ingredients</h1>
          <Ingredients />
          <h1 className="font-serif font-bold text-2xl">Instructions</h1>
          <Instructions />
          <div className="italic text-gray-400 mt-10">{`Source: https://sallysbakingaddiction.com/classic-cheesecake/`}</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 rounded-xl md:shadow-md grid gap-10 pb-12 md:p-12">
          <Info
            Icon={MealIcon}
            title="Yields"
            value="12 servings"
            color="yellow-500"
            className="col-span-3 md:col-auto"
          />
          <Info Icon={ClockIcon} title="Prep time" value="45 minutes" />
          <Info Icon={ClockIcon} title="Cook time" value="1 hour" />
          <Info Icon={ClockIcon} title="Total time" value="1,75 hours" />
        </div>
      </div>
      <div className="text-center text-xs mt-20">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
