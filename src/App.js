import Tile from "./components/Tile/Tile";
import Rod from "./components/Rod/Rod";
import { useEffect, useState, useRef } from "react";
import { TowerOfHanoi } from "./utils/helperFunctions";

const App = () => {
  const [numTiles, setNumTiles] = useState(3);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [steps, setSteps] = useState([]);
  const [hanoi, setHanoi] = useState(new TowerOfHanoi(animationSpeed));
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);

  const animationRef = useRef(null); // Ref to track the animation process

  // Initialize the tile numbers for rods A, B, and C
  const initializeTiles = (numTiles) => {
    return {
      A: Array.from({ length: numTiles }, (_, i) => i + 1), // Tiles in decreasing order
      B: [],
      C: [],
    };
  };

  const [tileNumbers, setTileNumbers] = useState(initializeTiles(numTiles));

  useEffect(() => {
    hanoi.setDuration(animationSpeed);
  }, [animationSpeed]);

  const handleSaveChanges = () => {
    setIsAnimating(false);
    setSteps([]);
    const hanoiInstance = new TowerOfHanoi(animationSpeed);
    setHanoi(hanoiInstance);
    const tiles = initializeTiles(numTiles);
    setTileNumbers(tiles);
    hanoiInstance.solve(numTiles, "A", "C", "B");
    setSteps(hanoiInstance.stepIterator());
  };

  const moveTileFromStartToEnd = (source, destination) => {
    setCurrentStep(`Move from ${source} to ${destination}`);
    setTimeout(() => {
      setTileNumbers((prevState) => {
        const startRodState = prevState[source];
        const tileToBeMoved = startRodState[0];
        const destinationRodState = prevState[destination];
        const indexOfTileInSourceRod = startRodState.indexOf(tileToBeMoved);
        startRodState.splice(indexOfTileInSourceRod, 1);
        return {
          ...prevState,
          [source]: startRodState,
          [destination]: [tileToBeMoved, ...destinationRodState],
        };
      });
    }, [animationSpeed / 2]);
  };

  const startAnimation = async () => {
    setIsAnimating(true);

    // Start the animation process and store it in the ref
    animationRef.current = (async () => {
      for await (const step of steps) {
        moveTileFromStartToEnd(step.source, step.destination);
      }
      setIsAnimating(false);
    })();
  };

  const stopAnimation = () => {
    // Stop the current animation by setting the ref to null
    if (animationRef.current) {
      animationRef.current = null;
      setIsAnimating(false);
    }
  };

  const replayAnimation = () => {
    stopAnimation(); // Stop the current animation
    handleSaveChanges(); // Reset the tiles and steps
    startAnimation(); // Start the animation again
  };

  return (
    <div className="App flex flex-col items-center mt-10 space-y-4">
      <div className="flex mb-6 space-x-4">
        {/* Number of Tiles Input */}
        <div>
          <label htmlFor="numTiles" className="block text-lg font-medium mb-2">
            Number of Tiles
          </label>
          <input
            id="numTiles"
            type="number"
            min="1"
            value={numTiles}
            onChange={(e) => setNumTiles(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 w-24 text-center"
            disabled={isAnimating}
          />
        </div>

        {/* Animation Speed Input */}
        <div>
          <label
            htmlFor="animationSpeed"
            className="block text-lg font-medium mb-2"
          >
            Animation Speed (ms)
          </label>
          <input
            id="animationSpeed"
            type="range"
            min="100"
            max="2000"
            step="100"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
            className="w-36"
          />
          <div className="text-center mt-2 text-sm">{animationSpeed} ms</div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleSaveChanges}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={isAnimating}
        >
          Save Changes
        </button>
        <button
          onClick={startAnimation}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          disabled={isAnimating || steps.length === 0}
        >
          Start
        </button>
        <button
          onClick={replayAnimation}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          disabled={isAnimating && animationRef.current === null}
        >
          Replay
        </button>
      </div>

      {/* Display Current Step */}
      <div className="text-3xl font-semibold mt-4">{currentStep}</div>

      {/* Rods and Tiles */}

      <div className="flex mt-4 space-x-16">
        <Rod rodName="A">
          <div className="flex w-2 h-48 bg-black">
            <div className="opacity-95 self-end">
              {tileNumbers["A"].map((tileSize, index) => (
                <Tile key={index} n={tileSize} />
              ))}
            </div>
          </div>
        </Rod>
        <Rod rodName="B">
          <div className="flex w-2 h-48 bg-black">
            <div className="opacity-95 self-end">
              {tileNumbers["B"].map((tileSize, index) => (
                <Tile key={index} n={tileSize} />
              ))}
            </div>
          </div>
        </Rod>
        <Rod rodName="C">
          <div className="flex w-2 h-48 bg-black">
            <div className="opacity-95 self-end">
              {tileNumbers["C"].map((tileSize, index) => (
                <Tile key={index} n={tileSize} />
              ))}
            </div>
          </div>
        </Rod>
      </div>
    </div>
  );
};

export default App;
