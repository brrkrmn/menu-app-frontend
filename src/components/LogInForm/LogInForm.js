import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "common/buttons/SubmitButton.js";
import { userSchema } from "common/constants";
import FormContainer from "common/forms/FormContainer";
import PasswordInput from "common/forms/PasswordInput";
import TextInput from "common/forms/TextInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logUserIn } from "reducers/loggedInUserReducer";
import loginService from "services/login";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const dispatch = useDispatch();
  const handleLogIn = async (user) => {
    try {
      const userToLogIn = await loginService.login(user);
      dispatch(logUserIn(userToLogIn));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleLogIn)}>
      <TextInput name="name" errors={errors} register={register} placeholder="İsim" />
      <PasswordInput name="password" errors={errors} register={register} />
      <SubmitButton>Giriş Yap</SubmitButton>
    </FormContainer>
  );
};

export default LogInForm;
