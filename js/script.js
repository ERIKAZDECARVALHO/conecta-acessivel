(() => {
 const root=document.documentElement, status=document.getElementById('access-status');
 let size=16;
 document.getElementById('increase-font')?.addEventListener('click',()=>{size=Math.min(22,size+1);root.style.fontSize=size+'px';status.textContent='Texto aumentado.'});
 document.getElementById('decrease-font')?.addEventListener('click',()=>{size=Math.max(14,size-1);root.style.fontSize=size+'px';status.textContent='Texto diminuído.'});
 document.getElementById('contrast')?.addEventListener('click',e=>{const on=document.body.classList.toggle('high-contrast');e.currentTarget.setAttribute('aria-pressed',String(on));status.textContent=on?'Alto contraste ativado.':'Alto contraste desativado.'});
 document.getElementById('reset')?.addEventListener('click',()=>{size=16;root.style.fontSize='';document.body.classList.remove('high-contrast');document.getElementById('contrast')?.setAttribute('aria-pressed','false');status.textContent='Configurações restauradas.'});
})();
