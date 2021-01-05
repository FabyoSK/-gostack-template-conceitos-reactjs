import React,{useState, useEffect} from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title:"Algo assim skks",
      url:"http://google.com",
      techs:["react", "jjj"]
    })
    const repositorie = response.data
    setRepositories([...repositories, repositorie])
  }

  async function handleRemoveRepository(id) {
    // await api.delete('/repositories/:id', {
    // })
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          {repositories.map(repositorie => <p key={repositorie.id}>{repositorie.title}</p>)}

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
