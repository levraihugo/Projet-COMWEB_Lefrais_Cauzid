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
      <table style={{ border: "black solid 1px", marginLeft: "auto", marginRight: "auto", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ border: "black solid 1px" }}>
            <th style={{ border: "black solid 1px" }}>Matière</th>
            <th style={{ border: "black solid 1px" }}>Note</th>
          </tr>
        </thead>
        <tbody style={{ border: "black solid 1px" }}>
          {notes.map((note, index) => (
            <tr key={index} style={{ border: "black solid 1px" }}>
              <td style={{ border: "black solid 1px" }}>{note.Matiere}</td>
              <td style={{ border: "black solid 1px" }}>{note.Note}</td>
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
      <table style={{ border: "black solid 1px", marginLeft: "auto", marginRight: "auto", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ border: "black solid 1px" }}>
            <th style={{ border: "black solid 1px" }}>Matière</th>
            <th style={{ border: "black solid 1px" }}>Note</th>
            <th style={{ border: "black solid 1px" }}>Nom</th>
            <th style={{ border: "black solid 1px" }}>Prenom</th>
          </tr>
        </thead>
        <tbody style={{ border: "black solid 1px" }}>
          {notes.map((note, index) => (
            <tr key={index} style={{ border: "black solid 1px" }}>
              <td style={{ border: "black solid 1px" }}>{note.Matiere}</td>
              <td style={{ border: "black solid 1px" }}>{note.Note}</td>
              <td style={{ border: "black solid 1px" }}>{note.Nom}</td>
              <td style={{ border: "black solid 1px" }}>{note.Prenom}</td>
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
    // const url = `http://localhost/Projet-COMWEB_Lefrais_Cauzid/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`
    // pour Jeanne la best
    // const url = `http://localhost/Projet/Projet-COMWEB_Lefrais_Cauzid/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`
    const url = `https://hcauzid.zzz.bordeaux-inp.fr/comweb/projet-COMWEB.php?identifiant=${identifiant}&mdp=${mdp}&role=${role}`
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
