const chart = document.querySelector("#chart").getContext('2d');

// criando no chart instance

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 49116, 61452],
                borderColor:  '#db261b',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 98800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: '#27282f',
                borderWidth: 2
            },
            {
                label: 'EUR',
                data: [99568, 51640, 87300, 26560, 46099, 42698, 5500, 3560, 17656, 27832, 39944],
                borderColor: '#5719c2',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('aside')

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block'
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none'
})


const themBtn = document.querySelector('.theme-btn')

themBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme')

    themBtn.querySelector('span:first-child').classList.toggle('active')
    themBtn.querySelector('span:last-child').classList.toggle('active')
})