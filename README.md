# ✈️ Airline Boarding Simulation

## 📌 프로젝트 개요
본 프로젝트는 비행기 탑승 과정에서 발생하는 승객 이동을 시뮬레이션하고,
탑승 방식에 따른 시간 효율을 비교·분석하는 것을 목표로 합니다.

---

## 🎯 개발 목적 (Why)
- 다양한 탑승 전략 간 탑승 소요시간 비교
- 항공기 탑승 과정에서 발생하는 병목 구간 및 지연 원인 파악   
- 시뮬레이션 기반 의사결정 경험 확보
- 실제 항공사 운영 환경에 적용 가능한 인사이트 도출

---

## ⚙️ 주요 기능 (What)
- 승객 이동 시뮬레이션 (시간 흐름 기반)
- 좌석 배치 및 승객 할당
- 다양한 탑승 전략 구현
  - Random Boarding
  - Front-to-Back
  - Back-to-Front
  - Zone Boarding
- 전체 탑승 완료 시간 측정
- 반복 실행을 통한 평균 수 계산

---

## 🧠 구현 방법 (How)

### Simulation Model
- 승객을 객체로 정의하고 좌석을 2D 구조로 모델링  
- 시간(step) 단위로 시뮬레이션 진행  
- 각 승객은 통로를 따라 이동하며 앞 승객에 의해 이동이 제한됨  

### Boarding Process
1. 승객 생성 및 좌석 배정
2. 탑승 전략에 따라 순서 결정
3. 시간 흐름에 따라 좌석으로 승객 이동
4. 앞 승객으로 인한 이동 제한
5. 좌석 도착 시 상태 변경  
6. 모든 승객 착석 시 종료

---

## 📊 평가 방법 (Evaluation)

### Metrics
- Total Boarding Time (총 탑승 시간)  
- Average Boarding Time (평균 시간)  
- Congestion Frequency (혼잡 발생 빈도)  

### Experiment Design
- 동일 조건에서 각 탑승 전략 반복 실행  
- Monte Carlo 방식으로 평균값 도출  
- 전략별 성능 비교  

---

## 🔍 기대 결과 (Insights)
- 어떤 탑승 방식이 가장 효율적인가? 
- 탑승 전략별 병목 현상은 어느 구간에서 발생하는가?  
- 승객 간 간섭이 전체 시간에 어떤 영향을 미치는가?

---

## 🚀 확장 계획 (Future Work)
- 수하물 적재 시간 반영  
- 승객 이동 속도 다양화  
- 통로 혼잡도 모델링 
- 데이터 시각화 (그래프)  
- 실제 다양한 항공기의 좌석 구조 반영

---

## 🛠 기술 스택
- VS Code (Development Environment)
- JavaScript (Simulation Logic)
- HTML / CSS (Visualization)
