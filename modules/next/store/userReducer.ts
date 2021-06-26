import { createSlice } from "@reduxjs/toolkit";
import { sleep } from "@/lib/utils/sleep";
import { postApi } from "@/services/nextApi";

const sliceName = "user";
const userSlice = createSlice({
  //slice name
  name: sliceName,
  initialState: {
    user: null,
    test: "",
  },
  //
  reducers: {
    setTest(state, { payload }) {
      state.test = payload;
    },
    clearTest(state) {
      state.test = null;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const fetchUserProfile = () => async (dispatch) => {
  const { result } = await postApi("api/user/profile");
  if (result) dispatch(setUser(result));
};

export const fooSelector = (state) => state[sliceName].test;

export const userSelector = (state) => state[sliceName].user;

export const { setTest, clearTest, setUser } = userSlice.actions;

export const fetchData = (foo) => async (dispatch) => {
  await sleep(100);
  dispatch(setTest(foo));
};

export default userSlice.reducer;
