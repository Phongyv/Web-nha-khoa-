import { getUsersById } from "../backend/firebase";
import "../css/search.css";

function Search(){
    return(
        <div className="search">
            <div className="search-brand">
                <span className="search-brand_span">Nha Khoa Dương Thu</span>
                <img className="search-brand_img" src="https://thietbirang.com/wp-content/uploads/2021/05/ky-thuat-vien-nha-khoa-la-gi-2.jpg" alt="" />
            </div>
            <div className="search-content">
                <span className="search-content_span">Tra cứu thông tin bảo hành:</span>
                <input type="text" className="search-content_input" id="search-content_input" placeholder="Nhập mã thẻ"/>
                <button onClick={getUsersById} className="search-content_button">Tìm kiếm</button>
            </div>
        </div>
    )
}

export default Search;
