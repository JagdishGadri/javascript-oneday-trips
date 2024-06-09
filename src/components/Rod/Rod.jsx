import React from "react";
import Tile from "../Tile/Tile";

function Rod({rodName}) {

  return (
<div className="flex justify-center align-center mt-48 ">
  <div className="w-[8px] h-[100px] bg-black  ">
    <div className="mt-12">
    <Tile n={1} > </Tile>
     <Tile n={2} > </Tile>
     <Tile n={3} > </Tile>
     <Tile n={4} > </Tile>
     <Tile n={5} > </Tile>
     <Tile n={6} > </Tile>
     <Tile le n={7} > </Tile>
    </div>

  </div>
  <h2 className="self-end mt-24 ">Rod {rodName}</h2>
  </div>

  )
  
}

export default Rod;
