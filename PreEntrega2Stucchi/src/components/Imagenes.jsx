import notebook01 from "../assets/notebook01.png";
import notebook02 from "../assets/notebook02.jfif";
import notebook03 from "../assets/notebook03.jfif";
import horno01 from "../assets/horno01.jfif";
import horno02 from "../assets/horno02.jpg";
import heladera01 from "../assets/heladera01.jpg";
import heladera02 from "../assets/heladera02.jfif";




const ImagenAMostrar = function (imagen) {
    console.log(imagen);
      switch (imagen) {
          case "notebook01":
            return notebook01;
          case "notebook02":
            return notebook02;
          case "notebook03":
            return notebook03;
          case "horno01":
            return horno01;
          case "horno02":
            return horno02;
          case "heladera01":
            return heladera01;
          case "heladera02":
            return heladera02;
          default:
            return notebook02;
          } 
}

export default ImagenAMostrar;