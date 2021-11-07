import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleInputVal,
  deleteTodo,
  editTodo,
  updateTodo,
} from "./todoSlice";

export const Todo = (props) => {
  const todoData = useSelector((state) => {
    return state.todo1;
  });
  console.log("🚀 ~ file: Todo.js ~ line 7 ~ todoData", todoData.allTodo);
  const dispatch = useDispatch();

  const addTodoTest = (val) => {
    if (val === "") return;
    dispatch(
      addTodo({
        text: val,
        id: Math.random(),
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        value={todoData.inputVal}
        onChange={(e) => dispatch(handleInputVal(e.target.value))}
      />

      <button onClick={() => addTodoTest(todoData.inputVal)}>ADD TODO</button>

      <br />
      {todoData.allTodo &&
        todoData.allTodo.map((each, i) => {
          return (
            <div>
              {!todoData.isEdit ? (
                <span key={each.id}> {each.text} </span>
              ) : (
                <input
                  type="text"
                  value={each.text}
                  onChange={(e) => {
                    dispatch(updateTodo({ text: e.target.value }));
                  }}
                />
              )}
              <button
                onClick={() => {
                  console.log("ok test it will that work");
                  return dispatch(deleteTodo(each.id));
                }}
              >
                delete
              </button>

              <button
                onClick={() => {
                  dispatch(editTodo(each));
                }}
              >
                {todoData.isEdit ? "update" : "Edit"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

Todo.propTypes = {};
