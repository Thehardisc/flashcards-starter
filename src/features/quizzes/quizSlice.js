import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicSlice.js';

export const thunkQuizzesCreator = (payload) => {
    return ( dispatch ) => {
        dispatch(addQuizId(payload));
        dispatch(addQuiz(payload));
    }
};

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: { }
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;  
            return state;
        }
    }
});

export const quizzesSliceSelector = (state) => {
    return state.quizzesSlice.quizzes;
 };
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer; 