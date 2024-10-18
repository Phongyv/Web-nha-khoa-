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
                <span className="customer-top_span">Dương Thu Lab</span>
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
                    <span className="customer-body_first-item">∎ Thời hạn bảo hành đến: Ngày {date} tháng {month} năm {year}</span>
                    <span className="customer-body_first-item">∎ Nha khoa: {dentist}</span>
                    <span className="customer-body_first-item">∎ Địa chỉ: {address}</span>
                    <span className="customer-body_first-item">∎ Điện thoại: {phone}</span>
                </div>
                <div className="customer-body_second">
                    <span className="customer-body_second-item">Lời khuyên cho bệnh nhân:</span>
                    <span className="customer-body_second-item">1. Khám răng định kỳ 6 tháng/ lần.</span>
                    <span className="customer-body_second-item">2. Đánh răng đúng cách.</span>
                    <span className="customer-body_second-item">3. Tránh cắn, nhai vật cứng.</span>
                </div>
            </div>
        </div>
    )
}

export default Customer;
