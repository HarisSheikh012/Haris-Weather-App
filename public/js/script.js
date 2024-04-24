const submitButton = document.getElementById("submitButton");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_degree = document.getElementById("temp_degree");
const temp_status = document.getElementById("temp_status");

async function getWeatherInfo(event) {
    event.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
        city_name.innerText = "Plz Write the name before search "
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=eeb417f54966d47927dcf7b75abea486`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp_degree.innerText = `${arrData[0].main.temp}`;
            const temp_mode = arrData[0].weather[0].main;
            if (temp_mode == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68'></i>";
            } else if (temp_mode == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            } else if (temp_mode == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            } else if (temp_mode == "Smoke") {
                temp_status.innerHTML =
                    "<i class='fas fa-smoking' style='color:#eccc68'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }
        } catch (error) {
            city_name.innerText = "Plz enter the name properly"
        }
    }
}


submitButton.addEventListener("click", getWeatherInfo);