import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Nova Ocorrência' }} />
      <Tabs.Screen name="historico" options={{ title: 'Histórico' }} />
    </Tabs>
  );
}