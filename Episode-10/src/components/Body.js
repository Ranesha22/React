import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    //state variable - super powerful variable

    const [resturantList, setresturantList] = useState([])
    const [filteredResturant, setFilteredResturant] = useState([])

    const [searchText, setsearchText] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        // const json = await data.json();
        // console.log(json)

        // use optional chaing
        // setresturantList(json.data.cards[2].data.data.cards)

        setresturantList(resList)
        setFilteredResturant(resList)
    }

    const onlineStatus = useOnlineStatus();
    // showing spinner ui is bad
    // instead show shimmer UI
    // if(resturantList.length === 0){
    // return <h1>Loading..</h1>
    // return <Shimmer/>
    // }

    if (onlineStatus === false)
        return <h1>Looks like you are offline! Please check Internet Connection!!</h1>
    return resturantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type='text' className="border border-solid border-black" placeholder='Search' value={searchText} onChange={(e) => setsearchText(e.target.value)} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        //filter logic
                        let filteredRes = resturantList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredResturant(filteredRes)
                    }}>Seach</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        //filter logic to show resturant with high rating
                        const filteredList = resturantList.filter(res => res.data.avgRating > 4);
                        setresturantList(filteredList)
                    }}>Top Rated Resturant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredResturant.map((obj, index) =>
                    <Link to={'/resturant/' + obj.data.id} key={obj.data.id} >
                        <ResturantCard resData={obj} />
                    </Link>
                )}

            </div>
        </div>
    )
}

export default Body;