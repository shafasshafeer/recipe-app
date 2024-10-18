import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeSlice'


const RecipeStore = configureStore({
    reducer : {
        recipeReducer : recipeSlice,
    }
})

export default RecipeStore