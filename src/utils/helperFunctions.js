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
