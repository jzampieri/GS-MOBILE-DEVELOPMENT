import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ocorrencia } from '../types/ocorrencia';

const STORAGE_KEY = 'ocorrencias';

export async function saveOcorrencia(ocorrencia: Ocorrencia) {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  const lista = data ? JSON.parse(data) : [];
  lista.push(ocorrencia);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export async function getOcorrencias(): Promise<Ocorrencia[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}