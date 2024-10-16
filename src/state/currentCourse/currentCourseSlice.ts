import { Course, Module } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateT = {
  selectedCourse: Course | null;
  selectedModule: Module | null;
};

const initialState: initialStateT = {
  selectedCourse: null,
  selectedModule: null,
};

const courseSlice = createSlice({
  name: 'courseInfo',
  initialState,
  reducers: {
    selectCourse: (state, action: PayloadAction<{ course: Course | null }>) => {
      state.selectedCourse = action.payload.course;
    },
    selectModule: (state, action: PayloadAction<{ module: Module | null }>) => {
      state.selectedModule = action.payload.module;
    },
  },
});

export const { selectCourse, selectModule } = courseSlice.actions;

export default courseSlice.reducer;
