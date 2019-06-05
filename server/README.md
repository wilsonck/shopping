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

### Produtos

#### GET
http://localhost:5000/products/?page=1&page_size=10
http://localhost:5000/products

### Brands 

#### GET
http://localhost:5000/brands/?page=1&page_size=10
http://localhost:5000/brands

### Wishlist 

#### GET
http://localhost:5000/wishList

#### POST
http://localhost:5000/wishList
Request Payload - exemplo
{
    productId: "4"
}

#### DELETE
http://localhost:5000/wishList/1


### BAG 

#### GET
http://localhost:5000/bag

#### POST
http://localhost:5000/bag
Request Payload - exemplo
{
    productId: "4",
    quantity: 1
}

#### DELETE
http://localhost:5000/bag/1


### Testes
```bash
$ npm test
```

Para rodar os testes unitários