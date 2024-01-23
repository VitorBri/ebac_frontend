document.addEventListener('DOMContentLoaded', function(){
    const nome = document.querySelector('#nome');
    const nomeUsuario = document.querySelector('#nomeUsuario');
    const foto = document.querySelector('#foto');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkGit = document.querySelector('#linkGit');

    fetch('https://api.github.com/users/VitorBri')
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            nome.innerText = json.name;
            nomeUsuario.innerText = `@${json.login}`;
            foto.src = json.avatar_url;
            repositorio.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            linkGit.href = json.html_url;
        })
})
