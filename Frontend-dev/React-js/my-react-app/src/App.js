import React, { useContext } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

// function Greeting(props){
//   return <h2>Hello, {props.name}!</h2>
// }

// class Greeting extends React.Component{

//   render(){
//     return <h2>Hello, {this.props.name}!</h2>
//   }
// }


// useContext Hook
const ThemeContext = React.createContext('light');
// console.log(ThemeContext)

function Header(){
  const theme = useContext(ThemeContext);
  console.log(theme);

  return(
    <header style={{
      backgroundColor: theme === 'light' ? '#fff' : '#000',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h1>Header</h1>
    </header>
  )
}

function Main(){
  const theme = useContext(ThemeContext);
  console.log(theme);

  return(
    <main style={{
      backgroundColor: theme === 'light' ? '#fff' : '#000',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h2>Main</h2>
    </main>
  )
}

function Footer(){
  const theme = useContext(ThemeContext);
  console.log(theme);

  return(
    <footer style={{
      backgroundColor: theme === 'light' ? '#fff' : '#000',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h3>Footer</h3>
    </footer>
  )
}

// useContext Hook


// This is a function component that created by default when create a project
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header/>
      <Main/>
      <Footer/>
    </ThemeContext.Provider>
    // <div>
    //   <div>
    //     <Greeting name='Amani'/>
    //     <Counter/>
    //   </div>
    //   <br/>
    //   <div>
    //     <Posts/>
    //   </div>
    //   <br/>
    //   <br/>
    //   <Footer/>
    // </div>
  );
}

export default App;
