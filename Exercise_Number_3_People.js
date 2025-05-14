// 1. Inserir uma disciplina obrigatória
db.disciplinas.insertOne({
  codigo: 'DIR301',
  nome: 'Teoria Geral do Direito',
  curso_id: 'DIR',
  carga_horaria: 120,
  obrigatoria: true
});

// 2. Listar cursos com duração > 4 anos em ordem alfabética
db.cursos.find(
  { duracao_em_anos: { $gt: 4 } },
  { _id: 0, nome: 1, duracao_em_anos: 1 }
).sort({ nome: 1 });

// 3. Listar matrículas com frequência < 75%
db.matriculas.find(
  { frequencia: { $lt: 75 } },
  {
    _id: 0,
    aluno_id: 1,
    disciplina_id: 1,
    frequencia: 1,
    matricula_aluno: 1
  }
).sort({ frequencia: 1 });

// 4. Atualizar status do aluno para "ativo"
db.alunos.updateOne(
  { matricula: '2023002' },
  { $set: { status: 'ativo' } }
);

// 5. Matrículas no curso ADS no ano de 2024
db.matriculas.aggregate([
    {
      $match: {
        ano: 2024
      }
    },
    {
      $lookup: {
        from: "alunos",
        localField: "matricula_aluno",
        foreignField: "matricula",
        as: "aluno"
      }
    },
    {
      $unwind: "$aluno"
    },
    {
      $match: {
        "aluno.curso_id": "ADS"
      }
    },
    {
      $project: {
        _id: 0,
        matricula_aluno: "$aluno.matricula",
        codigo_disciplina: 1,
        ano: 1,
        semestre: 1,
        nota: 1,
        frequencia: 1,
        nomeAluno: "$aluno.nome"
      }
    }
  ]);
  

// 6. Listar alunos ativos e nome de seus cursos (ordenado pelo curso)
db.alunos.aggregate([
  { $match: { status: 'ativo' } },
  {
    $lookup: {
      from: 'cursos',
      localField: 'curso_id',
      foreignField: 'curso_id',
      as: 'id_curso'
    }
  },
  { $unwind: '$id_curso' },
  {
    $project: {
      _id: 0,
      nome: 1,
      curso: '$id_curso.nome'
    }
  },
  { $sort: { curso: 1 } }
]);

// 7. Contar matrículas por disciplina
db.matriculas.aggregate([
    {
      $group: {
        _id: "$codigo_disciplina",
        total_matriculas: { $sum: 1 }
      }
    },  
    {
      $lookup: {
        from: 'disciplinas',
        localField: '_id',
        foreignField: 'codigo',
        as: 'disciplina'
      }
    },
    { $unwind: '$disciplina' },
    {
      $project: {
        _id: 0,
        nome_disciplina: "$disciplina.nome",
        codigo_disciplina: '$_id',
        total_matriculas: 1
      }
    }
  ]);
  
// 8. Atualizar matrículas com nota < 6 para "reprovado: true"
db.matriculas.updateMany(
  { nota: { $lt: 6 } },
  { $set: { reprovado: true } }
);

// 9. Calcular média de notas da disciplina ADS101 no ano de 2024
db.matriculas.aggregate([
    {
      $match: {
        codigo_disciplina: 'ADS101',  
        ano: 2024
      }
    },
    {
      $group: {
        _id: 'ADS101',
        media_nota: { $avg: '$nota' }
      }
    },
    {
      $project: {
        _id: 0,
        disciplina: '$_id',
        media_nota: 1
      }
    }
  ]);

// 10. Listar alunos matriculados em cursos com "tecnologia" ou "sistemas" no nome
db.alunos.aggregate([
  {
    $lookup: {
      from: 'cursos',
      localField: 'curso_id',
      foreignField: 'curso_id',
      as: 'curso_info'
    }
  },
  { $unwind: '$curso_info' },
  {
    $match: {
      $or: [
        { 'curso_info.nome': { $regex: /tecnologia/i } },
        { 'curso_info.nome': { $regex: /sistemas/i } }
      ]
    }
  },
  {
    $project: {
      _id: 0,
      nome: 1,
      curso: '$curso_info.nome'
    }
  }
]);
