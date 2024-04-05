import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MeuCarrousel() {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      //   renderArrowPrev={() => <SetaCustomizada />}
    >
      <div>
        <img
          src="logo_adm.png"
          style={{
            height: "300px",
            width: "315px",
            borderRadius: "15px",
            marginBottom: "45px",
            marginLeft: "-200px",
            marginRight: "-200px",
          }}
          alt="imagem do mario"
        />
      </div>
      <div>
        <img
          src="logo_si1.png"
          style={{ height: "300px", width: "315px", borderRadius: "15px" }}
          alt="imagem do mario"
        />
      </div>
      <div>
        <img
          src="logo_si.png"
          style={{ height: "300px", width: "315px", borderRadius: "15px" }}
          alt="imagem do mario"
        />
      </div>
    </Carousel>
  );
}

// // // function SetaCustomizada() {
// // //   return (
// // //     <div
// // //       style={{
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         justifyContent: "center",
// // //         height: "100%",
// // //         position: "absolute",
// // //       }}
// // //     >
// // //       <img
// // //         src="seta_baixo.png"
// // //         style={{ height: 15, width: 20 }}
// // //         alt="imagem de uma seta"
// // //       />
// // //     </div>
// // //   );
// // // }

export { MeuCarrousel };
