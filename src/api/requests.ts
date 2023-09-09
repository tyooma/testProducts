import axios, { AxiosResponse } from 'axios';
import { Exercises } from '../types/data';

const API_KEY = '7kPMLmIvnR6kE15znoAyQKaiXD02GK7z4e5xvvCe';
const API_EXERCISES_URL = 'https://api.api-ninjas.com/v1/exercises';

export const searchExercises = async (
  name?: string,
  type?: string,
  muscle?: string,
  difficulty?: string,
): Promise<Exercises> => {
  const headers = {
    'X-Api-Key': API_KEY,
  };
  const response: AxiosResponse<Exercises> = await axios.get(
    `${API_EXERCISES_URL}?name=${name}&type=${type}&muscle=${muscle}&difficulty=${difficulty}`,
    {
      headers,
    },
  );

  return response.data;
};
