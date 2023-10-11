import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData";
import {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";

const Body = () => {

    //state variable - super powerful variable

    const [resturantList,setresturantList] = useState([])
    const [filteredResturant,setFilteredResturant]=useState([])

    const [searchText,setsearchText] = useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        // const json = await data.json();
        // console.log(json)

        // use optional chaing
        // setresturantList(json.data.cards[2].data.data.cards)

        setresturantList(resList)
        setFilteredResturant(resList)
    }

// showing spinner ui is bad
// instead show shimmer UI
    // if(resturantList.length === 0){
        // return <h1>Loading..</h1>
        // return <Shimmer/>
    // }

    return resturantList.length ===0 ? <Shimmer/> : (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input type='text' className="search-box" placeholder='Search' value={searchText} onChange={(e)=>setsearchText(e.target.value)}/>
                    <button onClick={()=>{
                        //filter logic
                        let filteredRes = resturantList.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredResturant(filteredRes)
                    }}>Seach</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    //filter logic to show resturant with high rating
                   const filteredList = resturantList.filter(res=>res.data.avgRating>4);
                    setresturantList(filteredList)
                }}>Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {filteredResturant.map((obj,index) =>
                    <ResturantCard key={obj.data.id} resData={obj} />
                )}

            </div>
        </div>
    )
}

export default Body;