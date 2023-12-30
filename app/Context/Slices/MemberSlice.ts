'use client'
import { IMember, MemberEmptyState } from '../../Models/Member.Types';
import { createSlice } from '@reduxjs/toolkit';

export const memberSlice = createSlice({
  name: 'member',
  initialState: MemberEmptyState,
  reducers: {
    createmember: (state, action) => {
      return action.payload;
    },
    modifymember: (state, action): IMember => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetmember: (): IMember => {
      return MemberEmptyState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { createmember, modifymember, resetmember } = memberSlice.actions;

export default memberSlice.reducer;
