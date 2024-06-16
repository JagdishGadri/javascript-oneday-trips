
import Tile from "./components/Tile/Tile";
import Rod from "./components/Rod/Rod";
import { useEffect, useState } from "react";

function App() {
  const [tileNumbers,setTileNumbers]=useState({
    A:[1,2,3,4,5,6,7],
    B:[],
    C:[]
  })

  const moveTileFromStartToEnd=(tileNumber,source,destination)=>{
    setTileNumbers((prevState)=>{
        const startRodState=prevState[source]
        const destinationRodState=prevState[destination]
        const indexOfTileInSourceRod=startRodState.indexOf(tileNumber)
        startRodState.splice(indexOfTileInSourceRod,1)
        return {...prevState,[source]:startRodState,[destination]:[tileNumber,...destinationRodState]}
    })
  }

  useEffect(()=>{
const intervalId=setInterval(()=>{
  moveTileFromStartToEnd(tileNumbers['A'][0],'A','B')

},3000)

return ()=>{clearInterval(intervalId)
 }
  },[tileNumbers])

  

  return (
    <div className="App flex mt-[10%] ml-[25%] ">
      <Rod rodName="A">
        <div className="flex w-[8px] h-[200px] bg-black ">
          <div className="opacity-95 self-end">
            {tileNumbers['A'].map((tileSize, index) => {
              return tileSize && <Tile n={tileSize} className={'animate-fadeIn'}> </Tile>;
            })}
          </div>
        </div>
      </Rod>
      <Rod rodName="B">
        <div className="flex w-[8px] h-[200px] bg-black  ">
          <div className="opacity-95 self-end">
          {tileNumbers['B'].map((tileSize, index) => {
            return tileSize &&  <Tile n={tileSize} > </Tile>
          })}
        </div>
        </div>
      </Rod>
      <Rod rodName="C">
        <div className="flex w-[8px] h-[200px] bg-black  ">
          <div className="opacity-95 self-end">
          {tileNumbers['C'].map((tileSize, index) => {
            return tileSize && <Tile n={tileSize} > </Tile>
          })}
        </div>
        </div>
      </Rod>
    </div>
  );
}

export default App;
