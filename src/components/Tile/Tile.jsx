import React from 'react'
import { getColorByTileNumber } from '../../utils/helperFunctions'
function Tile({ n,className }) {
  const tileColor = getColorByTileNumber(n)
  const tileWidth = n * 20
  const tileStyle = {
    borderColor: tileColor,
    width: tileWidth,
    //change 4 to half of the rod width
    marginLeft: `-${(tileWidth / 2) - 4}px`,
  }
  return (
    <div style={tileStyle} className={`${className} h-4 border-16 sm:border-4 lg:border-[8px] rounded`}>  </div>
  )
}

export default Tile