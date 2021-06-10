const alag = document.querySelectorAll(".alag");
const tew = document.querySelectorAll(".tew");
const sub = document.querySelector(".sub");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const bar = document.querySelector(".bar");
const sidebar = document.querySelector(".sidebar");
const kk = document.querySelector(".kk");
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
const preload = document.querySelector(".preload");
const body = document.querySelector("body");

window.addEventListener("load", function () {
    preload.style.opacity = '0';
        preload.style.zIndex = '-999';
})
// document.documentElement.style.setProperty("--dark","#fff")
// alag.forEach( function(element, index) {
//    alag[index].addEventListener('click', function () {
//     tew[index].classList.toggle("ptive");

// });
// });
           alag[0].addEventListener('click', function () {
    tew[0].classList.toggle("ptive");
})
                      alag[2].addEventListener('click', function () {
    tew[2].classList.toggle("ptive");
})

           alag[1].addEventListener('click', function () {
    tew[1].classList.toggle("tive");
})
            alag[3].addEventListener('click', function () {
    tew[3].classList.toggle("aive");
})
toggle.addEventListener('click', function () {
    circle.classList.toggle("sar");
})
      
        var options = {
          series: [44, 55, 41, 17],
          labels: ['Cloths', 'Devices', 'Bags', 'Watches'],
          chart: {
          type: 'donut',
        }
        // responsive: [{
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 200
        //     },
        //     legend: {
        //       position: 'bottom'
        //     }
        //   }
        // }]
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();


let customer_options = {
    series: [{
        name: "Store Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: "Online Customers",
        data: [20, 30, 10, 20, 16, 40, 20, 51, 10]
    }],
    colors: ['#6ab04c', '#2980b9'],
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
        position: 'top'
    }
}

let customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options)
customer_chart.render()
bar.addEventListener('click', function () {
    sidebar.style.left = '0%';
    overlay.style.transform = 'scale(1)';
    content.style.zIndex = '-1';
})
kk.addEventListener('click', function () {
    sidebar.style.left = '-100%';
    overlay.style.transform = 'scale(0)';
    content.style.zIndex = '1';
})
function killCopy(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}
toggle.addEventListener('click', function () {
   body.classList.toggle("white");
})
