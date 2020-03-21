const test = (data) => {
    console.log('teste');
}

const getGitHubInfo = (username) => {
    console.log('executou');
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText);

            console.log(response);
            test(response);
        }
    };

    ajax.open('GET', url, true);
    ajax.send();
};

getGitHubInfo('johnnyferreiradev');
