# Test Front End

Foi desenvolvida uma tela de produto em React com o server em NodeJs e Express, utilizando HTML5 (enviado pela empresa) e Sass.

O projeto está divido em 2 pastas: server e client.

Para rodar a aplicação, inicie primeiro o server, para que a busca por produtos, brands, price e bag seja feito corretamente.

# Server
A parte do server foi desenvolvida em NodeJS e Express, e está rodando na porta 5000 (http://localhost:5000). 
Para a bag e wishlist estamos usando express-session.

Foram desenvolvidas as seguintes api para controle da aplicação:

### Product

* [GET] - /products - Retorna todos os produtos.
* [GET] - /products?page={page}&page_size={size} - Retorna todos os produtos paginado

### Brands

* [GET] - /brands - responsavel pelo request das brands
* [GET] - /products?page={page}&page_size={size} - Retorna todos as brands paginada

### Wish List

* [GET] - /wishlist - Retorna todos os produtos que estão na wishlist do usuário
* [POST] - /wishlist - Coloca um produto na wishlist do usuário
* [DELETE] - /wishlist/{productId} - remove produto da wishlist do usuário

### Bag

* [GET] - /bag - Retorna todos os produtos que estão na Bag do usuário
* [POST] - /bag - Coloca um produto na Bag do usuário
* [DELETE] - /bag/{productId} - remove produto da Bag do usuário


[server/READM.ME](Para instalar o subir a aplicação acesse o readme do server).

# Client

O client foi desenvolvido em React e Redux.

## Na tela de produtos contém as seguintes funcionalidades:

* Listagem de produtos: São mostrados 6 produtos por página.
* No header temos os botões:
**  Wishlist: quando o usuário clica no wishlist do produto, ele é inserido no botão wishlist. Após essa ação o botão do produto fica desabilitado.

** Cart: Quando o usuário adiciona um, produto ao carrimnho de compras, o label do botão troca automaticamente e ele fica desabilitado. O produto é adicionado ao carrinho e a some de todos os produtos é feito automaticamente.

* Filtros - É possível fazer a busca de produtos por marca e ordenar os preços por Ascending e Descending. É possível mesclar as 2 buscas juntas.
* Paginação: A paginação está considerando  a quantidade de 6 produtos por página.
* Preço: Se o produto está com preço promocional o preço antigo é colocado com um um risco vermelho.
* [client/READM.ME](Para instalar o subir a aplicação acesse o readme do client.)

