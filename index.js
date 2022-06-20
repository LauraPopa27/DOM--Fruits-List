const fruits = ["Banana", "Orange", "Apple", "Mango", "Strawberry", "Cherry", "Pineapple"];
const ul= document.createElement('ul');
const container= document.querySelector('.li-container');

container.appendChild(ul);

fruits.map((fruit, index) => {

   let li= document.createElement('li');
   ul.appendChild(li);
   li.innerHTML= index+1 + '. ' + fruit;

});