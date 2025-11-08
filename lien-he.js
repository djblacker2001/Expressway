$(document).ready(function () {
    $("#submitBtn").click(function () {
        // Xoá lỗi cũ
        $(".error-message").text("");

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const title = $("#title").val().trim();
        const content = $("#content").val();


        let isValid = true;

        // Kiểm tra tên
        if (name === "") {
            $("#errorName").text("Vui lòng nhập họ & tên");
            isValid = false;
        }

        // Kiểm tra email
        if (email === "") {
            $("#errorEmail").text("Vui lòng nhập địa chỉ email");
            isValid = false;
        }

        // Kiểm tra tiêu đề
        if(title === "") {
            $("#errorTitle").text("Vui lòng nhập tiêu đề");
            isValid = false;
        }
        
        //Kiểm tra nội dung
        if(content === "") {
            $("#errorContent").text("Vui lòng nhập nội dung");
            isValid = false;
        }

        // Nếu hợp lệ
        if (isValid) {
            alert("Form submitted successfully!");
        }
    });
});

// Hiển thị năm hiện tại
document.getElementById("year").textContent = new Date().getFullYear();

// Hiệu ứng thay đổi header khi cuộn trang
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1000) {
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