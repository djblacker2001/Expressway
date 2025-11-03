// //Hiển thị dữ liệu tin tức xem nhiều nhất
// newsData2 [
//     {
//         link: "https://vnexpress.net/dieu-chinh-toc-do-tren-cao-toc-tp-hcm-long-thanh-dau-giay-4957746.html",
//         image: "https://i1-vnexpress.vnecdn.net/2025/10/30/z4304395212480-c407985f271aba6-3190-7513-1761798097.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=VET7N4ci-qeJMbEE3xVvPA",
//         content: "Điều chỉnh tốc độ trên cao tốc TP HCM - Long Thành - Dầu Giây"
//     }
// ];

// //Hiển thị dữ liệu tin tức mới nhất
// // const container1 = document.getElementById("nearly");
// // newsData1.forEach(news => {
// // container1.innerHTML += `
// //     <a href="${news.link}">
// //         <article class="nearly">
// //             <div class="row">
// //                 <div class="col-md-4 align-self-center">
// //                     <img src="${news.image}" alt="">
// //                 </div>
// //                 <div class="col-md-8">
// //                     ${news.content}
// //                 </div>
// //             </div>
// //         </article>
// //     </a>
// //   `;
// // });

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
        if ($(this).scrollTop() > 100) {
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