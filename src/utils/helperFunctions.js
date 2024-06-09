export const getColorByTileNumber=(tileNumber)=>{
    if(Number.isNaN(tileNumber)){
        throw new Error('Invalid tile number')
    }
    let color;
    console.log("tileNumber",tileNumber % 7)
    switch (tileNumber % 7) {
        case 0:
          color = '#FF0000';
          break; // Red
        case 1:
          color = '#FF7F00';
          break; // Orange
        case 2:
          color = '#FFFF00';
          break; // Yellow
        case 3:
          color = '#00FF00';
          break; // Green
        case 4:
          color = '#0000FF';
          break; // Blue
        case 5:
          color = '#4B0082';
          break; // Indigo
        case 6:
          color = '#8B00FF';
          break; // Violet
        default:
          color = 'Invalid'; // Optional default case
      }
      return color;
    
}