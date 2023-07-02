import * as yup from "yup";

export const nameValidation = yup
  .string()
  .required("Lütfen işletmenizin ismini girin.")
  .min(3, "İşletme ismi 3 veya daha fazla karakterden oluşmalı.");

export const passwordValidation = yup
  .string()
  .required("Lütfen şifrenizi girin.")
  .min(6, "Şifreniz 6 veya daha fazla karakterden oluşmalı.");

export const confirmPasswordValidation = yup
  .string()
  .required("Lütfen şifrenizi yeniden girin.")
  .oneOf([yup.ref("password"), null], "Girdiğiniz şifreler uyuşmuyor.");