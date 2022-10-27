let counter = 0;
document.getElementById('button').onclick = () => {
counter = counter + 1;
document.getElementById('score').innerText = counter;
};


fetch('https://reqres.in/api/users',{
    method : 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
.then(res => {
    // if (res.ok){
    //     console.log('SUCCESS')
    // }else{
    //     console.log("Not successful")
    // }
    return res.json( )
})

.then(data => console.log(data))
.catch(error => console.log('ERROR'))
