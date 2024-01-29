<body>

<h1>Documentação do Projeto PokeDesk</h1>

<p>Este é um guia de documentação para o projeto PokeDesk, um aplicativo web construído em React para explorar dados sobre Pokémon. O projeto inclui a utilização do Redux para gerenciamento de estado, a integração com a PokeAPI para obter informações sobre Pokémon, e a utilização das bibliotecas Form e Zod para lidar com formulários e validação de dados.</p>

<h2>Estrutura do Projeto</h2>

<p>O projeto está estruturado da seguinte forma:</p>

<ul>
  <li><strong>src/components/pages:</strong> Contém os componentes principais das páginas do aplicativo.</li>
  <ul>
    <li><strong>Home:</strong> Página inicial do aplicativo.</li>
    <li><strong>PokeApp:</strong> Página para explorar a lista de Pokémon.</li>
    <li><strong>PokeDetails:</strong> Página para exibir detalhes de um Pokémon.</li>
  </ul>
  <li><strong>src/components/pages/style:</strong> Contém os arquivos de estilos para os componentes das páginas.</li>
  <li><strong>src/redux/pokeredux:</strong> Contém os arquivos relacionados ao gerenciamento de estado com o Redux.</li>
  <ul>
    <li><strong>poke.actionsTypes:</strong> Define as constantes para os tipos de ações Redux.</li>
    <li><strong>poke.actions:</strong> Contém as ações que serão despachadas para modificar o estado.</li>
    <li><strong>poke.reducer:</strong> Define o reducer que manipula o estado global baseado nas ações recebidas.</li>
  </ul>
  <li><strong>src/utils:</strong> Contém utilitários ou funções auxiliares utilizadas no projeto.</li>
</ul>

<h2>Principais Funcionalidades</h2>

<ol>
  <li><strong>Listagem de Pokémon:</strong></li>
  <ul>
    <li>A página inicial (<code>Home</code>) apresenta uma breve introdução e um link para explorar a lista de Pokémon.</li>
    <li>A página de listagem de Pokémon (<code>PokeApp</code>) exibe uma grade de Pokémon com opção de filtragem por tipo.</li>
  </ul>
  <li><strong>Detalhes de Pokémon:</strong></li>
  <ul>
    <li>A página de detalhes de Pokémon (<code>PokeDetails</code>) exibe informações detalhadas sobre um Pokémon específico, como imagem, habilidades, experiência base, peso, altura, tipos e estatísticas.</li>
  </ul>
  <li><strong>Busca de Pokémon:</strong></li>
  <ul>
    <li>O componente de busca (<code>PokemonSearch</code>) permite buscar Pokémon por nome e tipo na página de listagem de Pokémon.</li>
    <li>O formulário de busca utiliza a biblioteca Form para gerenciar os campos de entrada e a biblioteca Zod para validar os dados inseridos.</li>
  </ul>
  <li><strong>Gerenciamento de Estado com Redux:</strong></li>
  <ul>
    <li>O estado global da aplicação é gerenciado usando o Redux, com ações específicas para carregamento de dados gerais, detalhes de Pokémon e lista de tipos.</li>
  </ul>
</ol>

<h2>Configuração e Execução</h2>

<ol>
  <li><strong>Instalação de Dependências:</strong></li>
  <ul>
    <li>Execute <code>npm install</code> para instalar as dependências do projeto.</li>
  </ul>
  <li><strong>Execução do Aplicativo:</strong></li>
  <ul>
    <li>Execute <code>npm start</code> para iniciar o servidor de desenvolvimento. O aplicativo estará disponível em <code>http://localhost:3000</code>.</li>
  </ul>



<h2>Tecnologias Utilizadas</h2>

<p>O projeto faz uso das seguintes tecnologias principais:</p>

<ul>
  <li><strong>React:</strong> Biblioteca para construção de interfaces de usuário.</li>
  <li><strong>React Router:</strong> Roteador para navegação entre páginas.</li>
  <li><strong>Redux e React-Redux:</strong> Gerenciamento de estado global na aplicação.</li>
  <li><strong>Styled Components:</strong> Estilização de componentes com CSS-in-JS.</li>
  <li><strong>PokeAPI:</strong> Fonte de dados para informações sobre Pokémon.</li>
  <li><strong>Form:</strong> Biblioteca para gerenciamento de formulários em React.</li>
  <li><strong>Zod:</strong> Biblioteca para validação de esquemas de dados em TypeScript.</li>
</ul>

<h2>Contribuição</h2>

<p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, propor melhorias ou enviar pull requests.</p>

<h2>Autor</h2>

<p><strong>Seu Nome</strong></p>

<h2>Licença</h2>

</body>
