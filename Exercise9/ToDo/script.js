const form = document.querySelector('#modForm');
const output = document.querySelector('#output');
const save = document.querySelector('#saveBtn');
const load = document.querySelector('#loadBtn');
const clear = document.querySelector('#clearBtn');
const select = document.querySelector('#select');


clear.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
});

load.addEventListener('click', (e) => {
    if (localStorage.getItem('shopList')) {
        let listArray = JSON.parse(localStorage.getItem('shopList'));
        console.log(listArray);
        listArray.forEach(element => {
            output.innerHTML += `<li>${element}</li>`;
        });
    }
    ActivateListItemsEvents(e);
});

select.addEventListener('click',(e) => {
    //console.log(e.target[0].value)
ActivateListItemsEvents(e);

});

save.addEventListener('click', (e) => {
    e.preventDefault();
    let listArray = [];
    document.querySelectorAll('li').forEach(li => {
        listArray.push(li.innerHTML);
    });
    localStorage.setItem('shopList', JSON.stringify(listArray));
    location.reload();
});

form.addEventListener('submit', (e) => {
         e.preventDefault();
         if (!e.target[0].value == "") {
             console.log(typeof e.target[0].value);

         output.innerHTML += `<li>${e.target[0].value}</li>`;
         
          ActivateListItemsEvents(e);
        }

        e.target.reset();

    });
    
    function ActivateListItemsEvents(e) {
        document.querySelectorAll('li')
        .forEach(li => {
            li.addEventListener('click', (e) => {
                let bg=select.value;
                    if (e.target.style.backgroundColor == `${bg}`) {
                        e.target.style.backgroundColor = "white",
                            e.target.style.textDecoration = "none"         
                    }
                    else {         
                        e.target.style.backgroundColor = `${bg}`,
                            e.target.style.textDecoration = "line-through",
                            e.target.style.borderRadius = "5px"
                    }
                }),
                    li.addEventListener('dblclick', (e) =>
                        e.target.remove())
            });
    }
    