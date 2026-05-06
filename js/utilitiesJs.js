$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



const openBtn = document.getElementById("mine-side");
const sideMenu = document.querySelector(".mine-side");
const closeBtn = document.querySelector(".btn-colse");
const overlay = document.querySelector(".overlay");

// فتح
openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // منع السكرول
});

// إغلاق
function closeMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);



//

const buttons = document.querySelectorAll(".btn-icon");
const panels = document.querySelectorAll(".wrapper-side");
const closeBtns = document.querySelectorAll(".btn-colse");

const map = {
  liveRisks: ".liveRisks",
  latestAlerts: ".latestAlerts",
  smartAssistant: ".smartAssistant"
};

// إغلاق الكل
function closeAll() {
  panels.forEach(panel => panel.classList.remove("active"));
   buttons.forEach(btn => btn.classList.remove("active")); // 🔥 إزالة من الأزرار
  document.body.style.overflow = "";
}

// فتح
buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    if (!map[this.id]) return;

    e.preventDefault();
    e.stopPropagation();

    //  // 🔥 إغلاق كل tooltips
    // document.querySelectorAll('[data-toggle="tooltip"]').forEach(el => {
    //   if (window.bootstrap) {
    //     const instance = bootstrap.Tooltip.getInstance(el);
    //     if (instance) {
    //       instance.hide();
    //       instance.dispose();
    //     }
    //   }
    // });


    closeAll();
    // 🔥 إضافة active للزر الحالي
    this.classList.add("active");

    const targetPanel = document.querySelector(map[this.id]);
    if (targetPanel) {
      targetPanel.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

// ✅ ربط زر الإغلاق (هنا الحل)
closeBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAll();
  });
});

// منع الإغلاق عند الضغط داخل القائمة
panels.forEach(panel => {
  panel.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// إغلاق عند الضغط خارجها
document.addEventListener("click", closeAll);