
//Callbacks

getUser(1)
.then(user => getRepositories(user.gitHubUsername))
.then(repo => getCommits(repo[0]))
.then(com => console.log(com))
.catch(err => console.log(err.message));

function getUser(id) {
    console.log('Reading a user from database...');
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({ id: id, gitHubUsername: 'Ishtiaqasif' });
        }, 2000);        
    });
}
function getRepositories(username){
    console.log('Calling Github API...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']); 
        }, 2000);
    });
    
}

function getCommits(repo){
    console.log('Accessing Commits... ');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(['Com1', 'Com2', 'Com3']);        
        }, 2000);
    });
}