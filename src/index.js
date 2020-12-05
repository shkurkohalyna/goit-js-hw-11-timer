import './styles.css';

class CountdownTimer{
    constructor({ selector, targetDate }) {
        // this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`),
            timerFace: document.querySelector('#timer-1'),
        };
    }
     
    start() {
        setInterval(() => {
            this.currentTime = Date.now();
            const deltaTime = this.targetDate - this.currentTime;
            
            this.updateTimer(this.getTimeComponents(deltaTime));
        }, 1000);
         
    };

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.innerHTML = days,
        this.refs.hours.innerHTML = hours,
        this.refs.mins.innerHTML = mins,
        this.refs.secs.innerHTML = secs;
    }

   pad(value) {
    return String(value).padStart(2, '0');
   }

    getTimeComponents(time) {
        
        const days = this.pad( Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

       return { days, hours, mins, secs };
       console.log({ days, hours, mins, secs })
    }
    
}
// const refs = {
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),
//     currentDate: document.querySelector('.js-target-date'),
// }

// class CountdownTimer {
//   constructor(refs) {
//     this.selector = refs.selector;
//     this.targetDate = refs.targetDate;
//     this.startCountdown();
//   }
//   createTimer() {
//     return new Promise((resolve, reject) => {
//       const timerRef = document.querySelector(this.selector);
//       timerRef && timerRef.children.length === 0
//         ? resolve(timerRef)
//         : reject('The timer cannot be found by ID');
//     });
//   }
//   parseTimerHTML(timerRef) {
//   }
//   startTimer({ timerRef, titleRef, valueRef, labelRef }) {
//   }
//   animateTimer({ target }) {
//   }
//   startCountdown() {
//     return this.createTimer()
//       .then(this.parseTimerHTML)
//       .then(this.startTimer.bind(this))
//       .catch(err => {
//         console.warn(err);
//       });
//   }
// }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
timer.start();
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);