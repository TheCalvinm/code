// console.log($('#title').html())

// document.getElementById('title').textContent = 'Hotdog'
// $('#title').text('Hotdog')
// $('#title').html('Hotdog')

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach(function (x) {
//     const numBtn = $('<button>')
//     numBtn.text(x)
//     $('#buttons').append(numBtn)
// })

// document.getElementById('btn').addEventListener('click', function() {
//     alert.toString('You Clicked The Button!')
// })

// $('#btn').click(function() {
//     alert('You Clicked The Button!')
// }

// $('#btn').click(function() {
//     console.log(event.currentTarget.dataset.hotdog)
// })

$('#btn').click((function ()) {
    console.log(this)
})