const Header = (header) => {
    const div = document.createElement('div');
    div.className = 'header';
    div.innerHTML=`${header.data.name}`
    return div;
}
export default Header;