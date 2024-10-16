function setData(name,id,phone,address,product,dentist,date,month,year,cung1,cung2,cung3,cung4){
    window.localStorage.setItem("name",name);
    window.localStorage.setItem("id",id);
    window.localStorage.setItem("phone",phone);
    window.localStorage.setItem("address",address);
    window.localStorage.setItem("product",product);
    window.localStorage.setItem("dentist",dentist);
    window.localStorage.setItem("date",date);
    window.localStorage.setItem("month",month);
    window.localStorage.setItem("year",year);
    window.localStorage.setItem("cung1",cung1);
    window.localStorage.setItem("cung2",cung2);
    window.localStorage.setItem("cung3",cung3);
    window.localStorage.setItem("cung4",cung4);
}

function getData(name,id,phone,product,dentist,address,date,month,year,cung1,cung2,cung3,cung4){
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
}

export {setData,getData}