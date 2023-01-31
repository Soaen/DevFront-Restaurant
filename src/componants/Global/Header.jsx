import './style/Header.css'

export default function header () {
    return(
    <header className="App">
    <h1 className='h1'>La table de Chantal</h1>

    <ul className="navbar">
      <a className="lien" href="#"><li className='liheader'>Acceuil</li></a>
      <a className="lien" href="#"><li className='liheader'>Contact</li></a>
      <a className="lien" href="#"><li className='liheader'>Boissons</li></a>
      <a className="lien" href="#"><li className='liheader'>Plats</li></a>
    </ul>
  </header>
    )
}

