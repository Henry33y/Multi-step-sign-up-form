const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const form3 = document.querySelector('.form3')

const next1 = document.querySelector('.next1')
const next2 = document.querySelector('.next2')
const back2 = document.querySelector('.back2')
const back3 = document.querySelector('.back3')

const progress = document.querySelector('.myProgress')

next1.addEventListener('click',()=>{
    form1.style.left='-450px'
    form2.style.left='40px'
    form3.style.left='450px'
    progress.style.width='240px'
    console.log("next 1 clicked")
})
back2.addEventListener('click',()=>{
    form1.style.left='40px'
    form2.style.left='450px'
    form3.style.left='900px'
    progress.style.width='120px'
    console.log("back 2 clicked")
})
next2.addEventListener('click',()=>{
    form1.style.left='-900px'
    form2.style.left='-450px'
    form3.style.left='40px'
    progress.style.width='400px'
    console.log("next 2 clicked")
})
back3.addEventListener('click',()=>{
    form1.style.left='-450px'
    form2.style.left='40px'
    form3.style.left='450px'
    progress.style.width='240px'
    console.log("back 2 clicked")
})

const isPalindrome = (str) =>{
    const lowerCase = str.toString().split('').map(x => x.toLowerCase()).join('')
    const reverse = lowerCase.split('').reverse().join('')
    return (lowerCase==reverse)
}
console.log(isPalindrome(123))

const isPalindrome2 = (x) => {
    return x ==x.reverse()
}