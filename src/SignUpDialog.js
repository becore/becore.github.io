import React from 'react'

function FancyBorder(props){
	return (
			<div className={'FancyBorder FancyBorder-'+ props.color} >
				{props.children}
			</div>
		);
}

function WelcomeDialog(){
	return (
		<FancyBorder color="blue">
			<h1 className= "Dialog-title">
				Welcome
			</h1>
			<p className="Dialog-message">
				Thank you for visiting our spacecraft!
			</p>
		</FancyBorder>
		);
}

function SplitPane(props){
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
		);
}
/*
function SplitPaneApp(){
	return (
		<SplitPane 
			left={
				<Contacts />
			}
			right={
				<Chat />
			}

		/>
		);
}*/

function Dialog(props){
	return(
		<FancyBorder color="blue">
		<h1 className="Dialog-title" >
			{props.title}
		</h1>
		<p className="Dialog-message">
			{props.message}
		</p>
			{props.children}
		</FancyBorder>
		);
}


function HelloDialog(){
	return (
		<Dialog
			title="Hello"
			message="Thank you for visiting out spacecraft !">
			<button>OK</button>
			</Dialog>
		);
}

class SignUpDialog extends React.Component{

	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.handleSignUp=this.handleSignUp.bind(this);
		this.state={login:''};
	}
	render(){
		return(
			<Dialog title="Mars Exploration Program"
					message="How should we refer to you?" >
					<input value={this.state.login}
							onChange={this.handleChange} />
					<button onClick={this.handleSignUp} >
						Sign Me Up!
					</button>
				
			</Dialog>
			)
	}

	handleChange(e){
		this.setState({
			login: e.target.value
		});
	}
	handleSignUp(){
		alert(`elcome abard , ${this.state.login}!`)
	}

}

export default SignUpDialog
























