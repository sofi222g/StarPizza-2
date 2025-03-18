displayPizza("JSON/pizza-JSON.json");
displayPasta("JSON/pasta-JSON.json");
displaySparkles("JSON/sparkles.JSON");
displaySoftDrinks("JSON/softdrinks.JSON");

async function displayPizza(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("pizza");
    
    let html = "";
    html = createPizza(t.pizza);
    
    e.innerHTML = html;
}

function createPizza(element)
{
    return `
      <div class="number">1.</div>
            <div class="name">${element[0].name}</div>
            <div class="ingredients">${element[0].ingredients}</div>
            <div class="imgage">
                <a href="${element[0].bigImage}" target="_blank">
                    <img src="${element[0].smallImage}" alt="Margarita Pizza" title="Margarita Pizza" /></a>
            </div>

            <div class="number">2.</div>
            <div class="name">${element[1].name}</div>
            <div class="ingredients">${element[1].ingredients}</div>
            <div class="imgage">
                <a href="${element[1].bigImage}" target="_blank">
                    <img src="${element[1].smallImage}" alt="Hawaiian Pizza" title="Hawaiian Pizza" /></a> 
            </div>

            <div class="number">3.</div>
            <div class="name">${element[2].name}</div>
            <div class="ingredients">${element[2].ingredients}</div>
            <div class="imgage">
                <a href="${element[2].bigImage}" target="_blank">
                    <img src="${element[2].smallImage}" alt="Pepperoni Pizza" title="Pepperoni Pizza" /></a>
            </div>

            <div class="number">4.</div>
            <div class="name">${element[3].name}</div>
            <div class="ingredients">${element[3].ingredients}</div>
            <div class="imgage">
                <a href="${element[3].bigImage}" target="_blank">
                    <img src="${element[3].smallImage}" alt="Curry Chicken Pizza" title="Curry Chicken Pizza" /></a>
            </div>

            <div class="number">5.</div>
            <div class="name">${element[4].name}</div>
            <div class="ingredients">${element[4].ingredients}</div>
            <div class="imgage">
                <a href="${element[4].bigImage}" target="_blank">
                    <img src="${element[4].smallImage}" alt="Ranch Chicken Pizza" title="Ranch Chicken Pizza" /></a>
            </div>

            <div class="number">6.</div>
            <div class="name">${element[5].name}</div>
            <div class="ingredients">${element[5].ingredients}</div>
            <div class="imgage">
                <a href="${element[5].bigImage}" target="_blank">
                    <img src="${element[5].smallImage}" alt="Supreme Pizza" title="Supreme Pizza" /></a> 
            </div>

            <div class="number">7.</div>
            <div class="name">${element[6].name}</div>
            <div class="ingredients">${element[6].ingredients}</div>
            <div class="imgage">
                <a href="${element[6].bigImage}" target="_blank">
                    <img src="${element[6].smallImage}" alt="Veggie Lovers Pizza" title="Veggie Lovers Pizza" /></a>
            </div>`;
}

async function displayPasta(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("pasta");
    
    let html = "";
    html = createPasta(t.pasta);
    
    e.innerHTML = html;
}

function createPasta(element)
{
    return `
      <div class="number">8.</div>
            <div class="name">${element[0].name}</div>
            <div class="ingredients">${element[0].ingredients}</div>
            <div class="imgage">
                <a href="${element[0].image}" target="_blank">
                    <img src="${element[0].image}" alt="Creamy Mushroom Pasta" width="150" height="80" title="Creamy Mushroom Pasta" /></a>
            </div>

            <div class="number">9.</div>
            <div class="name">${element[1].name}</div>
            <div class="ingredients">${element[1].ingredients} </div>
            <div class="imgage">
                <a href="${element[1].image}" target="_blank">
                    <img src="${element[1].image}" alt="Squid Scallop Pasta" width="150" height="80" title="Squid Scallop Pasta" /></a>
            </div>`;
}

async function displaySparkles(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("spar");
    
    let html = "";
    html = createSoftDrinks(t.sparkles);
    
    e.innerHTML = html;
}

function createSparkles(element)
{
    return `
     <div class="num">10.</div>
            <div clas="nam">${element[0].name}</div>
            <div class="num">11.</div>
            <div clas="nam">${element[1].name}</div>
            <div class="num">12.</div>
            <div clas="nam">${element[2].name}</div>
            <div class="num">13.</div>
            <div clas="nam">${element[3].name}</div>
            <div class="num">14.</div>
            <div clas="nam">${element[4].name}</div>`;
}

async function displaySoftDrinks(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("soft");
    
    let html = "";
    html = createSoftDrinks(t.softdrinks);
    
    e.innerHTML = html;
}

function createSoftDrinks(element)
{
    return `
    <div class="num">15.</div>
        <div class="name">${element[0].name}</div>
        <div class="num">16.</div>
        <div class="name">${element[1].name}</div>
        <div class="num">17.</div>
        <div class="name">${element[2].name}</div>
        <div class="num">18.</div>
        <div class="name">${element[3].name}</div>
        <div class="num">19.</div>
        <div class="name">${element[4].name}</div>`;
}


console.log("End of script");