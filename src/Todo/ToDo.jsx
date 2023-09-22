import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [nome, setNome] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [idade, setIdade] = useState("");
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            nome: nome,
            id: id,
            idade:idade
        }]);
        setId(id + 1);
        setNome("");
        setIdade("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div className="p">
            <Link className="gus" to="/">home</Link>
            <h1 className="gus" >Lista de Nomes</h1>
            <form onSubmit={salvar}>
                <input className="gus" type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }} />

                    <input className="inp" type="text"
                    value={idade}
                    onChange={(e) => { setIdade(e.target.value) }} />

                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.id} {ativ.nome} {ativ.idade}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}