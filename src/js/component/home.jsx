import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import invierno from "../../img/invierno.jpg"
import primavera from "../../img/primavera.jpg"
import verano from "../../img/verano.jpg"
import otono from "../../img/otono.jpg"
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx"
//create your first component
const cards = [
	{ title: "Invierno", description: "Cuando llega el invierno, las temperaturas son frías y la nieve aparece a veces para cubrir la naturaleza con un hermoso manto blanco. Los meses de invierno son: diciembre, enero, febrero y marzo.", buttonUrl:"https://es.wikipedia.org/wiki/Invierno", buttonLabel: "Go to Wikipedia", imgUrl: invierno},
	{ title: "Verano", description: "Cuando llega el verano, el sol brilla con fuerza y la temperatura es cálida. Psst, es hora de sacar los trajes de baño y darse un chapuzón en el mar o en la piscina. Los meses de verano son: junio, julio, agosto y septiembre.", buttonUrl:"https://es.wikipedia.org/wiki/Verano",buttonLabel: "Go to Wikipedia", imgUrl: verano},
	{ title: "Otoño", description: "En otoño, las hojas verdes se vuelven anaranjadas antes de caer y crear un bonito paisaje naranja y amarillo. Los meses de otoño son: septiembre, octubre, noviembre y diciembre.", buttonUrl:"https://es.wikipedia.org/wiki/Otoño",buttonLabel: "Go to Wikipedia", imgUrl: otono},
	{ title: "Primavera", description: "En primavera, la temperatura se suaviza, pero sigue siendo fresca. La naturaleza está en plena floración y los árboles se cubren poco a poco de hojas, dando paso a un hermoso y colorido paisaje y se escucha el canto de los pájaros. Los meses de primavera son: marzo, abril, mayo y junio.",buttonUrl:"https://es.wikipedia.org/wiki/Primavera", buttonLabel: "Go to Wikipedia", imgUrl: primavera}
];
const Home = () => {
	return (

		<div className="container-fliud">
			<NavBar />
			<Jumbotron title="A warm Welcome!" buttonUrl="https://www.google.com" buttonLabel="Call to action!"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro laudantium eaque alias ut. Dicta ipsum veritatis molestiae ea repellat reprehenderit deserunt magni delectus quasi quas, doloremque aut voluptatum nobis impedit inventore qui, accusantium soluta repellendus amet. Distinctio quae provident ratione consectetur eius tenetur dicta temporibus, atque fugit, doloribus ipsa." />
			<div className="card-group mb-5 text-center">
				{cards.map((value, index) => {
					return <Card key={index} title={value.title} description={value.description} buttonLabel={value.buttonLabel} imgUrl={value.imgUrl} buttonUrl={value.buttonUrl}/>
				})
				}
			</div>
				<Footer text= "Copyright @ Your Website 2023"/>
		</div>
	);
};

export default Home;
