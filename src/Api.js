import React ,{Component} from 'react'

class Api extends Component{
	state = {
		data:[],
	}
	componentDidMount(){
		// const url ='https://ghibliapi.herokuapp.com/films'
		const url ='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1'
		fetch(url)
	      .then((result) => result.json())
	      .then((result) => {
			  console.log(result)
	        this.setState({
	        	data :result
	      })
	      })
	}
	render(){
		const { data } = this.state;
		
		const result = data.map((entry,index)=>{
			return <li key ={index}>{entry}</li>
		})
		return <ul>{result}</ul>
	}
}
export default Api