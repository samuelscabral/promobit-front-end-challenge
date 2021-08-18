Esse é um desafio para o processo seletivo do [Promobit](https://github.com/Promobit/front-end-challenge/blob/master/README.md).
Uma versão online do projeto pode ser acessada em https://promomovie.vercel.app

## Como rodar o projeto em seu dispositivo

- Basta baixar o repositório localmente 
- criar um arquivo `.env.local` com a key para a api do The Movie DB
```
REACT_APP_TMDB_API_KEY_V3 = '<sua key>'
```
- Iniciar o servidor local com yarn
```
  yarn dev
```
ou npm
```
npm run dev
```

## O desafio

Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint  [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Temos insights que nos levam a acreditar que os usuários dessa lista costumam ter uma experiência melhor se conseguirem criar um filtro usando seus genêros favoritos. Portanto, você também será responsável por criar filtros de filmes por gênero nessa listagem. Note que um novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, [`GET /genre/movie/list`](https://developers.themoviedb.org/3/genres/get-movie-list).

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada sempre que não existir nenhum filtro de gênero ativo.


### O que foi feito
- [x] Adicionado Wrapper da API do TMDB de modo seguro (Onde a chave da API não é visível pelo front-end)
- [x] Adicionado tratamento de geração de conteúdo pelo servidor de modo estático ou dinâmico (Quando necessário)
- [X] Criação das páginas de visualização da lista de filmes e de detalhes
- [X] Adicionado filtro de filmes e navegação entre páginas
### Próximos passos
- [ ] Concluir a página de visualização dos detalhes do filme
- [ ] Melhor estilização do conteúdo
- [ ] Refatorar algumas partes do código para deixar legível
