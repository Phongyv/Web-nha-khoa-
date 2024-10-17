
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc,getDocs , doc, deleteDoc,updateDoc,getDoc} from "firebase/firestore";  
import { query, where } from 'firebase/firestore'; 
import { setData } from "./localstorage";
import { cookie } from "./cookies";
import { setDoc } from "firebase/firestore/lite";

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
      document.getElementById("create-name").value=''
      document.getElementById("create-product").value=''
      document.getElementById("create-cung1").value=''
      document.getElementById("create-cung2").value=''
      document.getElementById("create-cung3").value=''
      document.getElementById("create-cung4").value=''
      document.getElementById("create-id").value=''
      document.getElementById("create-date").value=''
      document.getElementById("create-month").value=''
      document.getElementById("create-year").value=''
    document.getElementById("create-dentist").value=''
      document.getElementById("create-address").value=''
      document.getElementById("create-phone").value=''
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


async function deleteDocument(collectionName,documentId) {  
  const docRef = doc(db, collectionName, documentId); 
  try {  
      await deleteDoc(docRef);  
      alert('Tài liệu đã được xóa thành công!');  
      window.location.reload();
  } catch (error) {  
      console.error('Lỗi khi xóa tài liệu: ', error);  
  }  
}  

async function getDocumentById(collectionName,documentId) {  
  const docRef = doc(db, collectionName, documentId);
  try {  
      const docSnap = await getDoc(docRef);  

      if (docSnap.exists()) {  
        setData(docSnap.data().name,docSnap.data().id,docSnap.data().phone,docSnap.data().address,docSnap.data().product,docSnap.data().dentist,docSnap.data().date,docSnap.data().month,docSnap.data().year,docSnap.data().cung1,docSnap.data().cung2,docSnap.data().cung3,docSnap.data().cung4)
      } else {  
          console.log('Tài liệu không tồn tại!');  
      }  
  } catch (error) {  
      console.error('Lỗi khi lấy tài liệu: ', error);  
  }  
}  


async function updateDocument(collectionName,documentId) {  
  const docRef = doc(db,collectionName, documentId);

  try {  
      await setDoc(docRef,{  
        name:document.getElementById("change-name").value,
        product:document.getElementById("change-product").value,
        cung1:document.getElementById("change-cung1").value,
        cung2:document.getElementById("change-cung2").value,
        cung3:document.getElementById("change-cung3").value,
        cung4:document.getElementById("change-cung4").value,
        id:document.getElementById("change-id").value,
        date:document.getElementById("change-date").value,
        month:document.getElementById("change-month").value,
        year:document.getElementById("change-year").value,
        dentist:document.getElementById("change-dentist").value,
        address: document.getElementById("change-address").value,
        phone:document.getElementById("change-phone").value
      },{merge:true});  
      alert('Tài liệu đã được cập nhật thành công!');  
  } catch (error) {  
      console.error('Lỗi khi cập nhật tài liệu: ', error);  
  }  
}  


export {loginSubmit,addUser,getUsers,getUsersById,deleteDocument,updateDocument,getDocumentById,db};
