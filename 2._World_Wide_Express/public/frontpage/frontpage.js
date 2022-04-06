console.log("rrRRRrrrrRRRAaaaaaaAAwwwwWWWWw");

fetch('/calculatecooldinos')
.then(response => response.json())
.then(result => {
    console.log(result);
    const favamountdinosaurs = document.getElementById('cooldinosaurs')
    favamountdinosaurs.innerText = result.data;
})