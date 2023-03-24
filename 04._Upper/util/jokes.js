
import Sentiment from "sentiment"
const sentiment = new Sentiment()

async function getjoke() {
    const URL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    const response = await fetch(URL)
    const result = await response.json()
    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery} `
    const { score } = sentiment.analyze(jokeToAnalyze)
    console.log(score);

    if (score < 0) {
        return await getjoke()
    }
    return result


}

console.log( await getjoke())


export default  getjoke;  

