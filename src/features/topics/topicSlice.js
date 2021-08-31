import { createSlice } from '@reduxjs/toolkit';

export const topicSlice = createSlice({
    name: 'topics',
    initialState: { 
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {...action.payload, quizIds: []};  
            return state;
        },
        addQuizId: (state,action) => {
            if (action.payload.topicId !== undefined && action.payload.quizIds !== undefined) {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizIds);
        }
    }
    }   
});

export const topicSliceSelector = (state) => {
     return state.topicSlice.topics;
};
export const { addTopic, addQuizId } = topicSlice.actions;
export default topicSlice.reducer;