import React, {Component} from 'react';
// import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { CardList } from '../card-list/card-list.component';
import {SearchBox} from '../search-box/search-box.component';
// import Listings from './components/Listings'
import {SearchZip} from '../search-zip/search-zip.component';
import axios from 'axios';
// import CardList from '../card-list'


// import './App.css';
// import './Button.css';
// import SignInAndSignUpPage from '../login/login';




class Home extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters:[],
      searchField: '',
      monsterId : 0,
      monsterzipcode:''

      
    };
//   }
  
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => console.log(json))


//         users => this.setState({monsters:users}));
   

//   }

}
  
async componentDidMount() {
  const resp = await fetch('http://localhost:5000/api/get')
  .then(response => response.json()).then(json=>{
      this.setState({monsters:json.data});
  })
 }


//   .then(users => this.setState({monsters:users}));
//   console.log(users)
 

// }


  render(){
    const { monsters, searchField, monsterId } = this.state;
    console.log(monsters)
    const filteredMonsters = monsters.filter(monster =>
      monster[1].toLowerCase().includes(searchField.toLowerCase()) && monster[2] > monsterId  
      // && this.state.monsterzipcode.includes(monster.zipcode)
      
     

      //&& monster.zipcode 
    );
    
    // const filteredname = monsters.filter( monster =>monster.username(searchUsername))
      

    return (
     
      <div className="App">
           <SearchBox path = '/' component ={SearchBox} placeholder ='search' handleChange ={e=> this.setState({ searchField: e.target.value})} />
           <SearchZip path = '/' setZips={this.setState} monsterzipcode = {this.state.monsterzipcode} placeholder ='search' handleChange ={e=> this.setState({ monsterzipcode: e.target.value})} />
    
         <div className = "Button">
            <button className = "button1" onClick ={ e => this.setState({ monsterId: '10' })}  >Fair Price</button>          
            <button className = "button2" onClick ={ e => this.setState({ monsterId: '20' })} >Good Price</button>
            <button className = "button3" onClick ={ e => this.setState({ monsterId: '30' })} >Sale Price</button>
            <button className = "button4" onClick ={ e => this.setState({ monsterId: '40' })} >Bargain Price</button>
            <button className = "button5" onClick ={ e => this.setState({ monsterId: '50' })} >Sweet Price</button>
            <button className = "button6" onClick ={ e => this.setState({ monsterId: '60' })} >ABC Price</button>
          </div>
        
          <CardList monsters={filteredMonsters}>
          </CardList>
         
          {/* <p>{this.state.string}</p>
          <button onClick ={()=>this.setState({string:'hello andre'})}>Change Text</button> */}
        
      </div>
     
    );
  }
  
}

export default Home;
