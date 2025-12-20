// Dữ liệu tuyến đường cao tốc bắc nam phía đông
const newsData1 = [
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_B%E1%BA%AFc_Giang_%E2%80%93_L%E1%BA%A1ng_S%C6%A1n",
        name: "Đường cao tốc Bắc Giang – Lạng Sơn",
        image: "tuyenduong/BacGiangLangSon.png",
        length: "107 km",
        start: "Nút giao Cửa khẩu Hữu Nghị",
        end: "Nút giao Dĩnh Trì",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%C3%A0_N%E1%BB%99i_%E2%80%93_B%E1%BA%AFc_Giang",
        name: "Đường cao tốc Hà Nội – Bắc Giang",
        image: "tuyenduong/HaNoiBacGiang.png",
        length: "48.6 km",
        start: "Nút giao Dĩnh Trì",
        end: "Cầu Phù Đổng"
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ph%C3%A1p_V%C3%A2n_%E2%80%93_C%E1%BA%A7u_Gi%E1%BA%BD",
        name: "Đường cao tốc Pháp Vân – Cầu Giẽ",
        image: "tuyenduong/PhapVanCauGie.png",
        length: "32,3 km",
        start: "Nút giao Pháp Vân",
        end: "Nút giao Đại Xuyên",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_C%E1%BA%A7u_Gi%E1%BA%BD_%E2%80%93_Ninh_B%C3%ACnh",
        name: "Đường cao tốc Cầu Giẽ – Ninh Bình",
        image: "tuyenduong/CauGieNinhBinh.png",
        length: "50,3 km",
        start: "Nút giao Đại Xuyên",
        end: "Nút giao Cao Bồ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Cao_B%E1%BB%93_%E2%80%93_Mai_S%C6%A1n",
        name: "Đường cao tốc Cao Bồ – Mai Sơn",
        image: "tuyenduong/CaoBoMaiSon.png",
        length: "15 km",
        start: "Nút giao Cao Bồ",
        end: "Nút giao Mai Sơn",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Mai_S%C6%A1n_%E2%80%93_Qu%E1%BB%91c_l%E1%BB%99_45",
        name: "Đường cao tốc Mai Sơn – Quốc lộ 45",
        image: "tuyenduong/MaiSonQuocLo45.png",
        length: "63,37 km",
        start: "Nút giao Mai Sơn",
        end: "Nút giao Đồng Thắng",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Qu%E1%BB%91c_l%E1%BB%99_45_%E2%80%93_Nghi_S%C6%A1n",
        name: "Đường cao tốc Quốc lộ 45 – Nghi Sơn",
        image: "tuyenduong/QuocLo45NghiSon.png",
        length: "43,28 km",
        start: "Nút giao Đồng Thắng",
        end: "Nút giao Nghi Sơn",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Nghi_S%C6%A1n_%E2%80%93_Di%E1%BB%85n_Ch%C3%A2u",
        name: "Đường cao tốc Nghi Sơn – Diễn Châu",
        image: "tuyenduong/NghiSonDienChau.png",
        length: "50,2 km",
        start: "Nút giao Nghi Sơn",
        end: "Nút giao Diễn Cát",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Di%E1%BB%85n_Ch%C3%A2u_%E2%80%93_B%C3%A3i_V%E1%BB%8Dt",
        name: "Đường cao tốc Diễn Châu – Bãi Vọt",
        image: "tuyenduong/DienChauBaiVot.png",
        length: "49 km",
        start: "Nút giao Diễn Cát",
        end: "Nút giao Bãi Vọt",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_B%C3%A3i_V%E1%BB%8Dt_%E2%80%93_H%C3%A0m_Nghi",
        name: "Đường cao tốc Bãi Vọt – Hàm Nghi",
        image: "tuyenduong/BaiVotHamNghi.png",
        length: "35,28 km",
        start: "Nút giao Bãi Vọt",
        end: "Hàm Nghi",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%C3%A0m_Nghi_%E2%80%93_V%C5%A9ng_%C3%81ng",
        name: "Đường cao tốc Hàm Nghi – Vũng Áng",
        image: "tuyenduong/HamNghiVungAng.png",
        length: "53 km",
        start: "Hàm Nghi",
        end: "Nút giao Vũng Áng",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_V%C5%A9ng_%C3%81ng_%E2%80%93_B%C3%B9ng",
        name: "Đường cao tốc Vũng Áng – Bùng",
        image: "tuyenduong/VungAngBung.png",
        length: "55,34 km",
        start: "Nút giao Vũng Áng",
        end: "Nút giao Cự Nẫm",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_B%C3%B9ng_%E2%80%93_V%E1%BA%A1n_Ninh",
        name: "Đường cao tốc Bùng – Vạn Ninh",
        image: "tuyenduong/BungVanNinh.png",
        length: "48,84 km",
        start: "Nút giao Cự Nẫm",
        end: "Nút giao Vạn Ninh",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_V%E1%BA%A1n_Ninh_%E2%80%93_Cam_L%E1%BB%99",
        name: "Đường cao tốc Vạn Ninh - Cam Lộ",
        image: "tuyenduong/VanNinhCamLo.png",
        length: "48,84 km",
        start: "Nút giao Vạn Ninh",
        end: "Nút giao Cam Lộ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Cam_L%E1%BB%99_%E2%80%93_La_S%C6%A1n",
        name: "Đường cao tốc Cam Lộ - La Sơn",
        image: "tuyenduong/CamLoLaSon.png",
        length: "98,35 km",
        start: "Nút giao Cam Lộ",
        end: "Nút giao La Sơn",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_La_S%C6%A1n_%E2%80%93_T%C3%BAy_Loan",
        name: "Đường cao tốc La Sơn - Hòa Liên",
        image: "tuyenduong/LaSonTuyLoan.png",
        length: "65 km",
        start: "Nút giao La Sơn",
        end: "Nút giao Hòa Liên",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_La_S%C6%A1n_%E2%80%93_T%C3%BAy_Loan",
        name: "Đường cao tốc Hòa Liên – Túy Loan",
        image: "tuyenduong/LaSonTuyLoan.png",
        length: "11 km",
        start: "Nút giao Hòa Liên",
        end: "Nút giao Túy Loan",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_%C4%90%C3%A0_N%E1%BA%B5ng_%E2%80%93_Qu%E1%BA%A3ng_Ng%C3%A3i",
        name: "Đường cao tốc Đà Nẵng – Quảng Ngãi",
        image: "tuyenduong/DaNangQuangNgai.png",
        length: "139,6 km",
        start: "Nút giao Túy Loan",
        end: "Nút giao Quảng Ngãi",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Qu%E1%BA%A3ng_Ng%C3%A3i_%E2%80%93_Ho%C3%A0i_Nh%C6%A1n",
        name: "Đường cao tốc Quảng Ngãi – Hoài Nhơn",
        image: "tuyenduong/QuangNgaiHoaiNhon.png",
        length: "88 km",
        start: "Nút giao Quảng Ngãi",
        end: "Nút giao Hoài Nhơn",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ho%C3%A0i_Nh%C6%A1n_%E2%80%93_Quy_Nh%C6%A1n",
        name: "Đường cao tốc Hoài Nhơn – Quy Nhơn",
        image: "tuyenduong/HoaiNhonQuyNhon.png",
        length: "69 km",
        start: "Nút giao Hoài Nhơn",
        end: "Nút giao Quy Nhơn",
    },
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
        image: "tuyenduong/CaoLanhLoTe.png",
        length: "29 km",
        start: "Nút giao An Bình",
        end: "Nút giao Lộ Tẻ",
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
        image: "bienbao/CT09.png",
        length: "146 km",
        start: "Nút giao Nội Bài",
        end: "Nút giao Khả Lễ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ti%C3%AAn_Y%C3%AAn_%E2%80%93_L%E1%BA%A1ng_S%C6%A1n_%E2%80%93_Cao_B%E1%BA%B1ng",
        name: "Đường cao tốc Tiên Yên – Lạng Sơn – Cao Bằng",
        image: "bienbao/CT10.png",
        length: "215 km",
        start: "Nút giao Tân Thanh",
        end: "Nút giao Trà Lĩnh",
    },
    {
        link: "#",
        name: "Đường cao tốc Phủ Lý – Nam Định",
        image: "bienbao/CT11.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Y%C3%AAn_B%C3%A1i_%E2%80%93_H%C3%A0_Giang",
        name: "Đường cao tốc Yên Bái – Hà Giang",
        image: "bienbao/CT12.png",
        length: "81 km",
        start: "Nút giao Mậu A",
        end: "Nút giao Việt Vinh",
    },
    {
        link: "#",
        name: "Đường cao tốc Bảo Hà – Lai Châu",
        image: "bienbao/CT13.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ch%E1%BB%A3_B%E1%BA%BFn_%E2%80%93_Y%C3%AAn_M%E1%BB%B9",
        name: "Đường cao tốc Chợ Bến – Yên Mỹ",
        image: "bienbao/CT14.png",
        length: "60 km",
        start: "Nút giao Chợ Bến",
        end: "Nút giao Yên Mỹ",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Tuy%C3%AAn_Quang_%E2%80%93_H%C3%A0_Giang",
        name: "Đường cao tốc Tuyên Quang – Hà Giang",
        image: "tuyenduong/TuyenQuangHaGiang.png",
        length: "165 km",
        start: "Nút giao Quốc lộ 3B",
        end: "Nút giao Thanh Thủy"
    },
    {
        link: "#",
        name: "Đường cao tốc Hưng Yên – Thái Bình",
        image: "bienbao/CT16.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Vinh_%E2%80%93_Thanh_Th%E1%BB%A7y",
        name: "Đường cao tốc Vinh - Thanh Thủy",
        image: "bienbao/CT17.png",
        length: "85 km",
        start: "Nút giao Cảng Cửa Lò",
        end: "Nút giao Cửa khẩu Thanh Thủy",
    },
    {
        link: "#",
        name: "Đường cao tốc Vũng Áng – Cha Lo",
        image: "bienbao/CT18.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Cam_L%E1%BB%99_%E2%80%93_Lao_B%E1%BA%A3o",
        name: "Đường cao tốc Cam Lộ – Lao Bảo",
        image: "bienbao/CT19.png",
        length: "70 km",
        start: "Quốc lộ 1A",
        end: "Cửa khẩu Lao Bảo",
    },
    {
        link: "#",
        name: "Đường cao tốc Quy Nhơn – Pleiku – Lệ Thanh",
        image: "bienbao/CT20.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "#",
        name: "Đường cao tốc Đà Nẵng – Thạnh Mỹ – Ngọc Hồi – Bờ Y",
        image: "bienbao/CT21.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "#",
        name: "Đường cao tốc Quảng Nam – Quảng Ngãi",
        image: "bienbao/CT22.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "#",
        name: "Đường cao tốc Phú Yên – Đắk Lắk",
        image: "bienbao/CT23.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Kh%C3%A1nh_H%C3%B2a_%E2%80%93_Bu%C3%B4n_Ma_Thu%E1%BB%99t",
        name: "Đường cao tốc Khánh Hòa – Buôn Ma Thuột",
        image: "tuyenduong/KhanhHoaBuonMaThuot.png",
        length: "117 km",
        start: "Nút giao Nam Vân Phong",
        end: "Nút giao Buôn Ma Thuột",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Nha_Trang_%E2%80%93_Li%C3%AAn_Kh%C6%B0%C6%A1ng",
        name: "Đường cao tốc Nha Trang – Liên Khương",
        image: "bienbao/CT25.png",
        length: "103 km",
        start: "Nút giao Diên Khánh",
        end: "Nút giao Prenn",
    },
    {
        link: "#",
        name: "Đường cao tốc",
        image: "bienbao/CT26.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "#",
        name: "Đường cao tốc Dầu Giây – Prenn",
        image: "tuyenduong/LienKhuongPrenn.png",
        length: "220 km",
        start: "Nút giao Dầu Giây",
        end: "Nút giao Prenn",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Bi%C3%AAn_H%C3%B2a_%E2%80%93_V%C5%A9ng_T%C3%A0u",
        name: "Đường cao tốc Biên Hòa – Vũng Tàu",
        image: "tuyenduong/BienHoaVungTau.png",
        length: "68 km",
        start: "Nút giao Biên Hòa",
        end: "Nút giao Cửa Lấp",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh_%E2%80%93_Long_Th%C3%A0nh_%E2%80%93_D%E1%BA%A7u_Gi%C3%A2y",
        name: "Đường cao tốc Thành phố Hồ Chí Minh – Long Thành – Dầu Giây",
        image: "tuyenduong/LongThanhDauGiay.png",
        length: "55,7 km",
        start: "Nút giao An Phú",
        end: "Nút giao Dầu Giây",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh_%E2%80%93_Ch%C6%A1n_Th%C3%A0nh_%E2%80%93_Hoa_L%C6%B0",
        name: "Đường cao tốc Thành phố Hồ Chí Minh – Chơn Thành – Hoa Lư",
        image: "bienbao/CT30.png",
        length: "130 km",
        start: "Nút giao Gò Dưa",
        end: "Nút giao Quốc lộ 14",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh_%E2%80%93_M%E1%BB%99c_B%C3%A0i",
        name: "Đường cao tốc Thành phố Hồ Chí Minh – Mộc Bài",
        image: "bienbao/CT31.png",
        length: "50,9 km",
        start: "Nút giao Tân Thạnh Đông",
        end: "Nút giao Mộc Bài",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_G%C3%B2_D%E1%BA%A7u_%E2%80%93_Xa_M%C3%A1t",
        name: "Đường cao tốc Gò Dầu – Xa Mát",
        image: "bienbao/CT32.png",
        length: "65 km",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh_%E2%80%93_S%C3%B3c_Tr%C4%83ng",
        name: "Đường cao tốc Thành phố Hồ Chí Minh – Sóc Trăng",
        image: "bienbao/CT33.png",
        length: "215 km",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_Ch%C3%A2u_%C4%90%E1%BB%91c_%E2%80%93_C%E1%BA%A7n_Th%C6%A1_%E2%80%93_S%C3%B3c_Tr%C4%83ng",
        name: "Đường cao tốc Châu Đốc – Cần Thơ – Sóc Trăng",
        image: "tuyenduong/ChauDocSocTrang.png",
        length: "188 km",
        start: "Nút giao Quốc lộ 91",
        end: "Nút giao Trần Đề",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%C3%A0_Ti%C3%AAn_%E2%80%93_R%E1%BA%A1ch_Gi%C3%A1_%E2%80%93_B%E1%BA%A1c_Li%C3%AAu",
        name: "Đường cao tốc Hà Tiên – Rạch Giá – Bạc Liêu",
        image: "bienbao/CT35.png",
        length: "212 km",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_H%E1%BB%93ng_Ng%E1%BB%B1_%E2%80%93_Tr%C3%A0_Vinh",
        name: "Đường cao tốc Hồng Ngự – Trà Vinh",
        image: "bienbao/CT36.png",
        length: "188 km",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_v%C3%A0nh_%C4%91ai_3_(H%C3%A0_N%E1%BB%99i)",
        name: "Đường vành đai 3 (Hà Nội)",
        image: "tuyenduong/VanhDai3HaNoi.png",
        length: "65 km",
        start: "Nam Thăng Long",
        end: "Bắc Thăng Long",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_v%C3%A0nh_%C4%91ai_4_(H%C3%A0_N%E1%BB%99i)",
        name: "Đường vành đai 4 (Hà Nội)",
        image: "bienbao/CT38.png",
        length: "112.8 km",
        start: "Nút giao CT.05",
        end: "Nút giao CT.09",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_v%C3%A0nh_%C4%91ai_5_(H%C3%A0_N%E1%BB%99i)",
        name: "Đường vành đai 5 (Hà Nội)",
        image: "bienbao/CT39.png",
        length: "331 km",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_v%C3%A0nh_%C4%91ai_3_(Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh)",
        name: "Đường vành đai 3 (Thành phố Hồ Chí Minh)",
        image: "tuyenduong/VanhDai3TPHCM.png",
        length: "92 km",
        start: "Nút giao Vĩnh Thanh",
        end: "Nút giao Mỹ Yên",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_v%C3%A0nh_%C4%91ai_4_(Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh)",
        name: "Đường vành đai 4 (Thành phố Hồ Chí Minh)",
        image: "bienbao/CT41.png",
        length: "199 km",
        start: "",
        end: "",
    },
    {
        link: "#",
        name: "Đường vành đai 5 (Thành phố Hồ Chí Minh)",
        image: "bienbao/CT42.png",
        length: "",
        start: "",
        end: "",
    },
    {
        link: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_cao_t%E1%BB%91c_C%C3%A0_Mau_%E2%80%93_%C4%90%E1%BA%A5t_M%C5%A9i",
        name: "Đường cao tốc Cà Mau – Đất Mũi",
        image: "bienbao/CT43.png",
        length: "93 km",
        start: "Nút giao Cà Mau",
        end: "Nút giao Đát Mũi",
    },
];

// Hiển thị dữ liệu tuyến đường cao tốc bắc nam phía đông
function renderList1(data) {
    const container1 = document.getElementById("easternID");
    container1.innerHTML = "";
    data.forEach(news => {
        container1.innerHTML += `
            <div class="col-md-3">
                <a href="${news.link}">
                    <article class="expresswayList">
                        <img src="${news.image}">
                        <div class="container-sm">
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
}




// Hiển thị dữ liệu tuyến đường cao tốc bắc nam phía tây
function renderList2(data) {
    const container2 = document.getElementById("westernID");
    container2.innerHTML = "";
    data.forEach(news => {
        container2.innerHTML += `
    <div class="col-md-3">
        <a href="${news.link}">
            <article class="expresswayList">
                <img src="${news.image}">
                <div class="container-sm">
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
}

//Hiển thị dữ liệu một số tuyến đường cao tốc khác
function renderList3(data) {
const container3 = document.getElementById("differentID");
container3.innerHTML = "";
data.forEach(news => {
    container3.innerHTML += `
    <div class="col-md-3">
        <a href="${news.link}">
            <article class="expresswayList">
                <img src="${news.image}">
                <div class="container-sm">
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
}


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

//Search tuyến đường
function searchHighway() {
    const input = document.getElementById("search").value.trim();
    const keyword = normalize(input);

    const result1 = newsData1.filter(item =>
        normalize(item.name).includes(keyword)
    );
    const result2 = newsData2.filter(item =>
        normalize(item.name).includes(keyword)
    );
    const result3 = newsData3.filter(item =>
        normalize(item.name).includes(keyword)
    );


    renderList1(result1);
    renderList2(result2);
    renderList3(result3);
}
renderList1(newsData1);
renderList2(newsData2);
renderList3(newsData3);



//Hiệu ứng nút go to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".goTopBtn").fadeIn();
        } else {
            $(".goTopBtn").fadeOut();
        }
    });

    $(".goTopBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
});

// chuẩn hoá: bỏ dấu, chuyển thường
function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}