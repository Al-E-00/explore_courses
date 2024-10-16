import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/coursesSlice';
import courseReducer from './currentCourse/currentCourseSlice';
import uiReducer from './UI/uiSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    currentCourse: courseReducer,
    uiState: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
