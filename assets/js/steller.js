/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;
			$(".nav-link").removeClass("active");

			// Add active class to the clicked link
			$(this).addClass("active");

			$('html, body').animate({
				scrollTop: $(hash).offset().top - 48
			}, 700, function(){
				// window.location.hash = hash;
			});
      	} 
    });
});

$(document).ready(function(){
	// When clicking on the Hire Me button (or any anchor link with .nav-link)
	$("#hireMeBtn").on('click', function(event) {
  
	  // Check if the hash exists (i.e., if the target section is specified)
	  if (this.hash !== "") {
		
		// Prevent the default anchor behavior
		event.preventDefault();
  
		var hash = this.hash;
  
		// Animate smooth scroll to the target section
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 700, function() {
		  // Optionally update the URL (this part can be skipped to prevent the #)
		//   window.location.hash = hash;
		});
	  } 
	});
  });
  


  