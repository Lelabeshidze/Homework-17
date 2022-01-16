// დავალება1

const myButton = document.querySelector('.button1');
myButton.addEventListener('click' , (e) => {
    e.stopPropagation();
    myButton.remove();
    console.log('Button');
});

// დავალება2

const body = document.body;
const myImg = document.createElement('img');
myImg.src = " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg ";
body.append(myImg);

// დავალება3

// დავალება4
const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
  ];
  
  const list = document.querySelector('#user-list');

  function filteredUsers(){
    const usersElements = users.map(user => {
      return  `<div  id="user-list">${user.avatar}${user.first_name}${user.last_name}</div>`
    });
    console.log(usersElements);
    list.innerHTML = usersElements.join('');
    
  }
  filteredUsers();