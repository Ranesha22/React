import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData";
import {useState} from 'react';

const Body = () => {

    //state variable - super powerful variable

    const [resturantList,setresturantList] = useState(resList)


    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    //filter logic to show resturant with high rating
                   const filteredList = resturantList.filter(res=>res.data.avgRating>4);
                    setresturantList(filteredList)
                }}>Top Rated Resturant</button>
            </div>
            <div className="res-container">
                {resturantList.map((obj,index) =>
                    <ResturantCard key={obj.data.id} resData={obj} />
                )}

            </div>
        </div>
    )
}

export default Body;