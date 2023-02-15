import {useState} from "react";
import styled from "styled-components";
import {Button} from "../ui/button";
import {Text} from "../ui/text";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 5% auto;

  background-color: #b4b0b04a;
  padding: 20px;
  border-radius:10px;
  
`;

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  input {
    width: 100%;
    height: 40px;
    border: 0;
    padding: 10px;
  }
`;



export const Login = (props) => {
  const [user, setUser] = useState("");
  const onClickHomeHandler = () => {
    props.onClickHomeButton("home");
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };


  return (
    <Wrapper>
      <TitleWrapper>
        <Text color="white">Login</Text>
      </TitleWrapper>
      <Form>
        <InputWrapper>
          <input
            type="text"
            placeholder="Digite o usuário"
            onChange={handleChangeUser}
          />
        </InputWrapper>
        <InputWrapper>
          <input type="password" placeholder="Digite a senha" />
        </InputWrapper>
      </Form>
      <Button
        onClick={() => {
        //   console.log({user});
          props.onClickHomeButton("home");
        }}
      >
        Ir para a home
      </Button>
    </Wrapper>
  );
};