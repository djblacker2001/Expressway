// Dữ liệu tuyến đường cao tốc bắc nam phía đông
const newsData1 = [

    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Quy_Nh%C6%A1n_%E2%80%93_Ch%C3%AD_Th%E1%BA%A1nh",
        name: "Đường cao tốc Quy Nhơn – Chí Thạnh",
        image: "tuyenduong/QuyNhonChiThanh.png",
        length: "68,32 km",
        start: "Nút giao Quy Nhơn",
        end: "Chí Thạnh",
    },
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
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_M%E1%BB%B9_Thu%E1%BA%ADn_%E2%80%93_C%E1%BA%A7n_Th%C6%A1",
        name: "Đường cao tốc Mỹ Thuận – Cần Thơ",
        image: "tuyenduong/MyThuanCanTho.png",
        length: "23,6 km",
        start: "Nút giao Tân Hòa",
        end: "Nút giao Chà Và",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_C%E1%BA%A7n_Th%C6%A1_%E2%80%93_C%C3%A0_Mau",
        name: "Đường cao tốc Cần Thơ – Cà Mau",
        image: "tuyenduong/CanThoCaMau.png",    
        length: "110.9 km",
        start: "Nút giao Quốc Lộ 91B",
        end: "Nút giao Cà Mau",
    }
];

// Dữ liệu tuyến đường cao tốc bắc nam phía tây
newsData2 = [
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Tuy%C3%AAn_Quang_%E2%80%93_Ph%C3%BA_Th%E1%BB%8D",
        name: "Đường cao tốc Tuyên Quang – Phú Thọ",
        image: "tuyenduong/TuyenQuangPhuTho.png",    
        length: "40,2 km",
        start: "Nút giao Lưỡng Vượng",
        end: "Nút giao Phú Thọ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Gia_Ngh%C4%A9a_%E2%80%93_Ch%C6%A1n_Th%C3%A0nh",
        name: "Đường cao tốc Gia Nghĩa – Chơn Thành",
        image: "tuyenduong/GiaNghiaChonThanh.png",    
        length: "128,8 km",
        start: "Nút giao Nhân Cơ",
        end: "Nút giao Chơn Thành",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ch%C6%A1n_Th%C3%A0nh_%E2%80%93_%C4%90%E1%BB%A9c_H%C3%B2a",
        name: "Đường cao tốc Chơn Thành – Đức Hòa",
        image: "tuyenduong/ChonThanhDucHoa.png",    
        length: "82,75 km",
        start: "Nút giao Chơn Thành",
        end: "Nút giao Đức Hòa",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_M%E1%BB%B9_An_%E2%80%93_Cao_L%C3%A3nh",
        name: "Đường cao tốc Mỹ An – Cao Lãnh",
        image: "tuyenduong/MyAnCaoLanh.png",    
        length: "26 km",
        start: "Nút giao Mỹ An",
        end: "Nút giao An Bình",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Cao_L%C3%A3nh_%E2%80%93_V%C3%A0m_C%E1%BB%91ng",
        name: "Đường cao tốc Cao Lãnh – Lộ Tẻ",
        image: "tuyenduong/CaoLanhVamCong.png",
        length: "29 km",
        start: "Nút giao An Bình",
        end: "Nút giao Lô Tẻ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_L%E1%BB%99_T%E1%BA%BB_%E2%80%93_R%E1%BA%A1ch_S%E1%BB%8Fi",
        name: "Đường cao tốc Lộ Tẻ – Rạch Sỏi",
        image: "tuyenduong/LoTeRachSoi.png",    
        length: "51 km",
        start: "Nút giao Lộ Tẻ",
        end: "Nút giao Rạch Sỏi",
    },

];

// Dữ liệu một số tuyến đường cao tốc khác
newsData3 = [
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%C3%A0_N%E1%BB%99i_%E2%80%93_H%C3%B2a_B%C3%ACnh_%E2%80%93_S%C6%A1n_La_%E2%80%93_%C4%90i%E1%BB%87n_Bi%C3%AAn",
        name: "Đường cao tốc Hà Nội – Hòa Bình – Sơn La – Điện Biên",
        image: "tuyenduong/DaiLoThangLong.png",    
        length: "445 km",
        start: "Nút giao Trung Hòa",
        end: "Nút giao Phiêng Luông",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%C3%A0_N%E1%BB%99i_%E2%80%93_H%E1%BA%A3i_Ph%C3%B2ng",
        name: "Đường cao tốc Hà Nội – Hải Phòng",
        image: "tuyenduong/HanoiHaiPhong.png",    
        length: "105,5 km",
        start: "Nút giao Cổ Linh",
        end: "Nút giao Đình Vũ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_N%E1%BB%99i_B%C3%A0i_%E2%80%93_L%C3%A0o_Cai",
        name: "Đường cao tốc Nội Bài – Lào Cai",
        image: "tuyenduong/NoiBaiLaoCai.png",    
        length: "265 km",
        start: "Nút giao Nội Bài",
        end: "Nút giao Kim Thành",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%E1%BA%A3i_Ph%C3%B2ng_%E2%80%93_H%E1%BA%A1_Long_%E2%80%93_V%C3%A2n_%C4%90%E1%BB%93n_%E2%80%93_M%C3%B3ng_C%C3%A1i",
        name: "Đường cao tốc Hải Phòng – Móng Cái",
        image: "tuyenduong/HaiPhongMongCai.png",    
        length: "176 km",
        start: "Nút giao Cầu Bạch Đằng",
        end: "Nút giao Móng Cái",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%C3%A0_N%E1%BB%99i_%E2%80%93_Th%C3%A1i_Nguy%C3%AAn_%E2%80%93_B%E1%BA%AFc_K%E1%BA%A1n_%E2%80%93_Cao_B%E1%BA%B1ng",
        name: "Đường cao tốc Hà Nội – Thái Nguyên",
        image: "tuyenduong/HanoiThaiNguyen.png",    
        length: "227 km",
        start: "Nút giao Ninh Hiệp",
        end: "Nút giao Bắc Kạn",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ninh_B%C3%ACnh_%E2%80%93_H%E1%BA%A3i_Ph%C3%B2ng",
        name: "Đường cao tốc Ninh Bình – Hải Phòng",
        image: "tuyenduong/NinhBinhHaiPhong.png",    
        length: "109 km",
        start: "Nút giao Mai Sơn",
        end: "Nút giao CT.04",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_N%E1%BB%99i_B%C3%A0i_%E2%80%93_B%E1%BA%AFc_Ninh_%E2%80%93_H%E1%BA%A1_Long",
        name: "Đường cao tốc Nội Bài – Bắc Ninh – Hạ Long",
        image: "tuyenduong/NoiBaiBacNinhHaLong.png",    
        length: "146 km",
        start: "Nút giao Nội Bài",
        end: "Nút giao Khả Lễ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ti%C3%AAn_Y%C3%AAn_%E2%80%93_L%E1%BA%A1ng_S%C6%A1n_%E2%80%93_Cao_B%E1%BA%B1ng",
        name: "Đường cao tốc Tiên Yên – Lạng Sơn – Cao Bằng",
        image: "tuyenduong/TienYenLangSonCaoBang.png",    
        length: "215 km",
        start: "Nút giao Tân Thanh",
        end: "Nút giao Trà Lĩnh",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Y%C3%AAn_B%C3%A1i_%E2%80%93_H%C3%A0_Giang",
        name: "Đường cao tốc Yên Bái – Hà Giang",
        image: "tuyenduong/YenBaiHaGiang.png",    
        length: "81 km",
        start: "Nút giao Mậu A",
        end: "Nút giao Việt Vinh",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ch%E1%BB%A3_B%E1%BA%BFn_%E2%80%93_Y%C3%AAn_M%E1%BB%B9",
        name: "Đường cao tốc Chợ Bến – Yên Mỹ",
        image: "tuyenduong/ChoBenYenMy.png",    
        length: "60 km",
        start: "Nút giao Chợ Bến",
        end: "Nút giao Yên Mỹ",
    }

];

// Hiển thị dữ liệu tuyến đường cao tốc bắc nam phía đông
const container1 = document.getElementById("easternID");
newsData1.forEach(news => {
container1.innerHTML += `
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

// Hiển thị dữ liệu tuyến đường cao tốc bắc nam phía tây
const container2 = document.getElementById("westernID");
newsData2.forEach(news => {
container2.innerHTML += `
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

//Hiển thị dữ liệu một số tuyến đường cao tốc khác
const container3 = document.getElementById("differentID");
newsData3.forEach(news => {
container3.innerHTML += `
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