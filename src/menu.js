export const menu = () =>{
    const totalMenuContent = document.createElement('div')
    const menuContent = document.createElement('div')
    const menuTitle = document.createElement('div')
    menuTitle.textContent = 'Menu'
    totalMenuContent.classList.add('total-menu-div')
    menuContent.classList.add('menu-style')
    menuTitle.classList.add('menu-title-div')
    const beverages = (() => {
        const beverageDiv = document.createElement('div')
        const bevRedRights = document.createElement('a')
        const bevOrangeRights = document.createElement('a')
        const bevBlueRights = document.createElement('a')
        const beverageDivTitle = document.createElement('div')
        const allBevdiv = document.createElement('div')
        const redJuice = document.createElement('div')
        const orangeJuice = document.createElement('div')
        const blueJuice = document.createElement('div')
        const redJuiceTitle = document.createElement('div')
        const redJuiceprice = document.createElement('div')
        const redJuiceImg = document.createElement('div')
        const orangeJuiceTitle = document.createElement('div')
        const orangeJuicePrice = document.createElement('div')
        const orangeJuiceImg = document.createElement('div')
        const blueJuiceTitle = document.createElement('div')
        const blueJuicePrice = document.createElement('div')
        const blueJuiceImg = document.createElement('div')
        bevRedRights.textContent = 'Image by KamranAydinov on Freepik '
        bevOrangeRights.textContent = 'Image by jcomp on Freepik'
        bevBlueRights.textContent = 'Image by KamranAydinov on Freepik'
        bevRedRights.setAttribute('href','https://www.freepik.com/free-photo/front-close-view-fresh-currant-juice-glass-cup-served-with-tube-wooden-cutting-board-brown-table_14922418.htm#fromView=search&page=1&position=5&uuid=f6cfc9f1-45f4-475e-91ee-dde5cd4c7756')
        bevOrangeRights.setAttribute('href','https://www.freepik.com/free-photo/glass-orange-juice-placed-wood_4524819.htm#fromView=search&page=1&position=0&uuid=f6cfc9f1-45f4-475e-91ee-dde5cd4c7756')
        bevBlueRights.setAttribute('href','https://www.freepik.com/free-photo/front-view-blue-cool-lemonade-with-ice-blue-background-fruit-water-cold-cocktail-drink-color-juice_22289453.htm#fromView=search&page=1&position=2&uuid=0e8ce538-f3b6-4604-ad10-90bf225eae3e')
        beverageDivTitle.textContent = 'Beverages'
        redJuiceTitle.textContent = 'Red Juice'
        redJuiceprice.textContent = 'Price: $50'
        orangeJuiceTitle.textContent = 'Orange Juice'
        orangeJuicePrice.textContent = 'Price: $30'
        blueJuiceTitle.textContent = 'Blue Juice'
        blueJuicePrice.textContent = 'Price: $25'
        beverageDiv.classList.add('menu-bev-div')
        allBevdiv.classList.add('menu-all-bev-div')
        beverageDiv.appendChild(beverageDivTitle)
        beverageDiv.appendChild(allBevdiv)
        allBevdiv.appendChild(redJuice)
        allBevdiv.appendChild(orangeJuice)
        allBevdiv.appendChild(blueJuice)
        redJuice.appendChild(redJuiceTitle)
        redJuice.appendChild(redJuiceprice)
        redJuice.appendChild(redJuiceImg)
        redJuice.appendChild(bevRedRights)
        orangeJuice.appendChild(orangeJuiceTitle)
        orangeJuice.appendChild(orangeJuicePrice)
        orangeJuice.appendChild(orangeJuiceImg)
        orangeJuice.appendChild(bevOrangeRights)
        blueJuice.appendChild(blueJuiceTitle)
        blueJuice.appendChild(blueJuicePrice)
        blueJuice.appendChild(blueJuiceImg)
        blueJuice.appendChild(bevBlueRights)

        return {beverageDiv}
    })()
    const mainDish = (() => {
        const mainDishDiv = document.createElement('div')
        const paneerRights = document.createElement('a')
        const dalRights = document.createElement('a')
        const choleRights = document.createElement('a')
        const mainDishDivTitle = document.createElement('div')
        const allMainDish = document.createElement('div')
        const paneer = document.createElement('div')
        const dalMakhani = document.createElement('div')
        const choleBhature = document.createElement('div')
        const paneerTitle = document.createElement('div')
        const paneerPrice = document.createElement('div')
        const paneerImg = document.createElement('div')
        const dalMakhaniTitle = document.createElement('div')
        const dalMakhaniPrice = document.createElement('div')
        const dalMakhaniImg = document.createElement('div')
        const choleBhatureTitle = document.createElement('div')
        const choleBhaturePrice = document.createElement('div')
        const choleBhatureImg = document.createElement('div')
        mainDishDiv.classList.add('menu-main-dish-div')
        allMainDish.classList.add('menu-all-dish-div')
        paneerRights.textContent = 'Image by wirestock on Freepik'
        dalRights.textContent = 'Designed by Freepik'
        choleRights.textContent = 'Image by Subodh Sathe on Vecteezy'
        dalRights.setAttribute('href','https://www.freepik.com/free-ai-image/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_186037821.htm#fromView=search&page=3&position=0&uuid=df7c2049-4236-4a3b-80da-ec3c25fbbecf')
        paneerRights.setAttribute('href','https://www.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_13411480.htm#fromView=search&page=1&position=0&uuid=e6533d8e-13bf-4aac-9b7c-f110c551dd38')
        choleRights.setAttribute('href','https://www.vecteezy.com/photo/15933604-chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri')
        mainDishDivTitle.textContent = 'Main Dish'
        paneerTitle.textContent = 'Paneer'
        paneerPrice.textContent = 'Price: $120'
        dalMakhaniTitle.textContent = 'Dal Makhani'
        dalMakhaniPrice.textContent = 'Price: $90'
        choleBhatureTitle.textContent = 'Chole Bhature'
        choleBhaturePrice.textContent = 'Price: $110'
        mainDishDiv.appendChild(mainDishDivTitle)
        mainDishDiv.appendChild(allMainDish)
        allMainDish.appendChild(paneer)
        allMainDish.appendChild(dalMakhani)
        allMainDish.appendChild(choleBhature)
        paneer.appendChild(paneerTitle)
        paneer.appendChild(paneerPrice)
        paneer.appendChild(paneerImg)
        paneer.appendChild(paneerRights)
        dalMakhani.appendChild(dalMakhaniTitle)
        dalMakhani.appendChild(dalMakhaniPrice)
        dalMakhani.appendChild(dalMakhaniImg)
        dalMakhani.appendChild(dalRights)
        choleBhature.appendChild(choleBhatureTitle)
        choleBhature.appendChild(choleBhaturePrice)
        choleBhature.appendChild(choleBhatureImg)
        choleBhature.appendChild(choleRights)

        return {mainDishDiv}
    })()

    const desserts = (() => {
        const sweetDish = document.createElement('div')
        const sweetDishTitle = document.createElement('div')
        const allSweetDish = document.createElement('div')
        const pastryRights = document.createElement('a')
        const gulabRights = document.createElement('a')
        const sundaeRights = document.createElement('a')
        const pastry = document.createElement('div')
        const gulabJamun = document.createElement('div')
        const sundae = document.createElement('div')
        const pastryTitle = document.createElement('div')
        const pastryPrice = document.createElement('div')
        const pastryImg = document.createElement('div')
        const gulabJamunTitle = document.createElement('div')
        const gulabJamunPrice = document.createElement('div')
        const gulabJamunImg = document.createElement('div')
        const sundaeTitle = document.createElement('div')
        const sundaePrice = document.createElement('div')
        const sundaeImg = document.createElement('div')
        sweetDish.classList.add('menu-sweet-dish-div')
        allSweetDish.classList.add('menu-all-sweet-div')
        pastryRights.textContent = 'Designed by Freepik'
        gulabRights.textContent = 'Image by russelln12366425 on Vecteezy'
        sundaeRights.textContent = 'Designed by Freepik'
        sweetDishTitle.textContent = 'Dessert'
        pastryRights.setAttribute('href','https://www.freepik.com/free-photo/front-view-delicious-cake-with-copy-space_11383418.htm#fromView=search&page=3&position=0&uuid=01075fe5-6497-4761-ba32-00331a8514c6')
        gulabRights.setAttribute('href','https://www.vecteezy.com/photo/37975868-ai-generated-gulab-jamun-a-popular-indian-sweet-gulab-jamun-is-made-from-khoya-reduced-milk-solids-and-deep-fried-then-soaked-in-a-sugary-syrup-flavored-with-rosewater-and-cardamom')
        sundaeRights.setAttribute('href','https://www.freepik.com/free-photo/cup-with-delicious-ice-cream-cookies-assortment_33993649.htm#fromView=search&page=1&position=41&uuid=bcdae20d-31b0-491e-af03-6b244daf289b')
        pastryTitle.textContent = 'Pastry'
        pastryPrice.textContent = 'Price: $60'
        gulabJamunTitle.textContent = 'GulabJamun'
        gulabJamunPrice.textContent = 'Price: $80'
        sundaeTitle.textContent = 'Sundae'
        sundaePrice.textContent = 'Price: $90'
        sweetDish.appendChild(sweetDishTitle)
        sweetDish.appendChild(allSweetDish)
        allSweetDish.appendChild(pastry)
        allSweetDish.appendChild(gulabJamun)
        allSweetDish.appendChild(sundae)
        pastry.appendChild(pastryTitle)
        pastry.appendChild(pastryPrice)
        pastry.appendChild(pastryImg)
        pastry.appendChild(pastryRights)
        gulabJamun.appendChild(gulabJamunTitle)
        gulabJamun.appendChild(gulabJamunPrice)
        gulabJamun.appendChild(gulabJamunImg)
        gulabJamun.appendChild(gulabRights)
        sundae.appendChild(sundaeTitle)
        sundae.appendChild(sundaePrice)
        sundae.appendChild(sundaeImg)
        sundae.appendChild(sundaeRights)
        return {sweetDish}
    })()
    totalMenuContent.appendChild(menuContent)
    content.appendChild(totalMenuContent)
    menuContent.appendChild(menuTitle)
    menuContent.appendChild(beverages.beverageDiv)
    menuContent.appendChild(mainDish.mainDishDiv)
    menuContent.appendChild(desserts.sweetDish)
    
}