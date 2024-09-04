export const getColorByTileNumber = (tileNumber) => {
  if (Number.isNaN(tileNumber)) {
    throw new Error("Invalid tile number");
  }
  let color;

  switch (tileNumber % 7) {
    case 0:
      color = "#f9c74f";
      break; // Red
    case 1:
      color = "#90be6d";
      break; // Orange
    case 2:
      color = "#f72585";
      break; // Yellow
    case 3:
      color = "#7209b7";
      break; // Green
    case 4:
      color = "#3a0ca3";
      break; // Blue
    case 5:
      color = "#004e98";
      break; // Indigo
    case 6:
      color = "#4cc9f0";
      break; // Violet
    default:
      color = "Invalid"; // Optional default case
  }
  return color;
};

// function printMove(startRod,endRod){
//   console.log( {
//     source:startRod,
//     destination:endRod
//   }  )

// }

// export function* solveTowerOfHanoi(numberOfTiles,startRod,endRod,otherRod,steps=[]){
//   if(numberOfTiles===1){
//     steps.push( printMove(startRod,endRod))
//     return steps;
//     }
//   solveTowerOfHanoi(numberOfTiles-1,startRod,otherRod,endRod)
//   steps.push(printMove(startRod,endRod))
//   solveTowerOfHanoi(numberOfTiles-1,otherRod,endRod,startRod)
//   return steps
// }

// export class TowerOfHanoi {
//   constructor(duration) {
//     this.steps = [];
//     this.duration = duration;
//   }

//   printMove(fromRod, toRod) {
//     return {
//       source: fromRod,
//       destination: toRod,
//     };
//   }
//   solve(numberOfTiles, startRod, endRod, otherRod) {
//     console.log("numberOfTiles", numberOfTiles);
//     if (numberOfTiles === 1) {
//       return this.steps.push(this.printMove(startRod, endRod));
//     }
//     this.solve(numberOfTiles - 1, startRod, otherRod, endRod);
//     this.steps.push(this.printMove(startRod, endRod));
//     this.solve(numberOfTiles - 1, otherRod, endRod, startRod);
//   }

//   getSteps() {
//     return this.steps;
//   }

//   async *stepIterator() {
//     for (const step of this.steps) {
//       yield step;
//       await new Promise((resolve) => setTimeout(resolve, this.duration ?? 200));
//     }
//   }
// }
export class TowerOfHanoi {
  constructor(duration) {
    this.steps = [];
    this.duration = duration;
  }

  setDuration(newDuration) {
    this.duration = newDuration;
  }

  printMove(fromRod, toRod) {
    return {
      source: fromRod,
      destination: toRod,
    };
  }

  solve(numberOfTiles, startRod, endRod, otherRod) {
    if (numberOfTiles === 1) {
      return this.steps.push(this.printMove(startRod, endRod));
    }
    this.solve(numberOfTiles - 1, startRod, otherRod, endRod);
    this.steps.push(this.printMove(startRod, endRod));
    this.solve(numberOfTiles - 1, otherRod, endRod, startRod);
  }

  getSteps() {
    return this.steps;
  }

  async *stepIterator() {
    for (const step of this.steps) {
      yield step;
      await new Promise((resolve) => setTimeout(resolve, this.duration ?? 200));
    }
  }
}
