# 🤫 Shh

Este site foi criado com a finalidade de constituir o _Material Interativo_ do artigo **["RSA: O método de chaves públicas e assinaturas digitais"](https://docs.google.com/document/d/1gb4z7Gxa8f9kcE4T9aPqsGETIZAbBNhgs8vqo7XAIdA/edit?usp=sharing)**, apresentado por [Miguel Martins Rocha](https://www.miguelrocha.dev/pt), candidato à 17º edição do Prémio Pedro de Matos .

O objetivo deste projeto é proporcionar uma experiência interativa e educativa sobre o algoritmo RSA, um dos métodos mais utilizados para criptografia e assinaturas digitais, permitindo que os utilizadores compreendam melhor como funciona a criptografia assimétrica.

Espero que este projeto contribua para a divulgação do conhecimento em criptografia e que inspire outros a explorar este fascinante campo da matemática e da segurança digital.

🔗 Aceda ao site em: **[https://premiopedrodematos.miguelrocha.dev](https://premiopedrodematos.miguelrocha.dev)**

📄 **[Artigo "RSA: O método de chaves públicas e assinaturas digitais"](https://docs.google.com/document/d/1gb4z7Gxa8f9kcE4T9aPqsGETIZAbBNhgs8vqo7XAIdA/edit?usp=sharing)**

🖼️ **[Poster do Artigo](https://drive.google.com/drive/folders/1e1xeo88SCnC5ILLq0naTa0O7Ef0sZz2t?usp=sharing)**

## 🚀 Como executar

Este site foi desenvolvido com [Next.js](https://nextjs.org/) e [Tailwind CSS](https://tailwindcss.com/).
Certifique-se de que tem o **Node.js** instalado para rodar o projeto localmente.

```bash
# Instalar dependências
npm install

# URL base do site
NEXT_PUBLIC_BASE_URL=http://localhost:3000 (Exemplo)

# Chave secreta para autenticação JWT
JWT_SECRET=sua_chave_secreta_aqui (Exemplo)

# Credenciais da base de dados Xata
XATA_API_KEY=sua_api_key_do_xata (Exemplo)
XATA_BRANCH=nome_da_sua_branch (Exemplo)

# Rodar o servidor de desenvolvimento
npm run dev
```

## 📜 Licença

Este projeto é de código aberto e está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
