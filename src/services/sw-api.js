 
      export  const fetchData = () => {
            return fetch("https://swapi.dev/api/starships/")
                  .then((response) => response.json())
                  .then((data) => (data.results));
          }

    


