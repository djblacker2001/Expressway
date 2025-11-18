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
        link: "https://plo.vn/tai-sao-cao-toc-lien-khuong-prenn-tiem-an-mat-an-toan-giao-thong-post881571.html",
        image: "https://image.plo.vn/w2000/Uploaded/2025/slaohuo/2025_11_16/prenn-lien-khuong-5046-5489.jpg.webp",
        name: "Cao tốc Liên Khương - Prenn tiềm ẩn mất an toàn giao thông",
        content: "Do đường gom dân sinh 2 bên chưa hoàn thiện nên người dân thường xuyên băng qua cao tốc Liên Khương-Prenn (Lâm Đồng), tiềm ẩn nguy cơ cao mất an toàn giao thông.",
    },
    {
        link: "https://nld.com.vn/tay-ninh-khan-truong-giai-phong-mat-bang-du-an-duong-cao-toc-tphcm-moc-bai-196251116104645392.htm",
        image: "https://nld.mediacdn.vn/291774122806476800/2025/11/16/tay-ninh-17632644779401287959134.jpg",
        name: "Tây Ninh khẩn trương giải phóng mặt bằng dự án đường cao tốc TPHCM – Mộc Bài",
        content: "Theo kế hoạch, dự án đường cao tốc TPHCM – Mộc Bài sẽ hoàn thành toàn tuyến để đưa vào khai thác vào năm 2027",
    },
    {
        link: "https://vnexpress.net/dong-mot-phan-cao-toc-tp-hcm-long-thanh-trong-30-ngay-4914847.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/07/16/z6808756573514-b05d16c3cea3b8c-5110-7186-1752634929.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=UF5OiHYugpV4kHZ3X9XNpQ",
        name: "Đóng một phần cao tốc TP HCM - Long Thành trong 30 ngày",
        content: "Để sửa khe co giãn trên cầu Long Thành và hệ thống ITS, nhiều vị trí trên cao tốc dài 55 km nối TP HCM - Đồng Nai bị rào chắn một tháng, xe phải hạn chế tốc độ.",
    },
    {
        link: "https://tienphong.vn/xe-cho-thu-bao-boc-chay-du-doi-tren-cao-toc-van-phong-nha-trang-post1796018.tpo",
        image: "https://cdn.tienphong.vn/images/d0f1655467826b56c655fc988e562cf345619d64e27c6bbf1ac802fe1281088ae9e47686ba0ed51dfb123c7d9de83c3891c395aaa9493e5cdaf349cad3d4a15e/thubao-2.jpg",
        name: "Xe chở thư báo bốc cháy dữ dội trên cao tốc Vân Phong - Nha Trang",
        content: "Xe tải chuyên chở thư báo bất ngờ bốc cháy dữ dội khi đang lưu thông trên cao tốc Vân Phong - Nha Trang, hàng hóa bên trong bị thiêu rụi hoàn toàn.",
    },
    {
        link: "https://laodong.vn/xa-hoi/cao-toc-20400-ti-dong-tang-toc-ve-dich-hoan-thanh-vao-19122025-1608614.ldo",
        image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2025/11/13/1608614/176863423_715394998_.jpg?w=660",
        name: "Cao tốc 20.400 tỉ đồng tăng tốc về đích, hoàn thành vào 19.12.2025",
        content: "Cao tốc Quảng Ngãi - Hoài Nhơn đang tăng tốc về đích, phấn đấu hoàn thành toàn tuyến vào ngày 19.12.2025 theo chỉ đạo của Thủ tướng Chính phủ.",
    },
    {
        link: "https://baoxaydung.vn/quyet-dua-cao-toc-hoai-nhon-quy-nhon-can-dich-vao-giua-thang-12-192251014164923434.htm",
        image: "https://baogiaothong.mediacdn.vn/603483875699699712/2025/10/14/z6878216702667acc093c1f80fbc80363b807fbc9abe3b-1760435273886626258253.jpg",
        name: "Quyết đưa cao tốc Hoài Nhơn - Quy Nhơn cán đích vào giữa tháng 12 năm 2025",
        content: "Một trong hai gói thầu của cao tốc Hoài Nhơn - Quy Nhơn đã hoàn thành, hiện nhà thầu thi công đang nỗ lực đưa gói thầu còn lại thông xe và về đích đúng tiến độ đề ra.",
    },
    {
        link: "",
        image: "",
        name: "",
        content: "",
    },
];

const newsData2 = [
    {
        link:"https://www.dothanhauto.com/quy-chuan-moi-duong-cao-toc-phai-co-toi-thieu-4-lan-xe",
        image:"https://www.dothanhauto.com/upload/images/quy-chuan-moi-duong-cao-toc-phai-co-toi-thieu-4-lan-xe%20(1).png",
        title:"Quy chuẩn mới: Đường cao tốc phải có tối thiểu 4 làn xe",
    },
    {
        link:"https://tapchixaydung.vn/danh-gia-hieu-qua-khai-thac-cac-tuyenduong-bo-cao-toc-tai-viet-nam-20201224000026409.html",
        image:"https://media.tapchixaydung.vn/mediav2/upload/userfiles2021/images/nguyencuong/09.2024/dien-tu/le-khanh-linh1_18102024110345_135.jpg",
        title:"Đánh giá hiệu quả khai thác các tuyến đường bộ cao tốc tại Việt Nam",
    },
    {
        link:"https://tuoitre.vn/ly-do-nut-giao-dung-quat-noi-cao-toc-da-nang-quang-ngai-chua-hoan-thanh-20241014172647539.htm",
        image:"https://cdn2.tuoitre.vn/471584752817336320/2024/10/14/nut-giao-dung-quat-17289009460141652960970.png",
        title:"Lý do nút giao Dung Quất nối cao tốc Đà Nẵng - Quảng Ngãi chưa hoàn thành",
    },
    {
        link:"https://laodong.vn/xa-hoi/chay-dua-hoan-thien-ha-tang-ket-noi-san-bay-long-thanh-1595238.ldo",
        image:"https://media-cdn-v2.laodong.vn/storage/newsportal/2025/10/20/1595238/Long-Thanh-6.jpg?w=660",
        title:"Chạy đua hoàn thiện hạ tầng kết nối sân bay Long Thành",
    },
    {
        link:"",
        image:"",
        title:"",
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
const container2 = document.getElementById("viewID");
newsData2.forEach(news => {
container2.innerHTML += `
    <a href="${news.link}">
        <article class="viewer">
            <div class="row">
                <div class="col-md-4 align-self-center">
                    <img src="${news.image}" alt="">
                </div>
                <div class="col-md-8">
                    ${news.title}
                </div>
            </div>
        </article>
    </a>
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