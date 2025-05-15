import { useState } from 'react'
import './App.css'


function Bouton({cliquer}) {
  return (
    <p>
      <button onClick={cliquer}>
        Se connecter
      </button>
    </p>
  )
}

function Identifiant({onChange}) {
  return (
    <div>
      <label >Identifiant : </label>
      <input type="text" id="identifiant" onChange={onChange}></input>
    </div>
  )
}

function Mdp({onChange}) {
  return (
    <div>
      <label >Mot de passe : </label>
      <input type="password" id="mdp" onChange={onChange}></input>
    </div>
  )
}

function Profession({onChange}) {
  return (
    <div>
      <p>Vous êtes :</p>
      <input type='radio' name='role' value="eleves" onChange={onChange}></input>
      <label>Élève</label>
      <input type='radio'  name='role' value="profs" onChange={onChange}></input>
      <label>Professeur</label>
    </div>
  )
}

function AffichageNotes({notes}) {
  return (
    <>
      <p>Matière______Note</p>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note.Matiere} - {note.Note}</li>
        ))}
      </ul>
    </>
  );
}




function App() {
  // const jsondata = { matiere: "", note: "" }
  const [data, setData] = useState(null)
  const [identifiant, setID] = useState('')
  const [mdp, setMdp] = useState('')
  const [role, setRole] = useState('')
  const [hasNotes, setState] = useState(false)

  const acces = () => {
    const url = `http://localhost/Projet-COMWEB_Lefrais_Cauzid/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`
    fetch(url)
      .then(r => r.json())
      .then(datas => {
        console.log(datas)
        setData(datas)
      })
  }

  return (
    <>
      <Identifiant onChange={(e) => setID(e.target.value)} />
      <Mdp onChange={(e) => setMdp(e.target.value)} />
      <Profession onChange={(e) => setRole(e.target.value)} />
      <Bouton cliquer={acces} />
      {data && data.notes && <AffichageNotes notes={data.notes} />}
    </>
  )
}

export default App
