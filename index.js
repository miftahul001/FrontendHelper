const initApp=()=>{
const m={
	a:[],
	b:el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',d:{style:'padding-left:3px;','data-dynamic-app-idx':'0'}})}).parentElement}).parentElement}).parentElement,
	c:{
		div: {a:'DIV', b:{}, c:'width:100px;height:100px;box-shadow:0 0 1px 1px rgba(0,0,0,.1);',f:1},
		span: {a:'SPAN', b:{}, c:'', d:'span'},
		button: {a:'BUTTON', b:{}, c:'', d:'button'},
		input1: {a:'INPUT', b:{type:'text'}, c:''},
	},
	selected:null,
	selectedIdx:0,
	dragged: null,
	dragstart: a=>{ a.dataTransfer.setData('a', a.target.getAttribute('data-dynamic-app-a')) },
	attr:'',
	txt:'',
	style:'',
	selectedKey:'',
	uSelect: a=>{
		a.stopPropagation()
		if (m.selected==a.target.parentElement) return
		m.selected&&(m.selected.children[1].style.background='rgba(0,0,0,0)')
		m.selected=a.target.parentElement
		m.selected.children[1].style.background='#87CEFA'
		m.doc.contentWindow.postMessage(JSON.stringify({a:'uSelect',b:m.selected.getAttribute('data-dynamic-app-idx')}))
	},
	updateLabel: a=>{ m.doc.contentWindow.postMessage(JSON.stringify({a:'uLabel',b:a.target.textContent})) },
	updateText: a=>{ m.doc.contentWindow.postMessage(JSON.stringify({a:'uText',b:[m.txt.children[0].value,m.txt.children[1].value]})) },
	updateAttr: a=>{
		const b=m.attr.children.length-1
		const c={}
		for (var i=0; i<b; i+=4) {
			m.attr.children[i].value.trim()!=''&&(c[m.attr.children[i].value.trim()]=m.attr.children[i+2].value)
		}
		m.doc.contentWindow.postMessage(JSON.stringify({a:'uAttr',b:c}))
	},
	updateStyle: a=>{
		const b=m.style.children.length-1
		var c=''
		for (var i=0; i<b; i+=4) c+=m.style.children[i].value+':'+m.style.children[i+2].value+';'
		m.doc.contentWindow.postMessage(JSON.stringify({a:'uStyle',b:c}))
	},
	drop: a=>{
		a.preventDefault()
		a.stopPropagation()
		if (!m.dragged) return
		a.target.parentElement.parentElement.insertBefore(m.dragged, a.target.parentElement)
		m.doc.contentWindow.postMessage(JSON.stringify({a:'mv', b:a.target.parentElement.parentElement.parentElement.getAttribute('data-dynamic-app-idx'), c:m.dragged.getAttribute('data-dynamic-app-idx'), d:a.target.parentElement.getAttribute('data-dynamic-app-idx')}))
		m.dragged = null
	},
	select: a=> {
		a.b&&a.b.split(';').slice(0,-1).map(a=>a.split(':').map(a=>a.trim())).forEach(a=>{
			el({a:'input',b:m.style,d:{type:'text',size:a[0].length,value:a[0]},e:{
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{ m.updateStyle(a) },
			}})
			el({a:'div',b:m.style,c:':',d:{style:'text-align:center;'}})
			el({a:'input',b:m.style,d:{type:'text',value:a[1]},e:{
				input:a=>{ m.updateStyle(a) }
			}})
			el({a:'button',b:m.style,c:'-',e:{click:a=>{
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.updateStyle(a)
			}}})
		})
		a.c&&Object.keys(a.c).forEach(b=>{
			el({a:'input',b:m.attr,d:{type:'text',size:b[0].length,value:b},e:{
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{ m.updateAttr(a) },
			}})
			el({a:'div',b:m.attr,c:':',d:{style:'text-align:center;'}})
			el({a:'input',b:m.attr,d:{type:'text',value:a.c[b]},e:{ input:a=>{ m.updateAttr(a) } }})
			el({a:'button',b:m.attr,c:'-',e:{click:a=>{
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.updateAttr(a)
			}}})
		})
		m.txt.children[0].value=a.d[0]
		m.txt.children[1].value=a.d[1]
		m.selected&&(m.selected.children[1].style.background='rgba(0,0,0,0)')
		m.selected=m.a[a.e].a
		m.selected.children[1].style.background='#87CEFA'
	},
	addh: a=> {
		m.a.push({a:el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',b:m.a[a.b].a.children[2],d:{'data-dynamic-app-idx':a.c,style:'padding-left:11px;'}}),c:"\u25B6",d:{style:'position:absolute;margin-left:-9px;padding:5px 0;font-size:9px;'}}).parentElement,c:a.label,d:{style:'min-width:7px;padding:1px 5px;border-radius:5px;',draggable:true},e:{dblclick:a=>{a.target.contentEditable=true},blur:a=>{a.target.contentEditable=false},input:m.updateLabel,click:m.uSelect,dragstart:a=>{m.dragged=a.target.parentElement},dragover:a=>{a.preventDefault();a.stopPropagation()},drop:m.drop}}).parentElement}).parentElement})
	},
	mvh: a=> { m.a[a.b].a.children[2].appendChild(m.a[a.c].a) },
	load: a=> {
		const loadChild=(a,b)=>{
			a.forEach(a=>{
				const c=el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',b:b.children[2],d:{'data-dynamic-app-idx':m.a.length,style:'padding-left:11px;'}}),c:"\u25B6",d:{style:'position:absolute;margin-left:-9px;padding:5px 0;font-size:9px;'}}).parentElement,c:a.g,d:{style:'min-width:7px;padding:1px 5px;border-radius:5px;',draggable:true},e:{dblclick:a=>{a.target.contentEditable=true},blur:a=>{a.target.contentEditable=false},input:m.updateLabel,click:m.uSelect,dragstart:a=>{m.dragged=a.target.parentElement},dragover:a=>{a.preventDefault();a.stopPropagation()},drop:m.drop}}).parentElement}).parentElement
				m.a.push({a:c})
				loadChild(a.h,c)
			})
		}
		m.b.children[2].innerHTML=''
		m.a=[{a:m.b}]
		JSON.parse(a.b).forEach(a=>{
			const c=el({a:'div',b:el({a:'div',b:el({a:'div',b:el({a:'div',b:m.b.children[2],d:{'data-dynamic-app-idx':m.a.length,style:'padding-left:11px;'}}),c:"\u25B6",d:{style:'position:absolute;margin-left:-9px;padding:5px 0;font-size:9px;'}}).parentElement,c:a.g,d:{style:'min-width:7px;padding:1px 5px;border-radius:5px;',draggable:true},e:{dblclick:a=>{a.target.contentEditable=true},blur:a=>{a.target.contentEditable=false},input:m.updateLabel,click:m.uSelect,dragstart:a=>{m.dragged=a.target.parentElement},dragover:a=>{a.preventDefault();a.stopPropagation()},drop:m.drop}}).parentElement}).parentElement
			m.a.push({a:c})
			loadChild(a.h,c)
		})
	}
};

const resizable={
	a:0,b:0,c:0,d:['clientX','clientY'],e:['width','height'],f:['offsetWidth','offsetHeight'],g:1,
	h: (a,b,c,d)=>{
		resizable.b=b
		resizable.c=c
		resizable.a = a[resizable.d[resizable.c]]
		document.addEventListener('mouseup', resizable.j)
		document.addEventListener('mousemove', resizable.i)
		resizable.g=d
	},
	i: a=>{
		a.stopPropagation()
		a.preventDefault()
		resizable.b.style[resizable.e[resizable.c]] = (resizable.b[resizable.f[resizable.c]] + resizable.g*(resizable.a - a[resizable.d[resizable.c]]))+'px'
		resizable.a = a[resizable.d[resizable.c]]
	},
	j: a=>{
		document.removeEventListener('mouseup', resizable.j)
		document.removeEventListener('mousemove', resizable.i)
	},
}
m.a[0]={a:m.b};

(()=>{
	const a=el({a:'div',b:document.body,d:{style:'position:fixed;top:1px;left:1px;right:1px;bottom:1px;display:flex;flex-direction:column;'}})
	
	const b=el({a:'div',b:el({a:'div',b:a}),d:{style:'display:flex;gap:5px;padding:3px;border:3px solid rgba(0,0,0,.3);margin:1px 3px;height:40px;'}})//toolbar
	
	Object.keys(m.c).forEach(a=>{
		el({a:'div',b:b,c:a,d:{style:'padding:5px 7px;border:1px solid #ccc;cursor:default;',draggable:true,'data-dynamic-app-a':JSON.stringify({label:a,...m.c[a]})}, e:{dragstart:m.dragstart}})
	})
	el({a:'button',b:b,c:'Save template',d:{style:'padding:5px 7px;border:1px solid #ccc;'}, e:{click:a=>{
		m.doc.contentWindow.postMessage(JSON.stringify({a:'save'}))
	}}})
	el({a:'button',b:b,c:'Load template',d:{style:'padding:5px 7px;border:1px solid #ccc;'}, e:{click:a=>{
		m.doc.contentWindow.postMessage(JSON.stringify({a:'load'}))
	}}})
	el({a:'button',b:b,c:'SaveAsHTML',d:{style:'padding:5px 7px;border:1px solid #ccc;'}, e:{click:a=>{
		m.doc.contentWindow.postMessage(JSON.stringify({a:'saveAsHTML'}))
	}}})
	
	el({a:'div',b:a,d:{style:'background:#579;height:3px;cursor:ns-resize;'},e:{mousedown:a=>{resizable.h(a,a.target.previousElementSibling,1,-1)}}})//separator
	
	const c=el({a:'div',b:a,d:{style:'display:flex;flex:1;padding:7px;'}})//content
	
	const d=el({a:'div',b:c,d:{style:'display:flex;flex-direction:column;width:160px;box-shadow:0 0 3px 1px rgba(0,0,0,.3);border-radius:5px;'}})//left content
	el({a:'div',b:d,c:'structure',d:{style:'background:rgba(0,0,0,.8);color:rgba(255,255,255,.9);font-weight:bold;border-radius:5px;text-align:center;'}})
	el({a:'div',b:d,d:{style:'height:320px;'}}).appendChild(m.b)
	
	el({a:'div',b:d,d:{style:'background:#579;padding:3px;cursor:ns-resize;'},e:{mousedown:a=>{resizable.h(a,a.target.previousElementSibling,1,-1)}}})//separator
	
	el({a:'div',b:d,c:'JS Object',d:{style:'background:rgba(0,0,0,.8);color:rgba(255,255,255,.9);font-weight:bold;border-radius:5px;text-align:center;'}})
	el({a:'div',b:d,d:{style:'flex:1;'}})
	
	el({a:'div',b:el({a:'div',b:c,d:{style:'padding:3px 7px;display:flex;'}}),d:{style:'background:#579;width:3px;cursor:ew-resize;'},e:{mousedown:a=>{resizable.h(a,a.target.parentElement.previousElementSibling,0,-1)}}})//separator
	
	m.doc=el({a:'iframe',b:c,d:{src:'a.html', style:'box-shadow:0 0 3px 1px rgba(0,0,0,.3);border:none;margin:0;padding:0;flex:1;'}})//main content
	
	el({a:'div',b:el({a:'div',b:c,d:{style:'padding:3px 7px;display:flex;'}}),d:{style:'background:#579;width:3px;cursor:ew-resize;'},e:{mousedown:a=>{resizable.h(a,a.target.parentElement.nextElementSibling,0,1)}}})//separator
	
	const e=el({a:'div',b:c,d:{style:'display:flex;flex-direction:column;width:256px;box-shadow:0 0 3px 1px rgba(0,0,0,.3);border-radius:5px;'}})//right content
	resizable.b3=e
	
	el({a:'div',b:e,c:'text',d:{style:'background:rgba(0,0,0,.8);color:rgba(255,255,255,.9);font-weight:bold;border-radius:5px;text-align:center;'}});
	(()=>{
		m.txt=el({a:'div',b:e,d:{style:'display:flex;gap:3px;padding:3px;'}})
		el({a:'option',b:el({a:'option',b:el({a:'option',b:el({a:'option',b:el({a:'select',b:m.txt,d:{style:'padding-left:3px;'},e:{change:m.updateText}}),c:'none',d:{value:''}}).parentElement,c:'textContent',d:{value:'textContent'}}).parentElement,c:'innerText',d:{value:'innerText'}}).parentElement,c:'innerHTML',d:{value:'innerHTML'}})
		el({a:'input',b:m.txt,d:{type:'text',style:'flex:1;'},e:{input:m.updateText}})
	})()
	
	el({a:'div',b:e,c:'attributes',d:{style:'background:rgba(0,0,0,.8);color:rgba(255,255,255,.9);font-weight:bold;border-radius:5px;text-align:center;'}});
	(()=>{
		const a=el({a:'div',b:e,d:{style:'height:320px;padding:3px;overflow:scroll;'}})
		m.attr=el({a:'div',b:a,d:{style:'display:grid;grid-template-columns:auto 7px auto 11px;'}})
		el({a:'button', b:a, c:'+', e:{click:a=>{
			el({a:'input',b:m.attr,d:{type:'text',size:1},e:{
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{
					m.updateAttr(a)
				},
			}})
			el({a:'div',b:m.attr,c:':',d:{style:'text-align:center;'}})
			el({a:'input',b:m.attr,d:{type:'text'},e:{
				input:a=>{
					m.updateAttr(a)
				}
			}})
			el({a:'button',b:m.attr,c:'-',e:{click:a=>{
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.updateAttr(a)
			}}})
			
		}}})
	})()
	
	el({a:'div',b:e,d:{style:'background:#579;padding:3px;cursor:ns-resize;'},e:{mousedown:a=>{resizable.h(a,a.target.previousElementSibling,1,-1)}}})//separator
	
	el({a:'div',b:e,c:'style',d:{style:'background:rgba(0,0,0,.8);color:rgba(255,255,255,.9);font-weight:bold;border-radius:5px;text-align:center;'}});
	(()=>{
		const a=el({a:'div',b:e,d:{style:'flex:1;padding:3px;overflow:scroll;'}})
		m.style=el({a:'div',b:a,d:{style:'display:grid;grid-template-columns:auto 7px auto 11px;'}})
		el({a:'button', b:a, c:'+', e:{click:a=>{
			el({a:'input',b:a.target.parentElement.children[0],d:{type:'text',size:1},e:{
				input:a=>{a.target.size=a.target.value.length},
				blur:a=>{
					m.updateStyle(a)
				},
			}})
			el({a:'div',b:a.target.parentElement.children[0],c:':',d:{style:'text-align:center;'}})
			el({a:'input',b:a.target.parentElement.children[0],d:{type:'text'},e:{
				input:a=>{
					m.updateStyle(a)
				}
			}})
			el({a:'button',b:a.target.parentElement.children[0],c:'-',e:{click:a=>{
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target.previousElementSibling)
				a.target.parentElement.removeChild(a.target)
				m.updateStyle(a)
			}}})
		}}})
	})()
})()

window.addEventListener('message', a=>{
	m.style.innerHTML=''
	m.attr.innerHTML=''
	const b=JSON.parse(a.data)
	m[b.a](b)
})
return m
}