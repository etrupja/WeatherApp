window.checkWeather = (cityName) => {

    const API_KEY = "64f60853740a1ee3ba20d0fb595c97d5"

    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            .then(res => {
                if (!res.ok) {
                    console.error(`HTTP error: ${res.status}`);
                }

                DotNet.invokeMethodAsync('WeatherApp', 'ShowFavoriteButton', cityName)

                return res.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}