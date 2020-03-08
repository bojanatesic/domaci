import { getInfo } from '../services/spacex_service'
import Header from "./header";

const HeaderInfo=()=>{
    const div = document.createElement('div');

    getInfo().then(response => {
        let { data } = response;
            div.appendChild(Header(data));
    })
        return div
}
export default HeaderInfo