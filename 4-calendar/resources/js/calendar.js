// Dummy Data for Events, Tasks, and Others
const dummyData = {
    "2024-12-10": ["event", "task"],
    "2024-12-11": ["event", "task"],
    "2024-12-15": ["task", "other"],
    "2024-12-20": ["event"],
    "2024-12-25": ["event", "other"],
    "2024-12-31": ["other"]
};
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = new Date().getMonth(); // Gets the current month (0-11)
let currentYear = new Date().getFullYear(); // Gets the current year

// Initialize Calendar
function initCalendar() {
    $('#month-name').text(monthNames[currentMonth]);
    $('#year').text(currentYear);
    generateCalendar(currentMonth, currentYear);
}

const cells = document.querySelectorAll('#calendar td');
cells.forEach((cell) => {
  const width = cell.offsetWidth;
  cell.style.height = `${width}px`;
});

// Generate Calendar
function generateCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate(); // Days in the previous month

    const today = new Date();
    const currentDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    let calendarHTML = '';
    let date = 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                // Fill previous month's dates
                const prevDate = daysInPrevMonth - (firstDay - j - 1);
                const fullDate = `${month === 0 ? year - 1 : year}-${String(month === 0 ? 12 : month).padStart(2, '0')}-${String(prevDate).padStart(2, '0')}`;
                calendarHTML += `<td class="text-muted">
                    ${prevDate}
                    <div class="dots-container">
                        ${getDots(fullDate)}
                    </div>
                </td>`;
            } else if (date > daysInMonth) {
                // Fill next month's dates
                const nextDate = date - daysInMonth;
                const fullDate = `${month === 11 ? year + 1 : year}-${String(month === 11 ? 1 : month + 2).padStart(2, '0')}-${String(nextDate).padStart(2, '0')}`;
                calendarHTML += `<td class="text-muted">
                    ${nextDate}
                    <div class="dots-container">
                        ${getDots(fullDate)}
                    </div>
                </td>`;
                date++;
            } else {
                // Fill current month's dates
                const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const selectedClass = fullDate === currentDate ? 'selected' : '';
                calendarHTML += `<td data-date="${fullDate}" class="${selectedClass}">
                    ${date}
                    <div class="dots-container">
                        ${getDots(fullDate)}
                    </div>
                </td>`;
                date++;
            }
        }
        calendarHTML += '</tr>';
    }

    $('#calendar-body').html(calendarHTML);
}


// Generate Dots Based on Data
function getDots(date) {
    const types = dummyData[date] || [];
    let dotsHTML = '';

    if (types.includes("event")) dotsHTML += '<div class="dot event-dot"></div>';
    if (types.includes("task")) dotsHTML += '<div class="dot task-dot"></div>';
    if (types.includes("other")) dotsHTML += '<div class="dot other-dot"></div>';

    return dotsHTML;
}

$(document).on('click', '#calendar td', function() {
    $('#calendar td').removeClass('selected')
    $(this).addClass('selected')
})

// Add Navigation and Initialization
$('#prev-month').click(() => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    initCalendar();
});

// Event listener for the Next Month button
$('#next-month').click(() => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    initCalendar();
});
initCalendar();

function populateModalDropdowns() {
    const monthDropdown = document.getElementById('modal-month-select');
    const yearDropdown = document.getElementById('modal-year-select');

    // Populate months
    monthDropdown.innerHTML = monthNames
        .map((month, index) => `<option value="${index}" ${index === currentMonth ? 'selected' : ''}>${month}</option>`)
        .join('');

    // Populate years
    const startYear = currentYear - 10;
    const endYear = currentYear + 10;
    yearDropdown.innerHTML = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
        const year = startYear + i;
        return `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`;
    }).join('');
}
populateModalDropdowns()
document.getElementById('apply-modal-selection').addEventListener('click', () => {
    const selectedMonth = parseInt(document.getElementById('modal-month-select').value);
    const selectedYear = parseInt(document.getElementById('modal-year-select').value);

    currentMonth = selectedMonth;
    currentYear = selectedYear;

    // Update displayed month and year
    document.getElementById('month-name').textContent = monthNames[currentMonth];
    document.getElementById('year').textContent = currentYear;

    // Regenerate the calendar
    generateCalendar(currentMonth, currentYear);
});

/* new */

let currentWeekStartDate;

// Initialize Calendar
function initCalendarView() {
    generateMonthlyCalendar(currentMonth, currentYear);
    generateWeeklyCalendar(new Date(currentYear, currentMonth, 1));
}

// Generate Monthly Calendar
function generateMonthlyCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate(); // Days in the previous month

    let calendarHTML = "";
    let date = 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                // Fill previous month's dates
                const prevDate = daysInPrevMonth - (firstDay - j - 1);
                calendarHTML += `<td class="text-muted">${prevDate}</td>`;
            } else if (date > daysInMonth) {
                // Fill next month's dates
                const nextDate = date - daysInMonth;
                calendarHTML += `<td class="text-muted">${nextDate}</td>`;
                date++;
            } else {
                // Fill current month's dates
                calendarHTML += `<td>${date}</td>`;
                date++;
            }
        }
        calendarHTML += "</tr>";
    }

    document.getElementById("monthly-calendar-body").innerHTML = calendarHTML;
}


// Generate Weekly Calendar
function generateWeeklyCalendar(date) {
    currentWeekStartDate = getStartOfWeek(date);
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const tempDate = new Date(currentWeekStartDate);
        tempDate.setDate(tempDate.getDate() + i);
        weekDates.push(tempDate);
    }

    let calendarHeadingHTML = "<tr><th class='time-cell'></th>";
    weekDates.forEach(day => {
        calendarHeadingHTML += `<th><div><span>${day.toDateString().split(" ")[0]}</span><span>${day.getDate()}</span></div></th>`;
    });
    calendarHeadingHTML += "<th class='time-cell'></th></tr>";

    document.getElementById("weekly-calendar-head").innerHTML = calendarHeadingHTML;
    let calendarHTML = "";



    for (let hour = 0; hour < 24; hour++) {
        const timeLabel = hour === 0 ? "12 AM" : hour < 12 ? `${hour} AM` : hour === 12 ? "12 PM" : `${hour - 12} PM`;
        calendarHTML += `<tr><td class='time-cell'>${timeLabel}</td>`;
        for (let i = 0; i < 7; i++) {
            calendarHTML += `<td></td>`;
        }
        calendarHTML += `<td class='time-cell'>${timeLabel}</td></tr>`;
    }

    document.getElementById("weekly-calendar-body").innerHTML = calendarHTML;
}

// Get Start of the Week
function getStartOfWeek(date) {
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek;
    return new Date(date.setDate(diff));
}
generateMonthlyCalendar(currentMonth, currentYear);
generateWeeklyCalendar(new Date(currentYear, currentMonth, 1));

// Toggle Views
document.getElementById("toggle-monthly").addEventListener("click", () => {
    document.getElementById("monthly-view").style.display = "block";
    document.getElementById("toggle-monthly").classList.add("active-toggle-btn");
    document.getElementById("weekly-view").style.display = "none";
    document.getElementById("toggle-weekly").classList.remove("active-toggle-btn");
    generateMonthlyCalendar(currentMonth, currentYear);
});

document.getElementById("toggle-weekly").addEventListener("click", () => {
    document.getElementById("monthly-view").style.display = "none";
    document.getElementById("toggle-monthly").classList.remove("active-toggle-btn");
    document.getElementById("weekly-view").style.display = "block";
    document.getElementById("toggle-weekly").classList.add("active-toggle-btn");
    generateWeeklyCalendar(new Date(currentYear, currentMonth, 1));
});

// Navigate Between Months or Weeks
document.getElementById("prev-period").addEventListener("click", () => {
    if (document.getElementById("monthly-view").style.display === "block") {
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
        generateMonthlyCalendar(currentMonth, currentYear);
    } else {
        currentWeekStartDate.setDate(currentWeekStartDate.getDate() - 7);
        generateWeeklyCalendar(currentWeekStartDate);
    }
});

document.getElementById("next-period").addEventListener("click", () => {
    if (document.getElementById("monthly-view").style.display === "block") {
        currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
        generateMonthlyCalendar(currentMonth, currentYear);
    } else {
        currentWeekStartDate.setDate(currentWeekStartDate.getDate() + 7);
        generateWeeklyCalendar(currentWeekStartDate);
    }
});

// Initialize the calendar
initCalendarView();