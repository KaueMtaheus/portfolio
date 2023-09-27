
//funcao para alternar meu menu 
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const navigation = document.querySelector('.navegacao-primaria');
    
    navbar.classList.toggle('active');
    navigation.classList.toggle('active');
}


//funcao para mostrar/ ocultar projetos 

document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("show-more");
    const hiddenProjects = document.querySelectorAll(".hidden");

    let isShowingMore = false;

    showMoreButton.addEventListener("click", function () {
        if (isShowingMore) {
            // Esconde projetos adicionais
            hiddenProjects.forEach(project => {
                project.style.display = "none";
            });
            showMoreButton.textContent = "Ver mais projetos";
        } else {
            // Mostra projetos adicionais
            hiddenProjects.forEach(project => {
                project.style.display = "inline-block"; // Altere para "inline-block" para exibir lado a lado
            });
            showMoreButton.textContent = "Ver menos";
        }

        isShowingMore = !isShowingMore;
    });
});

