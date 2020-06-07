// Profile constructor
function Profile(name, age) {
  this.name = name;
  this.age = age;
}

// UI constructor
function UI() { }

UI.prototype.clearFields = function () {
  const name = document.querySelector('#name').value = '';
  const age = document.querySelector('#age').value = '';
}

UI.prototype.addProfile = function (profile) {
  const form_list = document.querySelector('#form_container');
  const name_field = document.createElement('div');
  name_field.className = 'name_container';
  name_field.appendChild(document.createTextNode(`${profile.name}`));
  let submit_item = document.querySelector('#submit');
  form_list.appendChild(name_field);
  const age = document.createElement('div');
  age.className = 'name_container';
  age.appendChild(document.createTextNode(`${profile.age}`));
  form_list.insertBefore(name_field, submit_item);
  form_list.insertBefore(age, submit_item);
}


UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  let form = document.querySelector('#form_container');
  let container = document.querySelector('.input_container');
  form.insertBefore(div, container);
  div.appendChild(document.createTextNode(message));

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

class Store {
  static storeItems(profile) {

    localStorage.setItem('profile', JSON.stringify(profile));


    JSON.parse(localStorage.getItem('profile', profile));

  }



}








document.addEventListener('submit', function (e) {
  const name = document.querySelector('#name').value,
    age = document.querySelector('#age').value;

  // UI instanciation
  const ui = new UI();

  // Profile instanciation
  const profile = new Profile(name, age);

  if (name === '' || age === '') {
    ui.showAlert('Field cannot be empty', 'error');
  } else {
    // Add Profile
    ui.addProfile(profile);

    // Clears fields
    ui.clearFields();

    ui.showAlert('Success!', 'success');

    Store.storeItems(profile);
  }


  e.preventDefault();
})
