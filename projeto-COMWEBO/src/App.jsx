import { useState } from 'react'
import './App.css'
import scoreImg from './assets/score.png';

function Logo(){
  return(
    <div><img style={{width:"30%"}}src={scoreImg} alt='texteauhasard'/><br/><br/></div>
  )
}

function Bouton({ cliquer }) {
  return (
    <p>
      <button onClick={cliquer}>
        Se connecter
      </button>
    </p>
  )
}

function Identifiant({ onChange }) {
  return (
    <div>
      <label >Identifiant : </label>
      <input type="text" id="identifiant" onChange={onChange}></input>
    </div>
  )
}

function Mdp({ onChange }) {
  return (
    <div>
      <label >Mot de passe : </label>
      <input type="password" id="mdp" onChange={onChange}></input>
    </div>
  )
}

function Profession({ onChange }) {
  return (
    <div>
      <p>Vous êtes :</p>
      <input type='radio' name='role' value="eleves" onChange={onChange}></input>
      <label>Élève</label>
      <input type='radio' name='role' value="profs" onChange={onChange}></input>
      <label>Professeur</label>
    </div>
  )
}

function AffichageNotesEleve({ prenom, nom, notes }) {
  return (
    <>
      <h2>Bienvenue {prenom} {nom} !</h2>
      <p>Voici vos notes :</p>
      <table>
        <thead>
          <tr>
            <th>Matière</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={index}>
              <td>{note.Matiere}</td>
              <td>{note.Note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function AffichageNotesProf({ prenom, nom, notes }) {
  return (
    <>
      <h2>Bienvenue {prenom} {nom} (Professeur)!</h2>
      <p>Voici vos notes attribuées:</p>
      <table>
        <thead>
          <tr>
            <th>Matière</th>
            <th>Note</th>
            <th>Nom</th>
            <th>Prenom</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={index}>
              <td>{note.Matiere}</td>
              <td>{note.Note}</td>
              <td>{note.Nom}</td>
              <td>{note.Prenom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}




function App() {
  // const jsondata = { matiere: "", note: "" }
  const [data, setData] = useState(null)
  const [identifiant, setID] = useState('')
  const [mdp, setMdp] = useState('')
  const [role, setRole] = useState('')

  const acces = () => {
    const url = `http://localhost/Projet-COMWEB_Lefrais_Cauzid/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`
    // pour Jeanne la best
    // const url = `http://localhost/Projet/Projet-COMWEB_Lefrais_Cauzid/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`
    // pour Hugo
    fetch(url)
      .then(r => r.json())
      .then(datas => {
        console.log(datas)
        setData(datas)
      })
  }

  return (
    <>
      <Logo/>
      {!data || data.success === false ? (
        <>
          <Identifiant onChange={(e) => setID(e.target.value)} />
          <Mdp onChange={(e) => setMdp(e.target.value)} />
          <Profession onChange={(e) => setRole(e.target.value)} />
          <Bouton cliquer={acces} />
          {data && data.message && <p style={{ color: "red" }}>{data.message}</p>}
        </>
      ) : (
        <>
          {data.role === 'eleve' && <AffichageNotesEleve nom={data.nom} prenom={data.prenom} notes={data.notes} />}
          {data.role === 'professeur' && <AffichageNotesProf nom={data.nom} prenom={data.prenom} notes={data.notes} />}
          {/* {data.role === 'professeur' && <h2>Bienvenue {data.prenom} {data.nom} (Professeur)</h2>} */}
        </>
      )}
    </>
  )
}

export default App
