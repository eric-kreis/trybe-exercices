import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.javaScript = this.javaScript.bind(this);
    this.python = this.python.bind(this);
    this.typeScript = this.typeScript.bind(this);
    this.changeColor = this.changeColor.bind(this);

    this.state = {
      clicksJS: 0,
      clicksPY: 0,
      clicksTS: 0,
      bgColorJS: 'whitesmoke',
      bgColorPY: 'whitesmoke',
      bgColorTS: 'whitesmoke',
    }
  }

  changeState = (clickState) => {
    this.setState({
      [clickState]: this.state[clickState] + 1
    });
  }

  changeColor(clickState ,bgState) {
    if (this.state[clickState] % 2 === 0){
      this.setState({
        [bgState]: 'green',
      });
    } else {
      this.setState({
        [bgState]: 'whitesmoke',
      });
    }
  }

  javaScript(color) {
    this.changeState('clicksJS');
    this.changeColor('clicksJS', 'bgColorJS');
    console.log(color);
  }

  python(color) {
    this.changeState('clicksPY');
    this.changeColor('clicksPY', 'bgColorPY');
    console.log(color);
  }

  typeScript(color) {
    this.changeState('clicksTS');
    this.changeColor('clicksTS', 'bgColorTS');
    console.log(color);
  }
  
  render() {
    return (
      <>
        <button style={{ backgroundColor: this.state.bgColorJS }} 
          onClick={() => { this.javaScript(this.state.bgColorJS) } }>JavaScript</button>

        <button style={{ backgroundColor: this.state.bgColorPY }}
          onClick={() => { this.python(this.state.bgColorPY) } }>Python</button>

        <button style={{ backgroundColor: this.state.bgColorTS }}
          onClick={() => { this.typeScript(this.state.bgColorTS) } }>TypeScript</button>
      </>
    );
  }
}

export default App;
