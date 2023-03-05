class Header {
    constructor(header = null, burger = null, mobile = null, logo = null) {
        this.header = header;
        this.burger = burger;
        this.mobile = mobile;
        this.logo = logo;
    }
}
const headerIns = new Header(document.querySelector(".header"), document.querySelector(".header__burger"), document.querySelector(".mobile"), document.querySelector(".header__logo"));
headerIns.burger.addEventListener("click", () => {
    headerIns.mobile.classList.toggle("mobile_active");
    headerIns.burger.classList.toggle("header__burger_active");
    headerIns.logo.classList.toggle("logo__visible");
    document.querySelector("body").classList.toggle("_scrollDisable");
});
headerIns.mobile.addEventListener("click", () => {
    headerIns.mobile.classList.toggle("mobile_active");
});
