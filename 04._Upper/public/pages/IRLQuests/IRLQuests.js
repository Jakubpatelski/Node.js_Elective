


async function fetchQuest(activityQueryString=""){
    const response = await fetch('http://www.boredapi.com/api/activity/'+ activityQueryString)
    const data = await response.json()
    console.log(data)
    const quest = document.getElementById('quest')
    quest.innerText = data.activity

}

// fetchQuest()



function getNewQuest(){
    const dropdown = document.getElementById("activity-dropdown")
    console.log(dropdown.value);
    fetchQuest(`?types=${dropdown.value}`)

}

document.getElementById("fetch-new-quest-btn").addEventListener("click", getNewQuest)

