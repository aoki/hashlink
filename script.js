var handle = function(e){
  var url = `${window.location.href}#${this.id}`;
  console.log(url);
  document.addEventListener('copy', function(e2) {
    e2.preventDefault();
    e2.clipboardData.setData('text/plain', url);
  });
  document.execCommand('copy');
};
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach( e => {
  e.addEventListener('click', handle);
});
