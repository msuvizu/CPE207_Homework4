//console.log(window.document);
const mycontact = document.querySelector('#my-contact');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const message = document.querySelector('#message');
const userList = document.querySelector('#user');
const list = document.querySelector('#users');

mycontact.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    (function addRow() {
    
        // get references to select list and display text box
        var city = document.getElementById('city').value;
        
        var country = document.getElementById('country').value;

       
        
    
        function getSelectedOption(city) {
            var opt;
            for ( var i = 0, len = sel.options.length; i < len; i++ ) {
                opt = city.options[i];
                if ( opt.selected === true ) {
                    break;
                }
            }
            var row = document.createElement('tr');
            return opt;
        }
    
        function getSelectedOption(country) {
            var opt;
            for ( var i = 0, len = el.options.length; i < len; i++ ) {
                opt = country.options[i];
                if ( opt.selected === true ) {
                    break;
                }
            }
            var row = document.createElement('tr');
            return opt;
        }

        var row = document.createElement('tr');
        
    }());
    
    // if (contactFirstname.value === '' || contactLastname.value === '' ||
    //     contactEmail.value === '' || contactCity.value === '' ||
    //     contactCounty.value === '' || contacMessage === '') {
    //     msg.classList.add('error');
    //     msg.innerHTML = 'Please enter all fields';
    // } else {

    //     const list = document.querySelector('#comment_submit');

    const row = document.createElement('tr');

    row.innerHTML = `
          <td><h5>${firstname.value}&nbsp;${lastname.value}</h5>${email.value}(${phone.value})</td>
         
          <td>${address.value}<br>${city.value} &nbsp; , ${country.value} </td> 
          <td>${message.value}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete"> X </a></td>
        
        `;

        list.appendChild(row);
    //}
}

document.querySelector('#users').addEventListener('click', (e) => { 
    e.target.parentElement.parentElement.remove();
});