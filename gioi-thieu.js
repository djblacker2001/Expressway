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
        } else {git
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