const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul'); // notice how query selector was used more locally
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;
// const removeItemButton = document.querySelector('button.removeItemButton');

// firstListItem.style.backgroundColor = 'lightskyblue';
// lastListItem.style.backgroundColor = 'lightsteelblue';
// this was an example

function attachListItemButtons(li) {
    let up = document.createElement('button')
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);

    let down = document.createElement('button')
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button')
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

// attaches buttons to items on load
for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => { // was mouseover for uppercase hover , AND LISTENER WAS ORIGINALLY listDiv
  if(event.target.tagName == 'BUTTON'){// WAS LI
    if(event.target.className == 'remove'){
    let li = event.target.parentNode; // parentnode added for BUTTON, not present for LI
    let ul = li.parentNode;
    ul.removeChild(li);
    }
    if(event.target.className == 'up'){
    let li = event.target.parentNode; // parentnode added for BUTTON, not present for LI
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if(prevLi){ // without this if, the top item would then cycle to the bottom
      ul.insertBefore(li, prevLi); // new node li moves above ref li (previous here, so moves up )
    }
    }
      if(event.target.className == 'down'){
    let li = event.target.parentNode; // parentnode added for BUTTON, not present for LI
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if(nextLi){ // without this if, the top item would then cycle to the top
      ul.insertBefore(nextLi, li); // all weve done here is reverse the new node and ref node so the nextli moves above ref
    }
    }
  }
//    event.target.textContent = event.target.textContent.toUpperCase();}                           
});

//listDiv.addEventListener('mouseout', (event) => {
//  if(event.target.tagName == 'LI'){
//    event.target.textContent = event.target.textContent.toLowerCase();}                           
//});

//document.addEventListener('click', (event) => {
//  console.log(event.target);                         
// });

toggleList.addEventListener('click', () => {
  if(listDiv.style.display == "none"){
    toggleList.textContent = "hide list";
    listDiv.style.display = 'block';
} else {
  toggleList.textContent = "show list";
    listDiv.style.display = "none";  
}
                          
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';  
  descriptionInput.value = '';                                 
});

//also attaches up/down/remove buttons
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li'); 
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
});

//removeItemButton.addEventListener('click', () => {
//    let ul = document.getElementsByTagName('ul')[0];
//    let li = document.querySelector('li:last-child'); 
//    ul.removeChild(li);
//    
//});

