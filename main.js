const API_URL = "https://6a29d3bcf59cb8f65f1da5b8.mockapi.io/materiais";
function validarRetirada(estoqueAtual, quantidadeRetirada) {
    if (quantidadeRetirada <= 0) return false;
    if (quantidadeRetirada > estoqueAtual) return false;
    return true;
}
const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const btnCadastrar = document.getElementById("btn-cadastrar");
const listaMateriais = document.getElementById("lista-materiais");
const totalItens = document.getElementById("total-itens");
async function buscarMateriais() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro ao carregar dados do servidor.");

        const materiais = await response.json();
        if (totalItens) {
            totalItens.textContent = materiais.length;
        }

        if (listaMateriais) {
            listaMateriais.innerHTML = "";
        }

        materiais.forEach(item => {
            const linha = document.createElement("tr");
            
            if (Number(item.quantidade) < 10) {
                linha.classList.add("estoque-critico");
            }

            linha.innerHTML = `
                <td>${item.nome}</td>
                <td>${item.quantidade}</td>
                <td>
                    <div class="acoes-container">
                        <input type="number" min="1" class="input-retirada-tabela" data-id="${item.id}" placeholder="Qtd">
                        <button class="btn-baixar" data-id="${item.id}" data-estoque="${item.quantidade}">Baixar</button>
                        <button class="btn-excluir" data-id="${item.id}">Excluir</button>
                    </div>
                </td>
            `;
            
            if (listaMateriais) {
                listaMateriais.appendChild(linha);
            }
        }); 

        configurarEventosAcoes(); 

    } catch (error) {
        console.error("Erro ao buscar materiais:", error);
    }
} 
function configurarEventosAcoes() {
    const botoesBaixar = document.querySelectorAll(".btn-baixar");
            botoesBaixar.forEach(botao => {
            botao.onclick = async (e) => {
            const id = e.target.getAttribute("data-id");
            const estoqueAtual = Number(e.target.getAttribute("data-estoque"));
            const container = e.target.parentElement;
            const inputRetirada = container.querySelector(`input[data-id="${id}"]`);
            const quantidadeRetirada = Number(inputRetirada.value);

            if (!validarRetirada(estoqueAtual, quantidadeRetirada)) {
                alert("Operação inválida! Verifique a quantidade informada.");
                return;
            }

            const novaQuantidade = estoqueAtual - quantidadeRetirada;

            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantidade: novaQuantidade })
                });

                if (response.ok) {
                    buscarMateriais();
                } else {
                    alert("Erro ao atualizar o estoque no servidor.");
                }
            } catch (error) {
                console.error("Erro na requisição PUT:", error);
            }
        };
    });
    
    const botoesExcluir = document.querySelectorAll(".btn-excluir");
    botoesExcluir.forEach(botao => {
        botao.onclick = async (e) => {
            const id = e.target.getAttribute("data-id");

            if (!confirm("Tem certeza que deseja excluir este material?")) return;

            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: "DELETE"
                });

                if (response.ok) {
                    buscarMateriais();
                } else {
                    alert("Erro ao excluir o material no servidor.");
                }
            } catch (error) {
                console.error("Erro na requisição DELETE:", error);
            }
        };
    });
}

async function cadastrarMaterial() {
    if (!inputNome || !inputQuantidade) return;

    const nome = inputNome.value.trim();
    const quantidade = inputQuantidade.value.trim();

    if (!nome || !quantidade) {
        alert("Por favor, preencha todos os campos antes de cadastrar.");
        return;
    }

    const novoMaterial = {
        nome: nome,
        quantidade: Number(quantidade) 
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoMaterial)
        });

        if (response.ok) {
            inputNome.value = "";
            inputQuantidade.value = "";
            
            buscarMateriais();
        } else {
            alert("Erro ao tentar cadastrar o material no servidor.");
        }
    } catch (error) {
        console.error("Erro na requisição POST:", error);
    }
}
if (btnCadastrar) {
    btnCadastrar.addEventListener("click", cadastrarMaterial);
}
window.addEventListener("DOMContentLoaded", buscarMateriais);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        buscarMateriais,
        cadastrarMaterial,
        validarRetirada
    };
}

const inputBusca = document.getElementById("input-busca");

if (inputBusca) {
    inputBusca.addEventListener("input", () => {
        const termoBusca = inputBusca.value.toLowerCase();
        const linhasTabela = listaMateriais.querySelectorAll("tr");

        linhasTabela.forEach(linha => {
            const nomeMaterial = linha.querySelector("td").textContent.toLowerCase();
            
            if (nomeMaterial.includes(termoBusca)) {
                linha.style.display = ""; 
            } else {
                linha.style.display = "none"; 
            }
        });
    });
}