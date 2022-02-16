import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arraySchedule = ['Drink water', 'Study React', 'Study AWS', 'Study English'];

class App extends Component {

  render() {
    return (
      <main>
        <Header />
        <ul>
          <Content />
        </ul>
        <Footer />
      </main>
    )
  }

  // render() {
  //   return (
  //     <Header />
  //   );
  // }

  // render() {
  //   return (
  //     <ul> My schedule:
  //       {arraySchedule.map((element) => Task(element))}
  //     </ul>
  //   )
  // }
}

export default App;
