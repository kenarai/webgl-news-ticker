//my.js

function pipeCallback(obj)  {
 	
	var q = 0;

	while (q < obj.count) {

  		var buildstring = null;
  		
		buildstring = "<b><a href=" + obj.value.items[q].link + " target=\"_blank\">" + obj.value.items[q].title + "</a></b>. <span id=desc>" + obj.value.items[q].description + "</span><br />";
		
		var loop = 0;
		
		while (loop < 5) {
			var myDelay = (loop * 7500 * (obj.count + 1) ) + (q * 7500);
			myFunction(buildstring, myDelay);
			loop++;
		}
		
		q++;
 	}
 	
	document.write("</div>");
}

function myFunction(str, del) {
	
	var output = document.createElement( 'div' );
	output.style.cssText = 'position: absolute; left: 50px; top: 300px; font-size: 18px';
	document.body.appendChild( output );
	
	var tween = new TWEEN.Tween( { x: 50, y: 0 } )
		.to( { x: 400 }, 7000 )
		.delay(del)
		.easing( TWEEN.Easing.Linear.None )
		.onUpdate( function () {
		
			if (Math.round( this.x ) == 400) {
				str = null;
			}
			
			output.innerHTML = str;
			output.style.left = this.x + 'px';

		} )
		.start();
	
