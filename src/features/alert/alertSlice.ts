import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AlertState {
  message: string | null;
  type: 'success' | 'error' | 'info' | null;
}

const initialState: AlertState = {
  message: null,
  type: null,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<{ message: string; type?: 'success' | 'error' | 'info' }>) => {
      state.message = action.payload.message;
      state.type = action.payload.type ?? 'info';
    },
    clearAlert: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
