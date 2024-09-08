import './styles.css'
console.log('hello')
import {home} from './home.js'
import {menu} from './menu.js'
import {about} from './about.js'

const intialLoadpage = (() =>{
    const content = document.querySelector('#content')
    home()
    const footer = () => {
    const footerDiv = document.createElement('div')
    footerDiv.textContent = 'Footer'
    footerDiv.classList.add('footer-div')
    content.appendChild(footerDiv)
    };
    footer();
    return{content,footer}
})();

const changeTab = (() => {
    const menuPage = document.querySelector('.menu-page')
    const homePage = document.querySelector('.home-page')
    const aboutPage = document.querySelector('.about-page')
    const content = intialLoadpage.content
    const foot = intialLoadpage.footer
    console.log(foot)
    function update(){
        content.textContent = ''
    }
    menuPage.addEventListener('click',()=>{
        update()
        menu()
        foot()
    })
    homePage.addEventListener('click',() => {
        update()
        home()
        foot()
    })
    aboutPage.addEventListener('click',() => {
        update()
        about()
        foot()
    })

})()

