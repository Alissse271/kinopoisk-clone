import { FirebaseErrorCode } from "./firebaseErrors";
import { FirebaseErrorMessage } from "./firebaseErrors";
import { getFBErrorMessage } from "./firebaseErrors";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
  yearValidation,
  titleValidation,
} from "./formValidation";
import { getUserFromLocalStorage } from "./localStorage";

export type { FirebaseErrorCode, FirebaseErrorMessage };
export { getFBErrorMessage };
export { nameValidation, emailValidation, passwordValidation, yearValidation, titleValidation };
export { getUserFromLocalStorage };
