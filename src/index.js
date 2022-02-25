import "./styles.css";

const strLength = (name, getLengthFn) => {
  console.log(`Your name is ${getLengthFn(name)} chars long`);
};
const getLength = (name) => name.length;
strLength("Disha", getLength);

const willThanosKillMe = (name, aliveCb, deadCb) =>
  name % 2 === 0 ? aliveCb(name) : deadCb(name);

const aliveFormat = (name) => console.log(`${name} is alive`);
const deadFormat = (name) => console.log(`${name} is dead`);

willThanosKillMe("Saini", aliveFormat, deadFormat);
willThanosKillMe(
  "Divyang",
  () => console.log("I am even"),
  () => console.log("I am odd")
);

const printMsgAfterDelay = (msg, delay) =>
  setTimeout(() => console.log(msg), delay);
printMsgAfterDelay("Ishan", 7000);
// SetTimeout returns a setTimer when it is run in the console

// Guess the output : A,C,B
// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('C'), 0)
// setTimeout(() => console.log('B'), 0)

// Guess the output:  B A C
// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 400)
// setTimeout(() => console.log('C'), 1300)

// Guess the output: A C B
// console.log('A')
// setTimeout(() => console.log('B'), 0)
// console.log('C')

// SetInterval
// Syntax: setInterval(callbackFn,timeRequiredtoExecute)
// 6.1 write a function which takes a message and time. The function should print that message every X interval.

// const displayMsgAfterTime=(msg,time)=>setInterval(()=>console.log(msg),time)
// displayMsgAfterTime("Slepp",140000000000000000000000000)

// 6.2 Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.
const printCountdown=(number)=>{
  const timer=setInterval(()=>{
    console.log(number);
    number--;
    if(number===0){
      clearInterval(timer);
      console.log("Bang bang")
    }
  },1000)
}

printCountdown(4);