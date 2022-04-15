import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: 0,
  },
  reducers: {
loginStart:(state)=>{
    state.isFetching=true;
},
loginSuccess:(state)=>{
        state.isFetching=false;
        state.currentUser=action.payload;

},
loginFailure:(state)=>{},
    },
  },
});

export const { addProduct } = userSlice.actions;
export default userSlice.reducer;
