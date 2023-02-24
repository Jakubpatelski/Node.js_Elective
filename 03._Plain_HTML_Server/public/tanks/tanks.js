
console.log('i am a tank')

async function fetchTanks(){
    const response = await fetch('/api/tanks')
    const data = await response.json()
    console.log(data)

    const tanksWrapper = document.getElementById('tanks-wrapper')

    data.tanks.forEach(tank => {
        // XSS (never use innerHTML)
        // senetation
        const tankDiv = document.createElement('div')
        const tankNationality = document.createElement('p')
        const tankName  = document.createElement('p')
        tankName.innerText = tank.name
        tankNationality.innerText = tank.nationality || 'No nationality'
        tankDiv.appendChild(tankName)
        const breakBR = document.createElement('br')
        tankDiv.appendChild(tankNationality)
        tankDiv.appendChild(breakBR)
        tanksWrapper.appendChild(tankDiv)



    });


}

fetchTanks()


