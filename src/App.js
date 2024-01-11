import './styles/App.css';
import Header from './components/Header'
import Home from './components/Home';

// function MyComponent({name, nameForClass, income=10}) {
//   return (
//     <>
//       <div className={nameForClass}>{name}: ${income}</div>
//       <hr />
//     </>
//   );
// }

function App() {
  
  // const [taskList, settaskList] = useState();
  return (
    
      <div id="App" className="App">
          <Header />
          <Home />
        
        {/* Hello 
        <MyComponent name={"Shubhi"} nameForClass={"div1"} income={1000000}/> 
        <MyComponent name="bro" nameForClass={"div2"} income={1000}/> 
        <MyComponent  nameForClass={"div3"}/> Guyz
        <button onClick={console.log("Button Clicked!!")}>Click</button> */}
      </div>
  );
}

export default App;
