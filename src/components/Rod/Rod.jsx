import React from "react";
import Tile from "../Tile/Tile";

function Rod({ rodName, children }) {

  return (
    <div className="flex-row gap-3 p-[10%] ">
      {children}
      <p className="text-xl mt-2 ]">Rod {rodName}</p>
    </div>

  )

}

export default Rod;
