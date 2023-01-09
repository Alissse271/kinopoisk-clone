import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseErrorCode, getFBErrorMessage } from "utils";

interface IAuth {
  name: null | string;
  email: null | string;
  password: null | string;
  isAuth: boolean;
  error: null | string;
}

const initialState: IAuth = {
  name: null,
  email: null,
  password: null,
  isAuth: false,
  error: null,
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: string }
>("user/signUpUser", async ({ userName, email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const name = userName;
    return { userEmail, name };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const signInUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: string }
>("user/signInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.email = payload;
    },
    getLogOutUser: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(signInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });
  },
});

export const { getUserName } = authSlice.actions;
export const { getLogOutUser } = authSlice.actions;

export default authSlice.reducer;
