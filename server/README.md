# Instalar Aplicação

Antes de inicar a aplicação é necessário rodar o $npm install.

Antes de rodar a aplicação certifique-se que o server já está funcionando, para que o request dos produtos seja feito corretamente.

## Intalação
```bash
$ npm install 
```

## Subir o server
```bash
$ npm start
```

Para rodar a aplicação dentro da pasta server roda o $ npm start<br>
O server vai funcionar na porta 5000  [http://localhost:5000](http://localhost:5000) .

## APIS:

### Product

* [GET] - /products - Retorna todos os produtos.
* [GET] - /products?page={page}&page_size={size} - Retorna todos os produtos paginado

### Brands

* [GET] - /brands - responsavel pelo request das brands
* [GET] - /products?page={page}&page_size={size} - Retorna todos as brands paginada

### Wish List

* [GET] - /wishlist - Retorna todos os produtos que estão na wishlist do usuário
* [POST] - /wishlist - Coloca um produto na wishlist do usuário
```json
{
    "productId": "4",

}
```
* [DELETE] - /wishlist/{productId} - remove produto da wishlist do usuário

### Bag

* [GET] - /bag - Retorna todos os produtos que estão na Bag do usuário
* [POST] - /bag - Coloca um produto na Bag do usuário
```json
{
    "productId": "4",
    "quantity": 1
}
```
* [DELETE] - /bag/{productId} - remove produto da Bag do usuário


### Testes
```bash
$ npm test
```

Para rodar os testes unitários