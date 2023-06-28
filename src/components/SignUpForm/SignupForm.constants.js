import { nameValidation, passwordValidation } from "constants/validations";
import * as yup from "yup";

export const schema = yup.object().shape({
  name: nameValidation,
  password: passwordValidation,
});
