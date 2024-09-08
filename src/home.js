export const home = () =>{
    const homeTotalContent = document.createElement('div')
    const homeImgRights = document.createElement('a')
    const homeContent = document.createElement('div')
    const homeTitle = document.createElement('div')
    const homeIntro = document.createElement('div')
    const introPara = document.createElement('p')
    const wholeTimediv = document.createElement('div')
    const timingDiv = document.createElement('div')
    const timingLogo = document.createElement('div')
    const sundayTimeDiv = document.createElement('div')
    const mondatTimeDiv = document.createElement('div')
    const tuesdayTimeDiv = document.createElement('div')
    const wednesdayTimeDiv = document.createElement('div')
    const thursdayTimeDiv = document.createElement('div')
    const fridayTimeDiv = document.createElement('div')
    const saturdayTimeDiv = document.createElement('div')
    const locationDiv = document.createElement('div')
    const locationTitle = document.createElement('div')
    const locationPara = document.createElement('p')
    homeImgRights.classList.add('home-rights')
    homeTotalContent.classList.add('total-home-div')
    homeContent.classList.add('home-style')
    homeTitle.textContent = `Welcome to Terminal Restaurant`
    wholeTimediv.classList.add('home-whole-time-div')
    homeTitle.classList.add('home-title-div')
    homeIntro.classList.add('home-intro-div')
    timingDiv.classList.add('home-timing-div')
    locationDiv.classList.add('home-location-div')
    homeImgRights.textContent = 'Image by KamranAydinov on Freepik'
    homeImgRights.setAttribute('href',`https://www.freepik.com/free-photo/top-view-mushroom-soup-with-different-seasonings-dark-space_13409646.htm#fromView=search&page=2&position=21&uuid=cb476d50-a925-4cda-a301-534ad3ef7cd9v`)
    introPara.textContent = `
    "" Terminal Restaurant got best food you can ever eat,
    we got the best food in the world , from fast food to continental
    dishes.Enjoy every meal in the view of beautifullsunset
    and sunrise in a peacefull environment that you will wintness 
    first time in your life.""
    `
    timingLogo.textContent = 'Timings'
    sundayTimeDiv.textContent = 'Sunday : 8am - 9pm'
    mondatTimeDiv.textContent =  'Monday : 9am - 8pm'
    tuesdayTimeDiv.textContent = 'Tuesday : 9am - 8pm'
    wednesdayTimeDiv.textContent = 'Wednesday : 10am - 8pm'
    thursdayTimeDiv.textContent = 'Thursday : 9am - 7pm '
    fridayTimeDiv.textContent =  'Friday : 11am - 10pm '
    saturdayTimeDiv.textContent = 'Saturday : 10am - 10pm'
    locationPara.textContent = 'New Valley Rt. Street 1134 ,Noeral'
    locationTitle.textContent = 'Location'
    wholeTimediv.appendChild(timingLogo)
    wholeTimediv.appendChild(timingDiv)
  
    timingDiv.appendChild(sundayTimeDiv)
    timingDiv.appendChild(mondatTimeDiv)
    timingDiv.appendChild(tuesdayTimeDiv)
    timingDiv.appendChild(wednesdayTimeDiv)
    timingDiv.appendChild(thursdayTimeDiv)
    timingDiv.appendChild(fridayTimeDiv)
    timingDiv.appendChild(saturdayTimeDiv)
    locationDiv.appendChild(locationTitle)
    locationDiv.appendChild(locationPara)
    homeIntro.appendChild(introPara)
    homeContent.appendChild(homeTitle)
    homeContent.appendChild(homeIntro)
    homeContent.appendChild(wholeTimediv)
    homeContent.appendChild(locationDiv)
    homeTotalContent.appendChild(homeContent)
    homeContent.appendChild(homeImgRights)
    content.appendChild(homeTotalContent)
}