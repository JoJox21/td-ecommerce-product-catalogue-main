// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================
const link = document.querySelector('.link');
const hamburger = document.querySelector('.hamburger');
const displayError = document.querySelector('.message');


const linkDisplay = () => {
    link.style.display = 'none';
}

linkDisplay();


// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
const All = document.getElementById('tab1')
const Male = document.getElementById('tab2')
const Female = document.getElementById('tab3');
const Babies = document.getElementById('tab4')

const allCatalogue = document.querySelectorAll('.catalogue')

// const productTab = document.querySelector('.tabset');
// const catalogue = document.querySelectorAll('.catalogue');
// const tag = document.querySelectorAll('.tag');

// productTab.addEventListener('change', (e)=>{ 
//     catalogue.textContent (e.target.value)
//     // handle change });

// })

const allCatalogueDivsArray = Array.from(allCatalogue)

All.addEventListener('click', showAll)
function showAll() {
    allCatalogueDivsArray.forEach(div => {
    div.classList.remove('remove')
    div.classList.add('show')
  })
}

Male.addEventListener('click', showMale)
function showMale() {
    allCatalogueDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.male) {
      div.classList.add('remove')
    }
})
}

Female.addEventListener('click', showFemale)
function showFemale() {
    allCatalogueDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.female) {
      div.classList.add('remove')
    }
})
}


Babies.addEventListener('click', showBabies);

function showBabies() {
    allCatalogueDivsArray.forEach(div => {
        div.classList.remove('remove');
    

    if (!div.dataset.babies||div.dataset.babies===null4eq) {
        div.classList.add('remove');
    }
});
}






// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================

const search = document.querySelector('.search_product')
let alertShownForClass = false;

const inputSearch = (details) => {
    allCatalogue.forEach(element => {
        element.style.display="none";
        let check = element.innerHTML.toUpperCase();
        // let check = element.querySelector('p').textContent.toUpperCase();
        


        if (check.includes(details)){
            element.style.display="block";
            alertShownForClass=true;
        }
       
        if (alertShownForClass === false) {
            displayError.style.display = "block";
            displayError.textContent = "PRODUCT NOT FOUND";
        } 
        else {
            displayError.style.display = "none";
          }
    })
}

search.addEventListener('input', (e)=>{ // handle change });
    inputSearch(e.target.value.toUpperCase())
})