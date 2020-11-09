import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItems.css';
import checkImg from './img/dry-clean.svg';
import checkDoneImg from './img/check.svg';
import clear from './img/clear.svg'

class TodoItems extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }

    // onItemClick() {
    //     console.log(this.props.task);
    // }

    render() {
        const {id, task, onClick, onClear} = this.props; // Dùng destructuring: this.props trả về 1 object 
        // const id = this.props.id;
        //const task = this.props.task;
        let url = checkImg;
        if(task.isComplete){
            url = checkDoneImg;
        }
        return (
            <div className = {classNames('Todo-items', {
                'Todo-items-complete': task.isComplete
            })} >
                <img onClick = {onClick} src={url} alt=""/>
                <p>Task {id}: {task.title}</p>
                <img src={clear} alt='' onClick={onClear} id = "clear"/>
            </div>
        );
    }
}

TodoItems.propTypes = {
    id: PropTypes.number,
    task: PropTypes.shape({
        title: PropTypes.string,
        isComplete: PropTypes.bool
    }),
    onClick: PropTypes.func,
    onClear: PropTypes.func
};

export default TodoItems;