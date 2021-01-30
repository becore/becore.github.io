import React from 'react'

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={date:new Date()}
	}
	//在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：
	componentDidMount(){
		 this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount(){
		 clearInterval(this.timerID);
	}
	tick(){
		this.setState({
			date:new Date()
		});
	}

	render(){
		 return (
		    <div>
		      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		    </div>
		  );
	}
}

export default Clock