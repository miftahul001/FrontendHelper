const initApp=()=>{
const m={
	a:[{a:document.body}],
	//b:el({a:'div'}),
	selected:null,
	selectedIdx:0,
	selectedStyle:'',
	newEl: null,
	select: a=>{
		if (m.selected) {
			m.selected.style.cssText = m.selectedStyle
			if (m.selected == a || !a) {
				m.selected = null
				window.parent.postMessage(JSON.stringify({a:null}))
				return
			}
		}
		if (a) {
			m.selected = a
			const b=a.getAttribute('data-dynamic-app-idx')
			m.selectedIdx=b
			m.selectedStyle = m.selected.style.cssText
			window.parent.postMessage(JSON.stringify({a:'select', b:m.selectedStyle, c:m.a[b].b, d:m.a[b].d, e:b, label:m.a[b].label}))
			m.selected.style.boxShadow = '0 0 1px 1px rgba(0,0,0,.1),0 0 1px 2px rgba(0,0,0,.3) inset'
		}
	},
	click: a=>{ a.stopPropagation(); m.select(a.target) },
	dragged: null,
	dragover1: a=>{
		a.preventDefault()
		a.stopPropagation()
		const b=a.dataTransfer?a.dataTransfer.getData('a'):undefined
		const c=a.target.getBoundingClientRect()
		m.log.textContent = `over  X: ${a.clientX}   Y: ${a.clientY}   top: ${c.top}  left: ${c.left}  bottom: ${c.top}  right: ${c.right}  ${b}`
	},
	drop: a=>{
		a.preventDefault()
		a.stopPropagation()
		if (m.dragged==a.target) return
		if (m.dragged) {
			window.parent.postMessage(JSON.stringify({a:'mvh', b:a.target==document.body?'0':a.target.getAttribute('data-dynamic-app-idx'), c:m.dragged.getAttribute('data-dynamic-app-idx')}))
			a.target.appendChild(m.dragged)
			m.select(m.dragged)
		} else {
			const b=a.dataTransfer?JSON.parse(a.dataTransfer.getData('a')):{}
			if (b.a) {
				const c = el({a:b.a, b:a.target, c:b.d, d:{...b.b,style:b.c||'', draggable:true,'data-dynamic-app-idx':m.a.length}, e:{click:m.click ,drop:b.f?m.drop:()=>{}, dragstart:a=>{m.dragged=a.target}}})
				window.parent.postMessage(JSON.stringify({a:'addh', b:a.target==document.body?'0':a.target.getAttribute('data-dynamic-app-idx'), c:m.a.length, label:b.label}))
				m.a.push({a:c,b:b.b,c:b.c,d:[b.d?'textContent':'',b.d],f:b.f,label:b.label})
				m.select(c)
			}
		}
		m.dragged = null
		m.log.textContent = `drop  X: ${a.clientX}   Y: ${a.clientY}`
		//console.log(m.b)
	},
	log: el({a:'p', b:document.body, c:'log', d:{style:'position:fixed;bottom:64px;right:16px;'}}),
	saveHTML: a=>{
var b=`<!DOCTYPE html><html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="application builder" content="wysiwyg application builder" />
<title>m</title>
<script src="https://miftahul001.github.io/m/m.js"></script>
<script>
const m={
	initApp: ()=>{((a,b,c)=>{b(a,b,c)})(document.body,(a,b,c)=>{c.forEach(c=>{const d=el({a:c.a,b:a,d:{...c.b,style:c.c||''}});c.d[0]&&(d[c.d[0]]=c.d[1]);b(d,b,c.h)})},${a})}
}
</script>
</head><body><script>m.initApp()</script></body></html>`
		el({a:'a',b:document.body,d:{download:'m.html',href:URL.createObjectURL(new Blob([b], {type:'text/HTML'}))},e:{click:a=>{document.body.removeChild(a.target)}}}).click()
	},
	uLabel: a=>{ m.a[m.selectedIdx].label = a },
	uText: a=>{
		if (a[0]!=m.a[m.selectedIdx].d[0]) m.selected[m.a[m.selectedIdx].d[0]]=''
		m.a[m.selectedIdx].d = a
		m.selected[a[0]]=a[1]
	},
	uStyle: a=>{
		if (!m.selected) return
		m.selectedStyle = a
		m.selected.style.cssText = a
		m.selected.style.boxShadow = '0 0 1px 1px rgba(0,0,0,.1),0 0 1px 2px rgba(0,0,0,.3) inset'
	},
	uAttr: a=> {
		Object.keys(m.a[m.selectedIdx].b).forEach(b=>{
			if (a[b]) {
				m.a[m.selectedIdx].b[b]=a[b]
				m.selected.setAttribute(b,a[b])
				delete a[b]
			} else {
				m.selected.removeAttribute(b)
				delete m.a[m.selectedIdx].b[b]
			}
		})
		Object.keys(a).forEach(b=>{
			m.a[m.selectedIdx].b[b]=a[b]
			m.selected.setAttribute(b,a[b])
		})
	},
	uSelect: a=> { m.select(m.a[a].a) },
	mv: (a,b,c)=> { m.a[a].a.insertBefore(m.a[b].a,m.a[c].a) },
	save: a=> {
		const c=m.selected
		m.select()
		const getChildrens=(a,b)=>{
			a.forEach(a=>{
				const c=m.a[a.getAttribute('data-dynamic-app-idx')]
				b.push({a:a.tagName, b:c.b, c:a.style.cssText, d:c.d, f:c.f, g:c.label,h:[]})
				getChildrens([...a.children],b[b.length-1].h)
			})
		}
		const d=[]
		getChildrens([...document.body.children].slice(2),d)
		el({a:'a',b:document.body,d:{download:'layout.json',href:URL.createObjectURL(new Blob([JSON.stringify(d)], {type:'application/json'}))},e:{click:a=>{document.body.removeChild(a.target)}}}).click()
		m.select(c)
	},
	saveAsHTML: a=> {
		const c=m.selected
		m.select()
		const getChildrens=(a,b)=>{
			a.forEach(a=>{
				const c=m.a[a.getAttribute('data-dynamic-app-idx')]
				b.push({a:a.tagName, b:c.b, c:a.style.cssText, d:c.d, h:[]})
				getChildrens([...a.children],b[b.length-1].h)
			})
		}
		const d=[]
		getChildrens([...document.body.children].slice(2),d)
		m.saveHTML(JSON.stringify(d))
		m.select(c)
	},
	load: a=> {
		el({a:'input', d:{type:'file', accept:'application/json'}, e:{change:a=>{
			const b=new FileReader()
			b.onload=a=>{
				m.select()
				m.a=[{a:document.body}]
				while (document.body.children.length>2) document.body.removeChild(document.body.children[2])
				const loadChild=(a,b)=>{
					a.forEach(a=>{
						const c = el({a:a.a, b:b, d:{...a.b,style:a.c||'', draggable:true,'data-dynamic-app-idx':m.a.length}, e:{click:m.click ,drop:a.f?m.drop:()=>{}, dragstart:a=>{m.dragged=a.target}}})
						a.d[0]&&(c[a.d[0]]=a.d[1])
						m.a.push({a:c,b:a.b,c:a.c,d:a.d,f:a.f,label:a.g})
						loadChild(a.h,c)
					})
				}
				JSON.parse(a.target.result).forEach(a=>{
					const c = el({a:a.a, b:document.body, d:{...a.b,style:a.c||'', draggable:true,'data-dynamic-app-idx':m.a.length}, e:{click:m.click ,drop:a.f?m.drop:()=>{}, dragstart:a=>{m.dragged=a.target}}})
					a.d[0]&&(c[a.d[0]]=a.d[1])
					m.a.push({a:c,b:a.b,c:a.c,d:a.d,f:a.f,label:a.g})
					loadChild(a.h,c)
				})
				window.parent.postMessage(JSON.stringify({a:'load', b:a.target.result}))
			}
			b.readAsText(a.target.files[0])
		}}}).click()
	},
};

document.body.addEventListener('dragover', m.dragover1)
document.body.addEventListener('drop', m.drop)
window.addEventListener('message', a=>{ const b=JSON.parse(a.data);m[b.a](b.b, b.c, b.d) })
return m
}