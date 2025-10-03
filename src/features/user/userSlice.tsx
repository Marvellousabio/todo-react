import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers=createAsyncThunk(
    'users/fetchUsers',
    async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }
);
export const createUser= createAsyncThunk(
    'users/createUsers',
    async(newUser)=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(newUser),
        });
        return response.json();
    }
);

const userSlice= createSlice({
    name: 'users',
    initialState: {
        list:[],
    loading:false,
    error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        //to fetch my users
        builder
            .addCase(fetchUsers.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchUsers.fulfilled, (state,action)=>{
                state.loading=false;
                state.list=action.payload;
            })
            .addCase(fetchUsers.rejected, (state,action)=>{
                state.loading=false;
                state.error=action.error.message
            });

            builder
            .addCase(createUser.pending,(state)=>{
                state.loading=true;
            })
            .addCase(createUser.fulfilled,(state,action)=>{
                state.loading=false;
            state.list.push(action.payload);
            })
            .addCase(createUser.rejected, (state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            });
    },
});

export default userSlice.reducer;