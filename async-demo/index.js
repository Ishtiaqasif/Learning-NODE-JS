
//Callbacks
//Promises
//Async/await
console.log('START');

const newUser = getUser(1, (user)=> { 
    console.table(user); 
    const repo = getRepositories(user.gitHubUsername, (repo)=>{
        console.table(repo);
        const com = getCommits(repo, (commits)=>{
            console.table(commits);
            console.log('END');
        });
    });  
});



function getUser(id, callback) {
    console.log('Reading a user from database...');
    setTimeout(()=>{
        callback({ id: id, gitHubUsername: 'Ishtiaqasif' });
    }, 1000);

}
function getRepositories(username, callback){
    console.log('Calling Github API...');
    setTimeout(() => {
        return callback(['repo1', 'repo2', 'repo3']);
        
    }, 2000);
}

function getCommits(repo, callback){
    console.log('Accessing Commits... ');
    setTimeout(() => {
        return callback(['Com1', 'Com2', 'Com3']);
        
    }, 3000);
}