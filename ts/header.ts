// Alias
type el = Element | null;

// Header class
class Header {

    public readonly header?: el 
    public readonly burger?: el 
    public readonly mobile?: el 
    public readonly logo?: el 
    
    constructor(header:el = null, burger:el = null, mobile:el = null, logo:el = null) {
        this.header = header;
        this.burger = burger;
        this.mobile = mobile;
        this.logo = logo;
    }
}
const headerIns: Header = new Header(
    document.querySelector(".header"), 
    document.querySelector(".header__burger"), 
    document.querySelector(".mobile"),
    document.querySelector(".header__logo"),
);

// Header animation
// let lastYOffset: Number = 0;
// document.addEventListener("scroll", () => { 
//     if (lastYOffset >= window.pageYOffset) {
//         headerIns.header?.classList.remove("header_active")
//     } else {
//         headerIns.header?.classList.add("header_active")
//     }
//     lastYOffset = window.pageYOffset
// })

// Header burger
headerIns.burger.addEventListener("click", () => { 
    headerIns.mobile.classList.toggle("mobile_active"); 
    headerIns.burger.classList.toggle("header__burger_active"); 
    headerIns.logo.classList.toggle("logo__visible"); 
    document.querySelector("body").classList.toggle("_scrollDisable");
})
headerIns.mobile.addEventListener("click", () => { 
    headerIns.mobile.classList.toggle("mobile_active"); 
})

// Logo
// headerIns.header.addEventListener("click", () => { window.location = "https://google.com"; })
