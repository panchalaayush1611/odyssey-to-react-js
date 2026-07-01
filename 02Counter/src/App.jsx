import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    
    counter += 1;
    console.log("Clicked", counter);
  };
  const delValue = () => {
    
    counter -= 1;
    console.log("Clicked", counter);
  };
  
  return (
    <>
      <h1>Chai aur hum</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={delValue}>Decrease Value</button>
    </>
  );
}

export default App;
