let animales = (() => {
    const url = '../animales.json';
    // console.log(url)

    const request = async () => {
        const results = await fetch(url);
        const response = await results.json()
        return response;
    }
    return {request}
})()
export default animales