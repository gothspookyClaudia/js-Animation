 	function getStyle(obj,attr){
            if(obj.currentStyle){
                 return obj.currentStyle[attr];
              }
            else{
                 return getComputedStyle(obj,false)[attr];
                }
            }
 
	function startMove(obj,json,fn){
		clearInterval(obj.timer);	
		obj.timer=setInterval(function(){
		for(attr in json){
				var flag=true;
				//1.get values
				var icur=0;
				if(attr =='opacity'){
					icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					icur=parseInt(getStyle(obj,attr));
				}
				//2.calculate the speed
				var speed = (json[attr]-icur)/8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if(json[attr]!=icur){
					flag=false;
				}
				
				if(attr =='opacity'){
					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
					obj.style.opacity=(icur+speed)/100;
				}
				else{
						obj.style[attr]=icur+speed+'px';
				}
				
				//3.when to stop
				if(flag==true){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
			}
		},30)
	}