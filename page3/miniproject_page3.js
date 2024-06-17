// const firebaseConfig = {
//     apiKey: "AIzaSyBSLOoLl71-u4grh5-LQ3J9WusOfgeVsoA",
//     authDomain: "miniproject-gh.firebaseapp.com",
//     projectId: "miniproject-gh",
//     storageBucket: "miniproject-gh.appspot.com",
//     messagingSenderId: "401643697547",
//     appId: "1:401643697547:web:15ed675e3ee384b22d6b8e",
//     measurementId: "G-2TPQ7YS2GF"
// };

// // 파이어베이스 앱 초기화
// const app = firebase.initializeApp(firebaseConfig);

// // 파이어베이스 실시간 데이터베이스 생성
// const database = firebase.database();   

// 파이어베이스 데이터 저장
// function writeUserData(userId, password, nick, phoneNumber, email) {
//     database.ref("users/" + userId).set({
//         password: password,
//         nick: nick,
//         phoneNumber: phoneNumber,
//         email: email
//     });
// }


// email 의 domain 주소를 선택하면 직접 입력해야하는 입력 창이 선택한 domain 주소로 바뀜
document.getElementById('emaildomain').addEventListener('change', function () {
    var selectedValue = this.value;
    if (selectedValue) {
        document.getElementById('email2').value = selectedValue;
    } else {
        document.getElementById('email2').value = '';
    }
});




let idInput = document.getElementById("idInput");
let passwordInput = document.getElementById("passwordInput");
let passwordCheckInput = document.getElementById("passwordCheckInput");
let nickInput = document.getElementById("nickInput");
let phoneNumberInput = document.getElementById("phoneNumberInput");
let email1Input = document.getElementById("email1");
let signUpEndBtn = document.getElementById("signUpEndBtn");

function nextPage() {
    window.location.href = '../page4/miniproject_page4.html';
}

signUpEndBtn.addEventListener("click", () => {
    if (idInput.value === "") {
        alert("아이디를 입력해주세요.");
    } else if (passwordInput.value === "") {
        alert("비밀번호를 입력해주세요.");
    } else if (passwordCheckInput.value === "") {
        alert("비밀번호가 확인되지 않았습니다.");
    } else if (passwordCheckInput.value !== passwordInput.value) {
        alert("비밀번호가 동일하지 않습니다.");
    } else if (nickInput.value === "") {
        alert("사용하실 닉네임을 만들어주세요.");
    } else if (phoneNumberInput.value === "") {
        alert("전화번호를 입력해주세요.");
    } else if (!/^\d+$/.test(phoneNumberInput.value)) {
        alert("전화번호 형식이 올바르지 않습니다.");
    } else if (email1Input.value === "") {
        alert("이메일을 입력해주세요.");
    } else {
        const id = idInput.value;
        const password = passwordInput.value;
        const nick = nickInput.value;
        const phoneNumber = phoneNumberInput.value;
        const email1 = email1Input.value;
        const email2 = document.getElementById('email2').value
        const email = email1 + "@" + email2;

        window.localStorage.setItem("id", id);
        window.localStorage.setItem("password", password);
        window.localStorage.setItem("nick", nick);
        window.localStorage.setItem("phoneNumber", phoneNumber);
        window.localStorage.setItem("email", email);

        // writeUserData(id, password, nick, phoneNumber, email);
        nextPage();
    }
});