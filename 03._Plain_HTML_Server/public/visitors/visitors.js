

async function fetchIt(){
    const response = await fetch('/api/visitors')
    const result = await response.json()
    console.log(result)
    document.getElementById("visitor-count").innerText = result.data

}
fetchIt()

function incrementVisitorCount() {
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => document.getElementById("visitor-count").innerText = result.data);
}

// //this fetch number of click when we start the app
// fetch("/api/visitors")
// .then(response => response.json())
// .then(result => {
//     updateVisitorCount(result.data);
// });

// //update it visualy
// function updateVisitorCount(visitorCount) {
//     const visitorCountDiv = document.getElementById("visitor-count");
//     visitorCountDiv.innerText = visitorCount;
// }

// //edit number of clicks
// function writeInVisitorLog() {
//     fetch("/api/visitors", {
//         method: "PUT", 
//         headers: {
//             "Content-Type": "application/json"
//         }   
//     })
//     .then(response => response.json())
//     .then(result => updateVisitorCount(result.data));
// }





