import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state) => {
      state.categories = ['Under construction'];
    },
  },
});

export const { getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
