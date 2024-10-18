import { getUsersById } from "../backend/firebase";
import "../css/search.css";

function Search(){

    return(
        <div className="search">
            <div className="search-brand">
                <span className="search-brand_span">Dương Thu Lab</span>
                <img className="search-brand_img" src="https://thietbirang.com/wp-content/uploads/2021/05/ky-thuat-vien-nha-khoa-la-gi-2.jpg" alt="" />
            </div>

            <div class="slideshow-container">  
    <div class="slides">  
        <div class="slide">  
            <img className="slide-img" src="https://firebasestorage.googleapis.com/v0/b/nhakhoaduongthu-605f1.appspot.com/o/ebee5ef5-215d-4bb3-897f-d32c99f006e0.jpg?alt=media&token=f5eb0c80-1a29-4483-963d-bd26f881fd5d" alt="Hình 1"/>  
        </div>  
        <div class="slide">  
            <img className="slide-img" src="https://firebasestorage.googleapis.com/v0/b/nhakhoaduongthu-605f1.appspot.com/o/d812b178-1155-4463-a7fa-714533233927.jpg?alt=media&token=23165433-bd36-4b0d-9df7-ce793eadd8e7" alt="Hình 2"/>  
        </div>  
        <div class="slide">  
            <img className="slide-img" src="https://firebasestorage.googleapis.com/v0/b/nhakhoaduongthu-605f1.appspot.com/o/8ad6e97d-9aa1-4345-bf35-4828b1547a5f.jpg?alt=media&token=e1b28594-b793-4a8d-bd0b-aadc83162dd7" alt="Hình 3"/>  
        </div>  
    </div>  
</div> 

            <div className="search-content">
                <span className="search-content_span">Tra cứu thông tin bảo hành:</span>
                <input type="text" className="search-content_input" id="search-content_input" placeholder="Nhập mã thẻ bảo hành"/>
                <button onClick={getUsersById} className="search-content_button">Tìm kiếm</button>
            </div>


            <div className="search-info">
                <span className="search-info_text">∎ Trường hợp được bảo hành: Sản phẩm bị nứt, vỡ và biến dạng trong quá trình sử dụng sau khi đã phục hình vĩnh viễn cho bệnh nhân.</span>
                <span className="search-info_text">∎ Thẻ bảo hành hợp lệ và có thời gian bảo hành.</span>
                <span className="search-info_text">∎ Điều kiện không được bảo hành: Phục hình bị nứt, vỡ do bệnh nhân bị ngã hoặc do tai nạn.</span>
                <span className="search-info_text">∎ Phục hình bị nứt, vỡ do sử dụng sai như cắn vật cứng, mở nắp bia hay tự ý gỡ bỏ phục hình.</span>
                <span className="search-info_text">∎ Thủ tục bảo hành: Khi gặp sự cố, bệnh nhân mang theo Thẻ bảo hành đến Phòng nha.</span>
            </div>

        </div>

       
    )
}

export default Search;
