const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const renda = document.getElementById("renda").value.trim();
    const interesse = document.getElementById("interesse").value.trim();

    if (
        nome === "" ||
        email === "" ||
        renda === "" ||
        interesse === ""
    ) {

        event.preventDefault();

        mensagem.innerHTML = `
            <div class="alert alert-danger">
                Preencha todos os campos!
            </div>
        `;

        return;
    }

    // Allow the form to submit naturally to Formspree
});