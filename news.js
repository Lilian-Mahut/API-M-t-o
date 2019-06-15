let darkVador = function(biscuit) {
  let actu = document.getElementById("containerNews");
  actu.innerHTML = 
}

function googleEstTonAmi() {
  let gNews = document.getElementById("lieu").value;
  let gNews = 'https://newsapi.org/v2/everything?q=' + lieu + 'sortBy=popularity&' + 'apiKey=03830414f71844a08eb1ebf74855c8d9';
  $.get(url, darkVador).done(function()  {
  })

  .fail(function()  {
    alert("error");
  })
  .always(function()  {
  });
}

// https://newsapi.org/v2/everything?q=Paris&sortBy=popularity&apiKey=03830414f71844a08eb1ebf74855c8d9