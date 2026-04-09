import { useState } from 'react'
import './App.css'
import logo from './assets/image.png'

export default function App() {

  const CLASSES = [
    { nome: "dinheiro", emoji: "💰"},
    { nome: "money", emoji: "💵"},
    { nome: "caixinha", emoji: "📦"},
    { nome: "bloquear-cartao", emoji: "🔒"},
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [hp, setHp] = useState(100); //número
  const [ativo, setAtivo] = useState(true); //boolean
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const receberDano = () => {
    const novoHp = Math.max(0, hp-10);
    setHp(novoHp);
    setAtivo(novoHp > 0);
  }

  const elogio = () => {
    setHp(100);
    setAtivo(true);
  }

  const pct = hp/100;
  const corBarra = pct > 0.5 ? "#6eca31ff" : pct > 0.25 ? "#fdd701ff" : "#ff4a4aff";
  
  return (
    <>
      <main>
        <section>
          
          <h1>
            <img src={logo} className="logo" />
          </h1>
          <div className="thumb">
            {ativo ? classe.emoji : ""}
          </div>
          <input 
            type="text" 
            className='nome' 
            placeholder='Buscar'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
          />

          <div className="status">
            <p>Status da conta: </p>
            <p>Crédito do Nubank:</p>
            <span>{ativo? "Ativo" : "Inativo"}</span>
            <span>{ativo ? "Disponível" : "Indisponível"}</span>
          </div>

          <p id='pontosVida'>Feedback 5/5</p>
          <div className="barra" style={{background: corBarra}}>
          </div>

          <button 
            className='BTelogio'
            onClick={receberDano}  
            disabled={!ativo}
          >Reclamação</button>
          
          <button 
            className='BTelogio'
            onClick={elogio} 
          >Elogio</button>
          
          <div className="classes">
            <button onClick={() => setClasse(CLASSES[0])}> PIX</button>
            <button onClick={() => setClasse(CLASSES[1])}> Gerar Cartão Virtual</button>
            <button onClick={() => setClasse(CLASSES[2])}> Caixinha</button>
            <button onClick={() => setClasse(CLASSES[3])}> Bloquear Cartão</button>
          </div>

        </section>
      </main>
    </>
  )
}
