import { addUser, deleteDocument, getDocumentById, updateDocument } from "../backend/firebase";
import "../css/admin.css"
import { useState,useEffect } from "react";
import { db } from "../backend/firebase";
import { collection, getDocs } from "firebase/firestore";
// import Cookies from 'js-cookie'; 

function Admin(){

    // const cookies = Cookies.get('cookietoken'); 
    // const checkCookie = 'admin12345'
    // if(cookies===checkCookie){
    //     window.location.href = "/login";
    // }

   
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
        window.location.reload()
    }

    const [a,setA] = useState(window.localStorage.getItem('name'));
    const [b,setB] = useState(window.localStorage.getItem('phone'));
    const [c,setC] = useState(window.localStorage.getItem('address'));
    const [d,setD] = useState(window.localStorage.getItem('product'));
    const [e,setE] = useState(window.localStorage.getItem('dentist'));
    const [f,setF] = useState(window.localStorage.getItem('date'));
    const [g,setG] = useState(window.localStorage.getItem('month'));
    const [h,setH] = useState(window.localStorage.getItem('year'));
    const [i,setI] = useState(window.localStorage.getItem('cung1'));
    const [k,setK] = useState(window.localStorage.getItem('cung2'));
    const [l,setL] = useState(window.localStorage.getItem('cung3'));
    const [m,setM] = useState(window.localStorage.getItem('cung4'));

    function setDefault(){
        setA(window.localStorage.getItem('name'));
        setB(window.localStorage.getItem('phone'));
        setC(window.localStorage.getItem('address'));
        setD(window.localStorage.getItem('product'));
        setE(window.localStorage.getItem('dentist'));
        setF(window.localStorage.getItem('date'));
        setG(window.localStorage.getItem('month'));
        setH(window.localStorage.getItem('year'));
        setI(window.localStorage.getItem('cung1'));
        setK(window.localStorage.getItem('cung2'));
        setL(window.localStorage.getItem('cung3'));
        setM(window.localStorage.getItem('cung4'));
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
                        <span className="admin-dashboard_body-title_item">Sửa</span>
                    </div>
                 {
                    users.map((item)=>(
                        <div className="admin-dashboard_body-item" >
                        <div className="admin-dashboard_body-item_id">{item.id}</div>
                        <div className="admin-dashboard_body-item_name">{item.name}</div>
                        <div className="admin-dashboard_body-item_phone">{item.phone}</div>
                        <div className="admin-dashboard_body-item_address">{item.address}</div>
                        <button onClick={(e)=>{window.localStorage.setItem("docId",e.target.id); getDocumentById('users',window.localStorage.getItem("docId")); setDefault(); document.getElementById('admin-change').style.display='block'; }}  className="admin-dashboard_body-item_add" id={item.token} >Sửa</button>
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
            <div className="admin-change" id="admin-change">
                <span className="body-change_title"></span>
                <div className="admin-change_body">
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Tên</span>
                        <input type="text" className="admin-change_body-item_input" id="change-name" placeholder={a}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Số điện thoại</span>
                        <input type="text" className="admin-change_body-item_input" id="change-phone" placeholder={b}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Địa chỉ</span>
                        <input type="text" className="admin-change_body-item_input" id="change-address" placeholder={c}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Sản phẩm</span>
                        <input type="text" className="admin-change_body-item_input" id="change-product" placeholder={d}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Nha sĩ</span>
                        <input type="text" className="admin-change_body-item_input" id="change-dentist" placeholder={e}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Ngày</span>
                        <input type="text" className="admin-change_body-item_input" id="change-date" placeholder={f}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Tháng</span>
                        <input type="text" className="admin-change_body-item_input" id="change-month" placeholder={g}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Năm</span>
                        <input type="text" className="admin-change_body-item_input" id="change-year" placeholder={h}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Cung 1:</span>
                        <input type="text" className="admin-change_body-item_input" id="change-cung1" placeholder={i}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Cung 2:</span>
                        <input type="text" className="admin-change_body-item_input" id="change-cung2" placeholder={k}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Cung 3:</span>
                        <input type="text" className="admin-change_body-item_input" id="change-cung3" placeholder={l}/>
                    </div>
                    <div className="admin-change_body-item">
                        <span className="admin-change_body-item_title">Cung 4:</span>
                        <input type="text" className="admin-change_body-item_input" id="change-cung4" placeholder={m}/>
                    </div>
                </div>
                <div className="admin-change_button">
                    <button onClick={()=>{document.getElementById('admin-change').style.display='none'}} className="admin-change_button-cancel">Hủy</button>
                    <button className="admin-change_button-delete">Xóa</button>
                    <button className="admin-change_button-update">Cập nhật</button>
                </div>
            </div>
        </div>
    )
}

export default Admin;
