// const validacaoEmail = () => {
//     const input = document.getElementById('email')
//     const div = document.querySelector('.email')
//     const msgError = document.querySelector('.msg__error')

//     if(input.value === '') {
//         msgError.style.display = "block"
//         div.classList.add('email__error')
//     }
// }

const validaForm = document.querySelector('form').addEventListener('submit', function(event){
    const input = document.getElementById('email')
    const div = document.querySelector('.email')
    const msgError = document.querySelector('.msg__error')
    const iconError = document.querySelector('.icon__error')

    if(input.value === '') {
        msgError.style.display = 'block'
        div.classList.add('email__error')
        iconError.style.display = 'block'
        event.preventDefault()
    }
})

