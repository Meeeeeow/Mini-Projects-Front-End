const APIURL = "https://api.github.com/users/";

const main = document.querySelector('main');
const form  = document.querySelector('form');
const search  = document.getElementById('search');
console.log(form);

getUser("Meeeeeow");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);
}

async function getRepos(username){
    const resp = await fetch(APIURL + username +'/repos');
    const respData = await resp.json();

    addRepos(respData);
}

function addRepos(repos){
    const reposel = document.getElementById('repos');
    console.log(reposel);
    console.log(repos);

    repos
    .sort((a,b) => b.stargazers_count - a.stargazers_count)
    .forEach( repo =>{
        const repoEl = document.createElement('a');
        console.log(repoEl);
        repoEl.classList.add('repo');
        console.log(repoEl);
        repoEl.href= repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText  = repo.name;

        reposel.appendChild(repoEl);

    });
}
function createUserCard(user) {
    const {avatar_url , name , bio , followers, following , public_repos} = user;
    const cardHTML = `
        <div class="card">
            <div class="img-info">
                <img class="avatar" src="${avatar_url}" alt="${name}" />
            </div>
            <div class="user-info">
                <h2>${name}</h2>
                <p>${bio}</p>

                <ul class="info">
                    <li>${followers}<strong>Followers</strong></li>
                    <li>${following}<strong>Following</strong></li>
                    <li>${public_repos}<strong>Repos</strong></li>
                </ul>
                <h4>Repos:</h4>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});
