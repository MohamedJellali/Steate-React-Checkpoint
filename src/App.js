import './App.css';
import React from "react";


class App extends React.Component {

  state = { 
    fullName : "Vincent Van-Gogh",
    bio :"Actually I am a dead man.. tell nobody please", 
    imgSrc : "https://www.artble.com/imgs/3/2/c/55784/vincent_van_gogh.jpg", 
    profession : "Painter",
    stateShow: false,
    count : 0
  };


  handleShow = () => {
    this.setState(e => ({ stateShow: !e.stateShow }));
  };

  componentDidMount(){
    setInterval(()=>this.setState({ count: this.state.count + 1 }), 2000);
  }


render()

{


  if (this.state.stateShow) {
    return(
      <div className="App">
        <img src={this.state.imgSrc} alt="Vincent-van-Gogh" style={{width:300, height:350}} />
      <h1>My name is {this.state.fullName}</h1>
      <h3>{this.state.bio}</h3>
      <h3>I am a {this.state.profession}</h3>
      <div>
        <button onClick={()=>this.handleShow()} > {this.state.stateShow ? "Hide" : "Show"}</button> 
        </div>
        <h1>{this.state.count}</h1>
      </div>
        ) 
  }

  else {

return(
  <div className="App">
<h1>click to display the profile</h1>
<h1>{this.state.count}</h1>

<div>
<button onClick={()=>this.handleShow()} > {this.state.stateShow ? "Hide" : "Show"}{" "}</button> 
</div>
</div>
)  
  }

}

}
export default App
