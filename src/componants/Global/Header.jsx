import './style/Header.css'

export default function header () {
    return(
    <header className="App">
    <h1 className='h1'>La table de Chantal</h1>

    <ul className="navbar">
      <a className="lien" href="#"><li>Acceuil</li></a>
      <a className="lien" href="#"><li>Contact</li></a>
      <a className="lien" href="#"><li>Boissons</li></a>
      <a className="lien" href="#"><li>Plats</li></a>
    </ul>
  </header>
    )
}

