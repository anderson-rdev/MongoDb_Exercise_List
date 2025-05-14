// 1. Usar o banco de dados 'lojaEletro'
// use lojaEletro;

// 2. Criar e inserir dados na coleção 'produtos'
db.produtos.insertMany([
    {
        _id: 1,
        nome: 'Geladeira Frost Free',
        categoria: 'eletrodomestico',
        preco: 3500,
        fabricante: 'Electrolux'
    },
    {
        _id: 2,
        nome: 'Iphone 15 Pro Max',
        categoria: 'telefonia',
        preco: 7500,
        fabricante: 'Apple'
    },
    {
        _id: 3,
        nome: 'Notebook Samsung Galaxy Book',
        categoria: 'informática',
        preco: 8500,
        fabricante: 'Samsung'
    },
    {
        _id: 4,
        nome: 'TV 40 Polegadas LED',
        categoria: 'eletrodomestico',
        preco: 4500,
        fabricante: 'LG'
    },
    {
        _id: 5,
        nome: 'Mochila Nike',
        categoria: 'acessórios',
        preco: 250,
        fabricante: 'Nike'
    },
    {
        _id: 6,
        nome: 'Caixa de Som JBL Boombox',
        categoria: 'eletrodomestico',
        preco: 3000,
        fabricante: 'JBL'
    }
]);

// 3. Criar e inserir dados na coleção 'clientes'
db.clientes.insertMany([
    {
        _id: 1,
        nome: 'João da Silva',
        categoria: 'São Paulo',
        fidelidade: true
    },
    {
        _id: 2,
        nome: 'Anderson Ramos',
        categoria: 'São Paulo',
        fidelidade: true
    },
    {
        _id: 3,
        nome: 'Rafael Silva',
        categoria: 'São Paulo',
        fidelidade: true
    },
    {
        _id: 4,
        nome: 'Guilherme Santos',
        categoria: 'São Paulo',
        fidelidade: false
    },
    {
        _id: 5,
        nome: 'Silvia Costa',
        categoria: 'São Paulo',
        fidelidade: false
    },
    {
        _id: 6,
        nome: 'Viviane Oliveira',
        categoria: 'São Paulo',
        fidelidade: true
    }
]);

// 4. Criar e inserir dados na coleção 'vendas'
db.vendas.insertMany([
    {
        idProduto: 1,
        idCliente: 1,
        data: ISODate("2024-12-01T10:00:00.000Z"),
        quantidade: 1
    },
    {
        idProduto: 2,
        idCliente: 2,
        data: ISODate("2024-12-02T11:00:00.000Z"),
        quantidade: 1
    },
    {
        idProduto: 3,
        idCliente: 3,
        data: ISODate("2024-12-03T12:00:00.000Z"),
        quantidade: 1
    },
    {
        idProduto: 4,
        idCliente: 4,
        data: ISODate("2024-12-04T13:00:00.000Z"),
        quantidade: 1
    },
    {
        idProduto: 5,
        idCliente: 5,
        data: ISODate("2024-12-05T14:00:00.000Z"),
        quantidade: 1
    },
    {
        idProduto: 6,
        idCliente: 6,
        data: ISODate("2024-12-06T15:00:00.000Z"),
        quantidade: 1
    },
    {
        idProduto: 1,
        idCliente: 1,
        data: ISODate("2024-12-07T16:00:00.000Z"),
        quantidade: 2
    },
    {
        idProduto: 3,
        idCliente: 2,
        data: ISODate("2024-12-08T17:00:00.000Z"),
        quantidade: 1
    }
]);

// 5. Agregação para contar produtos por categoria
db.produtos.aggregate([
    {
        $group: {
            _id: '$categoria',
            total: { $count: {} }
        }
    }
]);

// 6. Agregação para listar clientes de São Paulo
db.clientes.aggregate([
    {
        $match: { categoria: 'São Paulo' }
    },
    {
        $project: { _id: 0, nome: 1 }
    }
]);

// 7. Agregação para listar nomes de produtos
db.produtos.aggregate([
    {
        $group: { _id: '$nome' }
    }
]);
