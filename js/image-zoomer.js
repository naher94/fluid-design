window.addEventListener('DOMContentLoaded', function () {
  var imgs = document.getElementsByClassName('zoomable-image');
  
  for(var i = 0; i < imgs.length; i++) {
    (function (ii) {
      var img = imgs[i];
      img.addEventListener('click', function () {
        var image = new Image();

        image.src = img.src;

        var viewer = new Viewer(image, {
          hidden: function () {
            viewer.destroy();
          },
        });

        // image.click();
        viewer.show();
      });
    })(i);
  }
});