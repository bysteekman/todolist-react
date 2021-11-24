import React from "react";
import { Component } from "react";

class Form extends Component {
    state = {
        lastId: 4,
        title: '',
        description: '',
        dueDate: '',
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.state.lastId++;
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <form name="task" onSubmit={this.onSubmitHandler}>
                <input type="text" name="title" placeholder="task name" required onChange={(event) => this.setState({...this.state, title: event.target.value})}/>
                <input type="text" name="description" placeholder="description" onChange={(event) => this.setState({...this.state, description: event.target.value})}/>
                <input type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={(event) => this.setState({...this.state, dueDate: event.target.value})}/>
                <button type="submit">Add Task</button>
            </form>
        )
    };
}

export default Form;