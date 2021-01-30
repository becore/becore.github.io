import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'lime'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> 名字: </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
       
         <textarea value={this.state.value} onChange={this.handleChange} />

         <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="file" />
        <select multiple={true} value={['B', 'C']} />

        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default NameForm