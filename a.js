addEventListener('load',()=>{
const m={
	a:[{a:document.body}],
	b:[,0,'',,,,,,,,
		a=>{
			m.b[1]=0
			if (m.b[0]) {
				m.b[0].style.cssText = m.b[2]
				if (m.b[0] == a && ['BUTTON','INPUT','SELECT','TEXTAREA'].indexOf(a.tagName.toUpperCase())<0 ) {
					m.b[0] = null
					window.parent.postMessage(JSON.stringify({a:0}))
					return
				}
			}
			if (a) {
				m.b[0]=a
				m.b[1]=a.getAttribute('data-dynamic-app-idx')
				m.b[2]=a.style.cssText
				window.parent.postMessage(JSON.stringify({a:0, b:m.b[2], c:m.a[m.b[1]].b, d:m.a[m.b[1]].d, e:m.b[1], label:m.a[m.b[1]].label}))
				m.b[0].style.boxShadow = '0 0 1px 1px rgba(0,0,0,.1),0 0 1px 2px rgba(0,0,0,.3) inset'
			} else {
				m.b[0] = null
				window.parent.postMessage(JSON.stringify({a:0}))
			}
		},
		a=>{
			a.preventDefault()
			a.stopPropagation()
			const b=a.dataTransfer?a.dataTransfer.getData('a'):undefined
			const c=a.target.getBoundingClientRect()
			//m.log.textContent = `over  X: ${a.clientX}   Y: ${a.clientY}   top: ${c.top}  left: ${c.left}  bottom: ${c.top}  right: ${c.right}  ${b}`
		},
		a=>{
			a.preventDefault()
			a.stopPropagation()
			if (m.b[3]==a.target) return
			if (m.b[3]) {
				window.parent.postMessage(JSON.stringify({a:2, b:a.target==document.body?'0':a.target.getAttribute('data-dynamic-app-idx'), c:m.b[3].getAttribute('data-dynamic-app-idx')}))
				a.target.appendChild(m.b[3])
				m.b[10](m.b[3])
			} else {
				const b=a.dataTransfer?JSON.parse(a.dataTransfer.getData('a')):{}
				if (b.a) {
					const c = el({a:b.a, b:a.target, c:b.d, d:{...b.b,style:b.c||'', draggable:true,'data-dynamic-app-idx':m.a.length}, e:{click:m.b[13] ,drop:b.f?m.b[12]:()=>{}, dragstart:a=>{m.b[3]=a.target}}})
					window.parent.postMessage(JSON.stringify({a:1, b:a.target==document.body?'0':a.target.getAttribute('data-dynamic-app-idx'), c:m.a.length, label:b.label}))
					m.a.push({a:c,b:b.b,c:b.c,d:[b.d?'textContent':'',b.d],f:b.f,label:b.label})
					m.b[10](c)
				}
			}
			m.b[3] = null
			//m.log.textContent = `drop  X: ${a.clientX}   Y: ${a.clientY}`
		},
		a=>{ a.stopPropagation(); m.b[10](a.target) },
	],
	c:[
		a=>{ m.b[10](m.a[a].a) },
		a=>{ m.a[m.b[1]].label=a },
		a=>{
			if (a[0]!=m.a[m.b[1]].d[0]) m.b[0][m.a[m.b[1]].d[0]]=''
			m.a[m.b[1]].d=a
			m.b[0][a[0]]=a[1]
		},
		a=>{
			if (!m.b[0]) return
			m.b[2]=a
			m.b[0].style.cssText=a
			m.b[0].style.boxShadow = '0 0 1px 1px rgba(0,0,0,.1),0 0 1px 2px rgba(0,0,0,.3) inset'
		},
		a=>{
			Object.keys(m.a[m.b[1]].b).forEach(b=>{
				if (a[b]) {
					m.a[m.b[1]].b[b]=a[b]
					m.b[0].setAttribute(b,a[b])
					delete a[b]
				} else {
					m.b[0].removeAttribute(b)
					delete m.a[m.b[1]].b[b]
				}
			})
			Object.keys(a).forEach(b=>{
				m.a[m.b[1]].b[b]=a[b]
				m.b[0].setAttribute(b,a[b])
			})
		},
		(a,b,c)=>{ m.a[a].a.insertBefore(m.a[b].a,m.a[c].a) },
		a=>{
			const b=a=>{
				[...a.children].forEach(a=>{b(a)})
				const c=a.getAttribute('data-dynamic-app-idx')
				a.parentElement.removeChild(a)
				c&&(delete m.a[c])
			}
			b(m.a[a].a)
		},,,,
		a=>{
			const c=m.b[0]
			m.b[10]()
			el({a:'a',b:document.body,d:{download:'layout.json',href:URL.createObjectURL(new Blob([JSON.stringify((a=>{a.c(a);return a.b})({a:[...document.body.children].slice(1),b:[],c:a=>{
				a.a.forEach(b=>{
					const c=m.a[b.getAttribute('data-dynamic-app-idx')]
					a.b.push({a:b.tagName, b:c.b, c:b.style.cssText, d:c.d, f:c.f, g:c.label,h:[]})
					a.c({a:[...b.children],b:a.b[a.b.length-1].h,c:a.c})
				})
			}}))], {type:'application/json'}))},e:{click:a=>{document.body.removeChild(a.target)}}}).click()
			m.b[10](c)
		},
		a=>{
			const c=m.b[0]
			m.b[10]();
			m.saveHTML(JSON.stringify((a=>{a.c(a);return a.b})({a:[...document.body.children].slice(1),b:[],c:a=>{
				a.a.forEach(b=>{
					const c=m.a[b.getAttribute('data-dynamic-app-idx')]
					a.b.push({a:b.tagName, b:c.b, c:b.style.cssText, d:c.d, h:[]})
					a.c({a:[...b.children],b:a.b[a.b.length-1].h,c:a.c})
				})
			}})))
			m.b[10](c)
		},
		a=>{
			el({a:'input', d:{type:'file', accept:'application/json'}, e:{change:a=>{
				const b=new FileReader()
				b.onload=a=>{
					m.b[10]()
					m.a=[{a:document.body}]
					document.body.innerHTML=''
					document.body.appendChild(m.log);
					(a=>{a.c(a)})({a:JSON.parse(a.target.result),b:document.body,c:a=>{a.a.forEach(b=>{
						const c = el({a:b.a, b:a.b, d:{...b.b,style:b.c||'', draggable:true,'data-dynamic-app-idx':m.a.length}, e:{click:m.b[13] ,drop:b.f?m.b[12]:()=>{}, dragstart:a=>{m.b[3]=a.target}}})
						b.d[0]&&(c[b.d[0]]=b.d[1])
						m.a.push({a:c,b:b.b,c:b.c,d:b.d,f:b.f,label:b.g})
						a.c({a:b.h,b:c,c:a.c})
					})}})
					window.parent.postMessage(JSON.stringify({a:3, b:a.target.result}))
				}
				b.readAsText(a.target.files[0])
			}}}).click()
		},
		a=>{ const b=JSON.parse(a.data);m.c[b.a](b.b, b.c, b.d) },
		a=>{ m.a[m.b[1]].g=a },
		a=>{ m.a[m.b[1]].e=a;console.log(m) },
	],
	log: el({a:'p', b:document.body, c:'log', d:{style:'position:fixed;bottom:64px;right:16px;'}}),
	saveHTML: a=>{
var b=`<!DOCTYPE html><html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="application builder" content="wysiwyg application builder" />
<title>m</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
</style>
<script src="https://miftahul001.github.io/m/m.js"></script>
<script>
const m={}
addEventListener('load',()=>{(a=>{a.a(a)})({a:a=>{a.c.forEach(b=>{const c=el({a:b.a,b:a.b,d:{...b.b,style:b.c||''}});b.d[0]&&(c[b.d[0]]=b.d[1]);a.a({a:a.a,b:c,c:b.h})})},b:document.body,c:${a}})})
</script>
</head><body></body></html>`
		el({a:'a',b:document.body,d:{download:'m.html',href:URL.createObjectURL(new Blob([b], {type:'text/HTML'}))},e:{click:a=>{document.body.removeChild(a.target)}}}).click()
	},
};

document.body.addEventListener('dragover', m.b[11])
document.body.addEventListener('drop', m.b[12])
window.addEventListener('message', m.c[13])
return m
})