// script.js — shared interactive features
document.addEventListener('DOMContentLoaded', ()=>{

  // typewriter effect (used on index)
  const twEl = document.querySelector('.typewriter');
  if(twEl){
    const texts = [
      "for the moments she doesn't know she made whole.",
      "a soft hello, a steady heartbeat, a small forever.",
      "every little laugh stitched into my day."
    ];
    let i=0, j=0, forward=true;
    function tick(){
      const txt = texts[i];
      twEl.textContent = txt.slice(0, j);
      if(forward) j++; else j--;
      if(j>txt.length){ forward=false; setTimeout(tick,1200); }
      else if(j<0){ forward=true; i=(i+1)%texts.length; j=0; setTimeout(tick,200); }
      else setTimeout(tick,60 + Math.random()*40);
    }
    tick();
  }

  // simple poem slider (poems.html)
  const nextBtn = document.getElementById('poem-next');
  const prevBtn = document.getElementById('poem-prev');
  if(nextBtn && prevBtn){
    const poems = Array.from(document.querySelectorAll('.poem-card'));
    let idx = 0;
    function show(i){
      poems.forEach((p,pi)=> p.style.display = (pi===i) ? 'block' : 'none');
    }
    show(idx);
    nextBtn.addEventListener('click', ()=> { idx = (idx+1)%poems.length; show(idx); });
    prevBtn.addEventListener('click', ()=> { idx = (idx-1+poems.length)%poems.length; show(idx); });
  }

  // gallery simple lightbox
  const thumbs = document.querySelectorAll('.thumb');
  if(thumbs.length){
    thumbs.forEach(t=>{
      t.addEventListener('click', ()=>{
        const src = t.getAttribute('data-full') || t.src;
        const l = document.createElement('div');
        l.style.position='fixed'; l.style.inset=0; l.style.display='flex'; l.style.alignItems='center'; l.style.justifyContent='center';
        l.style.background='rgba(0,0,0,0.85)'; l.style.zIndex=9999;
        const img = document.createElement('img'); img.src=src; img.style.maxWidth='95%'; img.style.maxHeight='90%'; img.style.borderRadius='12px';
        l.appendChild(img);
        l.addEventListener('click', ()=> l.remove());
        document.body.appendChild(l);
      });
    });
  }

 

});
