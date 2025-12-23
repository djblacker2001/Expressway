//Hiển thị dữ liệu tin tức xem mới nhất
const newsData1 = [
    {
        link: "https://congthuong.vn/kien-nghi-khac-phuc-nhung-ton-tai-tren-cao-toc-van-phong-nha-trang-436179.html",
        image: "https://cdn-i2.congthuong.vn/resize/th/upload/2025/12/23/cao-toc-nha-trang-van-phong-11480036.jpg",
        name: "Kiến nghị khắc phục những tồn tại trên cao tốc Vân Phong - Nha Trang",
        content: "Cục Cảnh sát giao thông phối hợp Cục Đường bộ Việt Nam xác định 17 tồn tại, bất hợp lý trên cao tốc Vân Phong - Nha Trang, tiềm ẩn nguy cơ mất an toàn giao thông.",
    },
    {
        link: "https://doanhnhansaigon.vn/cao-toc-vinh-hao-phan-thiet-hoan-thien-he-thong-camera-va-tram-can-tai-trong-331179.html",
        image: "https://dnsg.1cdn.vn/2025/12/23/cao-toc-1-.jpg",
        name: "Cao tốc Vĩnh Hảo - Phan Thiết hoàn thiện hệ thống camera và trạm cân tải trọng",
        content: "Ngày 23/12, ông Nguyễn Khắc Việt - Giám đốc điều hành Dự án cao tốc Vĩnh Hảo - Phan Thiết, cho biết công tác lắp đặt hệ thống giám sát giao thông thông minh và trạm cân tải trọng tại các lối vào tuyến cao tốc đã cơ bản hoàn thành, sẵn sàng phục vụ công tác quản lý, khai thác an toàn trong thời gian tới.",
    },
    {
        link: "https://vnexpress.net/cho-oto-vao-cao-toc-can-tho-hau-giang-tu-sang-22-12-4996495.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/12/21/cao-toc-ct-hg-moi-1766305164-5-5104-5522-1766307619.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=B0Tbk84UpSrkK_Jm_FtbqQ",
        name: "Cho ôtô vào cao tốc Cần Thơ - Hậu Giang từ sáng 22/12",
        content: "9h ngày 22 tháng 12, ôtô được chạy trên gần 38 km cao tốc Cần Thơ – Hậu Giang với tốc độ 60–80 km/h.",
    },
    {
        link: "https://vnexpress.net/khoi-cong-cao-toc-14-400-ty-ket-noi-tp-hcm-da-lat-4995984.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/12/19/z7342345596452-21a64f63f067351-5935-5208-1766141281.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ViRSe5zYiO8ZQaQuFX6DdA",
        name: "Khởi công cao tốc 14.400 tỷ kết nối TP HCM - Đà Lạt",
        content: "Cao tốc Tân Phú - Bảo Lộc dài 66 km khởi công 19/12, hoàn thành cuối năm 2027, rút ngắn thời gian di chuyển từ TP HCM lên Đà Lạt còn khoảng 3 giờ.",
    },
    {
        link: "https://baodautu.vn/hue-khoi-cong-du-an-mo-rong-cao-toc-bac---nam-doan-cam-lo---la-son-d464353.html",
        image: "https://media.baodautu.vn/Images/phamthanh/2025/12/19/Cac_i_biu_bm_nut_khi_cong.jpg",
        name: "Khởi công Dự án mở rộng cao tốc Bắc - Nam đoạn Cam Lộ - La Sơn",
        content: "Ngày 19/12, tại TP. Huế, Bộ Xây dựng phối hợp với UBND TP. Huế và UBND tỉnh Quảng Trị tổ chức lễ khởi công Dự án đầu tư xây dựng mở rộng đường bộ cao tốc Bắc - Nam phía Đông đoạn Cam Lộ - La Sơn.",
    },
    {
        link: "https://baodautu.vn/khanh-thanh-cau-day-vang-binh-khanh-tren-tuyen-cao-toc-ben-luc---long-thanh-d463932.html",
        image: "https://media.baodautu.vn/Images/anhquan/2025/12/19/cau%20binh%20khanh.jpg",
        name: "Khánh thành cầu dây văng Bình Khánh trên tuyến cao tốc Bến Lức - Long Thành",
        content: "Sáng 19/12, tại xã Bình Khánh, TP.HCM, Tổng công ty Đầu tư phát triển đường cao tốc Việt Nam (VEC) khánh thành cầu Bình Khánh nằm trên tuyến cao tốc Bến Lức - Long Thành.",
    },
    {
        link: "https://thanhnien.vn/khanh-thanh-cao-toc-quang-ngai-hoai-nhon-20400-ti-dong-18525121915555343.htm",
        image: "https://images2.thanhnien.vn/528068263637045248/2025/12/19/z7342753569867ba2d03da149ec3670cbc955bf63b1050-1766134109849584636103.jpg",
        name: "Khánh thành cao tốc Quảng Ngãi - Hoài Nhơn",
        content: "Sau hơn 1.000 ngày thi công, dự án đường bộ cao tốc Quảng Ngãi - Hoài Nhơn có tổng mức đầu tư hơn 20.400 tỉ đồng chính thức hoàn thành.",
    },
    {
        link: "https://baokhanhhoa.vn/chinh-tri/202512/thongxeky-thuat-20km-dau-tuyen-duong-bo-cao-toc-khanh-hoa-buon-ma-thuot-7e90b2e/",
        image: "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/122025/7_20251219121732_20251219124201.webp",
        name: "Thông xe kỹ thuật 20km đầu tuyến đường bộ cao tốc Khánh Hòa - Buôn Ma Thuột",
        content: "Sáng 19-12, tại công trình đường bộ cao tốc Khánh Hòa - Buôn Ma Thuột, UBND tỉnh Khánh Hòa tổ chức lễ thông xe kỹ thuật 20km đầu tuyến của công trình này.",
    },
    {
        link: "https://baomoi.com/mo-rong-cao-toc-tphcm-trung-luong-my-thuan-hon-36-000-ty-dong-c54050219.epi",
        image: "https://photo-baomoi.bmcdn.me/w700_r1/2025_12_19_20_54050219/755a0432ec7b05255c6a.jpg.avif",
        name: "Mở rộng cao tốc TPHCM - Trung Lương - Mỹ Thuận",
        content: "Ngày 19/12, cùng cả nước, Bộ Xây dựng phối hợp cùng tỉnh Đồng Tháp, liên danh nhà đầu tư tổ chức Lễ khởi công Dự án mở rộng đường cao tốc TPHCM - Trung Lương - Mỹ Thuận theo hình thức BOT, tổng vốn đầu tư hơn 36.000 tỷ đồng.",
    },
    {
        link: "https://vnexpress.net/cao-toc-dau-tien-khong-co-barie-o-loi-vao-thu-phi-4666404.html",
        image: "https://i1-vnexpress.vnecdn.net/2023/10/19/xombong-11-3593-1697628671-169-6473-5485-1697686993.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=bYwtR-HbnFosVoL-5GAnGA",
        name: "Cao tốc đầu tiên không có barie ở lối vào thu phí",
        content: "Cao tốc Nha Trang - Cam Lâm được Bộ Giao thông Vận tải thí điểm thu phí không dừng bỏ barie và cabin ở lối vào, giúp xe chạy qua nhanh hơn, hạn chế ùn tắc.",
    },
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
    // {
    //     link: "",
    //     image: "",
    //     name: "",
    //     content: "",
    // },
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
        link:"https://laodong.vn/xa-hoi/de-nghi-phan-lan-thay-doi-toc-do-xe-chay-tren-8-doan-tuyen-cao-toc-1577646.ldo",
        image:"https://media-cdn-v2.laodong.vn/storage/newsportal/2025/9/20/1577646/Phan-Lan-Gt1.jpg?w=660",
        title:"Đề nghị phân làn, thay đổi tốc độ xe chạy trên 8 đoạn tuyến cao tốc",
    },
];

//Hiển thị dữ liệu tin tức mới nhất
const container1 = document.getElementById("nearlyID");
const loadMoreBtn = document.getElementById("loadMoreNearly");

let itemsPerLoad = 5;
let currentIndex = 0;

function renderNews() {
    const nextItems = newsData1.slice(currentIndex, currentIndex + itemsPerLoad);

    nextItems.forEach(news => {
        container1.innerHTML += `
            <a href="${news.link}" target="_blank" class="text-decoration-none text-dark">
                <div class="row p-3 border-bottom">
                    <div class="col-4 align-self-center">
                        <img src="${news.image}" alt="" class="img-fluid rounded">
                    </div>
                    <div class="col-8 align-self-center">
                        <b>${news.name}</b>
                        <p class="mb-0 small">${news.content}</p>
                    </div>
                </div>
            </a>
        `;
    });

    currentIndex += itemsPerLoad;

    // Hết tin thì ẩn nút
    if (currentIndex >= newsData1.length) {
        loadMoreBtn.style.display = "none";
    }
}
// Load lần đầu
renderNews();

// Click xem thêm
loadMoreBtn.addEventListener("click", renderNews);


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