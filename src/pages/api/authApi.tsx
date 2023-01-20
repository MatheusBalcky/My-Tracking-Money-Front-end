import api from './Instance';

interface LoginInputs {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export async function signIn(data: LoginInputs) {
  const response = await api.post('/signin', data);
  return response.data;
}

export async function signUp(data: RegisterData) {
  const response = await api.post('/signup', data);
  return response.data;
}
