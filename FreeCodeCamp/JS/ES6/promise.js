// Create a JavaScript Promise

const makeServerRequest = new Promise((resolve, reject) => {});

// Complete a Promise with resolve and reject

const makeRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

// Handle a Fulfilled Promise with then

const ServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

ServerRequest.then((result) => {
    console.log(result); // We got the data
});
