import { Course } from '@/types/types';
import courses from '../../data/courses.json';
import { createSlice } from '@reduxjs/toolkit';

type CoursesState = Course[];

const initialState: CoursesState = courses;

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
