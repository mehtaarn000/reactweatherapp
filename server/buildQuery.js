import fetch from "node-fetch"
const base_url = "https://api.weatherapi.com/v1/current.json?key="

export default async function request(city, key) {
    const url = base_url + key + "&q=" + city
    let obj = await fetch(url)
    return await obj.text()
}
