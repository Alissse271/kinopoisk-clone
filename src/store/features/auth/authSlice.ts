import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseErrorCode, FirebaseErrorMessage, getFBErrorMessage } from "utils";

interface IAuth {
  name: string;
  email: null | string;
  password: string;
  isAuth: boolean;
  error: null | string;
  isLoading: boolean;
}

const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

const initialState: IAuth = {
  name: userInfo && userInfo.name,
  email: userInfo && userInfo.email,
  password: userInfo && userInfo.password,
  isAuth: userInfo && userInfo.isAuth,
  isLoading: false,
  error: null,
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: FirebaseErrorMessage }
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
  { rejectValue: FirebaseErrorMessage }
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

export const resetUserPassword = createAsyncThunk<
  void,
  { email: string },
  { rejectValue: FirebaseErrorMessage }
>("user/resetUserPassword", async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
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
    getLogOutUser: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.name = payload.name;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isAuth = false;
        state.error = payload;
      }
    });
    builder.addCase(resetUserPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(resetUserPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(resetUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { getUserName } = authSlice.actions;
export const { getLogOutUser } = authSlice.actions;

export default authSlice.reducer;
