import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateT = {
  searchTerm: string;
};

const initialState: initialStateT = {
  searchTerm: '',
};

const uiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<{ searchTerm: string }>) => {
      state.searchTerm = action.payload.searchTerm;
    },
  },
});

export const { setSearchTerm } = uiSlice.actions;

export default uiSlice.reducer;
