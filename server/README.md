# Instalando a Aplicação

Antes de inicar a aplicação é necessário rodar o $npm install.

Antes de rodar a aplicação certifique-se que o server já está funcionando, para que o request dos produtos seja feito corretamente.

## Instalação
```bash
$ npm install 
```

# Iniciando o server
Para rodar a aplicação dentro da pasta server use o $ npm start<br>
O server vai funcionar na porta 5000  [http://localhost:5000](http://localhost:5000) .

```bash
$ npm start
```


## APIS:

### Product

* [GET] - /products - Retorna todos os produtos.
* [GET] - /products?page={page}&page_size={size} - Retorna os produtos paginado.

### Brands

* [GET] - /brands - Retorna todas as brands.
* [GET] - /products?page={page}&page_size={size} - Retorna todos as brands paginada.

### Wish List

* [GET] - /wishlist - Retorna todos os produtos que estão na wishlist do usuário.
* [POST] - /wishlist - Coloca um produto na wishlist do usuário.
```json
{
    "productId": "4",

}
```
* [DELETE] - /wishlist/{productId} - Remove produto da wishlist do usuário.

### Bag

* [GET] - /bag - Retorna todos os produtos que estão na Bag do usuário.
* [POST] - /bag - Coloca um produto na Bag do usuário.
```json
{
    "productId": "4",
    "quantity": 1
}
```
* [DELETE] - /bag/{productId} - Remove produto da Bag do usuário.


# Testes
Para rodar os testes unitários use $ npm test

```bash
$ npm test
```