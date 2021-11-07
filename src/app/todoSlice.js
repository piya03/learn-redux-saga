import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputVal: "",
  allTodo: [],
  isEdit: false,
  indexToupdate: null,
};

export const todoSlice = createSlice({
  name: "anotherName",
  initialState,
  reducers: {
    handleInputVal: (state, action) => {
      state.inputVal = action.payload;
    },
    addTodo: (state, action) => {
      state.allTodo = [
        ...state.allTodo,
        {
          ...action.payload,
        },
      ];
      state.inputVal = "";
    },

    deleteTodo: (state, action) => {
      console.log("🚀 ~ file: todoSlice.js ~ line 26 ~ action", action);
      state.allTodo = state.allTodo.filter((each) => {
        return each.id !== action.payload;
      });
    },
    editTodo: (state, action) => {
      state.isEdit = !state.isEdit;
      let editIndexTodo = state.allTodo.findIndex(
        (elem) => elem.id === action.payload.id
      );
      state.indexToupdate = editIndexTodo;
      console.log(editIndexTodo, "editIndexTodoeditIndexTodo");
    },
    updateTodo: (state, action) => {
      state.allTodo[state.indexToupdate] = {
        ...state.allTodo[state.indexToupdate],
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, handleInputVal, deleteTodo, editTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
