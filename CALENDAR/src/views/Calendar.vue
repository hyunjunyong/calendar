<script setup>
import { ref } from "vue";
let currentDate = ref();
const dates = ref([]);
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

let weekDays = [
  { name: "일", class: "txt-red" },
  { name: "월", class: "" },
  { name: "화", class: "" },
  { name: "수", class: "" },
  { name: "목", class: "" },
  { name: "금", class: "" },
  { name: "토", class: "txt-blue" },
];

const calendarDate = () => {
  const [monthFirstDay, monthLastDate, lastMonthLastDate] = getFirstDayLastDate(
    currentYear,
    currentMonth
  );
  dates.value = getMonthOfDays(monthFirstDay, monthLastDate, lastMonthLastDate);
  console.log([monthFirstDay, monthLastDate, lastMonthLastDate] )
};
const getFirstDayLastDate = (year, month) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  let lastYear = year;
  let lastMonth = month - 1;
  if (month === 1) {
    lastMonth = 12;
    lastYear -= 1;
  }
  const prevLastDate = new Date(lastYear, lastMonth, 0).getDate();
  return [firstDay, lastDate, prevLastDate];
};
const getMonthOfDays = (monthFirstDay, monthLastDate, prevMonthLastDate) => {
  let day = 1;
  let prevDay = prevMonthLastDate - monthFirstDay + 1;
  const dates = [];
  let weekOfDays = [];
  while (day <= monthLastDate) {
    if (day === 1) {
      for (let j = 0; j < monthFirstDay; j++) {
        weekOfDays.push({'date':prevDay,'color':'txt-gray'});
        prevDay += 1;
      }
    }
    console.log(weekOfDays)
    weekOfDays.push({'date':day});
    
    if (weekOfDays.length === 7) {
      dates.push(weekOfDays);
      weekOfDays = []; 
    }
    day += 1;
  }
  const len = weekOfDays.length;
  if (len > 0 && len < 7) {
    for (let k = 1; k <= 7 - len; k++) {
      weekOfDays.push({'date':k,'color':'txt-gray'});
    }
  }

  if (weekOfDays.length > 0) dates.push(weekOfDays); 
  return dates;
};
const bindingClass = (i) => {
  if (i === 0) return "txt-red";
  if (i === 6) return "txt-blue";
};
calendarDate();
</script>

<template>
  <div id="calendar">
    <div id="cal-wrap">
      <table>
        <thead class="weekdays">
          <th v-for="i in weekDays" :key="i" :class="i.class">{{ i.name }}</th>
        </thead>
        <tbody>
          <tr v-for="(date, i) in dates" :key="i">
            <td
              v-for="(day, x) in date"
              :key="x"
              :class="[bindingClass(x), day.color]"
            >
              {{ day.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
