import { getCompanyInfo } from '../services/spacex_service'
import Header from './header';

const HeaderInfo = () => {
    const div = document.createElement('div');
    div.className = 'header-list';
    getCompanyInfo().then(response => {
        div.appendChild(Header(response))
    });

    return div
}
export default HeaderInfo;

