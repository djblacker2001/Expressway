//Hiển thị dữ liệu tin tức xem mới nhất
const newsData1 = [
    {
        link: "https://vnexpress.net/dieu-chinh-toc-do-tren-cao-toc-tp-hcm-long-thanh-dau-giay-4957746.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/10/30/z4304395212480-c407985f271aba6-3190-7513-1761798097.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=VET7N4ci-qeJMbEE3xVvPA",
        name: "Điều chỉnh tốc độ trên cao tốc TP HCM - Long Thành - Dầu Giây",
        content: "Cao tốc nối TP HCM với Đồng Nai được điều chỉnh tốc độ tối thiểu lên 80 km/h, đồng thời cấm ôtô tải trên 7,5 tấn, xe khách trên 29 chỗ chạy làn sát dải phân cách, từ 10/11."
    },
    {
        link: "https://thanhnien.vn/khoi-cong-cao-toc-my-an-cao-lanh-hon-6000-ti-dong-185250726111423878.htm",
        image: "https://images2.thanhnien.vn/528068263637045248/2025/7/26/dsc01354-1753502748239646989526.jpg",
        name: "Khởi công cao tốc Mỹ An - Cao Lãnh hơn 6.000 tỉ đồng",
        content: "Dự án cao tốc Mỹ An - Cao Lãnh sẽ rút ngắn thời gian di chuyển, hình thành trục giao thông huyết mạch nối ĐBSCL với TP.HCM và các vùng kinh tế trọng điểm phía nam.",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
];

//Hiển thị dữ liệu tin tức mới nhất
const container1 = document.getElementById("nearlyID");
newsData1.forEach(news => {
container1.innerHTML += `
    <a href="${news.link}">
        <div class="row p-3">
            <div class="col-4 align-self-center">
                <img src="${news.image}" alt="">
            </div>
            <div class="col-8 align-self-center">
                <b>${news.name}</b>
                <p>${news.content}</p>
            </div>
        </div>
    </a>
  `;
});

// //Dữ liệu tin tức xem nhiều nhất
// const container2 = document.getElementById("viewID");
// newsData2.forEach(news => {
// container2.innerHTML += `
//     <a href="${news.link}">
//         <article class="nearly">
//             <div class="row">
//                 <div class="col-md-4 align-self-center">
//                     <img src="${news.image}" alt="">
//                 </div>
//                 <div class="col-md-8">
//                     ${news.content}
//                 </div>
//             </div>
//         </article>
//     </a>
//   `;
// });

// Hiển thị năm hiện tại
document.getElementById("year").textContent = new Date().getFullYear();

// Hiệu ứng thay đổi header khi cuộn trang
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#mainHeader").addClass("scrolled");
        } else {
            $("#mainHeader").removeClass("scrolled");
        }
    });
});

//Hiệu ứng hiện trang web khi tải xong
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const navCollapse = document.getElementById('mainNavbar');
navCollapse.addEventListener('hidden.bs.collapse', () => {
    iconBars.classList.remove('d-none');
    iconXmark.classList.add('d-none');
});

//Hiệu ứng nút go to top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".goTopBtn").fadeIn();
        } else {
            $(".goTopBtn").fadeOut();
        }
    });

    $(".goTopBtn").click(function() {
        $("html, body").animate({scrollTop:0}, 0);
        return false;
    });
});