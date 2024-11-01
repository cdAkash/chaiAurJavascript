// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = { name: 'Akash', age: 30 };
//         resolve(data); // Resolve with data after 2 seconds
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then(user => {
//       console.log('User data:', user);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
  

    function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = false; // Simulate a failure condition
      
            if (success) {
              const data = { name: 'Akash', age: 30 };
              resolve(data); 
            } else {
              const error = new Error('Failed to fetch data'); // Create an Error object
              reject(error); // Reject with the error
            }
          }, 2000);
        });
      }
      
      fetchData()
        .then(user => {
          console.log('User data:', user);
        })
        .catch(error => {
          console.error('Error fetching data:', error); // Handle the error
        });
      