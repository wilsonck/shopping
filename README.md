# Test Front End

Foi desenvolvida uma tela de produto em React com o server em NodeJs e Express, utilizando HTML5 (enviado pela empresa) e Sass.

O projeto está divido em 2 pastas: server e client.

Para rodar a aplicação, inicie primeiro o server, para que a busca por produtos, brands, price e bag seja feito corretamente.

# Server
A parte do server foi desenvolvida em NodeJS e Express, e está rodando na porta 5000 (http://localhost:5000). 
Para a bag e wishlist usei express-session.

Foram desenvolvidas as seguintes api para controle da aplicação:

### Product

* [GET] - /products - Retorna todos os produtos.
* [GET] - /products?page={page}&page_size={size} - Retorna os produtos paginado.

### Brands

* [GET] - /brands - Retorna todas as brands.
* [GET] - /products?page={page}&page_size={size} - Retorna todos as brands paginada.

### Wish List

* [GET] - /wishlist - Retorna todos os produtos que estão na wishlist do usuário.
* [POST] - /wishlist - Coloca um produto na wishlist do usuário.
* [DELETE] - /wishlist/{productId} - Remove produto da wishlist do usuário.

### Bag

* [GET] - /bag - Retorna todos os produtos que estão na Bag do usuário.
* [POST] - /bag - Coloca um produto na Bag do usuário.
* [DELETE] - /bag/{productId} - Remove produto da Bag do usuário.


[Para instalar o subir a aplicação acesse o readme do server](https://github.com/wilsonck/shopping/blob/master/server/README.md).


# Client

O client foi desenvolvido em React e Redux.

## Na tela de produtos contém as seguintes funcionalidades:

* No header temos os botões:<br />

    - Wishlist: Listagem dos produtos adicionados através dos botão no card. Cada item da lista tem um botão para remover.

    - Bag: Listagem dos produtos adicionados para compra, com a soma de todos os produtos selecionados. Cada item da lista tem um botão para remover. A cada inclusão ou remoção de produtos o valor total é atualizado.

* Listagem de produtos: 

    - São mostrados 6 produtos por página.
    - Botão "Add to Cart":  Adiciona o produto na Bag, somando-se com os demais que já se encontram, o label do botão troca automaticamente para "In Cart" e ele fica desabilitado. 
    - Botão "WishList":  Adiciona o produto na WishList, o ícone muda de cor para sinalizar que foi selecionado e fica desabilitado. 
    - Preço: Se o produto está com preço promocional o preço antigo é colocado com um um risco e o novo preço é destacado em vermelho.

* Filtros - É possível fazer a busca de produtos por marca e ordenar os preços por Ascending e Descending. É possível mesclar as 2 buscas juntas.

* Paginação: A paginação está considerando a quantidade de 6 produtos por página.


[Para instalar o subir a aplicação acesse o readme do client.](https://github.com/wilsonck/shopping/blob/master/client/README.md)