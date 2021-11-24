import React from "react";
import { Component } from "react";

class Form extends Component {
    state = {
        lastId: 4,
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("submit");
        this.state.lastId++;
        this.props.onSubmit(this.state)
    }

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    onDescriptionChange = (event) => {
        this.setState({
            ...this.state, description: event.target.value
        })
    }

    onDateChange = (event) => {
        this.setState({
            ...this.state, dueDate: event.target.value
        })
    }

    render() {
        return (
            <form name="task" onSubmit={this.onSubmitHandler}>
                <input type="text" name="title" placeholder="task name" required onChange={this.onTitleChange}/>
                <input type="text" name="description" placeholder="description" onChange={this.onDescriptionChange}/>
                <input type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={this.onDateChange}/>
                <button type="submit">Add Task</button>
            </form>
        )
    };
}

export default Form;