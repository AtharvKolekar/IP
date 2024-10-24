function fetchDataFromServer(){
    return new Promise((resolve, reject) => {
        console.log("Fetching Data from server....");

        setTimeout(() => {
            const success=true;

            if(success) resolve("Data fetched successfully");
            else reject("Failed to fetech Data");

        }, 2000);
    })
} 

fetchDataFromServer()
    .then((msg) => {
        console.log("Success", msg);
    })
    .catch((err) => {
        console.error("Error", err);
    });

console.log("You can continue doing other tasks while waiting...");