import './App.css';

function App() {
  const name = 'Szymon'
  const names = ["Adrian", "Szymon", "Maciej", "Pawel"]
  return (
    <>
    <div className="App">
        <p>{name.length > 4 ? name : 'Hello friends!'}</p>
        <p>{names.map((name) => <li key={name}>{name}</li>)}</p>
    </div>
    <p>test</p>
    </>
  );
}

export default App;
