import { useState } from 'react'
import './App.css'


function Bouton(Props) {
  return (
    <p>
      <button onClick={Props.cliquer}>
        Se connecter
      </button>
    </p>
  )
}

function Identifiant(Props) {
  return (
    <div>
      <label for="Identifiant">Identifiant : </label>
      <input type="text" id="identifiant" name="identifiant"></input>
    </div>
  )
}

function Mdp(Props) {
  return (
    <div>
      <label for="mdp">Mot de passe : </label>
      <input type="password" id="mdp" name="mdp"></input>
    </div>
  )
}

function Profession(Props) {
  return (
    <div>
      <p>Vous êtes :</p>
      <input type='radio' id='role' name='role' value="eleves" required></input>
      <label>Élève</label>
      <input type='radio' id='role' name='role' value="profs" required></input>
      <label>Professeur</label>
    </div>
  )
}

function AffichageNotes(Props) {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <p>Matière______Note</p>
      {Props.liste.map(elt => <li key={elt}>{elt[0]} {elt[1]}</li>)}
    </>
  )
}

function Authentification() {
}


function App() {
  // const jsondata = { matiere: "", note: "" }
  const [data, setData] = useState()
  const [identifiant, setID] = useState()
  const [mdp, setMdp] = useState()
  const [role, setRole] = useState()
  const [hasNotes, setState] = useState(false)

  const acces = function () {
    setID(document.getElementById("identifiant").value)
    setMdp(document.getElementById("mdp").value)
    setRole(document.getElementById("role").value)
    let url = `https://localhost/Projet-COMWEB_Lefrais_Cauzid/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`;
    fetch(url)
      .then(r => r.json())
      .then(datas => { setData(datas) })
    if (datas.length == 0) {
      setState(false)
    }
    else {
      setState(true)
    }
  }

  return (
    <>
      <Identifiant />
      <Mdp />
      <Profession />
      <Bouton cliquer={acces} />
    </>
  )
}

export default App
