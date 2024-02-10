fetch('/data/airports.geojson')
    .then(response => response.json()) // this waits until the promise is fulfilled (i.e., the fetch request has successfully gotten the data) --> also converts the data to JSON
    .then(data => {
        console.log(data); // then take the data and do this lil thing to it (print it out)
    })
    .catch(error => console.error('Error: ', error)); // 'error catching' - i.e., catch any error and print any error to the console

