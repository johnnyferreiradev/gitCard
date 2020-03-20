const getGitHubInfo = function (username) {
    console.log('executou');
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            console.log(ajax);
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

getGitHubInfo('johnnyferreiradev');
