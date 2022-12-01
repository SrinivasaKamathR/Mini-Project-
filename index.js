var form = document.getElementById("form");
var nameInput = document.getElementById("name");
var price = document.getElementById("price");
var select = document.getElementById("expense");
var errormsg = document.querySelector(".msg");
var list = document.querySelector("#users");
// const btn = document.querySelector("btn");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    var li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${key}: ${localStorage.getItem(key)}`)
    );
    list.appendChild(li);
  }
});

form.addEventListener("submit", (e) => {
  //storage
  var obj = {
    name: nameInput.value,
    price: price.value,
    select: select.value,
  };
  let serialize = JSON.stringify(obj);
  localStorage.setItem(obj.name, serialize);

  e.preventDefault();
  if (nameInput.value === "" || price.value === "" || select.value === "") {
    errormsg.classList.add("error");
    errormsg.innerHTML = "Please Enter all Fields";
    setTimeout(() => {
      errormsg.remove();
    }, 3000);
  } else {
    var li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${nameInput.value} ,${price.value} ,${select.value}`
      )
    );
    var btn1 = document.createElement("button");
    btn1.classList.add("edit");
    btn1.appendChild(document.createTextNode("EDIT"));
    li.appendChild(btn1);
    var btn2 = document.createElement("button");
    btn2.classList.add("delete");
    btn2.appendChild(document.createTextNode("DELETE"));
    li.appendChild(btn2);

    list.appendChild(li);
  }

  btn1.addEventListener("click", () => {
    localStorage.removeItem(obj.name, obj.name);
    li.remove();
  });

  btn2.addEventListener("click", () => {
    localStorage.removeItem(obj.name, obj.name);
    li.remove();
  });

  //clear
  nameInput.value = "";
  price.value = "";
  select.value = "";
});
