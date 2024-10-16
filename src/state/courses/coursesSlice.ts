import { Course } from '@/types/types';
import courses from '../../data/courses.json';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CoursesState = {
  courses: Course[] | undefined | null;
  loading: boolean;
  error: {
    isError: boolean;
    message: string | undefined;
  };
};

const initialState: CoursesState = {
  courses: undefined,
  loading: false,
  error: { isError: false, message: undefined },
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coursesFetchAsync.pending, (state) => {
        state.courses = null;
        state.loading = true;
      })
      .addCase(
        coursesFetchAsync.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.loading = false;
          state.courses = action.payload;
        },
      )
      .addCase(coursesFetchAsync.rejected, (state, action) => {
        state.loading = false;
        state.error.isError = true;
        state.error.message = action.error.message;
      });
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
