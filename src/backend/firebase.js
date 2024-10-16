
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";  
import { query, where } from 'firebase/firestore'; 
import { setData } from "./localstorage";
import { cookie } from "./cookies";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "nhakhoaduongthu-605f1",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:526175107214:web:11513c3664cf328bc831df",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);



const loginSubmit = () =>{
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth,email,password)
  .then(()=>{
    alert("Đăng nhập thành công");
    cookie(password);
   window.location.pathname='/admin'
  })
  .catch((error)=>{
    const errorMessage = error.message;
    alert('Đăng nhập thất bại');
    console.error(errorMessage);
  })
}


function addUser(){
  var data = {
          name:document.getElementById("create-name").value,
          product:document.getElementById("create-product").value,
          cung1:document.getElementById("create-cung1").value,
          cung2:document.getElementById("create-cung2").value,
          cung3:document.getElementById("create-cung3").value,
          cung4:document.getElementById("create-cung4").value,
          id:document.getElementById("create-id").value,
          date:document.getElementById("create-date").value,
          month:document.getElementById("create-month").value,
          year:document.getElementById("create-year").value,
          dentist:document.getElementById("create-dentist").value,
          address: document.getElementById("create-address").value,
          phone:document.getElementById("create-phone").value,
  }
    addDoc(collection(db, 'users'), data)  
    .then(() => {  
        alert('Thêm người dùng thành công');  
    })  
    .catch((error) => {  
        console.error('Error adding document: ', error);  
    }); 
}

const getUsers = async () => {  
  const usersCollection = collection(db, 'users');  
  try {  
      const userSnapshot = await getDocs(usersCollection);  
      const userList = userSnapshot.docs.map(doc => ({  
          id: doc.id,  
          ...doc.data()  
      }));  
      console.log( userList);  
  } catch (error) {  
      console.error( error);  
  }  
}  


const getUsersById = async () => {
    const id= document.getElementById('search-content_input').value
    const q = query(collection(db, 'users'), where('id', '==', id));  
    try {  
        const querySnapshot = await getDocs(q);  
        const userList = querySnapshot.docs.map(doc => ({  
            id: doc.id,  
            ...doc.data()  
        }));  
        setData(userList[0].name,userList[0].id,userList[0].phone,userList[0].address,userList[0].product,userList[0].dentist,userList[0].date,userList[0].month,userList[0].year,userList[0].cung1,userList[0].cung2,userList[0].cung3,userList[0].cung4);  
        window.location.pathname='/customer';
    } catch (error) {  
        console.error( error);  
    }  
}  



export {loginSubmit,addUser,getUsers,getUsersById,db};