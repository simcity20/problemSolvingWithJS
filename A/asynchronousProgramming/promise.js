// JavaScript Promise হলো এমন একটি অবজেক্ট যা ভবিষ্যতে কোনো asynchronous কাজের (যেমন API কল, ডেটাবেজ কোয়েরি, ফাইল রিড ইত্যাদি) ফলাফল রিপ্রেজেন্ট করে — সেটা সফল (resolved) বা ব্যর্থ (rejected) হতে পারে।

// এক কথায় — Promise হলো “আমাকে পরে ফলাফল দেবে” এরকম একটি ওয়াদা।

// Promise এর তিনটি স্টেট (States)
// Pending – শুরুতে Promise এই অবস্থায় থাকে, যখন এখনো কাজ শেষ হয়নি।

// Fulfilled – কাজ সফলভাবে শেষ হয়েছে এবং একটি রেজাল্ট রিটার্ন হয়েছে।

// Rejected – কাজ ব্যর্থ হয়েছে এবং একটি এরর এসেছে।
// ---------------------------------------------
// const promise = new Promise((resolve, reject) => {
//   let succes = true;
//   if (succes) {
//     resolve('Data load successful');
//   } else {
//     reject('Error loading data');
//   }
// });
// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;
// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve('Data load successful');
//   } else {
//     reject('Error loading data');
//   }
// });
// promise.then(result => console.log(result)).catch(error => console.log(error));
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const dataPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('data find out');
//   }, 2000);
// });
// dataPromise.then(result => {
//   console.log(result);
// });
// ------------------------------------------------------
// API কল Promise দিয়ে with Fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // JSON এ কনভার্ট
  .then(data => {
    console.log('API Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
