### `README.md` (Código Completo)

# 🐧 Linux Master Quiz

O **Linux Master Quiz** é uma aplicação web interativa construída do zero com Vanilla JavaScript, focada em testar conhecimentos técnicos baseados no livro *"Como o Linux Funciona"* de Brian Ward. 

O projeto foi desenvolvido com uma arquitetura **mobile-first**, garantindo uma experiência fluida em qualquer dispositivo, e está preparado para monetização via Google Adsense.

---

## 🚀 Funcionalidades

- 🧠 **Quiz Customizável:** Escolha o nível de dificuldade (Iniciante a SysAdmin) e a quantidade de perguntas.
- 👥 **Comunidade:** Sistema de login e comentários integrado para discussão técnica.
- 📱 **Responsivo:** Design adaptado para dispositivos móveis e desktop.
- 🔒 **Segurança:** Autenticação e Banco de Dados via Supabase com Row Level Security (RLS).
- 💰 **Ads Ready:** Layout otimizado com slots estratégicos para anúncios.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Vanilla JavaScript (ES6 Modules), HTML5 Semântico, CSS3 (Mobile-first).
- **Backend:** [Supabase](https://supabase.com/) (PostgreSQL & Auth).
- **Segurança:** UUID para chaves primárias e políticas de RLS.
- **CLI:** Gerenciamento via terminal Linux e GitHub CLI (`gh`).

---

## 💻 Como Rodar o Projeto Localmente

Como o projeto utiliza Módulos ES6, é necessário um servidor local para que o navegador processe os arquivos corretamente.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/quiz-linux.git](https://github.com/SEU_USUARIO/quiz-linux.git)
   cd quiz-linux


2. **Configure suas chaves:**
Crie um arquivo chamado `config.js` na raiz do projeto (este arquivo é ignorado pelo Git):
```javascript
export const CONFIG = {
    SUPABASE_URL: "SUA_URL_DO_SUPABASE",
    SUPABASE_ANON_KEY: "SUA_CHAVE_ANONIMA",
    GOOGLE_ADS_ID: "SEU_ID_DO_ADSENSE"
};

```


3. **Inicie um servidor local:**
Se você tiver o Python instalado:
```bash
python3 -m http.server 8080

```


Acesse no seu navegador: `http://localhost:8080`

---

## 🗄️ Estrutura do Banco de Dados

O banco de dados utiliza PostgreSQL no Supabase. As tabelas seguem o padrão de segurança RLS:

* **Profiles:** Armazena dados públicos dos usuários ligados ao `auth.users`.
* **Comments:** Armazena os feedbacks dos usuários, utilizando **UUID** como chave primária.

---

## 📜 Licença

Este projeto é **Open Source** sob a licença MIT. Sinta-se à vontade para estudar, clonar e contribuir!

---

*Desenvolvido por [Seu Nome] - Focado em aprender Linux e Desenvolvimento Full Stack do Zero.*



---

### Como enviar esse arquivo para o GitHub

Agora que você tem o conteúdo, use o terminal para criar o arquivo e atualizar seu repositório:



```bash
cd ~/dev/quiz-linux

# Cria o arquivo com o conteúdo acima (você pode usar o nano ou seu editor preferido)
nano README.md 

# Salve o arquivo e então:
git add README.md
git commit -m "Docs: Adicionado README profissional"
git push origin main

```