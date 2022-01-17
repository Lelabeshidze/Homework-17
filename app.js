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
  

    const list = document.querySelector("#user-list");
    function filteredUsers() {
        const userElements = users.map(user => {
            return `<div class='maindiv'><div class='avatars'><img class="images1" src="${user.avatar}"></div><div><span>${user.first_name}</span><span>${user.last_name}</span></div><div><button class="deletedbutton">delete</button><button onclick="myFunction()">info</button></div><div id="infoemail" class="email1" >${user.email}</div></div>`;
        });
        list.innerHTML = userElements.join('');
      const deletedButton = document.querySelectorAll('.deletedbutton');
      deletedButton.forEach (btn => {
        btn.addEventListener('click' , e => {
            btn.parentNode.parentNode.remove();
        })
      }) 
    }
filteredUsers();
function myFunction() {
  const x = document.getElementById("infoemail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}