import { nameValidation, passwordValidation } from "constants/validations";
import * as yup from "yup";

export const userSignupSchema = yup.object().shape({
  name: nameValidation,
  password: passwordValidation,
});
