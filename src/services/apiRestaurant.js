import { useEffect, useState } from "react";
import { swiggy_menu_api_URL, MENU_API, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, search_API_URL } from "../utils/constant"
// const RestaurantAPI = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
function getPosition() {
    const getPosition = window.sessionStorage.getItem("position");
    const position = JSON.parse(getPosition)
    const latitude = position["latitude"];
    const longitude = position["longitude"];
    const lat = getPosition != null ? (latitude) : null;
    const lng = getPosition != null ? (longitude) : null;
    return [lat, lng]
}


export async function getRestaurants() {
    const [lat, lng] = getPosition()


    try {
        console.log('api call')
        const data = await fetch(MENU_API(lat, lng));
        if (!data.ok) throw Error();

        const json = await data.json();
        const result = JSON.parse(json.contents);

        // was showing an error of data fetching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
        async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                // initialize checkData for Swiggy Restaurant data
                let checkData = result?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                // if checkData is not undefined then return it
                if (checkData !== undefined) {
                    return checkData;
                }
            }
        }
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(result);
        return resData
    } catch (error) {
        console.log(error);

    }

}
export async function getCategories() {
    const [lat, lng] = getPosition()

    try {
        console.log('api call for category')
        const data = await fetch(MENU_API(lat, lng));

        if (!data.ok) throw Error();

        const json = await data.json();
        const result = JSON.parse(json.contents);

        async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                // initialize checkData for Swiggy Restaurant data
                if (result?.data?.cards[i]?.card?.card?.id === 'whats_on_your_mind') {
                    const checkData = result?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.info;
                    return (checkData !== undefined) ? checkData : [];
                }
            }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const itemData = await checkJsonData(result);
        // console.log(itemData)
        return itemData
    } catch (error) {
        console.log(error);
    }

}





export async function UseGetPlace(url) {

    try {
        const data = await fetch(search_API_URL + url);
        // console.log('data', data)
        if (!data.ok) throw Error();

        const json = await data.json();

        return json?.data
    } catch (error) {
        console.log(error);
    }

    // return null

}

export const UseRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null); // use useState to store restaurant data
    const [menuItems, setMenuItems] = useState([]); // use useState to store restaurant Menu Item data

    const [lat, lng] = getPosition()
    useEffect(() => {
        getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    }, [resId]);

    async function getRestaurantInfo() {
        try {
            const response = await fetch(swiggy_menu_api_URL(lat, lng) + resId);
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            } else {
                const json = await response.json();
                const result = JSON.parse(json.contents);
                // Set restaurant data
                const restaurantData =
                    result?.data?.cards
                        ?.map((x) => x.card)
                        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
                        ?.info || null;
                setRestaurant(restaurantData)

                // Set menu item data
                const menuItemsData =
                    result?.data?.cards
                        .find((x) => x.groupedCard)
                        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                            (x) => x.card?.card
                        )
                        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
                // ?.map((x) => x.itemCards)
                // .flat()
                // .map((x) => x.card?.info) || [];

                const uniqueMenuItems = [];
                menuItemsData.forEach((item) => {

                    if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                        uniqueMenuItems.push(item);
                    }
                });
                setMenuItems(menuItemsData);
            }
        } catch (err) {
            setMenuItems([]);
            setRestaurant(null);
            console.error(err);
        }
    }
    return [restaurant, menuItems];
};
