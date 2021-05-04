function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');

    dayListItem.innerText = days;
    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// Escreva seu código abaixo.

window.onload = function () {
  function createDaysOfTheMonth() {
  const daysNum = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];
  for (let day of dezDaysList) {
    let li = document.createElement('li');
    li.innerText = day;
    li.className = 'day';
    if (holidays.indexOf(day) !== -1 && fridays.indexOf(day) !== -1) {
      li.className += ' holiday friday';
    } else if (holidays.indexOf(day) !== -1) {
      li.className += ' holiday';
    } else if (fridays.indexOf(day) !== -1) {
      li.className += ' friday';
    }
    daysNum.appendChild(li);
  }
  }

  createDaysOfTheMonth();

  function createDynamicButton(name, id) {
    const buttonParent = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.innerText = name;
    button.id = id;
    buttonParent.appendChild(button);
  }

  createDynamicButton('Feriados', 'btn-holiday');

  function changeHolidayColor () {
    const holidayButton = document.getElementById('btn-holiday');
    holidayButton.addEventListener('click', function () {
      const holidays = document.querySelectorAll('.holiday');
      const defaultColor = 'rgb(238,238,238)';
      const newColor = 'cadetblue'
      for (let day of holidays) {
        if (day.style.backgroundColor === newColor) {
          day.style.backgroundColor = defaultColor;
        } else {
          day.style.backgroundColor = newColor;
        }
      }
    });
  }

  changeHolidayColor();

  createDynamicButton('Sexta-feira', 'btn-friday');

  function changeFridaysTxt () {
    const fridayButton = document.getElementById('btn-friday');
    fridayButton.addEventListener('click', function () {
      const sextas = document.querySelectorAll('.friday');
      const friDays = [4, 11, 18, 25];
      if (sextas[0].innerText === '4') {
        for (let day of sextas) {
          day.innerText = 'SEXTOU!';
        }
      } else if (sextas[0].innerText === 'SEXTOU!') {
        for (let index in friDays) {
          sextas[index].innerText = friDays[index];
        }
      }
    });
  }

  changeFridaysTxt();

  function zoomInOut() {
    const days = document.getElementById('days');
    days.addEventListener('mouseover', function(element) {
      element.target.style.fontSize = '30px';
    });
    days.addEventListener('mouseout', function(element) {
      element.target.style.fontSize = '20px';
    }) 
  }

  zoomInOut();

  function createTask(name) {
    const task = document.createElement('span');
    const divTask = document.querySelector('.my-tasks');
    task.innerText = name;
    divTask.appendChild(task);
  }

  createTask('Estudar');

  function taskDescription(color) {
    const divTask = document.querySelector('.my-tasks');
    const description = document.createElement('div');
    description.className = 'task';
    description.style.backgroundColor = color;
    divTask.appendChild(description);
  }

  taskDescription('green');

  function selectTask () {
    const description = document.querySelector('.task');
    description.addEventListener('click', function () {
      if (description.classList.contains('selected')) {
        description.className = 'task';
      } else {
        description.className = 'task selected';
      }
    });
  }

  selectTask();

  function addTask() {
    const days = document.getElementById('days');
    days.addEventListener('click', function(element) {
      if (element.target.style.backgroundColor === 'green') {
        element.target.style.backgroundColor = '#EEEEEE';
        element.target.style.color = '#666';
      } else {
        element.target.style.backgroundColor = 'green';
        element.target.style.color = 'white';
      }
    });
  }

  addTask();

  function addCompromisse() {
    const buttonAdd = document.getElementById('btn-add');
    const input = document.getElementById('task-input');
    input.focus();
    buttonAdd.addEventListener('click', function () {
      const elementList = document.createElement('li');
      if (input.value.length === 0) {
        alert('[ERROR] Escreva algo para adicionar.')
      } else {
        elementList.innerText = input.value;
        const list = document.querySelector('.task-list');
        list.appendChild(elementList);
        input.value = '';
      }
      
    });
    input.addEventListener('keyup', function (event) {
      const elementList = document.createElement('li');
      if (event.keyCode === 13) {
        if (input.value.length === 0) {
          alert('[ERROR] Escreva algo para adicionar.');
        } else {
          elementList.innerText = input.value;
          const list = document.querySelector('.task-list');
          list.appendChild(elementList);
          input.value = '';
        }
      }
    });
  }
  
  addCompromisse();
}


