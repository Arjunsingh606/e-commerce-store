// .................pending................


const {createSlice} = require("@reduxjs/toolkit")


const productSlice =  createSlice({
    name:'product',
    initialState : {
        data : [],
       
    },

    reducers:{
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        
    },
});

export const {add, remove} = productSlice.actions;

export default productSlice.reducer;
