// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data loaded!');
//     }, 2000);
//   });
// }
// async function loadData() {
//   console.log('loading....');
//   const data = await fetchData();
//   console.log(data);
// }
// loadData();
// -------------------------------------------
// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('data loaded');
//     });
//   });
// }
// getData()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// ---------------------------------------
// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('data loaded');
//     });
//   });
// }
// async function fetchData() {
//   try {
//     let data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();
// -----------------------------------------------
//API call with async/await
// async function loadPost() {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let post = await response.json();
//     console.log('posts:', post);
//   } catch (error) {
//     console.error('Error: ', error);
//   }
// }
// loadPost();
// -----------------------------------------------

async function fetchData() {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve('data loaded');
    }, 2222);
  });
  console.log(result);
}
fetchData();
