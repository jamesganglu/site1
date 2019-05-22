$(function(){
	$.scrollify({
		section : ".panel",
		sectionName : "section-name",
		interstitialSection : "",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		updateHash: true,
		touchScroll:true,
		before:function() {},
		after:function(index, sections) {
			$(sections[index]).addClass('visited');
		},
		afterResize:function() {},
		afterRender:function() {}
		});

	var skills = [
		'HTML', 
		'HTML 5', 
		'CSS', 
		'CSS3', 
		'XML', 
		'JSON', 
		'JavaScript', 
		'ES6', 
		'JSX',
		'PHP', 
		'ASP', 
		'JSP', 
		'MySQL', 
		'Node.js',
		'Sass', 
		'Less', 
		'Grunt', 
		'Gulp', 
		'Webpack', 
		'NPM', 
		'Responsive Web Design', 
		'WCAG 2.0', 
		'Git', 
		'SVN',
		'Bootstrap', 
		'Foundation Framework', 
		'Cordova', 
		'Backbone', 
		'Underscore', 
		'jQuery', 
		'React',
		'SQL Server', 
		'MySQL'
	];

	var backgroundTextColors = ['#00ff00', '#fff', '#ffff00'];

	/*backgroundAnimation({
		container:'#big-head',
		speed:10000,
		density:40,
		text:skills,
		colors:backgroundTextColors
	});*/
})

function backgroundAnimation(obj){
	var container = document.querySelector(obj.container);
	if(container!=null){
		var containerWidth = container.clientWidth;
		var skillsCount = obj.text.length;
		var skillsDom = [];
		var colorsCount = obj.colors.length;


		for(var i=0; i<skillsCount; i++){
			var dom = document.createElement('span');
			var domText = document.createTextNode(obj.text[i]);
			dom.appendChild(domText);
			dom.className = "text";
			skillsDom.push(dom)
		}

		
		setInterval(function(){
			var dom = skillsDom[Math.floor(Math.random()*skillsCount)]
			var domStyle = {
				left:Math.random(),
				color: obj.colors[Math.floor(Math.random()*colorsCount)],
				duration:parseInt(obj.speed/1000),
				deep:Math.floor(Math.random()*200)
			}

			dom.setAttribute('style',`left:${domStyle.left*100}%; color:${domStyle.color}; animation-duration:${domStyle.duration}s; transform: translateZ(${domStyle.deep}px);`)
			
			container.appendChild(dom);
			var removeIt = setTimeout(()=>{
				dom.remove();
				clearTimeout(removeIt)
			},obj.speed);

		},obj.speed/obj.density);
	}
}