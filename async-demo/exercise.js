
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });
  

  async function Action() {
      try {
          const customer = await getCustomer(1);
          console.log(customer);
          const movies = await getTopMovies();
          console.log(movies);
          const send = await sendEmail(customer, movies)
          console.log(send);
      } 
      catch (error) {
          console.log('Error');
      }
      
  }

  Action();

  function getCustomer(id) {
      console.log('Getting the User...');
      return new Promise ((resolve, reject) => 
      {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 3000);

      });
    
  }
  
  function getTopMovies() {
    console.log('Getting the list of top movies...');
      return new Promise ((resolve, reject) => 
      {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 3000);
      });
  }
  
  function sendEmail(email, movies) {
    console.log('Sending Email...');
      return new Promise ((resolve, reject) => 
      {
        setTimeout(() => {
            resolve('Email Sent!');
          }, 3000);
      });
  }