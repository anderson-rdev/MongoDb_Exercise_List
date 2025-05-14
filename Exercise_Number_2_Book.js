// 1. Criar o banco de dados `biblioteca`
// use biblioteca

// 2. Criar a coleção `livros`
db.createCollection("livros");

// 3. Inserir 20 documentos na coleção `livros`
db.livros.insertMany([
  {
    titulo: 'Contos de Gelo e Fogo',
    autor: 'George R. R. Martin',
    anoPublicacao: 1996,
    categorias: ['Fantasia', 'Drama', 'Ação'],
    editora: 'Aleph',
    disponível: true
  },
  {
    titulo: 'Carrie',
    autor: 'Stephen King',
    anoPublicacao: 1974,
    categorias: ['Terror', 'Suspense'],
    editora: 'Doubleday',
    disponível: true
  },
  {
    titulo: 'It',
    autor: 'Stephen King',
    anoPublicacao: 1986,
    categorias: ['Terror', 'Suspense'],
    editora: 'Viking',
    disponível: false
  },
  {
    titulo: 'Game of Thrones',
    autor: 'George R. R. Martin',
    anoPublicacao: 1996,
    categorias: ['Fantasia', 'Drama', 'Ação'],
    editora: 'Bantam Books',
    disponível: false
  },
  {
    titulo: 'Bad Boy',
    autor: 'Stephen King',
    anoPublicacao: 2011,
    categorias: ['Suspense', 'Drama', 'Ação'],
    editora: 'Aleph',
    disponível: true
  },
  {
    titulo: 'O Poder do Agora',
    autor: 'Eckhart Tolle',
    anoPublicacao: 2000,
    categorias: ['Autoajuda', 'Ficção'],
    editora: 'Aleph',
    disponível: false
  },
  {
    titulo: 'O Segredo',
    autor: 'Rhonda Byrne',
    anoPublicacao: 2007,
    categorias: ['Autoajuda', 'Desenvolvimento Pessoal'],
    editora: 'Aleph',
    disponível: true
  },
  {
    titulo: 'Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    categorias: ['Fantasia', 'Ação'],
    editora: 'Arqueiro',
    disponível: true
  },
  {
    titulo: 'O Telefone Preto',
    autor: 'Stephen King',
    anoPublicacao: 2019,
    categorias: ['Ação', 'Fantasia'],
    editora: 'Arqueiro',
    disponível: false
  },
  {
    titulo: 'Código Da Vinci',
    autor: 'Dan Brown',
    anoPublicacao: 2003,
    categorias: ['Ficção Científica', 'Drama', 'Ação'],
    editora: 'Aleph',
    disponível: true
  },
  {
    titulo: '2001: Uma Odisseia no Espaço',
    autor: 'Arthur C. Clarke',
    anoPublicacao: 1968,
    categorias: ['Ficção Científica'],
    editora: 'Saraiva',
    disponível: false
  },
  {
    titulo: 'Star Wars',
    autor: 'George Lucas',
    anoPublicacao: 1977,
    categorias: ['Ficção Científica', 'Fantasia'],
    editora: 'Saraiva',
    disponível: true
  },
  {
    titulo: 'Guerra dos Mundos',
    autor: 'H.G. Wells',
    anoPublicacao: 1898,
    categorias: ['Ficção Científica'],
    editora: 'Saraiva',
    disponível: false
  },
  {
    titulo: 'Jogo das Cadeiras',
    autor: 'Viviane Moura',
    anoPublicacao: 2025,
    categorias: ['Comédia'],
    editora: 'Penguin',
    disponível: true
  },
  {
    titulo: 'La Casa de Papel',
    autor: 'Stephen King',
    anoPublicacao: 2017,
    categorias: ['Drama', 'Ação'],
    editora: 'Penguin',
    disponível: false
  },
  {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    categorias: ['Fantasia', 'Aventura'],
    editora: 'HarperCollins',
    disponível: true
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    categorias: ['Distopia', 'Política', 'Ficção Científica'],
    editora: 'Companhia das Letras',
    disponível: false
  },
  {
    titulo: 'Duna',
    autor: 'Frank Herbert',
    anoPublicacao: 1965,
    categorias: ['Ficção Científica', 'Aventura'],
    editora: 'Aleph',
    disponível: true
  },
  {
    titulo: 'O Iluminado',
    autor: 'Stephen King',
    anoPublicacao: 1977,
    categorias: ['Terror', 'Suspense', 'Psicológico'],
    editora: 'Suma',
    disponível: true
  },
  {
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    anoPublicacao: 1813,
    categorias: ['Romance', 'Drama', 'Clássico'],
    editora: 'Penguin Books',
    disponível: false
  }
]);

// 4. Buscar livros da editora "Aleph" ou com ano de publicação 1950
db.livros.find({
  $or: [
    { editora: 'Aleph' },
    { anoPublicacao: 1950 }
  ]
});

// 5. Títulos dos livros de Stephen King disponíveis
db.livros.find(
  { autor: 'Stephen King', disponível: true },
  { _id: 0, titulo: 1 }
);

// 6. Títulos e ano dos livros não publicados após 2000, ordenados por título
db.livros.find(
  { anoPublicacao: { $lte: 2000 } },
  { _id: 0, titulo: 1, anoPublicacao: 1 }
).sort({ titulo: 1 });

// 7. Contar livros da editora "Arqueiro"
db.livros.find({ editora: 'Arqueiro' }).count();

// 8. Títulos com "o" no nome (case insensitive), ordenados, limite de 5
db.livros.find(
  { titulo: { $regex: 'o', $options: 'i' } }
).sort({ titulo: 1 }).limit(5);

// 9. Livros publicados antes de 1970, ordenados por ano decrescente
db.livros.find(
  { anoPublicacao: { $lt: 1970 } },
  { _id: 0, titulo: 1, anoPublicacao: 1 }
).sort({ anoPublicacao: -1 });

// 10. Livros da categoria "Fantasia", publicados entre 1950 e 2000, disponíveis
db.livros.find(
  {
    categorias: 'Fantasia',
    anoPublicacao: { $gte: 1950, $lte: 2000 },
    disponível: true
  },
  { _id: 0, titulo: 1, anoPublicacao: 1, autor: 1 }
);

// 11. Títulos que começam com "O" e não são da categoria "Terror"
db.livros.find(
  {
    titulo: { $regex: /^O\s/, $options: 'i' },
    categorias: { $ne: "Terror" }
  }
).limit(3);

// 12. Livros de Stephen King com categoria "Terror" e disponíveis
db.livros.find(
  {
    categorias: /Terror/i,
    disponível: true,
    autor: 'Stephen King'
  },
  {
    _id: 0,
    titulo: 1
  }
).sort({ titulo: 1 });

// 13. Contar livros publicados após 1990 OU com categoria "Ficção Científica"
db.livros.countDocuments({
  $or: [
    { anoPublicacao: { $gt: 1990 } },
    { categorias: 'Ficção Científica' }
  ]
});

// 14. Livros com mais de uma categoria e que não são da editora "Penguin"
db.livros.find(
  {
    categorias: { $not: { $size: 1 } },
    editora: { $ne: 'Penguin' }
  },
  { _id: 0, titulo: 1, categorias: 1, editora: 1 }
);

// 15. Livros que contenham *tanto* "Suspense" quanto "Mistério" nas categorias
db.livros.find(
  {
    categorias: { $all: [/Suspense/i, /Mistério/i] }
  },
  { _id: 0, titulo: 1, categorias: 1 }
);
