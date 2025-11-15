const newsData1 = [
    {
        link: "https://thanhnien.vn/het-nam-2025-viet-nam-du-kien-co-3245-km-duong-cao-toc-185251020151700373.htm",
        image: "https://images2.thanhnien.vn/528068263637045248/2025/10/20/edit-nguyen-hoa-binh-17609480854332132821882.jpeg",
        title: "Hết năm 2025, Việt Nam dự kiến có 3.245 km đường cao tốc",
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


