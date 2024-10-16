import "../css/customer.css"


function Customer(){
    var name,product,cung1,cung2,cung3,cung4,id,date,month,year,dentist,address,phone
    name = window.localStorage.getItem("name");
    id = window.localStorage.getItem("id");
    phone = window.localStorage.getItem("phone");
    product = window.localStorage.getItem("product");
    dentist = window.localStorage.getItem("dentist");
    date = window.localStorage.getItem("date");
    month = window.localStorage.getItem("month");
    year = window.localStorage.getItem("year");
    cung1 = window.localStorage.getItem("cung1");
    cung2 = window.localStorage.getItem("cung2");
    cung3 = window.localStorage.getItem("cung3");
    cung4 = window.localStorage.getItem("cung4");
    address = window.localStorage.getItem("address");
    return(
        <div className="customer">
            <div className="customer-top">
                <span className="customer-top_span">Nha Khoa Dương Thu</span>
                <div className="customer-top_img"></div>
            </div>
            <div className="customer-body">
                <span className="customer-body_span">Thông tin bảo hành:</span>
                <div className="customer-body_first">
                    <span className="customer-body_first-item">∎ Họ và tên: {name}</span>
                    <span className="customer-body_first-item">∎ Sản phẩm: {product}</span>
                    <span className="customer-body_first-item">∎ Cung 1: {cung1}</span>
                    <span className="customer-body_first-item">∎ Cung 2: {cung2}</span>
                    <span className="customer-body_first-item">∎ Cung 3: {cung3}</span>
                    <span className="customer-body_first-item">∎ Cung 4: {cung4}</span>
                    <span className="customer-body_first-item">∎ Số thẻ: {id}</span>
                    <span className="customer-body_first-item">∎ Thời hạn bảo hành đến: ngày{date} tháng{month} năm{year}</span>
                    <span className="customer-body_first-item">∎ Nha khoa: {dentist}</span>
                    <span className="customer-body_first-item">∎ Địa chỉ: {address}</span>
                    <span className="customer-body_first-item">∎ Điện thoại: {phone}</span>
                </div>
                <div className="customer-body_second">
                    <span className="customer-body_second-item">∎ Trường hợp được bảo hành: Sản phẩm bị nứt, vỡ và biến dạng trong quá trình sử dụng sau khi đã phục hình vĩnh viễn cho bệnh nhân.</span>
                    <span className="customer-body_second-item">∎ Thẻ bảo hành hợp lệ và có thời gian bảo hành.</span>
                    <span className="customer-body_second-item">∎ Điều kiện không được bảo hành: Phục hình bị nứt, vỡ do bệnh nhân bị ngã hoặc do tai nạn.</span>
                    <span className="customer-body_second-item">∎ Phục hình bị nứt, vỡ do sử dụng sai như cắn vật cứng, mở nắp bia hay tự ý gỡ bỏ phục hình.</span>
                    <span className="customer-body_second-item">∎ Thủ tục bảo hành: Khi gặp sự cố, bệnh nhân mang theo Thẻ bảo hành đến Phòng nha.</span>
                </div>
            </div>
        </div>
    )
}

export default Customer;
