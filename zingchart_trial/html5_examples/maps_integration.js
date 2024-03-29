var gdata = {
	graphset : [
		{
	    	borderColor : "#ddd",
	    	borderRadius : 10,
	    	borderWidth : 4,
			backgroundColor : "none",
			type : "pie",
			title : {
				backgroundColor : "none",
				color : "#900",
				text : "COUNTRY"
			},
			x : 210,
			y : 0,
			width : 200,
			height : 200,
			scale : {
				sizeFactor : 0.45
			},
			series : [
				{
					values : [0],
					text : "A"
				},
				{
					values : [0],
					text : "B"
				},
				{
					values : [0],
					text : "C"
				},
				{
					values : [0],
					text : "D"
				}
			]
		},
	    {
	    	backgroundColor : "none",
	    	borderColor : "#ddd",
	    	borderRadius : 10,
	    	borderWidth : 4,
			x : 0,
			y : 0,
			width : 200,
			height : 200,
	    	tooltip : {
	    	},
	        shapes : [
	        	{
	            	type : "zingchart.maps",
	            	options : {
	            		name : "world.countries",
	            		id : "world-ita",
	            		x : 0,
	            		y : 0,
	            		width : 100,
	            		height : 100,
	            		items : ["ITA"],
		            	style : {
		            		gradientColors : "#329401 #ffffff #DD2213",
		            		gradientStops : "0.1 0.5 0.9",
		            		fillAngle : 180
		            	}
	            	}
	            },
	        	{
	            	type : "zingchart.maps",
	            	options : {
	            		name : "world.countries",
	            		id : "world-deu",
	            		x : 0,
	            		y : 100,
	            		width : 100,
	            		height : 100,
	            		items : ["DEU"],
		            	style : {
		            		gradientColors : "#000000 #DF2111 #FFC607",
		            		gradientStops : "0.1 0.5 0.9"
		            	}
	            	}
	            },
	        	{
	            	type : "zingchart.maps",
	            	options : {
	            		name : "world.countries",
	            		id : "world-fra",
	            		x : 100,
	            		y : 0,
	            		width : 100,
	            		height : 100,
	            		items : ["FRA"],
		            	style : {
		            		gradientColors : "#012F9F #ffffff #DD2213",
		            		gradientStops : "0.1 0.5 0.9",
		            		fillAngle : 180

		            	}
	            	}
	            },
	        	{
	            	type : "zingchart.maps",
	            	options : {
	            		name : "world.countries",
	            		id : "world-esp",
	            		x : 100,
	            		y : 100,
	            		width : 100,
	            		height : 100,
	            		items : ["ESP"],
		            	style : {
		            		gradientColors : "#CE0002 #FFED0A #CE0002",
		            		gradientStops : "0.1 0.5 0.9"
		            	}
	            	}
	            }
	        ]
	    }
	]
}