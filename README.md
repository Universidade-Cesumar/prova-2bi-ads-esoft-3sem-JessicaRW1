# Controle de Almoxarifado - Setor Saúde (Sprint 1)

Sistema desenvolvido para cadastro e controle de estoque de insumos médicos, criado como atividade prática da disciplina de Engenharia de Software.

O projeto tem como objetivo facilitar o gerenciamento de materiais, permitindo o registro e acompanhamento dos itens armazenados de forma simples e organizada.

---

#  Funcionalidades

✅ Cadastro (POST)
Salva o nome e a quantidade do material no servidor.

✅ Listagem (GET)
Busca os dados da API e atualiza automaticamente a tabela ao carregar a página.

✅ Persistência de Dados
Integração com o MockAPI para simular um banco de dados e garantir o armazenamento das informações.

✅ Testes
Código estruturado e exportado para execução de testes utilizando Jest.

---

HTML5 — Estrutura da página
CSS3 — Layout e estilização da interface
JavaScript ES6 — Consumo da API utilizando async/await
MockAPI — Simulação de servidor REST.

# Controle de Almoxarifado - Setor Saúde (Sprint 2)

Evolução do sistema para controle de insumos médicos, focada em movimentação de estoque, validações e exclusão de itens.

---

# Funcionalidades

✅ Validação de Retirada
Lógica que impede baixar produtos com valores negativos ou maiores do que o estoque tem disponível.

✅ Baixa de Estoque (PUT)
Diminui a quantidade do material e atualiza a informação direto no servidor do MockAPI.

✅ Exclusão de Materiais (DELETE)
Botão que apaga o item cadastrado da tabela e do servidor.

✅ Contrato Técnico
Uso obrigatório dos identificadores exatos exigidos pelo professor para os testes automatizados.

---

# Controle de Almoxarifado - Setor Saúde (Sprint 3)

Evolução final do sistema, focada na criação de um dashboard com totalizadores, filtros de busca em tempo real e alertas visuais de estoque crítico para os insumos médicos.

---

# Funcionalidades

✅ Filtro de Busca em Tempo Real
Barra de pesquisa que filtra os insumos pelo nome instantaneamente conforme o usuário digita, ocultando as linhas que não coincidem.

✅ Indicador de Estoque Crítico
Identificação visual automática (linhas destacadas com a classe `.estoque-critico`) para qualquer material médico que possua menos de 10 unidades em saldo.

✅ Totalizador Dinâmico (Dashboard)
Painel superior que exibe a quantidade total de tipos de itens cadastrados e monitorados no almoxarifado.

---

O sistema consolida-se como uma solução robusta e eficiente para o monitoramento de insumos, integrando persistência em API, validações rigorosas de negócio e uma interface dinâmica com alertas visuais para otimizar a gestão do Setor de Saúde.