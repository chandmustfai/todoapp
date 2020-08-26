import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Todo.css";
import Footer from "../Footer/Footer";
import close from "../../assets/close.png";
class Todo extends Component {
  state = {
    isShow: false,
    todo: "",
    allTodo: [],
  };
  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.setState({
        allTodo: this.state.allTodo.concat(this.state.todo),
        isShow: true,
      });
      this.refs.todoinput.value = "";
    }
  };
  remove=(index)=>{
    console.log("index",index)
    let list=this.state.allTodo;
    list.splice(index,1)
    this.setState({
      allTodo: list
    })
  }
  render() {
    return (
      <>
        <div className="todo-form">
          <input
            type="text"
            className="add-todo"
            placeholder="What needs to be done !"
            onChange={this.handleChange}
            ref="todoinput"
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="todo-items">
          {this.state.isShow && this.state.allTodo.length > 0 &&
            this.state.allTodo.map((elem, id) => (
                <div className="item" key={id} >{elem}
                <span className="add-del-icon" onClick={this.remove.bind(this,id)}><img src={close} style={{width:"20px",height:'20px'}}/></span>
                </div>
            ))}
        </div>
        <div>
          {this.state.isShow && this.state.allTodo.length > 0 && (
            <Footer totalItems={this.state.allTodo.length}/>
          )}
        </div>
      </>
    );
  }
}

export default Todo;
