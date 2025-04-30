// Exercício de MongoDB - Universidade de Mogi das Cruzes

// Objetivo:
// Criar banco de dados denominado "empresa" para praticar a criação de coleção, inserção de documentos e execução de consultas básicas no MongoDB.

// 1. Criar o Banco de Dados
use empresa

// 2. Criar a Coleção e inserir o primeiro documento
db.funcionarios.insertOne({
    _id: 1,
    nome: 'Guilherme',
    idade: 21,
    dependentes: 1,
    salario: 2300.50,
    departamento: 'Recursos Humanos',
    sexo: 'F'
})

// 3. Inserir 19 documentos
db.funcionarios.insertMany([
    { _id: 2, nome: 'Manuel', idade: 31, dependentes: 0, salario: 5000.50, departamento: 'Financeiro', sexo: 'M' },
    { _id: 3, nome: 'Renato', idade: 19, dependentes: 0, salario: 2700.50, departamento: 'Vendas', sexo: 'M' },
    { _id: 4, nome: 'Ryan', idade: 41, dependentes: 3, salario: 7000.50, departamento: 'Recursos Humanos', sexo: 'F' },
    { _id: 5, nome: 'Emilia', idade: 25, dependentes: 1, salario: 3000.50, departamento: 'Financeiro', sexo: 'F' },
    { _id: 6, nome: 'Thiago', idade: 29, dependentes: 1, salario: 3500.50, departamento: 'Vendas', sexo: 'M' },
    { _id: 7, nome: 'Emerson', idade: 27, dependentes: 2, salario: 4000.50, departamento: 'Recursos Humanos', sexo: 'M' },
    { _id: 8, nome: 'Pablo', idade: 23, dependentes: 0, salario: 2000.50, departamento: 'Financeiro', sexo: 'M' },
    { _id: 9, nome: 'Mia', idade: 21, dependentes: 0, salario: 2300.50, departamento: 'Vendas', sexo: 'F' },
    { _id: 10, nome: 'Ingrid', idade: 19, dependentes: 1, salario: 2000.50, departamento: 'Recursos Humanos', sexo: 'F' },
    { _id: 11, nome: 'Yago', idade: 32, dependentes: 3, salario: 2900.50, departamento: 'Financeiro', sexo: 'M' },
    { _id: 12, nome: 'Reginaldo', idade: 38, dependentes: 3, salario: 6000.50, departamento: 'Vendas', sexo: 'M' },
    { _id: 13, nome: 'Bruna', idade: 22, dependentes: 1, salario: 2600.50, departamento: 'Recursos Humanos', sexo: 'F' },
    { _id: 14, nome: 'Rafael', idade: 24, dependentes: 0, salario: 9000.50, departamento: 'Financeiro', sexo: 'M' },
    { _id: 15, nome: 'Renan', idade: 34, dependentes: 2, salario: 8000.50, departamento: 'Vendas', sexo: 'M' },
    { _id: 16, nome: 'Izabela', idade: 32, dependentes: 1, salario: 3400.50, departamento: 'Recursos Humanos', sexo: 'F' },
    { _id: 17, nome: 'Thais', idade: 27, dependentes: 2, salario: 3200.50, departamento: 'Financeiro', sexo: 'F' },
    { _id: 18, nome: 'Rafaela', idade: 25, dependentes: 0, salario: 2400.50, departamento: 'Vendas', sexo: 'F' },
    { _id: 19, nome: 'Popo', idade: 56, dependentes: 3, salario: 7300.50, departamento: 'Financeiro', sexo: 'M' },
    { _id: 20, nome: 'Marcio', idade: 32, dependentes: 2, salario: 5500.50, departamento: 'Vendas', sexo: 'M' }
])

db.funcionarios.insertOne({
    _id: 21,
    nome: 'Guilherma',
    idade: 18,
    dependentes: 1,
    salario: 9300.50,
    departamento: 'Recursos Humanos',
    sexo: 'F'
})

db.funcionarios.insertOne({
    _id: 22,
    nome: 'Maria Custodia',
    idade: 50,
    dependentes: 1,
    salario: 9200.50,
    departamento: 'Recursos Humanos',
    sexo: 'F'
})

// 4. Consultas

// 1. Listar os funcionários que trabalham no departamento de Recursos Humanos
db.funcionarios.find({ departamento: "Recursos Humanos" })

// 2. Listar os funcionários que têm mais de 30 anos
db.funcionarios.find({ idade: { $gt: 30 } })

// 3. Listar os funcionários que não são do departamento financeiro
db.funcionarios.find({ departamento: { $ne: "Financeiro" } })

// 4. Listar os funcionários que possuem 18 ou 50 anos de idade
db.funcionarios.find({ idade: { $in: [18, 50] } })

// 5. Listar os funcionários que ganham R$9.000,00
db.funcionarios.find({ salario: 9000 })

// 6. Listar os funcionários que são do sexo masculino e ganham abaixo de R$5.000,00
db.funcionarios.find({ sexo: "M", salario: { $lt: 5000 } })

// 7. Listar os funcionários que trabalham no setor de Vendas, são do sexo feminino e não têm dependentes
db.funcionarios.find({ departamento: "Vendas", sexo: "F", dependentes: 0 })

// 8. Listar os funcionários que trabalham no departamento de Vendas ou no Financeiro
db.funcionarios.find({ departamento: { $in: ["Vendas", "Financeiro"] } })

// 9. Listar os funcionários que possuem menos de 2 dependentes
db.funcionarios.find({ dependentes: { $lt: 2 } })

// 10. Listar os funcionários que têm 2 dependentes ou ganham abaixo de R$4.000,00 ou têm mais de 45 anos
db.funcionarios.find({
  $or: [
    { dependentes: 2 },
    { salario: { $lt: 4000 } },
    { idade: { $gt: 45 } }
  ]
})
