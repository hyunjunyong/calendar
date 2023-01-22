<template>
  <div id="cal-wrap">
    <div class="cal-header">
      <button @click="prevMonth()">&lt;</button>
      <span>{{ currentYear }}-{{ ("00" + currentMonth).slice(-2) }}</span>
      <button @click="nextMonth()">></button>
    </div>
    <table>
      <thead class="weekdays">
        <th v-for="i in weekDays" :key="i" :class="i.class">
          {{ i.name }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(date, i) in dates" :key="i">
          <td v-for="(day, x) in date" :key="x">
            <button
              :class="[bindingClass(x), day.color]"
              @click="clickDate(day.date)"
            >
              {{ day.date }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <p>{{ currentDate }}</p> -->
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
// const props = defineProps({
//   date: {
//     Type: String,
//     required: true,
//   },
// });
const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
// const emits = defineEmits(["update:value"]);
let currentDate = ref(props.modelValue || new Date());
const dates = ref([]);
let currentYear = ref(new Date(props.modelValue).getFullYear());
let currentMonth = ref(new Date(props.modelValue).getMonth() + 1);

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
    currentYear.value,
    currentMonth.value
  );
  dates.value = getMonthOfDays(monthFirstDay, monthLastDate, lastMonthLastDate);
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
        weekOfDays.push({ date: prevDay, color: "txt-gray" });
        prevDay += 1;
      }
    }
    weekOfDays.push({ date: day });

    if (weekOfDays.length === 7) {
      dates.push(weekOfDays);
      weekOfDays = [];
    }
    day += 1;
  }
  const len = weekOfDays.length;
  if (len > 0 && len < 7) {
    for (let k = 1; k <= 7 - len; k++) {
      weekOfDays.push({ date: k, color: "txt-gray" });
    }
  }

  if (weekOfDays.length > 0) dates.push(weekOfDays);
  return dates;
};
const bindingClass = (i) => {
  if (i === 0) return "txt-red";
  if (i === 6) return "txt-blue";
};
const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentYear.value++;
    currentMonth.value = 1;
  } else {
    currentMonth.value++;
  }
  calendarDate();
};
const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentYear.value--;
    currentMonth.value = 12;
  } else {
    currentMonth.value--;
  }
  calendarDate();
};
const clickDate = (date) => {
  currentDate.value = new Date(currentYear.value, currentMonth.value, date);

  emits("update:modelValue", currentDate.value);
};
calendarDate();
</script>

<style lang="scss" scoped></style>
