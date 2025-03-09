import { Octokit } from "https://esm.sh/@octokit/core";

// document.addEventListener("DOMContentLoaded", function () { })

document.onreadystatechange = function () {

    if(document.readyState !== "complete") 
    {
        document.getElementById("ghsubsection").style.visibility ="hidden";
        document.querySelector(".loading").style.visibility = "visible";
    }
    else
    {
        document.querySelector(".loading").style.display ="none";
        document.getElementById("ghsubsection").style.visibility = "visible";
    }
}


// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })


async function GetGH()
{
    try
    {

        const response = await octokit.request('GET /users/GoodStuff15/repos', {
            username: 'GoodStuff15',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            type: "public"
        })
            DisplayGH(response.data);
    }
    catch(error)
    {
        console.error(error.request);
    }
     

}
  
GetGH();


function DisplayGH(data)
{
    const ghContainer = document.getElementById("ghsubsection");

    for(let i = 0; i < 4; i++)
    {
        console.log(data[i].name)
        console.log(data[i].url)

        ghContainer.innerHTML += `
          <button>
            <a href="${data[i].url}">   
              <article>
                <div class="wrapper">
                  <img src="../IMAGES/gh.png" alt="github logo" class="portfolioimage"> 
                  <h3>${data[i].name}</h3>     
                  <p>${data[i].description}</p>
                  <p>Klicka för att läsa mer!</p>   
                </div>         
              </article>        
            </a>
          </button> 
        `


    }

    data.forEach((repo) => {


   

    })
}