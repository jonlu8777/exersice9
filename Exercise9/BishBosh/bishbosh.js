

const btn1 = document.querySelector('#btn1');
const form = document.querySelector('#modForm');
const output = document.querySelector('#output');

 form.addEventListener('submit', (e) => {
     e.preventDefault();   
     output.innerHTML='';
     for(let i=1;i<=e.target[2].value;i++)
     {    
         if(i%e.target[0].value ===0 && i%e.target[1].value===0)
         output.innerHTML +=`<p>Bish-Bosh</p> `;
         else{
             if(i%e.target[0].value === 0)
             {
                 output.innerHTML += `<p>Bish</p>`;       
                 continue;
                }
                if(i%e.target[1].value === 0)
                {
                    output.innerHTML += `<p>Bosh</p>`;
                    continue;
                }
                output.innerHTML += `<p>${i}</p>`;
            }
        }
        e.target.reset();   
 })


