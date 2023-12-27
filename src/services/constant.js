// export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/";
export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/,c_fill/";
export const MENU_ITEM_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";


// const lat = '10.811115299341283'
// const lng = '78.70747714418124'


console.log('menu api')
export const search_API_URL = `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmisc%2Fplace-autocomplete%3Finput%3D`;
export const place_ID = `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmisc%2Faddress-recommend%3Fplace_id%3D`
export const MENU_API = (lat, lng) =>
    `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${lat}%26lng%3D${lng}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`

// "https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

// "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.853575&lng=80.068588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"



export const swiggy_menu_api_URL = (lat, lng) =>

    `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D${lat}%26lng%3D${lng}%26restaurantId%3D`

// "http://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";




/**
 * "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

"https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.8109783&lng=78.7074235&page_type=DESKTOP_WEB_LISTING";
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
 */