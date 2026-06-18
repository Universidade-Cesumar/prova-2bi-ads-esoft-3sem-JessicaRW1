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

# Funcionalidades da Sprint 2

✅ Validação de Retirada
Lógica que impede baixar produtos com valores negativos ou maiores do que o estoque tem disponível.

✅ Baixa de Estoque (PUT)
Diminui a quantidade do material e atualiza a informação direto no servidor do MockAPI.

✅ Exclusão de Materiais (DELETE)
Botão que apaga o item cadastrado da tabela e do servidor.

✅ Contrato Técnico
Uso obrigatório dos identificadores exatos exigidos pelo professor para os testes automatizados.

---

# Novas Tecnologias Aplicadas

- **Métodos HTTP (PUT e DELETE)** — Usados para atualizar e deletar dados na API.
- **Manipulação do DOM** — Uso de seletores para capturar o input exato da linha clicada.
