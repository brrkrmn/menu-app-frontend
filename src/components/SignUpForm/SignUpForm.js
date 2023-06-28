import { yupResolver } from "@hookform/resolvers/yup";
import SubmitButton from "common/buttons/SubmitButton";
import FormContainer from "common/forms/FormContainer";
import PasswordInput from "common/forms/PasswordInput";
import TextInput from "common/forms/TextInput";
import { userSchema } from "constants/validations";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import signupService from "services/signup";

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleSignup = async (newUser) => {
    await signupService.create(newUser);
    navigate("/login");
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleSignup)}>
      <TextInput name="name" register={register} errors={errors} placeholder="İsim" />
      <PasswordInput name="password" errors={errors} register={register} />
      <SubmitButton>Kaydol</SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
