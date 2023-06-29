import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "common/buttons/SubmitButton.js";
import FormContainer from "common/forms/FormContainer";
import PasswordInput from "common/forms/PasswordInput";
import TextInput from "common/forms/TextInput";
import { schema } from "components/LoginForm/LoginForm.constants";
import { failedLogin } from "constants/notifications";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logUserIn } from "reducers/loggedInUserReducer";
import loginService from "services/login";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleLogin = async (user) => {
    try {
      const userToLogin = await loginService.login(user);
      dispatch(logUserIn(userToLogin));
    } catch (error) {
      console.log(error);
      // console.log(type);
      toast(failedLogin.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleLogin)}>
      <TextInput name="name" errors={errors} register={register} placeholder="İsim" />
      <PasswordInput name="password" errors={errors} register={register} />
      <SubmitButton>Giriş Yap</SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;
