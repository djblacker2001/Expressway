const newsData1 = [
    {
        link: "https://baomoi.com/thong-xe-hang-nghin-km-cao-toc-duong-bo-ven-bien-truoc-19-12-c53998727.epi",
        image: "https://photo-baomoi.bmcdn.me/w700_r1/2025_12_13_35_53998727/c6c9ba314378aa26f369.jpg.avif",
        title: "Thông xe hàng nghìn km cao tốc, đường bộ ven biển trước 19/12",
    },
    {
        link: "https://thanhnien.vn/het-nam-2025-viet-nam-du-kien-co-3245-km-duong-cao-toc-185251020151700373.htm",
        image: "https://images2.thanhnien.vn/528068263637045248/2025/10/20/edit-nguyen-hoa-binh-17609480854332132821882.jpeg",
        title: "Hết năm 2025, Việt Nam dự kiến có 3.245 km đường cao tốc",
    },
    {
        link: "https://vnexpress.net/khoi-cong-mo-rong-cao-toc-tp-hcm-trung-luong-my-thuan-ngay-19-12-4986788.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/11/27/doan-tuyen-snapshot3-176421652-3911-3773-1764216694.png?w=680&h=0&q=100&dpr=1&fit=crop&s=pUbFk8r4vWF5sEZPu0jGYg",
        title: "Khởi công mở rộng cao tốc TP HCM - Trung Lương - Mỹ Thuận",
    },
    {
        link: "https://vnexpress.net/xay-lai-nut-giao-7-nam-do-dang-tren-cao-toc-da-nang-quang-ngai-4888733.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/05/21/nut-giao-1-1747804633-2757-1747805231.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=6SRy8CQPCsUia-brpe1R5w",
        title: "Xây lại nút giao 7 năm dở dang trên cao tốc Đà Nẵng - Quảng Ngãi",
    },
    {
        link: "https://vnexpress.net/dien-mao-nha-ga-hinh-canh-sen-san-bay-long-thanh-4986592.html",
        image: "https://i1-vnexpress.vnecdn.net/2025/11/26/DJI-20251126101825-0288-D-1764172264-1764172277.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=YwatB4sgPc5-hREBHcfPxA",
        title: "Diện mạo nhà ga hình cánh sen sân bay Long Thành",
    },
    {
        link: "",
        image: "",
        title: "",
    },
    {
        link: "",
        image: "",
        title: "",
    },
    {
        link: "",
        image: "",
        title: "",
    },
    {
        link: "",
        image: "",
        title: "",
    },
];

const container1 = document.getElementById("track");
newsData1.forEach(news => {
    container1.innerHTML += `
    <div class="item">
        <a href="${news.link}">
            <div class="row p-3">
                <div class="col-4">
                    <img src="${news.image}" alt="">
                </div>
                <div class="col-8">
                    <b>${news.title}</b>
                </div>
            </div>
        </a>
    </div>
  `;
});

//Hiệu ứng hiện trang web khi tải xong
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const hasSeenLoader = localStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
        // Hiển thị logo trong 2 giây
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                document.body.classList.add("show");
                document.body.style.overflow = "auto";
                localStorage.setItem("hasSeenLoader", "true");
            }, 1000);
        }, 2000);
    } else {
        // Nếu đã xem loader, bỏ qua và hiển thị web ngay
        loader.style.display = "none";
        document.body.classList.add("show");
        document.body.style.overflow = "auto";
    }
});

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

// Hiển thị năm hiện tại
document.getElementById("year").textContent = new Date().getFullYear();

// Hiệu ứng thay đổi header khi cuộn trang
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 500) {
            $("#mainHeader").addClass("scrolled");
        } else {
            $("#mainHeader").removeClass("scrolled");
        }
    });
});

// Hiệu ứng thay đổi mục body khi cuộn trang
$(document).ready(function () {
    // Cuộn mượt đến phần nội dung
    $('.sidebar a').on('click', function (e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 600);
    });

    // Highlight đề mục đang xem
    $(window).on('scroll', function () {
        const scrollPos = $(document).scrollTop();
        $('.fade-section').each(function () {
            const top = $(this).offset().top - 100;
            const bottom = top + $(this).outerHeight();
            const id = $(this).attr('id');
            if (scrollPos >= top && scrollPos <= bottom) {
                $('.sidebar a').removeClass('active');
                $('.sidebar a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Hiệu ứng fade-in khi cuộn
    function checkFadeIn() {
        const scrollBottom = $(window).scrollTop() + $(window).height();
        $('.fade-section').each(function () {
            const sectionTop = $(this).offset().top + 100;
            if (scrollBottom > sectionTop) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkFadeIn);
    checkFadeIn();
});

const track = document.getElementById("track");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let x = 0;

// khoảng cuộn mỗi lần
const STEP = 200;

// Hàm cập nhật trạng thái nút
function updateButtons() {
    const trackWidth = track.scrollWidth;
    const viewWidth = track.parentElement.clientWidth;

    // If đang ở đầu → khóa nút trái
    prevBtn.disabled = (x >= 0);

    // If đang ở cuối → khóa nút phải
    nextBtn.disabled = (Math.abs(x) >= trackWidth - viewWidth);
}

nextBtn.onclick = () => {
    const trackWidth = track.scrollWidth;
    const viewWidth = track.parentElement.clientWidth;

    x -= STEP;

    // Không cho vượt quá cuối
    if (Math.abs(x) > trackWidth - viewWidth) {
        x = -(trackWidth - viewWidth);
    }

    track.style.transform = `translateX(${x}px)`;
    updateButtons();
};

prevBtn.onclick = () => {
    x += STEP;

    // Không cho vượt quá đầu
    if (x > 0) x = 0;

    track.style.transform = `translateX(${x}px)`;
    updateButtons();
};

// Khởi động
updateButtons();


//Hiệu ứng hiện từng phần
const sections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));


//Kiểm tra ETC
document.getElementById("checkBtn").addEventListener("click", () => {
    const plate = document.getElementById("etc-search").value.trim();
    const resultDiv = document.getElementById("etc-result");

    if (!plate) {
        resultDiv.innerHTML = "<span style='color:red'>Vui lòng nhập biển số xe!</span>";
        return;
    }

    // Ví dụ API giả lập
    // Thực tế bạn cần gọi API của ETC, ví dụ: fetch("https://api.etc.vn/check?plate=" + plate)
    resultDiv.innerHTML = "Đang kiểm tra...";

    fetch(`http://localhost:3000/api/vehicles/${plate}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                resultDiv.innerHTML = `
                    <p><strong>Biển số:</strong> ${plate}</p>
                    <p><strong>Số dư ETC:</strong> ${data.balance} VNĐ</p>
                    <p><strong>Trạng thái:</strong> ${data.status}</p>
                `;
            } else {
                resultDiv.innerHTML = `<span style='color:red'>Không tìm thấy tài khoản ETC cho biển số này.</span>`;
            }
        })
        .catch(err => {
            console.error(err);
            resultDiv.innerHTML = "<span style='color:red'>Lỗi khi kiểm tra ETC. Vui lòng thử lại sau.</span>";
        });
});

