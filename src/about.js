export const about = () =>{
    const totalAboutContent = document.createElement('div')
    const aboutImgRights = document.createElement('a')
    const aboutPage = document.createElement('div')
    const aboutTitle = document.createElement('div')
    const aboutPara = document.createElement('div')
    const paraDiv = document.createElement('div')
    const aboutImg = document.createElement('div')
    const aboutContact = document.createElement('div')
    const contactTitle = document.createElement('div')
    const mobileContact = document.createElement('div')
    const emailContact = document.createElement('div')
    aboutImgRights.textContent = 'Image by KamranAydinov on Freepik'
    aboutImgRights.setAttribute('href','https://www.freepik.com/free-photo/cafe-terrace-with-turquoise-sofas-yellow-pillows_6316948.htm#fromView=search&page=1&position=24&uuid=757596e8-8fdc-48ab-b060-deefa38fd683')
    aboutTitle.textContent = 'About Us'
    paraDiv.textContent = `We have been doing this for a long time we started in early 19's now we here 
    my mother started this reataurant with only five dishes now we have whole list of dishes 
    we will keep the legacy of this reataurant on forever`
    contactTitle.textContent = 'Contact Us'
    mobileContact.textContent = 'Mobile No. - XXX3344XX00'
    emailContact.textContent = 'Email - abx@gmail.com'
    totalAboutContent.classList.add('total-about-div')
    aboutPage.classList.add('about-style')
    aboutTitle.classList.add('about-title')
    aboutContact.classList.add('contact-div')
    aboutPage.appendChild(aboutTitle)
    aboutPage.appendChild(aboutImg)
    aboutImg.appendChild(aboutImgRights)
    aboutPage.appendChild(aboutPara)
    aboutPara.appendChild(paraDiv)
    aboutPage.appendChild(aboutContact)
    aboutContact.appendChild(contactTitle)
    aboutContact.appendChild(mobileContact)
    aboutContact.appendChild(emailContact)
    totalAboutContent.appendChild(aboutPage)
    content.appendChild(totalAboutContent)
}