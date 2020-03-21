
async function displayCommit() {
 
    try {
    
        const user = await getUser(1);
        const repo = await getRepositories(user.gitHubUsername);
        const commit = await getCommits(repo[0]);
   
        console.log(commit);

    } catch (error) {
        console.log(error.message);        
    }
    
}

displayCommit();

function getUser(id) {
    return new Promise((resolve, reject) => {
      // Kick off some async work 
      console.log('Reading a user from a database...');
      setTimeout(() => {
        
        resolve({ id: id, gitHubUsername: 'Ishtiaqasif' });
      }, 2000);
    });
  }
  
  function getRepositories(username) {
    return new Promise((resolve, reject) => {
        console.log('Calling GitHub API...');
      setTimeout(() => {
        
        resolve(['repo1', 'repo2', 'repo3']);
      }, 2000);  
    });
  }
  
  function getCommits(repo) {
    return new Promise((resolve, reject) => {
        console.log('Getting Commits...');
      setTimeout(() => {
       
        //resolve(['myCommit1','myCommit2','myCommit3']);
        reject(new Error('Couldnt get because of error')) ;
      }, 2000);
    });
  }