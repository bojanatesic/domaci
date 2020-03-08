const Header = (info) => {
    // Object destructuring
    let {
        name
    } = info;
    const div = document.createElement('div');
    div.className = 'header';
    div.innerHTML=`${name}`

    return div
}
export default Header