# Arcade Portfolio v1.0 🕹️

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success?style=flat-square&logo=vercel&logoColor=white)](https://[SEU_LINK_AQUI].dev)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

Bem-vindo ao meu Arcade Portfolio. Este projeto transforma a clássica apresentação profissional em uma experiência nostálgica e interativa, inspirada nas telas de fliperamas e jogos 8-bit. Desenvolvido com foco em gamificação e performance, o sistema conta com navegação inspirada em menus de jogos retrô e animações fluidas.

🔗 Visite o fliperama em produção: [https://walisantos.vercel.app/](https://walisantos.vercel.app/)

---

## 👾 Arquitetura da Máquina (Funcionalidades)

A navegação do sistema foi inteiramente pensada para simular a interface de um *Arcade*:

*   **> INSERIR FICHA < :** Tela de inicialização imersiva no melhor estilo "Press Start".
*   **Player 1 (Sobre Mim):** Um perfil de jogador contendo uma biografia, meu *Tech Arsenal* e um *Hall of Fame* destacando conquistas.
*   **Character Select (Projetos):** Um seletor de "lutadores" que funciona como o portfólio de projetos. Cada projeto apresenta suas *Combat Stats* (Tech Specs) e links para acesso código-fonte ou interface.
*   **Bonus Stage (Artigos):** Uma fase bônus dedicada às minhas produções acadêmicas e pesquisas, com foco em Visão Computacional, detecção automatizada de danos utilizando as redes YOLO e IA.
*   **Save Data:** Opção direta para baixar o currículo e "salvar o progresso" da visita.

---

## 🛠️ Combat Stats (Tecnologias Utilizadas)

O projeto foi construído focando em alta interatividade e renderização rápida de elementos gráficos, utilizando as melhores ferramentas modernas:

* **Frontend:** React 18, Vite v8.
* **Estilização:** Tailwind CSS (com configurações customizadas para paletas de cores neon/retro e fontes pixeladas).
* **Animações:** Framer Motion (Garantindo que a movimentação dos elementos na tela rode a 60fps constantes).
* **Gerenciamento de Estado:** Zustand / Context API (Para controlar o "save state" e as pontuações do usuário).
* **Deploy:** Vercel.

---

## 🍄 Level Up (O que aprendi)

Desenvolver essa interface no estilo Arcade foi um desafio imersivo que me fez "subir de nível" em diversas áreas do desenvolvimento web:

*   **Tailwind & Estética Retrô:** Aprendi a lidar com fontes pixeladas, bordas neon e estruturação de layouts que remetem a monitores antigos (CRT), garantindo que a proporção visual se mantenha intacta mesmo em telas de celulares.
*   **Arquitetura de Componentes:** Como a navegação foge do padrão tradicional de páginas web (simulando telas de *Character Select* e *Press Start*), aprimorei muito minha lógica de componentização e utilização de hooks no React.
*   **Atenção aos Detalhes (UX):** Entendi a importância de feedbacks visuais claros para guiar o usuário por uma interface não convencional, garantindo que a nostalgia não atrapalhasse a usabilidade e a leitura do meu currículo e projetos.

---

## 📦 Como Rodar o Fliperama Localmente

Para rodar este projeto na sua máquina local, certifique-se de ter o Node.js instalado.

1. Clone o repositório:
   ```bash
   git clone https://github.com/WaliSantos/Gamified-Retro-Portfolio-.git

2. Instale as dependências:

    ```bash
    npm install

3. Dê o Start no servidor de desenvolvimento:
    ```bash
    npm run dev

4.  Acesse http://localhost:5173 no seu navegador.