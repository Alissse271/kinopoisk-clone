import { FirebaseErrorCode } from "./firebaseErrors";
import { FirebaseErrorMessage } from "./firebaseErrors";
import { getFBErrorMessage } from "./firebaseErrors";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
  yearValidation,
  titleValidation,
  settingsPasswordValidation,
} from "./formValidation";

export type { FirebaseErrorCode, FirebaseErrorMessage };
export { getFBErrorMessage };
export {
  nameValidation,
  emailValidation,
  passwordValidation,
  yearValidation,
  titleValidation,
  settingsPasswordValidation,
};
