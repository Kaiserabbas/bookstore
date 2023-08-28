import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? ['Under construction']
        : state.categories;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
