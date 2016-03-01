 	function getStyle(obj,attr){
            if(obj.currentStyle){
                 return obj.currentStyle[attr];
              }
            else{
                 return getComputedStyle(obj,false)[attr];
                }
            }
 
	function startMove(obj,attr,iTarget,fn){
		clearInterval(obj.timer);	
		obj.timer=setInterval(function(){
			if(attr =='opacity'){
				var icur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				var icur=parseInt(getStyle(obj,attr));
			}
			var speed = (iTarget-icur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(iTarget == icur){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
			else{
				if(attr =='opacity'){
					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
					obj.style.opacity=(icur+speed)/100;
				}
				else{
					obj.style[attr]=icur+speed+'px';
				}
			}
		},30)
	}