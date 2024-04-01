// kullanıcıadı alınarak id si myName olan kısımda kullanıldı

let userName = prompt(" Lütfen isminizi giriniz");
let userNameDOM = document.querySelector("#myName");

userName.length == 0 ? userNameDOM.innerHTML = "Konuk" : userNameDOM.innerHTML = userName;

// saat

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();

    // js de getDay() haftanın günlerini 0-6 arasında pazardan başlayarak döndürüyor.
    // Eğer salı günündeysek getDay 2 dönecekti. Ama weekDays de 0 indeks pazartesiden başlıyor.Bu yüzden day-1 kullanıyoruz

    let weekDays = ["Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi", "Pazar"];

    // hour = hour < 10 ? "0" + hour : hour; görsel açıdan saat 9 ise 9 değilde 09 dönmesi için
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec <10 ? "0" + sec : sec ;

    let currentTime = `${hour} : ${min} : ${sec} ${weekDays[day-1]}`
    document.querySelector("#myClock").innerHTML = currentTime;
}
showTime()