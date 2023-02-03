import "./style/home.css";
import Slider from "./style/componants/Slider"


export default function Home() {
  document.title = "La table de Chantal - Accueil"
  return (
    <div>
      <figure>
        <Slider/>
      </figure>
      <h2 className="h2Home">Chez la table de chantal</h2>

      <article className="artcResto">
        <img className="img2" src="./Imagesresto/resto4.png" alt="Resto" />
        <div>
        <h3 className="h3Home">Le resto</h3>
        <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas minus iure aut, eligendi eum neque culpa eius ad deleniti atque necessitatibus facere? Perspiciatis porro error beatae magnam, obcaecati quibusdam, rem expedita fugit nulla harum nobis ullam amet consectetur aut quis, optio dolore! Culpa expedita ut, sed quam aut enim suscipit officiis quos harum reprehenderit, id ipsa voluptatum in blanditiis minima asperiores voluptate cumque et ducimus quae maxime sint quisquam! Optio tempora quia aperiam, suscipit eaque in ipsum accusantium quasi ex fuga illo excepturi. In iure ipsum dicta quos recusandae atque non, aperiam labore porro enim neque optio facere eius perspiciatis natus dolores veritatis dolorem aliquid culpa adipisci ex a? Aliquam veritatis minus hic voluptatibus modi itaque perspiciatis voluptatum assumenda saepe similique dicta, qui iste, atque praesentium quisquam cupiditate, aperiam officiis illo ea soluta earum adipisci impedit? Facilis assumenda, ab unde excepturi error aut, nisi exercitationem, nulla ullam quo architecto harum dolorum culpa doloremque ducimus vitae doloribus non </p>
        </div>
      </article>
      <article className="artcResto">
        <div>
        <h3 className="h3Home">Le chef cuisto</h3>
        <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas minus iure aut, eligendi eum neque culpa eius ad deleniti atque necessitatibus facere? Perspiciatis porro error beatae magnam, obcaecati quibusdam, rem expedita fugit nulla harum nobis ullam amet consectetur aut quis, optio dolore! Culpa expedita ut, sed quam aut enim suscipit officiis quos harum reprehenderit, id ipsa voluptatum in blanditiis minima asperiores voluptate cumque et ducimus quae maxime sint quisquam! Optio tempora quia aperiam, suscipit eaque in ipsum accusantium quasi ex fuga illo excepturi. In iure ipsum dicta quos recusandae atque non, aperiam labore porro enim neque optio facere eius perspiciatis natus dolores veritatis dolorem aliquid culpa adipisci ex a? Aliquam veritatis minus hic voluptatibus modi itaque perspiciatis voluptatum assumenda saepe similique dicta, qui iste, atque praesentium quisquam cupiditate, aperiam officiis illo ea soluta earum adipisci impedit? Facilis assumenda, ab unde excepturi error aut, nisi exercitationem, nulla ullam quo architecto harum dolorum culpa doloremque ducimus vitae doloribus non </p>
        </div>
        <img className="img2" src="./Imagesresto/resto5.png" alt="" />
      </article>

      
    </div>
  );
}
