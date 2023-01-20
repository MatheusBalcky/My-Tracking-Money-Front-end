import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from './api/authApi';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string } from 'zod';
import { useState } from 'react';

const loginSchema = z.object({
  email: string().email({
    message: 'E-mail inválido!',
  }),
  password: string(),
});

type LoginInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  // prettier-ignore
  const {register, handleSubmit, formState: { errors }} = useForm<LoginInputs>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const [invalidDataMessage, setInvalidDataMessage] = useState('');

  const mutation = useMutation((data: LoginInputs) => signIn(data), {
    onSuccess: (data) => {
      // ! console.log(data); SALVAR NUM CONTEXT, ETC... PROCURAR A LIB
      navigate('/home');
    },
    onError: (error) => {
      setInvalidDataMessage('Senha ou e-mail inválidos!');
    },
    onMutate: () => {
      setInvalidDataMessage('');
    },
  });

  const onSubmit = handleSubmit((data: LoginInputs) => mutation.mutate(data));

  return (
    <BackgroundLoginPage>
      <h1>My Money Tracking</h1>

      <FormLoginPage onSubmit={onSubmit}>
        <input {...register('email')} type="email" placeholder="E-mail" required />
        <p>{errors.email?.message}</p>

        <input {...register('password', { required: true, maxLength: 26 })} type="password" placeholder="Senha" />
        <p>{invalidDataMessage}</p>

        <button type="submit">Entrar</button>
      </FormLoginPage>

      <Link to={'/register'}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </BackgroundLoginPage>
  );
}

// & CSS STYLED COMPONENTS

export const BackgroundLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 18px;

  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 1.5em;
  }

  span {
    font-size: 0.6em;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FormLoginPage = styled.form`
  width: 100%;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  input,
  button {
    font-family: 'Raleway';
    border: none;
    border-radius: 4px;
    font-size: 1em;
    padding: 7px 8px;
  }

  button {
    background-color: black;
    color: white;
    width: 150px;
    font-size: 0.8em;
    cursor: pointer;
    &:hover {
      filter: opacity(70%);
    }
  }

  p {
    font-size: 0.6em;
    color: red;
    font-weight: bold;
    text-align: center;
    width: 75%;
    box-sizing: border-box;
  }
`;
