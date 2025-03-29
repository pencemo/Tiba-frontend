export function setImg() {
    const img = [
        "https://ymimg1.b8cdn.com/uploads/car_model/11007/pictures/13379170/2022_Suzuki_Ertiga_Exterior_01.jpg",
        "https://www.aljfinance.com/sites/default/files/styles/vehicle_gallery/public/2023-11/526_295%20%283%29.png.webp?itok=4wqGOnH8",
    "https://imgd.aeplcdn.com/1056x594/n/l6knr9b_1802323.jpg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Creta-180120241405.jpg&w=872&h=578&q=75&c=1",
    "https://media.zigcdn.com/media/model/2025/Jan/creta-ev_360x240.jpg",
    "https://imgd-ct.aeplcdn.com/664x415/n/1thnqbb_1693419.jpg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-110.jpeg?isig=0&q=80",
    ]
    
    const randomIndex = Math.floor(Math.random() * img.length);
  
    return img[randomIndex]
  }
  