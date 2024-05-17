
import { CategoryModal } from '../utils/modals';
import {  addCategory, editCategory, getCategory, getCategories, removeCategory } from '../services';
import {createSlice} from '@reduxjs/toolkit'

interface CategoriesModal {
  count: number;
  rows: CategoryModal[]
}

interface CategoryInitialStateType {
  isLogin: boolean;
  categories: null | CategoriesModal;
  categoriesLoading: boolean;
  categoryDetails: null | CategoryModal;
  categoryDetailsLoading: boolean;
  error: boolean
} 


const initialState: CategoryInitialStateType = {
  isLogin: false,
  categories: null,
  categoriesLoading: false,
  categoryDetails: null,
  categoryDetailsLoading: false,
  error: false
}


const CategorySlice = createSlice({
  name: "CategorySlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setCategoryDetails: (state, action) => {
      state.categoryDetails = action.payload
    },
  }, // action methods
  extraReducers: (builder) => {

    builder.addCase('RESET_STATE', () => initialState);

    builder.addCase(addCategory.pending, (state) => {
      state.categoryDetailsLoading = true
    })
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.categoryDetails = action.payload
      state.categoryDetailsLoading = false
    })
    builder.addCase(addCategory.rejected, (state, action) => {
      state.error = true
      state.categoryDetailsLoading = false
    })

    builder.addCase(editCategory.pending, (state) => {
      state.categoryDetailsLoading = true
    })
    builder.addCase(editCategory.fulfilled, (state, action) => {
      state.categoryDetails = action.payload
      state.categoryDetailsLoading = false
    })
    builder.addCase(editCategory.rejected, (state, action) => {
      state.error = true
      state.categoryDetailsLoading = false
    })

    builder.addCase(getCategory.pending, (state) => {
      state.categoryDetailsLoading = true
    })
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categoryDetails = action.payload
      state.categoryDetailsLoading = false
    })
    builder.addCase(getCategory.rejected, (state, action) => {
      state.error = true
      state.categoryDetailsLoading = false
    })

    builder.addCase(getCategories.pending, (state) => {
      state.categoriesLoading = true
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.categoriesLoading = false
    })
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = true
      state.categoriesLoading = false
    })

    builder.addCase(removeCategory.pending, (state) => {
      state.categoryDetailsLoading = true
    })
    builder.addCase(removeCategory.fulfilled, (state, action) => {
      state.categoryDetailsLoading = false
    })
    builder.addCase(removeCategory.rejected, (state, action) => {
      state.error = true
      state.categoryDetailsLoading = false
    })

  }
})

export const CategoryActions = {
   ...CategorySlice.actions, //This includes all the action methods written above
}

export const CategoryReducer = CategorySlice.reducer //This is stored in the main store
