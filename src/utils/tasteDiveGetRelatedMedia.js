const tasteDiveGetRelatedMedia = async (MediaName) => {

    await fetch(`${process.env.REACT_APP_API_URL}/api/tasteDive/related?MediaName=${MediaName}&limit=100`, {
        method: "GET", 
    })
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((response) => {
            return response.body
        })

}

module.exports = tasteDiveGetRelatedMedia