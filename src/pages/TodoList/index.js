import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import ListItem from "../../components/ListItem";
import { getTodos, createTodo } from "../../store/actions";
import { connect } from "react-redux";

import "./todo-list.scss";

const TodoList = (props) => {
  const { todos } = props;
  const [inputBoxValue, setInputBoxValue] = useState("");

  useEffect(() => {
    props.getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      await onSubmit();
    }
  }


  const onSubmit = async () => {
    await props.createTodo({ date: new Date(), text: inputBoxValue });
    setInputBoxValue('');
  }
  
  return (
    <Layout data-test="todo-page-wrapper">
      <>
        <div className="todo-list__container">
          {todos.map((item, idx) => <ListItem key={idx} data-test="todo-list-item" text={item?.text} date={item?.date} />)}
        </div>
        <div className="todo-list__add-wrapper">
          <input className="todo-list__add-wrapper-input" value={inputBoxValue} onKeyDown={onKeyDown} onChange={e=>setInputBoxValue(e.target.value)} placeholder="Type here" />
          <button className="todo-list__add-wrapper-button" onClick={onSubmit}>Add to List</button>
        </div>
      </>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      dispatch(getTodos());
    },
    createTodo: (todo) => {
      dispatch(createTodo(todo));
    },
  };
};

TodoList.propTypes = {
  todos: PropTypes.array,
  getTodos: PropTypes.func,
  createTodo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);