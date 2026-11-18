document.documentElement.classList.add('js-reveal-ready');
(function(){'use strict';
var d=document,CFG={phone:'213558517985',email:'mohamedbou1786@gmail.com'},
reels={1:'Reel 1: explainer in Arabic.',2:'Reel 2: promo in Arabic.',3:'Reel 3: talking-head reel in English.'},
motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s,r){return (r||d).querySelectorAll(s)}
/* progress bar */
var ph=d.getElementById('ph'),tk=0;
function prog(){tk=0;var e=d.documentElement,m=e.scrollHeight-e.clientHeight;ph.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')'}
addEventListener('scroll',function(){if(!tk){tk=1;requestAnimationFrame(prog)}},{passive:true});prog();
/* service doors */
var ds=$('.door'),ps=$('.pn');
function openDoor(i){ds.forEach(function(x,k){var on=k===i;x.setAttribute('aria-expanded',on);x.parentNode.classList.toggle('open',on);x.parentNode.parentNode.classList.toggle('on',on)});ps.forEach(function(p,k){p.classList.toggle('on',k===i)})}
ds.forEach(function(x,k){x.addEventListener('click',function(){openDoor(k);var p=d.getElementById('pn'+k).getBoundingClientRect();if(p.top>innerHeight*.75||p.top<0)d.getElementById('pn'+k).scrollIntoView({block:'start',behavior:motion?'smooth':'auto'})})});openDoor(0);
/* mobile menu closes on selection */
$('.sheet a').forEach(function(a){a.addEventListener('click',function(){a.closest('details').open=false})});
var menu=d.querySelector('.menu');d.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus()}});d.addEventListener('click',function(e){if(menu.open&&!menu.contains(e.target))menu.open=false});
/* reel switcher */
var rv=d.getElementById('rv'),tabs=$('.tabs button');
tabs.forEach(function(b){b.addEventListener('click',function(){var n=b.dataset.i;rv.pause();rv.poster='assets/img/reel-'+n+'.webp';rv.src='assets/projects/video/reel-'+n+'.mp4';rv.load();d.getElementById('rn').textContent=reels[n];tabs.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')})})});
/* WhatsApp button hides while the contact section is visible */
var fab=d.getElementById('fab');
if('IntersectionObserver'in window){new IntersectionObserver(function(e){fab.hidden=e[0].isIntersecting},{threshold:.15}).observe(d.getElementById('contact'));
 var links={};$('nav ul a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){Object.keys(links).forEach(function(k){links[k].removeAttribute('aria-current')});if(links[e.target.id])links[e.target.id].setAttribute('aria-current','true')}})},{rootMargin:'-45% 0px -50% 0px'});
 Object.keys(links).forEach(function(k){var t=d.getElementById(k);if(t)so.observe(t)});
 if(motion){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  $('.pc,.wy,.steps li,.lb,.faq,.sec-h,#services .doors').forEach(function(el){el.classList.add('rv');io.observe(el)})}}
/* inquiry form: validated, opens WhatsApp or email. Nothing is sent to a server. */
var f=d.getElementById('f'),via='wa';
$('button[type=submit]',f).forEach(function(b){b.addEventListener('click',function(){via=b.dataset.via})});
function setErr(id,fid,msg){d.getElementById(id).textContent=msg;var el=d.getElementById(fid);if(msg)el.setAttribute('aria-invalid','true');else el.removeAttribute('aria-invalid');return !msg}
function check(){var n=f.n.value.trim(),e=f.e.value.trim(),m=f.m.value.trim(),ok=true;
 ok=setErr('en','n',n.length<2?'Please enter your name.':'')&&ok;
 ok=setErr('ee','e',e&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)?'Please enter a valid email, or leave it empty.':'')&&ok;
 ok=setErr('em','m',m.length<20?'Please describe your project in at least 20 characters.':'')&&ok;return ok}
f.addEventListener('submit',function(ev){ev.preventDefault();
 var n=f.n.value.trim(),e=f.e.value.trim(),m=f.m.value.trim(),ok=check();
 var s=d.getElementById('fs');
 if(!ok){s.textContent='Please fix the highlighted fields.';var bad=f.querySelector('[aria-invalid=true]');if(bad)bad.focus();return}
 var NL=String.fromCharCode(10),body='Hi Mohamed, I came across your portfolio and I’d like to discuss a project.'+NL+NL+'Name: '+n+(e?NL+'Email: '+e:'')+NL+'I need: '+f.t.value+NL+NL+m;
 if(via==='mail'){location.href='mailto:'+CFG.email+'?subject='+encodeURIComponent('Project inquiry from '+n)+'&body='+encodeURIComponent(body);s.textContent='Your email app should open with the message ready to send.'}
 else{open('https://wa.me/'+CFG.phone+'?text='+encodeURIComponent(body),'_blank','noopener');s.textContent='WhatsApp should open with your message ready to send.'}});
['n','e','m'].forEach(function(id){d.getElementById(id).addEventListener('input',function(){if(this.getAttribute('aria-invalid')==='true')check()})});
d.getElementById('y').textContent=new Date().getFullYear();
})();
