
import Tile from "./components/Tile/Tile";
import Rod from "./components/Rod/Rod";
import { useEffect, useState } from "react";
import { TowerOfHanoi, solveTowerOfHanoi } from "./utils/helperFunctions";

function App() {
  const [tileNumbers,setTileNumbers]=useState({
    A:[1,2,3],
    B:[],
    C:[]
  })

  const moveTileFromStartToEnd=(source,destination)=>{
    setTileNumbers((prevState)=>{
        const startRodState=prevState[source]
      const tileToBeMoved=startRodState[0] 
        const destinationRodState=prevState[destination]
        const indexOfTileInSourceRod=startRodState.indexOf(tileToBeMoved)
        startRodState.splice(indexOfTileInSourceRod,1)
        return {...prevState,[source]:startRodState,[destination]:[tileToBeMoved,...destinationRodState]}
    })
  }
  const towerOfHanoi=new TowerOfHanoi()
  towerOfHanoi.solve(3,'A','C','B')
  
  let intervalIds=[]


  useEffect(()=>{
 
//  const steps= towerOfHanoi.getSteps()

  // steps?.map((step,index)=>{
  //   console.log("step",step)
  //   const intervalId=setTimeout(()=>{
  //     moveTileFromStartToEnd(step.source,step.destination)
  //   },index+3000)
  //   intervalIds.push(intervalId)
  // })

  (async () => {
    const hanoi = new TowerOfHanoi();
    hanoi.solve(3, 'A', 'C', 'B');
    
    for await (const step of hanoi.stepIterator()) {
      moveTileFromStartToEnd(step.source,step.destination)

    }
  })();

// return ()=>{intervalIds.map((intervalId)=>clearInterval(intervalId))
//  }
  },[])

  console.log("intervalIds",intervalIds)


  console.log({tileNumbers})
  

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
