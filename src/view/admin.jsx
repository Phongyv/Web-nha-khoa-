import { addUser } from "../backend/firebase";
import "../css/admin.css"
import { useState,useEffect } from "react";
import { db } from "../backend/firebase";
import { collection, getDocs } from "firebase/firestore";
import Cookies from 'js-cookie'; 

function Admin(){

    const cookies = Cookies.get('cookietoken'); 
    const checkCookie = process.env.REACT_APP_PASSWORD
    if(cookies===checkCookie){
        window.location.href = "/login";
    }

    const [users, setUsers] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const dataUser = await getDocs(collection(db, "users"));
        setUsers(dataUser.docs.map((doc) => ({ ...doc.data(), token: doc.id })));
      };
      getData();
    }, []);

    function open(){
        document.getElementById("admin-create").style.display = "block";
    }
    function close(){
        document.getElementById("admin-create").style.display = "none";
    }

    return(
        <div className="admin">
            <div className="admin-dashboard">
                <div className="admin-dashboard_top">
                    <h1 className="admin-dashboard_top-title">Admin Dashboard</h1>
                    <input className="admin-dashboard_top-search" type="text" placeholder="Tìm kiếm"></input>
                    <button onClick={open} className="admin-dashboard_top-create">Tạo mới</button>
                </div>
                <div className="admin-dashboard_body">
                    <div className="admin-dashboard_body-title">
                        <span className="admin-dashboard_body-title_item">Mã thẻ</span>
                        <span className="admin-dashboard_body-title_item">Tên</span>
                        <span className="admin-dashboard_body-title_item">Liên hệ</span>
                        <span className="admin-dashboard_body-title_item">Địa chỉ</span>
                        <span className="admin-dashboard_body-title_item">Sửa/Xóa</span>
                    </div>
                 {
                    users.map((item)=>(
                        <div className="admin-dashboard_body-item">
                        <div className="admin-dashboard_body-item_id">{item.id}</div>
                        <div className="admin-dashboard_body-item_name">{item.name}</div>
                        <div className="admin-dashboard_body-item_phone">{item.phone}</div>
                        <div className="admin-dashboard_body-item_address">{item.address}</div>
                        <button className="admin-dashboard_body-item_add">Sửa</button>
                        <button className="admin-dashboard_body-item_delete">Xóa</button>
                        </div> 
                    ))
                 }  
                 
                </div>
            </div>
            <div className="admin-create" id="admin-create">
                <span className="admin-create_title">Tạo khách hàng mới</span>
                <div className="admin-create_body">
                    <div className="admin-create_bodys">
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Họ và tên:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-name"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Số điện thoại:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-phone"></input>
                    </div>
                    </div>
                    <div className="admin-create_bodys">
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Số thẻ:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-id"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Địa chỉ:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-address"></input>
                    </div>
                    </div>
                    <div className="admin-create_bodys">
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Sản phẩm:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-product"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Nha khoa:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-dentist"></input>
                    </div>
                    </div>
                    <div className="admin-create_bodys">
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title" >Ngày bảo hành đến:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-date" ></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title">Tháng bảo hành đến:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-month"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title">Năm bảo hành đến:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-year"></input>
                    </div>
                    </div>
                   <div className="admin-create_bodys">
                   <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title">Cung 1:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-cung1"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title">Cung 2:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-cung2"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title">Cung 3:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-cung3"></input>
                    </div>
                    <div className="admin-create_body-item">
                        <span className="admin-create_body-item_title">Cung 4:</span>
                        <input className="admin-create_body-item_input" type="text" id="create-cung4"></input>
                    </div>
                   </div>
                </div>
                <div className="admin-create_button">
                    <button onClick={close} className="admin-create_button-cancel">Hủy</button>
                    <button onClick={addUser} className="admin-create_button-create">Tạo mới</button>
                </div>
            </div>
            <div className="admin-change"></div>
        </div>
    )
}

export default Admin;
