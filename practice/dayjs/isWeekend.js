import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

       
function isWeekend(){
  const today = dayjs();
  let date = today.add(5, 'days');

  if(date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday'){
    console.log(`${date.format('dddd')}: it's weekend you dumb`);
  } else{
    console.log(`${date.format('dddd')}: it's weekday you fucker`);
  }
}

export default isWeekend;