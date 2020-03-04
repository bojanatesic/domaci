import LaunchList from "./components/launch_list";
import HeaderInfo from "./components/header2";
// import selectLaunchYear from "./components/godina_lansiranja";


const app=document.querySelector('#app');

const header=document.createElement('header');
const headerList=HeaderInfo()
header.appendChild(headerList)
const launch_year=selectLaunchYear()
const filters=document.createElement('section');
const launch_list=LaunchList();

const footer=document.createElement('footer');

app.append(headerList,launch_year,filters,launch_list,footer);