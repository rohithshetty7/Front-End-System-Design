//🛠 Example of Short Polling (Using JavaScript)

function fetchData() {
    try {
        fetch("http://jsonplaceholder.typicode.com/posts").then((response) => {
            response.json().then((data) => {
                console.log(data[0]);

            })
        }).catch(e => console.log(e))
    } catch (error) {
        console.log("RRR", error);

    }
}
// setInterval(fetchData(), 1000);
setInterval(() => {
    fetchData()
}, 1000)
// fetchData();