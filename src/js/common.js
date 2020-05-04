




	/* backgroundAnimation({
		container:'#words-drop-section',
		speed:10000,
		density:60,
		text:skills,
		colors:backgroundTextColors
	}); */


(function(){	
	var keywords = [
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
		'Angular',
		'ionic',
		'nativescript',
		'headless CMS',
		'typescript'
	];
	var skills = [
		{name:'Front end',list:['HTML', 'HTML 5', 'CSS', 'CSS3', 'XML', 'JSON', 'JavaScript', 'TypeScript', 'ES6', 'JSX']},
		{name:'Back end', list:['PHP', 'ASP', 'JSP', 'MySQL', 'Node.js', 'express.js']},
		{name:'Techniques', list:[ 'Sass', 'Less', 'Grunt', 'Gulp', 'Webpack', 'NPM', 'Responsive Web Design', 'WCAG 2.0', 'Git', 'SVN']},
		{name:'Frameworks', list:['Bootstrap', 'Foundation Framework', 'Cordova', 'Ionic', 'NativeScript', 'Backbone', 'Underscore', 'jQuery', 'React', 'Angular']},
		{name:'CMS', list:['Drupal', 'Wordpress', 'headless CMS']},
		{name:'Tools', list:['Photoshop', 'Illustrator', 'MS Powerpoint', 'MS Word', 'Tortoise SVN', 'Git', 'Jira', 'Mantis', 'Visual Studio', 'Eclipse']},
		{name:'Marketing', list:['Mailchimp', 'Campaign Monitor']}
	];

	var canWorkOn = ['compose UI with HTML/CSS/JS', 'compose Email', 'build Single Page App', 'closely work with backend team', 'build hybrid mobile app'];

	var backgroundTextColors = ['#00ff00', '#fff', '#ffff00'];
	function animateLogo(isAnimate){
		if(!isAnimate)
			return;
		var logoLetters = document.querySelectorAll('.header-bar .name span');
		var logoStringLength = logoLetters.length;
		var counter = 0;
		var timer = setInterval(function(){
			if(counter == logoStringLength)
				counter = 0;

				for(var i = 0; i < logoStringLength; i++){
					logoLetters[i].classList.remove('on')
				}
				logoLetters[counter].classList += ' on'
			counter++;
		},1000)
	}

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

	var pageBody = document.querySelector('body');
	window.onload=function(){
		var menuBtn = document.querySelector('.menu-toggle');
		
		menuBtn.addEventListener('click', function(){
			pageBody.classList.toggle('show-menu');
		});
	}
})()