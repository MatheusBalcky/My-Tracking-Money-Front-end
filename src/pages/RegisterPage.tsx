import { BackgroundLoginPage, FormLoginPage as FormRegisterPage } from './LoginPage';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string } from 'zod';
import { useMutation } from 'react-query';
import { signUp } from './api/authApi';

export default function RegisterPage() {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors }} = useForm <typeRegister> ({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();

  const mutation = useMutation((data: Omit<typeRegister, 'repeatPassword'>) => signUp(data), {
    onSuccess: (data) => {
      navigate('/login');
    },
    onError: (error) => {
      //setInvalidDataMessage('Senha ou e-mail inválidos!');
    },
  });

  const onSubmit = handleSubmit((data: typeRegister) => {
    const { username, email, password } = data;
    mutation.mutate({ username, email, password });
  });

  return (
    <BackgroundLoginPage>
      <h1>My Money Tracking</h1>

      <FormRegisterPage onSubmit={onSubmit}>
        <input {...register('username')} type="text" placeholder="Username" />
        <p>{errors.username?.message}</p>

        <input {...register('email')} type="email" placeholder="E-mail" />
        <p>{errors.email?.message}</p>

        <input {...register('password')} type="password" placeholder="Senha" />
        <p>{errors.password?.message}</p>

        <input {...register('repeatPassword')} type="password" placeholder="Confirmar senha" />
        <p>{errors.repeatPassword?.message}</p>
        <button>Cadastrar</button>
      </FormRegisterPage>

      <Link to={'/login'}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </BackgroundLoginPage>
  );
}

const loginSchema = z
  .object({
    username: string().min(3, { message: 'Seu nome precisa ter no mínimo 3 caractéres!' }),
    email: string().email({
      message: 'E-mail inválido!',
    }),
    password: string().min(6, { message: 'A senha precisa ter no mínimo 6 caractéres!' }).max(26),
    repeatPassword: string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'As senhas precisam ser iguais!',
    path: ['repeatPassword'],
  });

type typeRegister = z.infer<typeof loginSchema>;
