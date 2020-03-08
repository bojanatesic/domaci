import { getPastLaunches } from "../services/spacex_service";
import Launch from "./launch";
import filters from "..";

const selectLaunchYear = () => {
    const select = document.createElement('select');
    select.className = "select-year"
    const optionText=document.createElement('option')
    optionText.innerText='Select launch year'
    select.appendChild(optionText);
    for (let i = 2006; i <= 2020; i++) {
        const option = document.createElement('option');
        option.value = `${i}`
        option.innerHTML = `${i}`
        select.appendChild(option);
    }
    select.addEventListener('change',()=>{

getPastLaunches().then(response=>{
    let sve=response.data
    let filter=sve.filter(element=>element.launch_year==select.value)
    filter.forEach(element => {
        filters.appendChild(Launch(element))
    });
})
    })
    return select;
}
export default selectLaunchYear;