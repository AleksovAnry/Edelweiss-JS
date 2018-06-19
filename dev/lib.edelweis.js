// Javascript executable.
// level(0)
// Javascript executable library v.1.DE
// SET PROduction Europe © 2017.

var edel={a:[],
		n:'Edelweiss',
		w:window,
		d:document,
		l:location,
		p:location.pathname.split('/'),
		h:location.href.split('#'),
		e:function(){},

		lrp:function(l){l?edel.w.location.replace(l):false;},

		dte:function(){var i,N=new Date(),T=[N.getDate(),N.getMonth()+1,N.getFullYear(),,N.getHours(),N.getMinutes(),N.getSeconds()];for(i=0;i<T.length;i++){T[i]=T[i]<10?'0'+T[i]:T[i];}return T.join(':');},

		log:function(i){var o='<'+edel.n+'> ['+edel.dte()+']'+' '+i;console.log(o);return o;},

		dol:function(f){var l=edel.w.onload;edel.w.onload=(typeof(edel.w.onload)!=='function')?f:function(){l?l():false;f();};},

// Replace or find all numbers edel.ran('day 2!',false) returns '2' or edel.ran('day 2!',true) returns 'day !'
//	edel.ran(string,option);
		ran:function(s,o){s=s.toString();if(o){return s.replace(/([\d]+)/g,'');}else{return s.replace(/([\D]+)/g,'');}},

// Replace or find all letters edel.ran('day 2!',false) returns 'day' or edel.ran('day 2!',true) returns '2!'
//	edel.ral(string,option)	
		ral:function(s,o){s=s.toString();if(o){return s.replace(/([a-zA-Z]+)/g,'');}else{return s.replace(/([\W\d]+)/g,'');}},

// Replace or match all special symbols edel.ran('day 2!',false) returns ' !' or edel.ran('day 2!',true) returns 'day2'
//	edel.ras(string,option)	
		ras:function(s,o){s=s.toString();if(o){return s.match(/([^\d\w]+)/g);}else{return s.replace(/([\w]+)/g,'');}},
		
		iof:function(e,o){if(e.indexOf(o)!==-1){return true;}else{return false;}},

		tof:function(v){if(typeof(v)==='undefined'){return true;}else{return false;}},
		
		cop:function(e,o){o=o?o:edel.d;e=typeof(e)==='object'?Object.prototype.toString.call(e)==='[object NodeList]'||Object.prototype.toString.call(e)==='[object Array]'||Object.prototype.toString.call(e)==='[object HTMLDomElement]'||Object.prototype.toString.call(e)==='[object HTMLCollection]'?e:[e]:o.querySelectorAll(e);return e;},
		
		rdc:function(n){n=n.replace(/([.*+?\^=!:edel{}()|\[\]\/\\])/g,'\\edel1');var r=new RegExp('(?:^|;)\\s?'+n+'=(.*?)(?:;|edel)','i'),m=edel.d.cookie.match(r);return m&&unescape(m[1]);},
	
		gwd:function(c){(typeof(edel.w.innerWidth)==='number')?c=[edel.w.innerWidth,edel.w.innerHeight]:(edel.d.documentElement&&(edel.d.documentElement.clientWidth||edel.d.documentElement.clientHeight))?
				c=[edel.d.documentElement.clientWidth,edel.d.documentElement.clientHeight]:(edel.d.body&&(edel.d.body.clientWidth||edel.d.body.clientHeight))?c=[edel.d.body.clientWidth,edel.d.body.clientHeight]:c=false;return c;},

//	edel.ios(element,callback);	
		ios:function(e,c){
				if(!e||!c){return;}
				var i,r,
					q=edel.cop(e),

					F=function(l){
						    r=l.getBoundingClientRect();
							return [r.bottom>0&&r.right>0&&
							r.left<(edel.w.innerWidth||edel.gwd()[0])&&
							r.top<(edel.w.innerHeight||edel.gwd()[1]),r];
					};
				
				edel.lie(edel.w,'scroll',function(){
					for(i=0;i<q.length;i++){
						F(q[i])[0]&&c&&typeof(c)==='function'?c.call([F(q[i])[1],q[i]]):false
					}
				});
		},

//	edel.dce(element,'event-name','data');	
		dce:function(c,n,d){
				if(!c||!n){return;}
				var i,e,
					q=edel.cop(c);
					try{e=new CustomEvent(n,d);}catch(f){
						e=edel.d.createEvent('CustomEvent');
						e.initEvent(n,true,true);
					}					
				for(i=0;i<q.length;i++){
					q[i].dispatchEvent(e);
				}
		},

//	edel.lie(element,'event-name',callback);	
		lie:function(o,e,c){
				if(!o||!e||o===null||edel.tof(o)){return;}
				var i,j,
					q=edel.cop(o);		
				for(i=0;i<q.length;i++){
					j=q[i];
					j.i=i;
					j.addEventListener?j.addEventListener(e,c,false):j.attachEvent?j.attachEvent('on'+e,c):j['on'+e]=c;
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
				var a,i,c={},d={},
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
					a=d.async?d.async:true,
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
				x.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				x.setRequestHeader('Access-Control-Allow-Origin','*');
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
				
				var r,t=d.type?d.type:'GET',					
					a=d.async?d.async:true,
					x=new XMLHttpRequest();
				
				edel.iof(t,'GET')?(l=l+'?'+d.data,r=null):(r=d.data);
				
				x.open(t,l,a);
				x.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				x.send(r);
				x.onreadystatechange=function(){
					if(x.readyState===4&&x.status===200){
						x?c&&typeof(c)==='function'?c.call(x):false:false;
					}
				}
				return x;	
		},

//	edel.frm(link,{data,async,type});
		frm:function(l,d,c){
				if(!l){return;}
				
				var k,h,u=d.data?l+'?'+d.data:l,
					t=d.type?d.type:'POST',
					f=edel.d.createElement("form");
				
			    f.setAttribute("method",t);
			    f.setAttribute("action",l);

			    for(k in u) {
			        if(u.hasOwnProperty(k)) {
			            h=edel.d.createElement("input");
			            h.setAttribute("type","hidden");
			            h.setAttribute("name",k);
			            h.setAttribute("value",u[k]);

			            f.appendChild(h);
			         }
			    }
			    edel.d.body.appendChild(f);
			    f.submit();   
				return f;
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

//	edel.toc('#midBox',{show:'showMgr',hide:'hideMgr'},callback);
		toc:function(e,p,c){
				if(e){
					var i,
						q=edel.cop(e),
						s=p.show?p.show:'showClass',
						h=p.hide?p.hide:'hideClass';
					for(i=0;i<q.length;i++){
						q[i].className=edel.iof(q[i].className,s)?q[i].className.replace(' '+s,'')+' '+h:q[i].className.replace(' '+h,'')+' '+s;
						i===q.length-1&&c&&typeof(c)==='function'?c.call(true):false;
					}
				}
				return edel.e;
		},

//	edel.rec('#midBox',{show:'showMgr',hide:'hideMgr',search:DOMElement,found:'searchClass'},callback);
		rec:function(e,p,j){
				if(e){
					var i,
						q=edel.cop(e),
						s=p.show?edel.iof(p.show,'*')?'':' '+p.show:' showClass',
						h=p.hide?edel.iof(p.hide,'*')?'':' '+p.hide:' hideClass',
						c=p.search&&p.found?edel.iof(p.search.className,p.found):false;
					for(i=0;i<q.length;i++){
						q[i].className=edel.iof(q[i].className,h)&&!c?q[i].className.replace(h,''):q[i].className;
						q[i].className=!edel.iof(q[i].className,s)&&!c?q[i].className+s:q[i].className;
						i===q.length-1&&j&&typeof(j)==='function'?j.call(true):false;
					}		
				}
				return edel.e;
		},

//	edel.uds('#videoBox',{ratio:'5:4',size:'98%',resize:[0,120],parent:'body',alignment:false});
		uds:function(n,p){
				if(n){
					var x,y,i,e,
						q=edel.cop(n),
						f=p.size?edel.iof(p.size,'%')?p.size.replace('%',''):p.size:100,
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
		
//	edel.adp('.parentElement',{search:'.someClass',width:'320px',border:'1px',resize:'10%'});
		adp:function(n,p){
				if(n){
					var i,j,e,W,h,l,x,y,z,
						q=edel.cop(n),
						b=p.border?edel.ran(p.border)*1:0,
						w=p.width?edel.ran(p.width)*1+b*2:0,
						r=p.resize?edel.ran(p.resize)*1:0,
						s=p.search?p.search:false,
						D=function(I,K,X,Y){
							if(I>-1&&K>0){
								for(i=I;i<K;i++){
									X[i].style.width=Y-b*2-0.5+'px';
									X[i].style.borderWidth=b+'px';
									//X[i].innerHTML=Y+'px';
								}
							}
						},
						A=function(E){
							W=E.offsetWidth;
							h=!s?E.children:edel.cop(s,E);
							l=h.length;
							z=(w/100)*r;
							x=W<((w-z)*2)?1:(W/(w-z)).toFixed(0);
							y=l-Math.floor(l/x)*x;
							if(x/2>y&&y>0&&l>1){x=x-1;y=y+1;}
							l-y>0?D(0,l-y,h,W/x):false;
							y>0?D(l-y,l,h,W/y):D(0,l,h,W/y);
						};
					
					for(j=0;j<q.length;j++){e=q[j];A(e);}
				}
		},

//	edel.wor('#midBox',{width:'800px'},callback1,callback2);
		wor:function(e,p,c,r){
				if(e){
					var i,
						q=edel.cop(e),
						s=p.width?edel.ran(p.width)*1:800,
						F=function(){
							for(i=0;i<q.length;i++){
								edel.w.mobile=q[i].offsetWidth<s?true:false;
								q[i].offsetWidth<s?c&&typeof(c)==='function'?c.call(true):false:r&&typeof(r)==='function'?r.call(false):false;
							}
						};
						F();
						edel.lie(edel.w,'resize',F);
				}
		},

//	edel.tbs('.mainNav','.pageBox',{active:0,selfclose:true,onstart:function},callback);
		tbs:function(n,y,f,r){
				if(n&&y){
					var o,a,b,q,h,
						i=f.active*1,
						m=f.onstart,
						z=n.replace(/[#.]/g,''),
						j=' '+z+'ActHed',
						k=' '+z+'ActTab',
						w=' '+z+'HidHed',
						v=' '+z+'HidTab', 
						e=edel.cop(n),
						p=y?edel.cop(y):edel.cop('.tabpage'),
						
						l=function(q){
							h=this.i;
							q=this.q;
							m&&typeof(m)==='function'?m.call(this):false;
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
		
//	edel.sld('.slideBox',{slide:'.slide',head:'.slideHead',paragraph:'.slideParagraph',image:'.slideImage',unordered:'.slideUnordered',navs:true},10000,500);
		sld:function(e,w,T,r){
				if(!e){return;}
				r=r?r:400;
				T=T?T:10000;
				var s,o,l,x=[],
					H=w.head?w.head:'h2',
					S=w.slide?w.slide:'a',
					I=w.image?w.image:'img',
					P=w.paragraph?w.paragraph:'p',
					U=w.unordered?w.unordered:'ul',
					n=w.navs?w.navs:!1,
					z=e.replace(/[#.]/g,''),
					A=z+'HShow',
					B=z+'PShow',
					C=z+'IShow',
					D=z+'UShow',
					a=z+'HHide',
					b=z+'PHide',
					c=z+'IHide',
					d=z+'UHide',
					w=z+'Animated',
					q=edel.cop(e),

					N=function(F,f,k){
						k=edel.d.createElement('div');
						k.className=z+'Navs Nid-'+f.s;
						for(o=0;o<F.length;o++){
							m=edel.d.createElement('div');
							m.className=z+'Nav Nid-'+f.s+'-'+o;
							m.s=o;
							k.appendChild(m);
						}
						f.appendChild(k);
					},
		
					Q=function(F,f,y,h,p,i,u){
					
						y=f.querySelectorAll('.'+z+'Nav');

						W=function(F,f,y,L,h0,p0,i0,u0){
							for(l=0;l<F.length;l++){
								h0=F[l].querySelector(H);
								p0=F[l].querySelector(P);
								i0=F[l].querySelector(I);
								u0=F[l].querySelector(U);
								edel.rec(h0,{show:w,hide:'*'});
								edel.rec(p0,{show:w,hide:'*'});
								edel.rec(i0,{show:w,hide:'*'});
								edel.rec(u0,{show:w,hide:'*'});
								edel.rec(F[l],{show:z+'Slide-'+l,hide:'*'});
								if(l!==L){
									edel.rec(h0,{show:a,hide:A});
									edel.rec(p0,{show:b,hide:B});
									edel.rec(i0,{show:c,hide:C});
									edel.rec(u0,{show:d,hide:D});
									F[l].style.display='none';
									edel.rec(y[l],{show:'*',hide:z+'ActiveNav'});
								}else{
									h=F[l].querySelector(H);
									p=F[l].querySelector(P);
									i=F[l].querySelector(I);
									u=F[l].querySelector(U);
									edel.rec(h,{show:'*',hide:a});
									edel.rec(p,{show:'*',hide:b});
									edel.rec(i,{show:'*',hide:c});
									edel.rec(u,{show:'*',hide:d});
									F[l].style.display='block';
									edel.rec(y[l],{show:z+'ActiveNav',hide:'*'});
								}
							}
						}

						H0=function(){edel.rec(h,{show:A,hide:a});}
						P0=function(){edel.rec(p,{show:B,hide:b});}
						I0=function(){edel.rec(i,{show:C,hide:c});}
						U0=function(){edel.rec(u,{show:D,hide:d});}
						
						H1=function(){edel.rec(h,{show:a,hide:A});}
						P1=function(){edel.rec(p,{show:b,hide:B});}
						I1=function(){edel.rec(i,{show:c,hide:C});}
						U1=function(){edel.rec(u,{show:d,hide:D});}
						
						J=function(F,f,y,L){
							L=f.v;
							L<F.length-1?L++:L=0;
							f.v=L;
							
							W(F,f,y,L);
							
							x[0]=edel.w.setTimeout(H0,r*1);
							x[1]=edel.w.setTimeout(P0,r*2);
							x[2]=edel.w.setTimeout(I0,r*3);
							x[3]=edel.w.setTimeout(U0,r*4);
			
							x[4]=edel.w.setTimeout(H1,T-(r*1));
							x[5]=edel.w.setTimeout(P1,T-(r*2));
							x[6]=edel.w.setTimeout(I1,T-(r*3));
							x[7]=edel.w.setTimeout(U1,T-(r*4));
							
							x[8]=edel.w.setTimeout(function(){J(F,f,y);},T);
						}
						
						J(F,f,y);
						
						for(j=0;j<F.length;j++){
							y[j].onclick=function(){
									for(s=0;s<x.length;s++){
										edel.w.clearTimeout(x[s]);
									}
									f.v=this.s-1;
									J(F,f,y);
									H0();
									P0();
									I0();
									U0();
							}
						}
					};

				if(q.length>0){
					for(s=0;s<q.length;s++){
						q[s].v=-1;
						q[s].s=s;
						n?N(q[s].querySelectorAll(S),q[s]):!1;
						Q(q[s].querySelectorAll(S),q[s]);
					}
				}
		},

//	edel.get(element)[returned object]	
		get:function(e){
				var X,Y,Z,d,m,
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
							r=r.replace(/\-(\w)/g,function(strMatch,p1){strMatch=strMatch;return p1.toUpperCase();});
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
					var o,f,i,d,
						m=false,
						q=edel.cop(e),
						l=v.split(/([0-9\-\.]+)/),
						u=['-webkit-','-moz-','-ms-','-o-',''],
						
						a=function(c,s){
							s=edel.ges(c,p);
							d=new Date().getTime();
							p=p.replace(/\-(\w)/g,function(strMatch,p1){strMatch=strMatch;return p1.toUpperCase();});
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
				if(edel.cop(n)[0]&&edel.cop(y)[0]){
					c=c?c*1:0;
					t=t?t*1:1000;
					var o,a,b,q,i,h,
						e=edel.cop(n),
						p=y?edel.cop(y):edel.cop('.layers'),
						j=edel.ges(p[0].parentNode,'width')[1]/100,
						z=function(i,x){
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

//	edel.red(element,{min:'100',max:'250',step:'10',space:'100',time:'400',framerate:'25'});		
		red:function(e,w){
				if(e){
					var v,i,p,j,n,
						horNum=1.4,
						verNum=5,
						f=w.min?w.min*1:0,
						t=w.max?w.max*1:100,
						s=w.step?w.step*1:1,
						m=w.space?w.space*1:0,
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

//	edel.sic(element,{delay:'1000',time:'200',interval:'50%',add:'string',remove:'string',reverse:true,numered:true},'callback');
		sic:function(e,o,с){
				if(!e){return;}
				var p,n,z,y=[],
					d=o.delay?(o.delay*1)+1:1000,
					t=o.time?(o.time*1)+1:1000,
					i=o.interval?(edel.ran(o.interval)*1)/100:0.5,
					r=o.reverse?true:false,
					a=o.add?o.add:'addedClass',
					q=edel.cop(e),
					l=q.length,
					L=q.length-1,
					
					f=function(p,q){
						edel.w.setTimeout(function(){
							z=r?L--:p;
							y.push(z);
							n=o.numered?z:'',
							q[z].className=edel.iof(q[z].className,a+n)?q[z].className:q[z].className.replace(' '+o.remove+n,'')+' '+a+n;
							y.length===l&&с&&typeof(с)==='function'?с.call(q):false;
							L=L<0?edel.cop(e).length-1:L;
						},t*(p*i));
					};
				
				edel.w.setTimeout(function(){
					if(l>0){for(p=0;p<l;p++){f(p,q);}}
				},d);
				return edel.e;
		},
		
//	edel.dos(element,'callback');
		dos:function(e,c){
				var i,h,a,t,
					n=' blurIt',
					q=edel.cop(e),
					b=edel.d.body,
					B=function(j){b.className=j?b.className+n:b.className.replace(n,'');},
					C=function(){
						t=this;
						h=t.innerHTML;
						a=t.getAttribute('data-t');
						t.a=a;
						t.b=true;
						
						if(!edel.iof(a,'#compleate')){
							B(true);
							c&&typeof(c)==='function'?c.call(t):false;
							setTimeout(function(){
								if(confirm(unescape('%u0412%u044B%u0437%u0432%u0430%u0442%u044C%20')+a+' ?')){
									if(t.b){
										t.setAttribute('data-t',a+'#compleate');
										edel.iof(h,'http')||edel.iof(h,'www')?edel.w.open(a,''):edel.iof(a,'http')||edel.iof(a,'www')?edel.w.open(a,''):false;
										edel.iof(h,'[d]')||edel.iof(h,'@')||edel.iof(a,'@')?edel.w.location.href='mailto:'+a+'?subject='+unescape('%u041F%u0438%u0441%u044C%u043C%u043E%20%u0441%20%u0441%u0430%u0439%u0442%u0430%20')+edel.h[0]+'&body='+unescape('%u0412%u0430%u0448%u0435%20%u0441%u043E%u043E%u0431%u0449%u0435%u043D%u0438%u0435%3A'):false;
										edel.iof(h,'+')||edel.iof(a,'+')?edel.w.location.href='tel:'+a:false;
										edel.iof(h,unescape('%u0443%u043B.'))||edel.iof(a,unescape('%u0443%u043B.'))?edel.w.open('https://maps.google.ru/?q='+a,''):false;
										edel.iof(h,'Skype')||edel.iof(a,'Skype')?edel.w.location.href='skype:'+a+'?call':false;
										B(false);
									}		
								}else{
									B(false);
								}
							},100);
						}else{
							B(false);
							t.setAttribute('data-t',a.replace('#compleate',''));
						}
					};
				
				for(i=0;i<q.length;i++){q[i].onclick=C;}
		},

//	edel.tfs('#body');		
		tfs:function(n){var e=n?edel.d.querySelector(n):edel.d.documentElement;(!edel.d.fullscreenElement&&!edel.d.mozFullScreenElement&&!edel.d.webkitFullscreenElement)?
				e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):
				e=false:edel.d.cancelFullScreen?edel.d.cancelFullScreen():edel.d.mozCancelFullScreen?edel.d.mozCancelFullScreen():edel.d.webkitCancelFullScreen?edel.d.webkitCancelFullScreen():false;		
		},

//	edel.mfs(element,'url',langArray,'callback');
		mfs:function(c,u,t,d){
				if(!c||!u){return;}
				var i,l,r,o,y,f,p,a,S,F,j,m,
					C=false,
					b=' fmSelected',
					q=edel.cop(c),
					t=t?t:{'nme':'Name','sze':'Size','tpe':'Type','dte':'Date'},
					
					A=function(a,g){
						a={};
						for(i=0;i<j.length;i++){
							g=this.g;
							a[i]={};
							a[i][g.files[j[i]].tpe]=g.path+'/'+g.files[j[i]].nme;
							if(i===j.length-1){edel.jsn(u+'?'+this.a+'=',a,d);}
						}
					},
					
					s=function(g){
						r=edel.cop('.fmRow');
						F=edel.cop('.fmFunc > *');
						
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
				a=a?a:edel.cop(b+' > *');
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


edel.dol(function(r){try{r=new CustomEvent('edel')}catch(f){r=edel.d.createEvent('CustomEvent');r.initEvent('edel',true,true)}edel.w.dispatchEvent(r)})	

