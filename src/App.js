import React ,{Component} from 'react'
import Table from './Table'
import Form from './Form'
import Game from './Game'
import Api from './Api'
import Clock from './Clock'
import Toggle from './Toggle'
import NameForm from './NameForm'
import Reservation from './Reservation'
import Calculator from './Calculator'
import SignUpDialog from './SignUpDialog'

class App extends Component {
	 state = {
			 characters:[
		     
		    ],
		}

	removeCharacter=(index)=>{
		const {characters}=this.state
		this.setState({
			characters:characters.filter((character,i)=>{
				return i!==index
			}),
		})
	}
	handleSubmit =(character)=>{
		this.setState({
			characters:[...this.state.characters,character]
		})
	}


	render(){

		const{characters}=this.state

		return (
			<div className ="App">
				<Clock />
				<Toggle/>
				<Table characterData={characters} 
					   removeCharacter={this.removeCharacter}
				/>
				<Form handleSubmit ={this.handleSubmit}/>
				<Game />
				<Calculator/>
				<Api />
				<NameForm/>
				<Reservation/>
				<SignUpDialog/>
			</div>
			)
	}
}
export default App