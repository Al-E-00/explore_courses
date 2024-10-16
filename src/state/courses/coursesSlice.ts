import { Course } from '@/types/types';
import courses from '../../data/courses.json';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CoursesState = {
  courses: Course[] | undefined | null;
};

const initialState: CoursesState = { courses: undefined };

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coursesFetchAsync.pending, (state) => {
        state.courses = null;
      })
      .addCase(
        coursesFetchAsync.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.courses = action.payload;
        },
      );
  },
});

export const coursesFetchAsync = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    // Simulate fetching data from an API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return courses;
  },
);

export default coursesSlice.reducer;
