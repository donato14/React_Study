import { Component } from 'react';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponents';

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent /> */}
        <StyledComponent/>
      </div>
    );
  }
}

export default App;
