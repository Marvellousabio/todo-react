// src/features/user/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUser: { name: string; email: string }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    return response.json();
  }
);

// Load from localStorage (if available)
const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: savedUsers,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;

        // Save to localStorage
        localStorage.setItem("users", JSON.stringify(state.list));
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });

    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);

        // Save to localStorage
        localStorage.setItem("users", JSON.stringify(state.list));
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create user";
      });
  },
});

export default userSlice.reducer;
