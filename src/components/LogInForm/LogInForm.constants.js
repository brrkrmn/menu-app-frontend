import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Lütfen işletmenizin ismini girin.")
    .min(3, "İşletme ismi 3 veya daha fazla karakterden oluşmalı."),
  password: yup.string().required("Lütfen şifrenizi girin.").min(6, "Şifreniz 6 veya daha fazla karakterden oluşmalı."),
});
