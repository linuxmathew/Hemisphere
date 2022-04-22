import React from 'react';
import './Hemisphere.css';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';


class App extends React.Component {

    
    state = { latitude: null, errorMessage: '' }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message})
            }
        );
    }
    
    render() {
        if(this.state.latitude && !this.state.errorMessage){
            return(
                <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
            )
        } else if(!this.state.latitude && this.state.errorMessage){
            return(
                <div> {this.state.errorMessage} </div>
            )
        } else{
            return(
                <div>Loading...</div>
            )
        }
    
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)