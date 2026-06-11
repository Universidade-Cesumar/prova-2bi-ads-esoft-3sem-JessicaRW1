const API_URL = "https://6a29d3bcf59cb8f65f1da5b8.mockapi.io/materiais";

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
            `;
            if (listaMateriais) {
                listaMateriais.appendChild(linha);
            }
        });
    } catch (error) {
        console.error("Erro na requisição GET:", error);
    }
}
