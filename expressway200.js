
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

// Dữ liệu tuyến đường cao tốc
const newsData = [
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ch%C3%AD_Th%E1%BA%A1nh_%E2%80%93_V%C3%A2n_Phong",
        name: "Đường cao tốc Chí Thạnh – Vân Phong",
        image: "tuyenduong/ChiThanhVanPhong.png",
        length: "48 km",
        start: "Chí Thạnh",
        end: "Nút giao Hảo Sơn",
        
    },
    {
        link: "https://vi.wikipedia.org/wiki/H%E1%BA%A7m_%C4%91%C6%B0%E1%BB%9Dng_b%E1%BB%99_%C4%90%C3%A8o_C%E1%BA%A3",
        name: "Hầm đường bộ Đèo Cả",
        image: "tuyenduong/HamDeoCa.png",    
        length: "13,5 km",
        start: "Nut giao Hảo Sơn",
        end: "Nút giao Vân Phong",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_V%C3%A2n_Phong_%E2%80%93_Nha_Trang",
        name: "Đường cao tốc Vân Phong – Nha Trang",
        image: "tuyenduong/VanPhongNhaTrang.png",    
        length: "83 km",
        start: "Nút giao Vân Phong",
        end: "Nút giao Diên Thọ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Nha_Trang_%E2%80%93_Cam_L%C3%A2m",
        name: "Đường cao tốc Nha Trang – Cam Lâm",
        image: "tuyenduong/NhaTrangCamLam.png",    
        length: "49,11 km",
        start: "Nút giao Diên Thọ",
        end: "Nút giao Cam Lâm",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Cam_L%C3%A2m_%E2%80%93_V%C4%A9nh_H%E1%BA%A3o",
        name: "Đường cao tốc Cam Lâm – Vĩnh Hảo",
        image: "tuyenduong/CamLamVinhHao.png",    
        length: "78,5 km",
        start: "Nút giao Cam Lâm",
        end: "Nút giao Vĩnh Hảo",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_V%C4%A9nh_H%E1%BA%A3o_%E2%80%93_Phan_Thi%E1%BA%BFt",
        name: "Đường cao tốc Vĩnh Hảo – Phan Thiết",
        image: "tuyenduong/VinhHaoPhanThiet.png",    
        length: "100,8 km",
        start: "Nút giao Vĩnh Hảo",
        end: "Nút giao Ba Bàu",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Phan_Thi%E1%BA%BFt_%E2%80%93_D%E1%BA%A7u_Gi%C3%A2y",
        name: "Đường cao tốc Phan Thiết – Dầu Giây",
        image: "tuyenduong/PhanThietDauGiay.png",    
        length: "99,2 km",
        start: "Nút giao Ba Bàu",
        end: "Nút giao Cẩm Mỹ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_B%E1%BA%BFn_L%E1%BB%A9c_%E2%80%93_Long_Th%C3%A0nh",
        name: "Đường cao tốc Bến Lức – Long Thành",
        image: "tuyenduong/BenLucLongThanh.png",    
        length: "57,09 km",
        start: "Nút giao Mỹ Yên",
        end: "Nút giao Tân Hiệp",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh_%E2%80%93_Trung_L%C6%B0%C6%A1ng",
        name: "Đường cao tốc Thành phố Hồ Chí Minh – Trung Lương",
        image: "tuyenduong/TPHCMTrungLuong.png",    
        length: "41 km (tuyến chính) 20,9 km (tuyến nối)",
        start: "Nút giao Chợ Đệm",
        end: "Nút giao Thân Cửu Nghĩa",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Trung_L%C6%B0%C6%A1ng_%E2%80%93_M%E1%BB%B9_Thu%E1%BA%ADn",
        name: "Đường cao tốc Trung Lương – Mỹ Thuận",
        image: "tuyenduong/TrungLuongMyThuan.png",    
        length: "51,5 km",
        start: "Nút giao Thân Cửu Nghĩa",
        end: "Nút giao An Thái Trung",
    }
];

const container = document.getElementById("easternID");
newsData.forEach(news => {
container.innerHTML += `
    <div class="col-md-3">
        <a href="${news.link}">
            <article class="expresswayList">
                <img src="${news.image}">
                <div class="container">
                    <b>${news.name}</b>
                    <ul>
                        <li>Chiều dài: ${news.length}</li>
                        <li>Điểm đầu: ${news.start}</li>
                        <li>Điểm cuối: ${news.end}</li>
                    </ul>
                </div>
            </article>
        </a>
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
