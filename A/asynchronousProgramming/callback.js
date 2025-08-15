// একটা ফাংশনকে অন্য ফাংশনের আর্গুমেন্ট হিসেবে পাঠানো, এবং নির্দিষ্ট সময় পরে চালানো। take ee callback bole
function getData(callback) {
  setTimeout(() => {
    console.log('data load complated');
    callback("'after loading data than this code run'");
  }, 2000);
}
getData(name => {
  console.log(name);
});
