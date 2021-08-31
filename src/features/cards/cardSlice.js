import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cards',
    initialState: { 
        cards: {

        }
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
            return state;
        }
    }
});

export const cardSliceSelector = (state) => {
    return state.cardSlice.cards;
}
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;