import { configureStore } from "@reduxjs/toolkit";
import topicSlice from '../features/topics/topicSlice';
import quizzesSlice from '../features/quizzes/quizSlice';
import cardSlice from "../features/cards/cardSlice";
export default configureStore({
  reducer: {
    topicSlice: topicSlice,
    quizzesSlice: quizzesSlice,
    cardSlice: cardSlice
  },
});
