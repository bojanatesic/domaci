import LaunchList from "./components/launch_list";
import HeaderInfo from "./components/header2";
import selectLaunchYear from "./components/select_year";

const app=document.querySelector('#app');

const header=document.createElement('header');
const companyInfoHeader=HeaderInfo()
header.appendChild(companyInfoHeader)

const filters=document.createElement('section');
const select=selectLaunchYear()
filters.appendChild(select)

const launch_list=LaunchList();

const footer=document.createElement('footer');
footer.innerHTML=`Created by IT Bootcamp`

app.append(header,filters,launch_list,footer);
export default filters