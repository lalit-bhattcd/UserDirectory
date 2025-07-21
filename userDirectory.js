let data = document.querySelectorAll('.all');
let search = document.querySelector('#search');

search.addEventListener('input' , ()=> {
    const searchterm = search.value.toLowerCase();

    data.forEach(user => {
        const name = user.querySelector('h1').textContent.toLowerCase();
        const email = user.querySelector('p').textContent.toLowerCase();

        if(name.includes(searchterm) || email.includes(searchterm)){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
        
    });
})
    

// const arr = [

//     {
//     profileUrl: '../../images/man1.webp',
//     name: 'David Backham',
//     email: 'devid@gmail.comame',
//     },
//     {
//     profileUrl: '../../images/women1.jpg',
//     name: 'Alisha James',
//     email: 'Alish@gmail.com',
//     },
//     { 
//     profileUrl: '../../images/man2.webp',
//     name: 'Rom convay',
//     email: 'Convayrom@gmail.com',
//     },
//     { 
//     profileUrl: '../../images/women2.webp',
//     name: 'Smriti mandhana',
//     email: 'smd@gmail.com',
//     },
//     {
//     profileUrl: '../../images/man3.webp',
//     name: 'Wakatoshi',
//     email: 'Wakatoshi@gmail.com',
//     },
//     {
//     profileUrl: '../../images/woman3.webp',
//     name: 'Ketty Perry',
//     email: 'Perry@gmail.com',
//     }
// ]
// }

// renderUsers();

// function handleSearch(e){
//    let value =  e.target.value;   
//    let filteredUsers = arr.filter(obj =>{
//     return obj.name.includes(value);
//    })
//    renderUsers(filteredUsers);
// }
// search.addEventListener('input' , handleSearch);