import { Link } from 'react-router-dom'
import './style/Header.css'

export default function header () {
    return(
    <header className="App">
    <Link className="lien" to="/"><h1 className='h1 liheader'>La table de Chantal</h1></Link>

    <ul className="navbar">
      <Link className="lien" to="/"><li className='liheader'>Accueil</li></Link>
      <Link className="lien" to="/contact"><li className='liheader'>Contact</li></Link>
      <Link className="lien" to="/boissons"><li className='liheader'>Boissons</li></Link>
      <Link className="lien" to="/plats"><li className='liheader'>Plats</li></Link>
    </ul>
  </header>
    )
}

