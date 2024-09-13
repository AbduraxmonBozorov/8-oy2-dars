import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState: [
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Doe', age: 25},
    ],
    reducers: {
        add: (state, action)=>{
            return [...state, action.payload]
        },
        remove: (state, action)=>{
            let update=state.filter(function(value){
                return value.id != action.payload
            })
            return update
        },
        edit: (state, action)=>{
            const update=state.map(function(value){
                if(value.id==action.payload.id){
                    value=action.payload
                }
                return value
            })
            return update
        }
    }
})

export const {add, remove, edit} = userSlice.actions;
export default userSlice.reducer;