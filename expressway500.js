//Dữ liệu nhà đầu tư
const newsData1 = [
    {
        hone: "https://www.duongcaotoc.com.vn/",
        image: "https://www.duongcaotoc.com.vn/images/LOGO%20VEC38.jpg",
        name: "TỔNG CÔNG TY ĐẦU TƯ PHÁT TRIỂN ĐƯỜNG CAO TỐC VIỆT NAM (VEC)",
        content: "Đầu tư, quản lý và vận hành nhiều tuyến cao tốc trọng điểm.",
        location: "Tầng 2, 3, 4, 5 tòa nhà Central Point, số 219 phố Trung Kính, phường Yên Hòa, quận Cầu Giấy, thành phố Hà Nội",
        phone: "024 3643 0266",
        email: "duongcaotoc@tctvec.vn",
        contact: "https://www.duongcaotoc.com.vn/lien-he/"
    },
    {
        hone: "https://deoca.vn/",
        image: "https://deoca.vn/file/baiviet/05.11.2021/1637807543-dcg-logo%20(new)-01.png",
        name: "TẬP ĐOÀN ĐÈO CẢ",
        content: "Nhà đầu tư Hạ tầng giao thông hàng đầu Việt Nam",
        location: "32 Thạch Thị Thanh, phường Tân Định, TP. Hồ Chí Minh",
        phone: "028 3820 3388",
        email: "info@deoca.vn",
        contact: "https://deoca.vn/lien-he.html"
    },
    {
        hone: "tapdoansonhai.vn",
        image: "tapdoansonhai.png",
        name: "TẬP ĐOÀN SƠN HẢI",
        content: "Nhà thầu công trình hạ tầng duy nhất tại Việt Nam có cam kết bảo hành chất lượng từ 5 đến 10 năm tại các công trình thi công.",
        location: "117 Đường Hữu Nghị, phường Đồng Hới, Quang Tri",
        phone: "0232 3825 755",
        email: "tuyendung@sonhaigroup.vn - tapdoansonhai.vnn@gmail.com",
        contact: "https://deoca.vn/lien-he.html"
    },
    
];

//Hiển thị dữ liệu các nhà đầu tư
const container1 = document.getElementById("investorID");
newsData1.forEach(news => {
container1.innerHTML += `
    <div class="row investor">
        <div class="col-md-2 align-self-center">
            <a href="${news.home}"><img src="${news.image}" alt=""></a>
        </div>
        <div class="col-md-10 align-self-center">
            <h4><b>${news.name}</b></h4>
            <p>${news.content}</p>
            <p><i class="fa-solid fa-location-dot"></i>${news.location}</p>
            <p><i class="fa-solid fa-phone"></i>${news.phone}</p>
            <p><i class="fa-solid fa-envelope"></i>${news.email}</p>
            <button type="submit" class="btn btn-success contact" onclick="window.location.href='${news.contact}'">Liên hệ</button>
        </div>
    </div>
  `;
});

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