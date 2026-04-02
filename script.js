// 승객 리스트
let passengers = [
  { position: 0, target: 5 }, // 현재 위치, 목표 좌석
  { position: 0, target: 3 },
  { position: 0, target: 7 }
];

let time = 0;
let allSeated = false;  // 반복조건

while (!allSeated) {
  time++;               // 단위시간 : 1초
  allSeated = true;

  passengers.forEach(p => {
    if (p.position < p.target) {
      p.position++;     // 단위이동: 한 칸
      allSeated = false;
    }
  });

  console.log(`시간: ${time}`);
  console.log(passengers);
}

console.log("모든 승객 도착!");
console.log(`총 시간: ${time}`);