
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: '',
};

export const usersSlice = createSlice({
 name: 'users',

  initialState,
 reducers: {
   addUserToStore: (state, action) => {
     state.value=action.payload;
   },
   emptyStore: (state) => {
    state.value=''
   }
 },
});

export const { addUserToStore, emptyStore } = usersSlice.actions;
export default usersSlice.reducer;