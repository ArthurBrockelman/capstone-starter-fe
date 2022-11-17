const getUserFavorites = async (userName) => {
    console.log(userName)
   await fetch(`${process.env.REACT_APP_API_URL}/api/userMedia/findMedia?userName=${userName}`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((data) => {
            console.log(data)
            return data
        })
}

module.exports = getUserFavorites;