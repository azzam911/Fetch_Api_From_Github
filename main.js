// Main Varibles
let inputData = document.querySelector(".get-repos input[type='text']");
let btn = document.querySelector(".get-repos .get-bouutn");
let showData = document.querySelector(".repos-container .show-data");

btn.onclick = function () {
    getRepos();
};

function getRepos() {
    if (inputData.value == "") {
        showData.innerHTML = "<span>Please Write Github Username</span>";
    } else {
        fetch(`https://api.github.com/users/${inputData.value}/repos`)
        .then((respons) => respons.json())
        .then((data) => {
            //Empty Value and InnerHtml
            setTimeout(()=>{
                inputData.value = '';
            },3000);

            showData.innerHTML = '';

            // loop on data
            data.forEach((repo) => {
                // Create Main Div Element
                let mainDiv = document.createElement("div");

                //Add calss Name to Main Div

                mainDiv.className = 'main-div';

                //Create Text name
                let repoName = document.createTextNode(repo.name);

                //Append Text To main Div
                mainDiv.appendChild(repoName);

                // Create Repo url Anchor
                let theUrl = document.createElement("a");

                //Add Class name to anchor

                theUrl.className = 'link';

                //create Text for Url
                let urlText = document.createTextNode("Visit");

                //append URl Text To the URL
                theUrl.appendChild(urlText);
                
                //Add Href
                theUrl.href = `https://github.com/azzam911/${repo.name}`;

                // Set Attribute Target to blank
                theUrl.setAttribute("target", "_blank");

                

                // Appned Anchor to main div
                mainDiv.appendChild(theUrl);


                // Append main Div To Show Data
                showData.appendChild(mainDiv);
            });


        });

}
}

