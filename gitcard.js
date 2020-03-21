// Select elements
const inputText = document.querySelector('#usuario-github');
const showButton = document.querySelector('#buscar-github');
const gitCardContainer = document.querySelector('.github-card');

const addGitCard = (content) => {
    gitCardContainer.innerHTML = content;
}

const insertData = (data) => {
    const simpleUrl = data.html_url.replace('https://', '');

    const gitCardContent = `
        <div class="header User"></div>
        <a class="avatar" href="${data.html_url}" target="_top"><img src="${data.avatar_url}" alt="${data.name}"></a>
        <div class="content">
            <h1>${data.name}</h1>
            <ul class="status">
                <li><a href="${data.html_url}?tab=repositories" target="_top"><strong>${data.public_repos}</strong>Repositórios</a></li>
                <li><a href="https://gist.${simpleUrl}" target="_top"><strong>${data.public_gists}</strong>Gists</a></li>
                <li><a href="${data.html_url}/followers" target="_top"><strong>${data.followers}</strong>Seguidores</a></li>
            </ul>
        </div>
    `;

    addGitCard(gitCardContent);
}

const showEmptyMessage = () => {
    gitCardContainer.innerHTML = `<p>Nenhum gitCard buscado</p>`;
} 

const getGitHubInfo = () => {
    const username = inputText.value;
    
    if (username === '') {
        showEmptyMessage();
        return;
    }

    let errorMessageControl = 0; // Impede que o alert seja exibido mais de uma vez na mesma resposta de erro.

    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText);

            insertData(response);
        } else if (this.status == 404 && errorMessageControl < 1) {
            alert('Usuário não encontrado!');
            errorMessageControl++;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();
};

showButton.addEventListener('click', getGitHubInfo);
