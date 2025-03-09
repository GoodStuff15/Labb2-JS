document.addEventListener("DOMContentLoaded", function () { })



// CV FETCH

async function LoadCV(event)
{
    try
    {
        const response = await fetch('../JSON/cv.json'); 

        if(!response.ok)
        {
            throw Error("Response-fel");
        }
    
    const  cvData = await response.json();

    console.log(cvData);    

    console.log(cvData.arbeten);

    PopulateCV(cvData);

    }
    
    catch(error)
    {
       console.error(error);
    }

}


function PopulateCV(CV)
{

    
    const workContainer = document.getElementById("workSubsection");
    
    CV.arbeten.forEach(arbete => {
        workContainer.innerHTML += 
        ` 
        <article>                   
            <div class='subheader'>   
                <h3>${arbete.titel}</h3>
                <p class='date'>${arbete.tid}</p>
                <p class="ingress">${arbete.arbetsköpare}</p>
            </div>
            <p class="breadtext">${arbete.beskrivning}</p>
        </article>`;

        console.log(arbete.beskrivning);
    });

    const educationContainer = document.getElementById("educationSubsection");

    CV.utbildningar.forEach(utbildning => {
        educationContainer.innerHTML += `
            <article>
                <div class="subheader">
                    <h3>${utbildning.titel}</h3>
                    <p class="date">${utbildning.tid}</p>
                    <p class="ingress">${utbildning.lärosäte}</p>
                </div>
                <p class="breadtext">${utbildning.beskrivning}Här pluggade jag ditten och datten. 
            </article>`
    })

    const otherContainer = document.getElementById("otherSubsection");

    CV.övrigt.forEach(other => {

        otherContainer.innerHTML +=
`            <article>
                <div class="subheader">
                    <h3>${other.titel}</h3>
                    <p class="date">${other.merinfo}</p>
                </div>
                <p class="breadtext">${other.beskrivning}</p>
            </article>`
        })

}


LoadCV();


