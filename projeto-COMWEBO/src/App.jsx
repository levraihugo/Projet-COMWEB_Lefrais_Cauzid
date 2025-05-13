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
      <input type="text" id="identifiant" name="identifiant" />
    </div>
  )
}

function Mdp(Props) {
  return (
    <div>
      <label for="mdp">Mot de passe : </label>
      <input type="password" id="mpd" name="mdp" />
    </div>
  )
}

function Profession(Props) {
  return (
    <div>
      <p>Vous êtes :</p>
      <input type='radio' id='eleve' name='profession' value={1} required></input>
      <label for="eleve">Élève</label>
      <input type='radio' id='professeur' name='profession' value={2} required></input>
      <label for="eleve">Professeur</label>
    </div>
  )
}

function AffichageNotes() {
  const [notes, setNotes] = useState([]);

  // return ();
}

function Authentification() {
  const jsondata = { id: "", mdp: "" }

}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Identifiant />
      <Mdp />
      <Profession />
      <Bouton />
    </>
  )
}

export default App
