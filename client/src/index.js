import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhotoCarousel from './components/PhotoCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
       <PhotoCarousel></PhotoCarousel>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('Photos'));