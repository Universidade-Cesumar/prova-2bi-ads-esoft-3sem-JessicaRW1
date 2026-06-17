const API_URL = "https://6a29d3bcf59cb8f65f1da5b8.mockapi.io/materiais";
function validarRetirada(estoqueAtual, quantityRetirada) {
    if (quantityRetirada <= 0) return false;
    if (quantityRetirada > estoqueAtual) return false;
    return true;
}
const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const btnCadastrar = document.getElementById("btn-cadastrar");
const listaMateriais = document.getElementById("lista-materiais");
async function buscarMateriais() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro ao carregar dados do servidor.");

        const materiais = await response.json();
        if (listaMateriais) {
            listaMateriais.innerHTML = "";
        }

        materiais.forEach(item => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${item.nome}</td>
                <td>${item.quantidade}</td>
                <td>
                    <div class="acoes-container">
                        <input type="number" min="1" class="input-retirada-tabela" id="input-retirada-${item.id}" placeholder="Qtd">
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
        console.error("Erro na requisição GET:", error);
    }
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