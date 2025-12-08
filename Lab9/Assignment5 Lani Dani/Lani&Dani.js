let i = 1;
function Slider(){
    if(++i > 3){
        i = 1;
    }
    document.getElementById("slider").src=`images/slider-${i}.jpg`;
}
function Back(){
    if(--i < 1){
        i = 3;
    }
    document.getElementById("slider").src=`images/slider-${i}.jpg`;
}
document.getElementById("back").addEventListener("click", Back);
document.getElementById("next").addEventListener("click", Slider);
setInterval(Slider,5000);

// service-Golf

let golfservice = [
  {
    imageURL: "images/service-design.jpg",
    Title: "Thiết Kế",
    Content: "Đội ngũ thiết kế sân golf hơn 10 năm kinh nghiệm, thi công đạt tiêu chuẩn quốc tế."
  },
  {
    imageURL: "images/service-construction.jpg",
    Title: "Xây dựng",
    Content: "Là đơn vị đứng đầu về Thiết kế Thi công sân Golf chuyên nghiệp trên Toàn Quốc."
  },
  {
    imageURL: "images/service-operation.jpg",
    Title: "Vận hành",
    Content: "Quản lý, điều hành, vận hành hoạt động kinh doanh hàng ngày của sân golf."
  },
  {
    imageURL: "images/service-maintenance.jpg",
    Title: "Chăm Sóc Bảo Dưỡng",
    Content: "Giúp quá trình sử dụng sân golf luôn đạt tiêu chuẩn kỹ thuật cao nhất."
  },
  {
    imageURL: "images/service-training.jpg",
    Title: "Huấn Luyện",
    Content: "Cung cấp bài học golf từ các chuyên gia quốc tế có trình độ cao, giàu kinh nghiệm."
  },
  {
    imageURL: "images/service-lawn-care.jpg",
    Title: "Chăm Sóc Cỏ",
    Content: "Tiến hành xử lý cỏ dại kết hợp áp dụng các kỹ thuật chăm sóc cỏ sân golf khoa học."
  }
];

let serviceGolfList = document.getElementById('service-golf-list');
golfservice.forEach(service => {
  let col = document.createElement('div');
  col.className = 'col-md-4';
  col.innerHTML = `
    <div class="card-h-100"> 
      <img src="${service.imageURL}" class="card-img-top" alt="">
      <div class="card-body">
          <h5 class="card-title">${service.Title}</h5>
          <p class="card-text">${service.Content}</p>
      </div>
    </div>
  `;
  serviceGolfList.appendChild(col);
});




// service-other
let services = [
{
  title: "Xây dựng nhà ở",
  image: "images/house.png"
},
{
  title: "Xây dựng các công trình kỹ thuật dân dụng",
  image: "images/scaffolding.png"
},
{
  title: "Phá dỡ",
  image: "images/drill.png"
},
{
  title: "Lắp đặt hệ thống điện, cấp thoát nước, sưởi và điều hòa không khí",
  image: "images/blueprint.png"
},
{
  title: "Hoạt động thiết kế chuyên dụng và tư vấn kỹ thuật liên quan",
  image: "images/conversation.png"
},
{
  title: "Tư vấn môi giới, đấu giá bất động sản, đấu giá quyền sử dụng đất",
  image: "images/agreement.png"
},
{
  title: "Dịch vụ chăm sóc và duy trì cảnh quan",
  image: "images/location-pin.png"
},
{
  title: "Bán buôn máy móc, thiết bị, phụ tùng máy",
  image: "images/demolition.png"
}
];

let serviceList = document.getElementById('service-list');
services.forEach(service => {
let col = document.createElement('div');
  col.className = 'col-md-3 col';
  col.innerHTML = `
    <div class="card-h-100">
      <img src="${service.image}" class="card-img-top" alt="${service.title}">
      <div class="card-body">
        <h5 class="card-title">${service.title}</h5>
      </div>
    </div>
  `;
  serviceList.appendChild(col);
});



function getData() {
  fetch("http://139.180.213.49/getData.php?type=all")
    .then((res) => {
      if (!res.ok) {
        console.log("Erorr");
      }
      return res.json();
    })

    .then((data) => {
      console.log(data);
    });
}

window.onscroll = function () {
  const btn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Khi click vào nút, cuộn lên đầu trang
document.getElementById("goTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Cuộn mượt
  });
});