// Javascript executable.
// level(0)
// Javascript executable library v.1.011-
// SET PROduction Europe © 15.03.2014.

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
		
		rdc:function(n){n=n.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,'\\$1');var r=new RegExp('(?:^|;)\\s?'+n+'=(.*?)(?:;|$)','i'),m=edel.d.cookie.match(r);return m&&unescape(m[1]);},
	
		gwd:function(c){(typeof(w.innerWidth)==='number')?c=[w.innerWidth,w.innerHeight]:(edel.d.documentElement&&(edel.d.documentElement.clientWidth||edel.d.documentElement.clientHeight))?
				c=[edel.d.documentElement.clientWidth,edel.d.documentElement.clientHeight]:(edel.d.body&&(edel.d.body.clientWidth||edel.d.body.clientHeight))?c=[edel.d.body.clientWidth,edel.d.body.clientHeight]:c=false;return c;},

//	edel.dce(element,'event-name','data');	
		dce:function(c,n,d){
				if(!c||!n){return;}
				var i,
					q=typeof(c)==='object'?[c]:edel.d.querySelectorAll(c),
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
					q=typeof(e)==='object'?[e]:edel.d.querySelectorAll(e);
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

//	edel.jsn(link,data,callback,async);	
		jsn:function(l,d,c,a){
				if(!l){return;}
				a=a?a:true;
				var o,h,u,
					e=escape(JSON.stringify(d)),
					x=new XMLHttpRequest();
				if(typeof(d)==='object'){
					h=edel.djb(e);
					u=l+h+e;
				}else{
					h=edel.djb(escape(d+new Date));
					u=l+h;
				}
				x.open('GET',u,a);
				x.send(null);
				x.onreadystatechange=function(){
					if(x.readyState===4&&x.status===200){
						o=x.response.split(h);
						if(o[1]){c.call(JSON.parse(o[1]));}
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
						q=typeof(e)==='object'?[e]:edel.d.querySelectorAll(e),
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
							try{r(this);}catch(e){}
						};
						
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
					q=typeof(c)==='object'?[c]:edel.d.querySelectorAll(c),
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



