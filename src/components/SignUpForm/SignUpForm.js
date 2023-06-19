import SubmitButton from "common/buttons/SubmitButton";
import FormContainer from "common/forms/FormContainer";
import PasswordInput from "common/forms/PasswordInput";
import TextInput from "common/forms/TextInput";
import useField from "hooks/useField";
import { useNavigate } from "react-router-dom";
import signupService from "services/signup";

const SignUpForm = () => {
  const navigate = useNavigate();
  const name = useField("text");
  const password = useField("password");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: name.value,
      password: password.value,
    };
    await signupService.create(newUser);
    name.setValue("");
    password.setValue("");
    navigate("/login");
  };

  return (
    <FormContainer onSubmit={handleSignUp}>
      <TextInput target={name} placeholder="İsim" id="signupName" />
      <PasswordInput password={password} id="signupPassword" />
      <SubmitButton>Kaydol</SubmitButton>
    </FormContainer>
  );
};

export default SignUpForm;
