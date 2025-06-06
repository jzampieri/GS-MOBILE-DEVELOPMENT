# 🌐 Guardian Grid – Inteligência Coletiva contra Apagões

O **Guardian Grid** é uma solução mobile desenvolvida com **React Native + Expo**, que visa ajudar a população a **registrar, monitorar e se preparar para falhas no fornecimento de energia elétrica** causadas por eventos climáticos extremos como chuvas intensas, ventanias e deslizamentos.

## 📱 Aplicativo Mobile

A proposta é oferecer uma ferramenta **descentralizada**, **offline** e **colaborativa** para que qualquer cidadão possa reportar incidentes de forma simples e segura, mesmo em situações de instabilidade de rede.

---

## ✅ Funcionalidades

- **Registro de Ocorrências**: cadastro de informações como local afetado, duração da interrupção e prejuízos observados.
- **Listagem Local**: histórico das ocorrências registradas, armazenadas via `AsyncStorage`.
- **Recomendações de Segurança**: orientações úteis para o usuário saber como agir durante um apagão.
- **Perfil do Usuário**: cadastro de nome e e-mail, armazenados localmente.
- **Interface Intuitiva**: navegação por abas inferior com ícones, responsiva e compatível com Android e iOS.

---

## 🧱 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo Router](https://expo.github.io/router/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ionicons](https://icons.expo.fyi/)

---

## 🗂️ Estrutura de Pastas

```
app/
├── (tabs)/         # Telas do app (Index, Histórico, Ajuda, Perfil)
├── _layout.tsx     # Layout principal
├── +not-found.tsx  # Tela de erro personalizada
components/
├── RegistroForm.tsx
lib/
├── storage.ts      # Lógica de persistência local
types/
├── ocorrencia.ts   # Tipagem
```

---

## 💾 Armazenamento Local

Todos os dados são salvos localmente com `AsyncStorage`, garantindo:
- Funcionamento offline
- Retenção mesmo após fechamento do app

---

## 🧪 Como Executar o Projeto

1. Instale o Expo CLI (caso ainda não tenha):
   ```bash
   npm install -g expo-cli
   ```

2. Clone o repositório:
   ```bash
   git clone https://github.com/jzampieri/guardian-grid.git
   cd guardian-grid
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o projeto:
   ```bash
   npx expo start
   ```

5. Escaneie o QR Code com o app **Expo Go** no seu celular.

---

## 👨‍💻 Equipe

- João Gabriel Dias – RM: 99092
- Lucas Carlos Bandeira – RM: 98640
- Julio Cesar Zampieri – RM: 98772

---

## 🎓 Projeto Acadêmico

Este projeto foi desenvolvido como parte da disciplina de **Mobile Development** no curso de **Engenharia de Software - FIAP**, dentro do desafio **Global Solution 2025**.

---

## 📜 Licença

Uso acadêmico. Todos os direitos reservados à equipe Guardian Grid.
