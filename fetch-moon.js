module.exports = async function getMoonData() {
    let response = await fetch("https://moon.algorithmjunkie.workers.dev/");
    return await response.json();
}