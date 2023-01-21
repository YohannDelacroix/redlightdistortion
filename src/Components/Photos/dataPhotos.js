//Import all the images from the folder ./Galery
function importAll(r){
    let images = [];
    r.keys().map((item, index) => {
      return images.push(r(item));
    });
    return images;
  }

export const images = importAll(require.context('./Galery', false, /\.(png|jpe?g|svg)$/));