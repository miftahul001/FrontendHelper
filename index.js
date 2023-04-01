const initApp=()=>{
const m={
	a:[{a:el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',d:{style:'padding-left:3px;','data-dynamic-app-idx':'0'}})}).parentElement}).parentElement}).parentElement}],
	b:[,,,,,,,,,
		a=>{
			a=[a[0],0,el({a:'div',d:{style:`background:rgba(255,255,255,.5);border-radius:5px;box-shadow:inset 1px 1px 5px rgba(0,0,0,.3), inset -1px -1px 5px rgba(0,0,0,.3);position:fixed;top:${a[1]}px;left:${a[2]}px;padding:5px;`},e:{click:b=>{b.stopPropagation();document.body.lastElementChild!=a[2]&&(document.body.appendChild(a[2]))}}}),
			b=>{
				b=b||window.event
				b.stopPropagation()
				b.preventDefault()
				const c=a[2].offsetLeft+b.clientX-a[0]
				if (c>0&&c<window.innerWidth-100) {
					a[2].style.left=c+'px'
					a[0]=b.clientX
				}
				const d=a[2].offsetTop+b.clientY-a[1]
				if (d>0&&d<window.innerHeight-80) {
					a[2].style.top=d+'px'
					a[1]=b.clientY
				}
			},
			()=>{
				document.removeEventListener('mouseup', a[4]);
				document.removeEventListener('mousemove', a[3]);
			}]
			el({a:'div',b:a[2],c:a[0],d:{style:'padding:3px 33px;background:rgba(5,20,10,.7);box-shadow:inset 3px 3px 5px rgba(255,255,255,.7), inset -3px -3px 5px rgba(0,0,0,.7);border-radius:5px;color:rgba(255,255,255,.9);cursor:grab;font-weight:bold;text-align:center;'},e:{mousedown:b=>{
				b=b||window.event
				b.stopPropagation()
				b.preventDefault()
				a[0]=b.clientX
				a[1]=b.clientY
				document.addEventListener('mouseup',a[4])
				document.addEventListener('mousemove',a[3])
				document.body.lastElementChild!=a[2]&&(document.body.appendChild(a[2]))
			}}})
			el({a:'div',b:a[2],c:"\u25BE",d:{style:'position:absolute;top:7px;left:11px;color:rgba(255,255,255,.9);cursor:default;'},e:{click:a=>{a.stopPropagation();
				if (a.target.textContent=="\u25BE") {
					a.target.textContent="\u25B8"
					a.target.parentElement.lastElementChild.style.display='none'
				} else {
					a.target.textContent="\u25BE"
					a.target.parentElement.lastElementChild.style.display='block'
				}
			}}})
			el({a:'div',b:a[2],c:'x',d:{style:'position:absolute;top:3px;right:11px;padding:3px;color:rgba(255,255,255,.9);cursor:default;font-weight:bold;'},e:{click:a=>{a.stopPropagation();document.body.removeChild(a.target.parentElement)}}})
			return el({a:'div',b:a[2],d:{style:'background:rgba(255,255,255,.7);border-radius:5px;padding:3px 7px 7px 3px;margin-top:7px;overflow:scroll;resize:both;min-width:150px;min-height:80px;'}})
		},
		a=>{
			a.stopPropagation()
			if (m.a[m.b[0]].a==a.target.parentElement) return
			m.b[0]>0&&(m.a[m.b[0]].a.children[1].style.background='rgba(0,0,0,0)')
			m.b[0]=a.target.parentElement.getAttribute('data-dynamic-app-idx')
			m.a[m.b[0]].a.children[1].style.background='#87CEFA'
			m.c[10]({a:0,b:m.b[0]})
		},
		a=>{ a.stopPropagation(); m.c[10]({a:1,b:a.target.textContent}) },
		a=>{ a.stopPropagation(); m.c[10]({a:2,b:[m.e[3].children[0].value,m.e[3].children[1].value]}) },
		a=>{
			const b=m.e[4].children.length-1
			const c={}
			for (var i=0; i<b; i+=3) {
				m.e[4].children[i].value.trim()!=''&&(c[m.e[4].children[i].value.trim()]=m.e[4].children[i+1].value)
			}
			m.c[10]({a:4,b:c})
		},
		a=>{
			const b=m.e[5].children.length-1
			var c=''
			for (var i=0; i<b; i+=3) c+=m.e[5].children[i].value+':'+m.e[5].children[i+1].value+';'
			m.c[10]({a:3,b:c})
		},
		a=>{
			a.preventDefault()
			a.stopPropagation()
			if (!m.b[1]) return
			a.target.parentElement.parentElement.insertBefore(m.b[1], a.target.parentElement)
			m.c[10]({a:5, b:a.target.parentElement.parentElement.parentElement.getAttribute('data-dynamic-app-idx'), c:m.b[1].getAttribute('data-dynamic-app-idx'), d:a.target.parentElement.getAttribute('data-dynamic-app-idx')})
			m.b[1] = null
		},
		a=>{ a.stopPropagation(); a.dataTransfer.setData('a', a.target.getAttribute('data-dynamic-app-a')) },
		a=>{
			const b=m.e[7].children.length-1
			const c=[]
			for (var i=0; i<b; i+=3) {
				m.e[7].children[i].value.trim()!=''&&c.push([m.e[7].children[i].value.trim(),m.e[7].children[i+1].value])
			}
			m.c[10]({a:15,b:c})
		},
		a=>{
			a.stopPropagation()
			a.preventDefault()
			const b=el({a:'div',b:el({a:'div',b:document.body,d:{style:'position:fixed;top:0;left:0;width:100vw;height:100vh;'},e:{click:a=>{a.stopPropagation();document.body.removeChild(a.target)}}}),d:{style:`position:fixed;top:${a.clientY}px;left:${a.clientX}px;background:rgba(255,255,255,.5);border-radius:5px;box-shadow:0 0 7px 2px rgba(0,0,0,.1);padding:5px;display:flex;flex-direction:column;gap:5px;`},e:{click:a=>{a.stopPropagation()}}})
			const c={style:'border-radius:3px;padding:3px 5px;border:none;','data-dynamic-app-idx':`${a.target.parentElement.getAttribute('data-dynamic-app-idx')}`}
			el({a:'button',b:b,c:'remove',d:c,e:{click:a=>{a.stopPropagation();document.body.removeChild(a.target.parentElement.parentElement);m.c[5](a.target.getAttribute('data-dynamic-app-idx'))}}})
			//console.log(a.target.parentElement.getAttribute('data-dynamic-app-idx'))
		}
	],
	c:[
		a=>{
			m.e[4].innerHTML=''
			m.e[5].innerHTML=''
			a.b&&a.b.split(';').slice(0,-1).map(a=>a.split(':').map(a=>a.trim())).forEach(a=>{
				el({a:'input',b:m.e[5],d:{type:'text',size:a[0].length,value:a[0]},e:{
					click:a=>{a.stopPropagation()},
					input:a=>{a.target.size=a.target.value.length},
					blur:a=>{ m.b[14](a) },
				}})
				el({a:'input',b:m.e[5],d:{type:'text',value:a[1]},e:{ click:a=>{a.stopPropagation()}, input:a=>{ m.b[14](a) } }})
				el({a:'button',b:m.e[5],c:'-',e:{click:a=>{
					a.stopPropagation(),
					a.target.parentElement.removeChild(a.target.previousElementSibling)
					a.target.parentElement.removeChild(a.target.previousElementSibling)
					a.target.parentElement.removeChild(a.target)
					m.b[14](a)
				}}})
			})
			a.c&&Object.keys(a.c).forEach(b=>{
				el({a:'input',b:m.e[4],d:{type:'text',size:b.length,value:b},e:{
					click:a=>{a.stopPropagation()},
					input:a=>{a.target.size=a.target.value.length},
					blur:a=>{ m.b[13](a) },
				}})
				el({a:'input',b:m.e[4],d:{type:'text',value:a.c[b]},e:{ click:a=>{a.stopPropagation()}, input:a=>{ m.b[13](a) } }})
				el({a:'button',b:m.e[4],c:'-',e:{click:a=>{
					a.stopPropagation()
					a.target.parentElement.removeChild(a.target.previousElementSibling)
					a.target.parentElement.removeChild(a.target.previousElementSibling)
					a.target.parentElement.removeChild(a.target)
					m.b[13](a)
				}}})
			})
			if (a.d) {
				m.e[3].children[0].value=a.d[0]
				m.e[3].children[1].value=a.d[1]
			}
			m.b[0]>0&&(m.a[m.b[0]].a.children[1].style.background='rgba(0,0,0,0)')
			if (a.e) {
				m.b[0]=a.e
				m.a[m.b[0]].a.children[1].style.background='#87CEFA'
				const b=a=>{
					if (a.parentElement.parentElement==m.a[0].a) return
					if (a.parentElement.style.display=='none') {
						a.parentElement.style.display='block'
						a.parentElement.previousElementSibling.previousElementSibling.textContent="\u25BE"
					}
					b(a.parentElement.parentElement)
				}
				b(m.a[m.b[0]].a)
				m.a[m.b[0]].a.scrollIntoView()
			} else m.b[0]=0;
			(a=>{
				m.e[3].style.pointerEvents=a
				m.e[4].parentElement.style.pointerEvents=a
				m.e[5].parentElement.style.pointerEvents=a
				m.e[6].style.pointerEvents=a
				m.e[7].parentElement.style.pointerEvents=a
			})(m.b[0]==0?'none':'auto')
		},
		a=>{ m.a.push({a:el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',b:m.a[a.b].a.children[2],d:{'data-dynamic-app-idx':a.c,style:'display:grid;grid-template-columns:7px auto;gap:1px 5px;'}}),c:"\u25BE",e:{click:a=>{a.stopPropagation();
				if (a.target.textContent=="\u25BE") {
					a.target.textContent="\u25B8"
					a.target.nextElementSibling.nextElementSibling.style.display='none'
				} else {
					a.target.textContent="\u25BE"
					a.target.nextElementSibling.nextElementSibling.style.display='block'
				}
				if (m.a[m.b[0]].a==a.target.parentElement) return
				m.b[0]>0&&(m.a[m.b[0]].a.children[1].style.background='rgba(0,0,0,0)')
				m.b[0]=a.target.parentElement.getAttribute('data-dynamic-app-idx')
				m.a[m.b[0]].a.children[1].style.background='#87CEFA'
				m.c[10]({a:0,b:m.b[0]})
			}}}).parentElement,c:a.label,d:{style:'min-width:11px;padding:1px 5px;border-radius:5px;',draggable:true},e:{dblclick:a=>{a.target.contentEditable=true},blur:a=>{a.target.contentEditable=false},input:m.b[11],click:m.b[10],dragstart:a=>{a.stopPropagation();m.b[1]=a.target.parentElement},dragover:a=>{a.preventDefault();a.stopPropagation()},drop:m.b[15],contextmenu:m.b[18]}}).parentElement,d:{style:'grid-column:2/span 1;'}}).parentElement}) },
		a=>{ m.a[a.b].a.children[2].appendChild(m.a[a.c].a) },
		a=>{
			m.a[0].a.children[2].innerHTML=''
			m.a=[m.a[0]];
			(a=>{a.a(a)})({a:a=>{
				a.c.forEach(b=>{
					const c=el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',b:a.b.children[2],d:{'data-dynamic-app-idx':m.a.length,style:'display:grid;grid-template-columns:7px auto;gap:1px 5px;'}}),c:"\u25BE",e:{click:a=>{a.stopPropagation();
						if (a.target.textContent=="\u25BE") {
							a.target.textContent="\u25B8"
							a.target.nextElementSibling.nextElementSibling.style.display='none'
						} else {
							a.target.textContent="\u25BE"
							a.target.nextElementSibling.nextElementSibling.style.display='block'
						}
						if (m.a[m.b[0]].a==a.target.parentElement) return
						m.b[0]>0&&(m.a[m.b[0]].a.children[1].style.background='rgba(0,0,0,0)')
						m.b[0]=a.target.parentElement.getAttribute('data-dynamic-app-idx')
						m.a[m.b[0]].a.children[1].style.background='#87CEFA'
						m.c[10]({a:0,b:m.b[0]})
					}}}).parentElement,c:b.g,d:{style:'min-width:11px;padding:1px 5px;border-radius:5px;',draggable:true},e:{dblclick:a=>{a.target.contentEditable=true},blur:a=>{a.target.contentEditable=false},input:m.b[11],click:m.b[10],dragstart:a=>{a.stopPropagation();m.b[1]=a.target.parentElement},dragover:a=>{a.preventDefault();a.stopPropagation()},drop:m.b[15],contextmenu:m.b[18]}}).parentElement,d:{style:'grid-column:2/span 1;'}}).parentElement
					
					m.a.push({a:c})
					a.a({a:a.a,b:c,c:b.h})
				})
			},b:m.a[0].a,c:JSON.parse(a.b)})
		},
		a=>{ const b=JSON.parse(a.data);m.c[b.a](b) },
		a=>{
			const b=a=>{
				[...a.children[2].children].forEach(a=>{b(a)})
				const c=a.getAttribute('data-dynamic-app-idx')
				c==m.b[0]&&m.c[0]({a:0})
				a.parentElement.removeChild(a)
				delete m.a[c]
			}
			b(m.a[a].a)
			m.c[10]({a:6,b:a})
		},
		,,,,
		a=>{ m.e[0].contentWindow.postMessage(JSON.stringify(a)) },
	],
	d:{
		div: {a:'DIV', b:{}, c:'width:100px;height:100px;box-shadow:0 0 1px 1px rgba(0,0,0,.1);',f:1},
		span: {a:'SPAN', b:{}, c:'', d:'span'},
		button: {a:'BUTTON', b:{}, c:'', d:'button'},
		input1: {a:'INPUT', b:{type:'text'}, c:''},
		select: {a:'SELECT', b:{},c:'width:100px;',f:1},
		option: {a:'OPTION', b:{},c:''},
		img: {a:'IMG', b:{},c:'width:100px;height:100px;'},
	},
	e:[],
};

(()=>{
	m.e[0]=el({a:'iframe',b:el({a:'div',b:document.body,d:{style:'position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;'}}),d:{src:'a.html', style:'box-shadow:0 0 3px 1px rgba(0,0,0,.3);border:none;margin:0;padding:0;flex:1;'}});//main content
	
	(()=>{
		const a=el({a:'div',b:m.b[9](['menu',16,window.innerWidth-520]),d:{style:'display:grid;grid-template-columns:auto auto;gap:7px;'}})
		document.body.appendChild(a.parentElement.parentElement)
		a.parentElement.parentElement.removeChild(a.parentElement.parentElement.children[2])
		const b={style:'border-radius:3px;padding:3px 5px;border:none;'}
		el({a:'button',b:a,c:'Component',d:b, e:{click:a=>{ a.stopPropagation(); m.g.a.parentElement==document.body?document.body.removeChild(m.g.a):document.body.appendChild(m.g.a) }}})
		el({a:'button',b:a,c:'Structure',d:b, e:{click:a=>{ a.stopPropagation(); m.e[2].parentElement.parentElement.parentElement==document.body?document.body.removeChild(m.e[2].parentElement.parentElement):document.body.appendChild(m.e[2].parentElement.parentElement) }}})
		el({a:'button',b:a,c:'Inner',d:b, e:{click:a=>{ a.stopPropagation(); m.e[3].parentElement.parentElement.parentElement==document.body?document.body.removeChild(m.e[3].parentElement.parentElement):document.body.appendChild(m.e[3].parentElement.parentElement) }}})
		el({a:'button',b:a,c:'Attribute',d:b, e:{click:a=>{ a.stopPropagation(); m.e[4].parentElement.parentElement.parentElement.parentElement==document.body?document.body.removeChild(m.e[4].parentElement.parentElement.parentElement):document.body.appendChild(m.e[4].parentElement.parentElement.parentElement) }}})
		el({a:'button',b:a,c:'Style',d:b, e:{click:a=>{ a.stopPropagation(); m.e[5].parentElement.parentElement.parentElement.parentElement==document.body?document.body.removeChild(m.e[5].parentElement.parentElement.parentElement):document.body.appendChild(m.e[5].parentElement.parentElement.parentElement) }}})
		el({a:'button',b:a,c:'JS Binding',d:b, e:{click:a=>{ a.stopPropagation(); m.e[6].parentElement.parentElement.parentElement==document.body?document.body.removeChild(m.e[6].parentElement.parentElement):document.body.appendChild(m.e[6].parentElement.parentElement) }}})
		el({a:'button',b:a,c:'events',d:b, e:{click:a=>{ a.stopPropagation(); m.e[7].parentElement.parentElement.parentElement.parentElement==document.body?document.body.removeChild(m.e[7].parentElement.parentElement.parentElement):document.body.appendChild(m.e[7].parentElement.parentElement.parentElement) }}})
		el({a:'button',b:a,c:'Save template',d:b, e:{click:a=>{ a.stopPropagation(); m.c[10]({a:10}) }}})
		el({a:'button',b:a,c:'Load template',d:b, e:{click:a=>{ a.stopPropagation(); m.c[10]({a:12}) }}})
		el({a:'button',b:a,c:'SaveAsHTML',d:b, e:{click:a=>{ a.stopPropagation(); m.c[10]({a:11}) }}})
		a.parentElement.style='background:rgba(255,255,255,.7);border-radius:5px;padding:3px;margin-top:7px;'
	})();
	
	(()=>{
		const a=el({a:'div',b:m.b[9](['component',16,window.innerWidth-730]),d:{style:'display:flex;flex-wrap:wrap;justify-content:space-around;gap:5px;'}})
		Object.keys(m.d).forEach(b=>{
			el({a:'div',b:a,c:b,d:{style:'padding:3px 9px;border:1px solid #ccc;border-radius:5px;cursor:default;',draggable:true,'data-dynamic-app-a':JSON.stringify({label:b,...m.d[b]})}, e:{dragstart:m.b[16]}})
		})
		m.g={a:a.parentElement.parentElement}
		document.body.appendChild(m.g.a)
		a.parentElement.style.width='180px'
	})();
	
	(()=>{
		m.e[2]=el({a:'div',b:m.b[9](['structure',230,window.innerWidth-520])})
		m.e[2].parentElement.style.minWidth='170px'
		m.e[2].parentElement.style.height='360px'
		document.body.appendChild(m.e[2].parentElement.parentElement)
		m.e[2].appendChild(m.a[0].a)
	})();
	
	(()=>{
		m.e[3]=el({a:'div',b:m.b[9](['inner',16,window.innerWidth-300]),d:{style:'display:flex;gap:3px;pointer-events:none;'}})
		document.body.appendChild(m.e[3].parentElement.parentElement)
		el({a:'option',b:el({a:'option',b:el({a:'option',b:el({a:'option',b:el({a:'select',b:m.e[3],d:{style:'padding-left:3px;'},e:{click:a=>{a.stopPropagation()},change:m.b[12]}}),c:'none',d:{value:''}}).parentElement,c:'textContent',d:{value:'textContent'}}).parentElement,c:'innerText',d:{value:'innerText'}}).parentElement,c:'innerHTML',d:{value:'innerHTML'}})
		el({a:'input',b:m.e[3],d:{type:'text',style:'flex:1;'},e:{click:a=>{a.stopPropagation()},input:m.b[12]}})
		m.e[3].parentElement.style='background:rgba(255,255,255,.7);border-radius:5px;padding:3px;margin-top:7px;'
	})();
	
	(()=>{
		m.e[4]=el({a:'div',b:el({a:'div',b:m.b[9](['attributes',100,window.innerWidth-300]),d:{style:'pointer-events:none;'}}),d:{style:'display:grid;grid-template-columns:fit-content(33px) auto 11px;gap:1px 3px;'}})
		document.body.appendChild(m.e[4].parentElement.parentElement.parentElement)
		el({a:'button', b:m.e[4].parentElement, c:'+', e:{click:a=>{
			a.stopPropagation()
			el({a:'input',b:m.e[4],d:{type:'text',size:1},e:{
				click:a=>{a.stopPropagation()},
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{ m.b[13](a) },
			}})
			el({a:'input',b:m.e[4],d:{type:'text'},e:{
				click:a=>{a.stopPropagation()},
				input:a=>{ m.b[13](a) }
			}})
			el({a:'button',b:m.e[4],c:'-',e:{click:a=>{
				a.stopPropagation()
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.b[13](a)
			}}})
			
		}}})
	})();
	
	(()=>{
		m.e[5]=el({a:'div',b:el({a:'div',b:m.b[9](['style',240,window.innerWidth-300]),d:{style:'pointer-events:none;'}}),d:{style:'display:grid;grid-template-columns:fit-content(33px) auto 11px;gap:1px 3px;'}})
		document.body.appendChild(m.e[5].parentElement.parentElement.parentElement)
		el({a:'button', b:m.e[5].parentElement, c:'+', e:{click:a=>{
			a.stopPropagation()
			el({a:'input',b:m.e[5],d:{type:'text',size:1},e:{
				click:a=>{a.stopPropagation()},
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{ m.b[14](a) },
			}})
			el({a:'input',b:m.e[5],d:{type:'text'},e:{ click:a=>{a.stopPropagation()}, input:a=>{ m.b[14](a) } }})
			el({a:'button',b:m.e[5],c:'-',e:{click:a=>{
				a.stopPropagation()
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.b[14](a)
			}}})
		}}})
	})();
	
	(()=>{
		m.e[6]=el({a:'div',b:m.b[9](['JS Binding',380,window.innerWidth-300]),d:{style:'display:flex;gap:3px;pointer-events:none;'}})
		document.body.appendChild(m.e[6].parentElement.parentElement)
		el({a:'div',b:m.e[6],c:'name',d:{style:'padding-left:1 5px;'}})
		el({a:'input',b:m.e[6],d:{type:'text',style:'flex:1;'}, e:{click:a=>{a.stopPropagation()},input:a=>{m.c[10]({a:14,b:a.target.value})}}})
		m.e[6].parentElement.style='background:rgba(255,255,255,.7);border-radius:5px;padding:3px;margin-top:7px;'
	})();
	
	(()=>{
		m.e[7]=el({a:'div',b:el({a:'div',b:m.b[9](['events',470,window.innerWidth-300]),d:{style:'pointer-events:none;'}}),d:{style:'display:grid;grid-template-columns:fit-content(33px) auto 11px;gap:1px 3px;align-items: start;'}})
		document.body.appendChild(m.e[7].parentElement.parentElement.parentElement)
		el({a:'button', b:m.e[7].parentElement, c:'+', e:{click:a=>{
			a.stopPropagation()
			el({a:'input',b:m.e[7],d:{type:'text',size:1},e:{
				click:a=>{a.stopPropagation()},
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{ m.b[17](a) },
			}})
			el({a:'textarea',b:m.e[7],d:{},e:{ click:a=>{a.stopPropagation()}, input:a=>{ m.b[17](a) } }})
			el({a:'button',b:m.e[7],c:'-',e:{click:a=>{
				a.stopPropagation()
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.b[17](a)
			}}})
		}}})
	})();
	
})()

window.addEventListener('message', m.c[4])
return m
}
addEventListener('load',initApp)
