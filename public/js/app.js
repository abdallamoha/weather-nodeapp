
const weform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')



weform.addEventListener('submit',(ev) => {
    ev.preventDefault()
 const  location=search.value
    console.log(location)
    message1.textContent = 'Loading...'
    message2.textContent = ''
    let f =fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if(data.message){
                message1.textContent= data.message
            }else if (data.onerror) {
                message1.textContent = data.onerror
            } else {
                message1.textContent = data.forecast
                message2.textContent = data.address
            }
        })
    })
    f.catch(()=>{
        console.log('error')
    })

})












