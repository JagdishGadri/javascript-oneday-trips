import Tile from "./components/Tile/Tile";
import Rod from "./components/Rod/Rod";

function App() {
  return (
    <div className="App flex mt-[10%] ml-[25%] ">
      <Rod rodName="A">
        <div className="flex w-[8px] h-[200px] bg-black ">
          <div className="opacity-95 self-end">
            {new Array(7).fill(null).map((_, index) => {
              return <Tile n={index + 1}> </Tile>;
            })}
          </div>
        </div>
      </Rod>
      <Rod rodName="B">
        <div className="flex w-[8px] h-[200px] bg-black  ">
          {/* <div className="opacity-95 self-end">
          {new Array(7).fill(null).map((_, index) => {
            return <Tile n={index + 1} > </Tile>
          })}
        </div> */}
        </div>
      </Rod>
      <Rod rodName="C">
        <div className="flex w-[8px] h-[200px] bg-black  ">
          {/* <div className="opacity-95 self-end">
          {new Array(7).fill(null).map((_, index) => {
            return <Tile n={index + 1} > </Tile>
          })}
        </div> */}
        </div>
      </Rod>
    </div>
  );
}

export default App;
