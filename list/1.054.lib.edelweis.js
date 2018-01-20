// Javascript executable.
// level(0)
// Javascript executable library v.1.054
// SET PROduction Europe © 21.06.2014.

var edel={n:'edelwiss',
		w:window,
		d:document,
		l:location.href,
		
		dol:function(f){var l=edel.w.onload;edel.w.onload=(typeof(edel.w.onload)!=='function')?f:function(){l?l():false;f();};},

// Replace or find all numbers edel.ran('day 2!',false) returns '2' or edel.ran('day 2!',true) returns 'day !'
//	edel.ran(string,option)	
		ran:function(s,o){s=s.toString();if(o){return s.replace(/([\d]+)/g,'');}else{return s.replace(/([\D]+)/g,'');}},

// Replace or find all letters edel.ran('day 2!',false) returns 'day' or edel.ran('day 2!',true) returns '2!'
//	edel.ral(string,option)	
		ral:function(s,o){s=s.toString();if(o){return s.replace(/([a-zA-Z]+)/g,'');}else{return s.replace(/([\W\d]+)/g,'');}},

// Replace or match all special symbols edel.ran('day 2!',false) returns ' !' or edel.ran('day 2!',true) returns 'day2'
//	edel.ras(string,option)	
		ras:function(s,o){s=s.toString();if(o){return s.match(/([^\d\w]+)/g);}else{return s.replace(/([\w]+)/g,'');}},
		
		iof:function(e,o){if(e.indexOf(o)!==-1){return true;}else{return false;}},

		tof:function(v){if(typeof(v)==='undefined'){return true;}else{return false;}},
		
		cop:function(e){e=typeof(e)==='object'?Object.prototype.toString.call(e)==='[object NodeList]'||Object.prototype.toString.call(e)==='[object Array]'||Object.prototype.toString.call(e)==='[object HTMLDomElement]'?e:[e]:edel.d.querySelectorAll(e);return e;},
		
		rdc:function(n){n=n.replace(/([.*+?\^=!:edel{}()|\[\]\/\\])/g,'\\edel1');var r=new RegExp('(?:^|;)\\s?'+n+'=(.*?)(?:;|edel)','i'),m=edel.d.cookie.match(r);return m&&unescape(m[1]);},
	
		gwd:function(c){(typeof(w.innerWidth)==='number')?c=[w.innerWidth,w.innerHeight]:(edel.d.documentElement&&(edel.d.documentElement.clientWidth||edel.d.documentElement.clientHeight))?
				c=[edel.d.documentElement.clientWidth,edel.d.documentElement.clientHeight]:(edel.d.body&&(edel.d.body.clientWidth||edel.d.body.clientHeight))?c=[edel.d.body.clientWidth,edel.d.body.clientHeight]:c=false;return c;},

//	edel.dce(element,'event-name','data');	
		dce:function(c,n,d){
				if(!c||!n){return;}
				var i,
					q=edel.cop(c),
					e=new Event(n,d);
				for(i=0;i<q.length;i++){
					o=q[i];
					o.dispatchEvent(e);
				}
		},
		
		djb:function(s){
				if(!s){return;}
				var i,c,h=5381;
				for(i=0;i<s.length;i++){
					c=s.charCodeAt(i);
					h=((h<<5)+h)+c;
				}
				return 'edel'+Math.abs(h);
		},

//	edel.rwv('.config',data)		
		rwv:function(e,p){
				if(!e){return;}
				var a,b,c={},d={},
					q=edel.cop(e);
				for(i=0;i<q.length;i++){
					a=q[i].getAttribute('id');
					a=!a?i:a;
					d[a]=q[i].value;
					if(p){
						c[a]=q[i];
						c[a].value=p[a];
					}
				}
				return d;
		},

//	edel.jsn(link,{data,async,type},callback);	
		jsn:function(l,d,c){
				if(!l){return;}

				var o,h,u,
					a=a.async?a.async:true,
					t=d.type?d.type:'GET',
					e=escape(JSON.stringify(d.data)),
					x=new XMLHttpRequest();
				if(typeof(d.data)==='object'){
					h=edel.djb(e);
					u=l+h+e;
				}else{
					h=edel.djb(escape(d.data+new Date));
					u=l+h;
				}
				x.open(t,u,a);
				x.send(null);
				x.onreadystatechange=function(){
					if(x.readyState===4&&x.status===200){
						o=x.response.split(h);
						if(o[1]){c.call(JSON.parse(o[1]));}
					}
				}
				return x;	
		},

//	edel.xhr(link,{data,async,type},callback);
		xhr:function(l,d,c){
				if(!l){return;}
				
				var u=d.data?l+'/?'+d.data:l,
					a=d.async?d.async:true,
					t=d.type?d.type:'GET',
					x=new XMLHttpRequest();
				x.open(t,u,a);
				x.send(null);
				x.onreadystatechange=function(){
					if(x.readyState===4&&x.status===200){
						x?c&&typeof(c)==='function'?c.call(x):false:false;
					}
				}
				return x;	
		},

//	edel.rdn(min,max,amout,step);		
		rdn:function(f,t,l,s){
				if(!f||!t||1>l){
					return [0];
				}else{
					var i,r,e,
						a=[];
						s=s?s*1:1;
						f=f?f*1:1;
						t=t?t*1:10;
						l=l?l*1:(t-f)/s;
					while(a.length<l){
						r=s*(Math.floor(Math.random()*(((t-f)/s)+1))+(f/s));
						e=false;
						for(i=0;i<a.length;i++){
							if(a[i]===r&&((t-f)/s)>=l){e=true;break;}
						}
						!e?a[a.length]=r:false;
					}
					return a;
				}		
		},

//	edel.toc('#midBox',{show:'showMgr',hide:'hideMgr'});
		toc:function(e,p){
				if(e){
					var i,o,
						q=edel.cop(e),
						s=p.show?p.show:'showClass',
						h=p.hide?p.hide:'hideClass';
					for(i=0;i<q.length;i++){
						o=q[i];
						o.className=edel.iof(o.className,s)?o.className.replace(' '+s,'')+' '+h:o.className.replace(' '+h,'')+' '+s;
					}
				}
		},

//	edel.uds('#videoBox',{ratio:'5:4',size:98,resize:[0,120],parent:'body',alignment:false});
		uds:function(n,p){
				if(n){
					var x,y,i,e,
						q=edel.d.querySelectorAll(n),
						f=p.size?p.size.replace('%',''):100,
						c=p.resize?p.resize:[0,0],
						s=p.ratio?p.ratio.split(':')[0]/p.ratio.split(':')[1]:1,
						b=p.parent?edel.d.querySelector(p.parent):edel.d.querySelector('body'),
						w=b.offsetWidth-(c[0]*1),
						h=b.offsetHeight-(c[1]*1),
						r=(w/100)*f,
						t=(h/100)*f;
					
					for(i=0;i<q.length;i++){
						e=q[i];
						if(h<w||h<(e.offsetHeight+(h-t))){
							e.style.height=t.toFixed(0)+'px';
							e.style.width=((e.offsetHeight*s)).toFixed(0)+'px';
						}
						if(w<h||w<(e.offsetWidth+(w-r))){
							e.style.width=r.toFixed(0)+'px';
							e.style.height=((e.offsetWidth/s)).toFixed(0)+'px';
						}
						if(!p.alignment){
							x=((w-e.offsetWidth)/2).toFixed(0)+'px';
							y=((h-e.offsetHeight)/2).toFixed(0)+'px';
					
							e.style.marginLeft=x;
							e.style.marginRight=x;
							e.style.marginTop=y;
							e.style.marginBottom=y;
						}
					}
				}
		},

//	edel.tbs('.mainNav','.pageBox',{active:0,selfclose:true},callback);
		tbs:function(n,y,f,r){
				if(n&&y){
					var o,a,b,q,s,h,
						i=f.active*1,
						z=n.replace(/[#.]/g,''),
						j=' '+z+'ActHed',
						k=' '+z+'ActTab',
						w=' '+z+'HidHed',
						v=' '+z+'HidTab', 
						e=edel.d.querySelectorAll(n),
						p=y?edel.d.querySelectorAll(y):edel.d.querySelectorAll('.tabpage'),

						l=function(q,s){
							h=this.i;
							q=this.q;
							for(a=0;a<q.length;a++){
								q[a].className=a!==h?							// if Not this
									edel.iof(q[a].className,w)?					// if HidHed
											q[a].className.replace(j,'')		// -ActHed
											:q[a].className.replace(j,'')+w		// -ActHed +HidHed
													
									:edel.iof(q[a].className,j)?					// if ActHed
											f.selfclose?						// if selfclose
												q[a].className.replace(j,'')+w	// -ActHed +HidHed
												:q[a].className.replace(w,'')	// -HidHed
											:q[a].className.replace(w,'')+j;	// -HidHed +ActHed

								p[a].className=a!==h?							// if Not this
									edel.iof(p[a].className,v)?					// if HidTab
											p[a].className.replace(k,'')		// -ActTab
											:p[a].className.replace(k,'')+v		// -ActTab +HidTab
												
									:edel.iof(p[a].className,k)?					// if ActTab
											f.selfclose?						// if selfclose
												p[a].className.replace(k,'')+v	// -ActTab +HidTab
												:p[a].className.replace(v,'')	// -HidTab
											:p[a].className.replace(v,'')+k;	// -HidTab +ActTab
							}
							r&&typeof(r)==='function'?r.call(this):false;
						};
					if(p.length<1){return;}
					for(o=0;o<e.length;o++){
						q=e[o].querySelectorAll(n+'> *');
						i=i>=0&&i<=q.length?i:false;
						for(b=0;b<q.length;b++){
							q[b].i=b;
							q[b].q=q;
							q[b].onclick=l;
							q[b].className=(b!==i)?q[b].className.replace(j,'')+w	// -ActHed +HidHed
							:q[b].className.replace(w,'')+j;						// -HidHed +ActHed
							p[b].className=(b!==i)?p[b].className.replace(k,'')+v	// -ActTab +HidTab
							:p[b].className=p[b].className.replace(v,'')+k;			// -HidTab +ActTab
						}	
					}
					
				}
		},
		
//	edel.sld('.slideBox',{slide:'.slide',head:'.slideHead'},10000,500);		
		sld:function(e,w,t,r){
				if(!e){return;}
				r=r?r:400;
				t=t?t:10000;
				var i,I=0,
					H=w.head?w.head:'h2',
					S=w.slide?w.slide:'a',
					z=e.replace(/[#.]/g,''),
					A=' '+z+'HShow',
					B=' '+z+'PShow',
					C=' '+z+'GShow',
					a=' '+z+'HHide',
					b=' '+z+'PHide',
					c=' '+z+'GHide',
					w=' '+z+'animated',
					q=edel.cop(e),
		
					Q=function(f){
						var h,p,g,j,F=f;
						if(I<F.length-1){I++;}else{I=0;}
			
						j=I-1<0?F.length-1:I-1;
						h=F[I].querySelector(H);
						p=F[I].querySelector('p');
						g=F[I].querySelector('img');
						F[j].style.display='none';
						F[I].style.display='block';
			
						h.className=edel.iof(h.className,w)?h.className:h.className+w;
						p.className=edel.iof(p.className,w)?p.className:p.className+w;
						g.className=edel.iof(g.className,w)?g.className:g.className+w;
						h.className=h.className.replace(a,'');
						p.className=p.className.replace(b,'');
						g.className=g.className.replace(c,'');
			
						edel.w.setTimeout(function(){
							h.className=h.className+A;
						},r*1);
			
						edel.w.setTimeout(function(){
							p.className=p.className+B;
						},r*2);
			
						edel.w.setTimeout(function(){
							g.className=g.className+C;
						},r*3);
			
			
						edel.w.setTimeout(function(){
							h.className=h.className.replace(A,'')+a;
						},t-(r*1));
			
						edel.w.setTimeout(function(){
							p.className=p.className.replace(B,'')+b;
						},t-(r*2));
			
						edel.w.setTimeout(function(){
							g.className=g.className.replace(C,'')+c;
						},t-(r*3));
			
						edel.w.setTimeout(function(){Q(F);},t);
					};

				if(q.length>0){
					for(i=0;i<q.length;i++){
						Q(q[i].querySelectorAll(S));
					}
				}
		},

//	edel.get(element)[returned object]	
		get:function(e){
				var X,Y,Z,
					s=getComputedStyle(e,null),
					g=(
						s.webkitTransform||
						s.MozTransform||
						s.msTransform||
						s.oTransform||
						s.transform
					),
					c=g.split(/\s*[(),]\s*/).slice(1,-1);
					d=function(v){return Math.round(v*(180/Math.PI));};
        
				if(c.length===6){	//	matrix() (3x2)
					m={
						m11:+c[0],	m21:+c[2],	m31:0,	m41:+c[4],
						m12:+c[1],	m22:+c[3],	m32:0,	m42:+c[5],
						m13:0,		m23:0,		m33:1,	m43:0,
						m14:0,		m24:0,		m34:0,	m44:1
					};
				}else{
					if(c.length===16){	//	matrix3d() (4x4)
						m={
							m11:+c[0],	m21:+c[4],	m31:+c[8],	m41:+c[12],
							m12:+c[1],	m22:+c[5],	m32:+c[9],	m42:+c[13],
							m13:+c[2],	m23:+c[6],	m33:+c[10],	m43:+c[14],
							m14:+c[3],	m24:+c[9],	m34:+c[11],	m44:+c[15]
						};
        
					}else{	//	handle 'none' or invalid values.
		                m={
		                    m11: 1, m21: 0, m31: 0, m41: 0,
		                    m12: 0, m22: 1, m32: 0, m42: 0,
		                    m13: 0, m23: 0, m33: 1, m43: 0,
		                    m14: 0, m24: 0, m34: 0, m44: 1
		                };
					}
				}

				if(Math.cos(Math.asin(-m.m13))!==0){
					X=d(Math.atan2(m.m23,m.m33));
					Z=d(Math.atan2(m.m12,m.m11));
				}else{
					X=d(Math.atan2(-m.m31,m.m22));
					Z=0;
				}
				Y=d(Math.atan2(-m.m13,m.m11));

				return {	
						rotateX:X+'deg',//deg
						rotateY:Y+'deg',//deg
						rotateZ:Z+'deg',//deg
						skewX:m.m21+' ',
						skewY:m.m12+' ',
						scaleX:m.m11+' ',//n
						scaleY:m.m22+' ',//n
						scaleZ:m.m33+' ',//n
						scale:(m.m11*m.m22*m.m33)+' ',//n
						translateX:m.m41+'px',//px
						translateY:m.m42+'px',//px
						translateZ:m.m43+'px',//px
						perspective:m.m34+' ',
						matrix:m
						};
			},

//	edel.ges(element,property)[1]	
		ges:function(e,r){
				if(edel.iof(r,'transform')){
					return edel.get(e)[r.split(':')[1]].split(/([0-9\-\.]+)/);
				}else{
					var v='';				
					if(edel.d.defaultView&&edel.d.defaultView.getComputedStyle){
						v=edel.d.defaultView.getComputedStyle(e,'').getPropertyValue(r);
					//	console.log('get: '+e+' - '+r+':'+v);
					}else{
						if(e.currentStyle){
							r=r.replace(/\-(\w)/g,function(strMatch,p1){return p1.toUpperCase();});
							v=e.currentStyle[r];
						}
					}
					return v.split(/([0-9\-\.]+)/);
				}	
		},
		
//	edel.anm('.pageBox','margin-left','0px',1000,25);	edel.anm('.pageBox','transform:translateX','0px',1000,25);
		anm:function(e,p,v,t,r){
				if(e){
					r=r?r:25;
					var o,f,s,i,d,
						m=false,
						q=edel.cop(e),
						l=v.split(/([0-9\-\.]+)/),
						u=['-webkit-','-moz-','-ms-','-o-',''],
						
						a=function(c,s){
							s=edel.ges(c,p);
							d=new Date().getTime();
							p=p.replace(/\-(\w)/g,function(strMatch,p1){return p1.toUpperCase();});
							if(edel.iof(p,'transform')){p=p.split(':');m=true;}else{m=false;}
							i=edel.w.setInterval(function(){
										f=Math.min(1,(new Date().getTime()-d)/(t*1));
										if(m){
											for(o=0;o<u.length;o++){
												c.style[u[o]+p[0]]=p[1]+'('+((s[1]*1)+(f*((l[1]*1)-(s[1]*1))))+l[2]+')';
											}
										}else{
											c.style[p]=((s[1]*1)+(f*((l[1]*1)-(s[1]*1))))+l[2];
										}

										if(f===1){edel.w.clearInterval(i);}
									},1);
						    c.style[p]=(s[1]*1)+s[2];
						};
				
					for(o=0;o<q.length;o++){a(q[o],p);}
				}else{
					return;
				}
		},
		
//	edel.pls('.mainNav','.dLayer',active,time,callback);		
		pls:function(n,y,c,t,f){
				if(edel.d.querySelectorAll(n)[0]&&edel.d.querySelectorAll(y)[0]){
					c=c?c*1:0;
					t=t?t*1:1000;
					var o,a,b,q,i,h,
						e=edel.d.querySelectorAll(n),
						p=y?edel.d.querySelectorAll(y):edel.d.querySelectorAll('.layers'),
						j=edel.ges(p[0].parentNode,'width')[1]/100,
						z=function(k,i,x){
							i=i?i:this.i;
							x=x?x:this.t;
							for(a=0;a<p.length;a++){
								edel.anm(p[a],'left','-'+((((100*i)/p.length)*(a+2))*j).toFixed(0)+'px',x+1);
								a===p.length-1&&x>0?f&&typeof(f)==='function'?f.call(this):false:false;
							}
						};

					z(null,c,1);
					for(h=0;h<p.length;h++){p[h].style.zIndex=10+i;p[h].style.left='0px';}
					for(o=0;o<e.length;o++){
						q=e[o].querySelectorAll(n+' > *');
						
						for(b=0;b<q.length;b++){
							q[b].i=b;
							q[b].t=t;
							q[b].onclick=z;
						}			
					}
				}
		},

//	edel.red(element,{min:'100',max:'250',step:'10',time:'400',framerate:'25'});		
		red:function(e,w){
				if(e){
					var v,i,p,j,n,
						horNum=1.4,
						verNum=5,
						f=w.min?w.min*1:0,
						t=w.max?w.max*1:100,
						s=w.step?w.step*1:1,
						a=w.time?w.time*1:false,
						x=w.framerate?w.framerate*1:false,
						q=edel.cop(e),
						r=edel.rdn(f,t,q.length,s),
						b=['border-top-left-radius','border-top-right-radius','border-bottom-left-radius','border-bottom-right-radius'],
						c=function(i,a){
							n=0;
							v=r[i]*1;
							p=i<=0?0:i-1;
							for(j=0;j<p;j++){n=n+r[j]*1;}
							if(a){
								edel.anm(q[i],'width',v+'px',a,x);	
								edel.anm(q[i],'height',v+'px',a,x);
								edel.anm(q[i],b[0],v/2+'px',a,x);
								edel.anm(q[i],b[1],v/2+'px',a,x);
								edel.anm(q[i],b[2],v/2+'px',a,x);
								edel.anm(q[i],b[3],v/2+'px',a,x);
								edel.anm(q[i].children[0],'top',(v-(edel.ges(q[i].children[0],'height')[1]*1))/2+'px',a,x);
								edel.anm(q[i],'top',Math.floor((v-(r[p]/(s*2)))*(Math.random()*horNum))+'px',a,x);								
								i>0?edel.anm(q[i],'left',(r[p]+n)-Math.floor(Math.random()*((t+f)/verNum))+'px',a,x):false;
							}else{
								q[i].style.width=v+'px';
								q[i].style.height=v+'px';
								q[i].style.borderRadius=v/2+'px';
								q[i].children[0].style.top=(v-edel.ges(q[i].children[0],'height')[1])/2+'px';
								q[i].style.top=Math.floor((v-(r[p]/(s*2)))*(Math.random()*horNum))+'px';
								q[i].style.left=i>0?((r[p]*1)+n)-Math.floor(Math.random()*((t+f)/verNum))+'px':'0px';
							}
						};
								
					if(q.length>0){
						for(i=0;i<q.length;i++){c(i,a);}
					}
					
					
				}
		},

//	edel.sic(element,{delay:'1000',time:'200',interval:'50%',add:'string',remove:'string'},'callback');			
		sic:function(e,o,r){
				if(!e){return;}
				var p,
					d=o.delay?(o.delay*1)+1:1000,
					t=o.time?(o.time*1)+1:1000,
					i=o.interval?(edel.ran(o.interval)*1)/100:0.5,
					a=o.add?o.add:'addedClass',
					q=edel.cop(e),
					
					c=function(p){
						edel.w.setTimeout(function(){
							q[p].className=q[p].className.replace(o.remove,'')+' '+a;
							p===q.length-1?r&&typeof(r)==='function'?r.call(p):false:false;
						},t*(p*i));
					};

				edel.w.setTimeout(function(){
					if(q.length>0){
						for(p=0;p<q.length;p++){c(p);}
					}
				},d);
		},
		
//	edel.dos(element,'callback');		
		dos:function(e,r){
				var i,h,a,q=edel.cop(e),
					c=function(){
						h=this.innerHTML;
						a=this.getAttribute('data-t');
						this.a=a;
						this.b=true;
						
						if(!edel.iof(a,'#compleate')){
							r&&typeof(r)==='function'?r.call(this):false;
							if(this.b){
								this.setAttribute('data-t',a+'#compleate');
								edel.iof(h,'www')||edel.iof(a,'www')?edel.w.open('http://'+a,''):false;
								edel.iof(h,'[d]')||edel.iof(h,'@')||edel.iof(a,'@')?edel.w.location.href='mailto:'+a+'?subject=Сообщение с сайта '+edel.l.split('#')[0]+'&body=Ваше сообщение':false;
								edel.iof(h,'+')||edel.iof(a,'+')?edel.w.location.href='tel:'+a:false;
								edel.iof(h,'ул.')||edel.iof(a,'ул.')?edel.w.open('https://maps.google.ru/?q='+a,''):false;
								edel.iof(h,'Skype')||edel.iof(a,'Skype')?edel.w.location.href='skype:'+a+'?call':false;
							}							
						}else{
							this.setAttribute('data-t',a.replace('#compleate',''));
						}
					};
				
				for(i=0;i<q.length;i++){q[i].onclick=c;}
		},

//	edel.tfs('#body');		
		tfs:function(n,a){var e=n?edel.d.querySelector(n):edel.d.documentElement;(!edel.d.fullscreenElement&&!edel.d.mozFullScreenElement&&!edel.d.webkitFullscreenElement)?
				e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):
				e=false:edel.d.cancelFullScreen?edel.d.cancelFullScreen():edel.d.mozCancelFullScreen?edel.d.mozCancelFullScreen():edel.d.webkitCancelFullScreen?edel.d.webkitCancelFullScreen():false;		
		},

//	edel.mfs(element,'url',langArray,'callback');
		mfs:function(c,u,t,d){
				if(!c||!u){return;}
				var i,l,r,o,y,f,p,a,S,F,
					C=false,
					b=' fmSelected',
					q=edel.cop(c),
					t=t?t:{'nme':'Name','sze':'Size','tpe':'Type','dte':'Date'},
					
					A=function(e,a,g){
						a={};
						for(i=0;i<j.length;i++){
							g=this.g;
							a[i]={};
							a[i][g.files[j[i]].tpe]=g.path+'/'+g.files[j[i]].nme;
							if(i===j.length-1){edel.jsn(u+'?'+this.a+'=',a,d);}
						}
					},
					
					s=function(g){
						r=edel.d.querySelectorAll('.fmRow');
						F=edel.d.querySelectorAll('.fmFunc > *');
						
						edel.w.onkeydown=function(e){
							e=e||event;
							C=e.keyCode===17||e.keyCode===91?true:false;
						};
						
						edel.w.onkeyup=function(e){
							e=e||event;
							C=e.keyCode===17||e.keyCode===91?false:true;
						};
						
						o=function(){
							
							edel.w.setTimeout(function(){y=false;},300);
							
							if(C){
								if(!j){j=[this.i];}
								S=j.indexOf(this.i);
								if(S>-1){j.splice(S,1);}else{j.push(this.i);}
							}else{
								j=[this.i];
							}
							
							for(i=0;i<j.length;i++){
								r[j[i]].className=edel.iof(r[j[i]].className,b)?r[j[i]].className:r[j[i]].className+b;
							}
							
							for(i=0;i<r.length;i++){
								r[i].className=edel.iof(j,i)?r[i].className:r[i].className.replace(b,'');
								if(i===this.i){
									if(y){
										a=g.files[i].tpe;
										edel.jsn(u+'?select=',{0:{a:g.path+'/'+g.files[i].nme}},d);
									}
								}
							}
							y=true;
						}

						for(i=0;i<r.length;i++){
							r[i].i=i;
							r[i].onclick=o;
						}
						
						for(i=0;i<F.length;i++){
							F[i].g=g;
							F[i].a=F[i].getAttribute('data-a');
							F[i].onclick=A;
						}
					},
					
					d=function(){
						j=false;
						p=this.path;
						f=this.files;
						a=p.split('/');
						
						l='<div class="fmHead"><ul class="fmPath">';
			
						for(i=0;i<a.length;i++){
							l=l+'<li>'+a[i]+'</li>';
						}
						
						l=l+'</ul><table class="fmHTable"><tr>'+
							'<td class="fmName">'+t.nme+'</td>'+
							'<td class="fmSize">'+t.sze+'</td>'+
							'<td class="fmType">'+t.tpe+'</td>'+
							'<td class="fmDate">'+t.dte+'</td>'+
							'</tr></table></div><div class="fmBox"><table class="fmFTable">';
		
		
						for(i=0;i<f.length;i++){
							m=t.Directory?t[f[i].mie]:f[i].mie;
							l=l+'<tr class="fmRow"><td class="fmName fmType-'+f[i].mie+'">'+f[i].nme+'</td>'+
								'<td class="fmSize">'+f[i].sze+'</td>'+
								'<td class="fmType">'+m+'</td>'+
								'<td class="fmDate">'+f[i].mod+'</td></tr>';
						}
						
						l=l+'</table></div><ul class="fmFunc">'+
						'<li class="fmFnCut" data-a="cut"></li>'+
						'<li class="fmFnCopy" data-a="copy"></li>'+
						'<li class="fmFnPaste" data-a="paste"></li>'+
						'<li class="fmFnNew" data-a="new"></li>'+
						'<li class="fmFnSave" data-a="save"></li>'+
						'<li class="fmFnDelete" data-a="delete"></li></ul>';
						
						for(i=0;i<q.length;i++){
							q[i].innerHTML=l;
							if(i===q.length-1){s(this);}
						}
						
	
					};
					
					edel.jsn(u+'?get=',false,d);
					
		},
		
		scf:function(f,b,a,i){
				f=f?f:0;
				a=a?a:edel.d.querySelectorAll(b+' > *');
				for(i=0;i<a.length;i++){
					if(f>-1){
						if(i!==f){
							a[i].style.height='0%';
							a[i].style.width='0%';
							a[i].style.display='none';
						}else{
							a[i].style.height='100%';
							a[i].style.width='100%';
							a[i].style.display='block';
						}
					}else{
						a[i].style.height='50%';
						a[i].style.width='50%';
						a[i].style.display='block';
					}
				}
		},
	
	
	};



