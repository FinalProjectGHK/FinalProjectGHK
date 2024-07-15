
import { Link } from "react-router-dom";
const Header = () => {
    return <div >
        <div className="bar">
            <Link to='/'>Home</Link>
            <div>
                <Link to='/cart'>購物車</Link>
            </div>
        </div>
        
    {/* <div style={{ display: 'flex', justifyContent: 'space-around', height: '40vh', backgroundColor: "#B78F76" }}> */}
           <div className="ad"> 
            <div>ad</div>
    
        </div>
        <div className="cat">
            <Link to='/sushi' className="text-yellow-900 py-1 px-12 bg-orange-50 rounded-lg hover:bg-yellow-900 hover:text-white">壽司</Link>
            <Link to='/roll' className="text-yellow-900 py-1 px-12 bg-orange-50 rounded-lg hover:bg-yellow-900 hover:text-white ">卷物。軍艦</Link>
            <Link to='/soup' className="text-yellow-900 py-1 px-12 bg-orange-50 rounded-lg hover:bg-yellow-900 hover:text-white">湯類</Link>
            <Link to='/side' className="text-yellow-900 py-1 px-12 bg-orange-50 rounded-lg hover:bg-yellow-900 hover:text-white">副餐類</Link>
            <Link to='/dessert' className="text-yellow-900 py-1 px-12 bg-orange-50 rounded-lg hover:bg-yellow-900 hover:text-white">甜品</Link>
            <Link to='/drinks' className="text-yellow-900 py-1 px-12 bg-orange-50 rounded-lg hover:bg-yellow-900 hover:text-white">飲品</Link>
        </div>
    </div>
}

export default Header;

