// Lager knapper for hver kategori inne i ressurser.js filen. 
function createButtons() {
    const buttonContainer = document.getElementById('btns');

    resources.forEach((resource, index) => {
      const button = document.createElement('button');
      const categoryId = `button-${index}`; 

      button.textContent = resource.category;
      button.id = categoryId;
      button.className = "btn";

      button.addEventListener('click', () => {
        // Kaller funksjoner for knappen. 
        handleButtonClick(index);

      });

      buttonContainer.appendChild(button);
    });
  }

  // -----------------------------------------------------------------------------------------------------------

  // Funksjonalitet for knapper. 

    function handleButtonClick(index) {
    
    // Sjekker at knappene fungerer. 
    console.log(`Button ${index} clicked`)

    updateContentTransform(index);

    changeButtonColor(index);
    }

// -----------------------------------------------------------------------------------------------------------

  // En funksjon som endrer translateX verdien for hvert innhold, slik at den forsvinner fra siden. 

    function updateContentTransform(index) {
    const divContainer = document.getElementById('content-container');
  
    const contentDivs = divContainer.children;
  
    for (let i = 0; i < contentDivs.length; i++) {
      const contentDiv = contentDivs[i];
      const translateXValue = i === index ? '0%' : '300%';
      contentDiv.style.transform = `translateX(${translateXValue})`;
    }
  }

// Endrer fargen for fanen som blir trykket på. 

  function changeButtonColor(index) {
    const buttonContainer = document.getElementById('btns');
  
    const buttons = buttonContainer.children;
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.style.backgroundColor = i === index ? '#fff' : '#2A324B'; 
      button.style.color = i === index ? '#2A324B' : '#fff' 
    }
  }

// ------------------------------------------------------------------------------------------------------------

// Legger inn innhold for hver meny i fanemenyen. 

function createDivs() {
    const contentContainer = document.getElementById('content-container');

    // Lagrer all innhold fra ressurser.js inne i nye <div>, og legger til slutt den i <content-container> i html. 
    resources.forEach((resource, index) => {
        const contentId = `category-div-${index}`; 

        const div = document.createElement('div');
        const heading = document.createElement('h2');
        const paragraph = document.createElement('p');

        div.id = contentId;
        div.className = "content";
        heading.textContent = resource.category;
        paragraph.textContent = resource.text;

        div.appendChild(heading);
        div.appendChild(paragraph);

        // Lager en <ul> og legger til en <li> for hver link. 
        const ul = document.createElement('ul');

        div.appendChild(ul);

        resource.sources.forEach((source, sourceIndex) => {
            const li = document.createElement('li')
            li.className = "list-elements";
            
            const link = document.createElement('a');
            link.textContent = `${source.title}`;
            link.href = source.url;
            link.target = "_blank"; 

            const br = document.createElement('br');

            li.appendChild(link);
            li.appendChild(br);

            ul.appendChild(li);
        });
        contentContainer.appendChild(div);
    });
}

// -------------------------------------------------------------------------------------------------------------

function initializePage() {
    createButtons();
    createDivs();
  }
  
  window.onload = initializePage;

// -------------------------------------------------------------------------------------------------------------
