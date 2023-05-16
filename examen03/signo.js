let dia=document.querySelector("#dia")
let mes=document.querySelector("#mes")
let fecha=document.querySelector("#fecha")
let imagen=document.querySelector("#imagen")

dia.oninput=()=>{calcular()} 
mes.onchange=()=>{calcular()} 

const calcular=()=>{
  let vdia=parseInt(dia.value)
  let vmes=mes.value
  document.querySelector("#vdia").innerHTML=vdia
  document.querySelector("#vmes").innerHTML=vmes
  
  
  fecha.innerHTML="<img src='cargando.gif' width='200px' height='200px'>";
    setTimeout(()=>{   
     switch(vmes) {
    	case "Enero":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/capricornio.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/acuario.jpg' width='200px' height='200px'>";		
    		}
        break;
    	case "Febrero":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/acuario.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/piscis.jpg' width='200px' height='200px'>";			
    		}
        break;
    	case "Marzo":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/piscis.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/aries.jpg' width='200px' height='200px'>";
    		}
        break;
    	case "Abril":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/aries.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/tauro.jpg' width='200px' height='200px'>";
    		}
        break;	
    	case "Mayo":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/tauro.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/geminis.jpg' width='200px' height='200px'>";
    		}
        break;	
    	case "Junio":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/geminis.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/cancer.jpg' width='200px' height='200px'>";		
    		}
        break;	
    	case "Julio":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/cancer.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='/img/leo.jpg' width='200px' height='200px'>";			
    		}
        break;	
    	case "Agosto":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/leo.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/virgo.jpg' width='200px' height='200px'>";
    		}
        break;	
    	case "Septiembre":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/virgo.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/libra.jpg' width='200px' height='200px'>";
    		}
        break;	
    	case "Octubre":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/libra.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/scorpion.jpg' width='200px' height='200px'>";
    		}
        break;	
    	case "Noviembre":
    		if(vdia<=20) {
                imagen.innerHTML="<img src='img/scorpion.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/sagitario.jpg' width='200px' height='200px'>";
    		}
        break;	
    	case "Diciembre":
    		if(vdia<=20) {
    			imagen.innerHTML="<img src='img/sagitario.jpg' width='200px' height='200px'>";
    		}else if(vdia>=21) {
                imagen.innerHTML="<img src='img/capricornio.jpg' width='200px' height='200px'>";	
    		}
        break;	
    	}
fecha.innerHTML=`<div>
     <h1>Fecha</h1>
     <div><label>${vdia+' de '+vmes}</label></div>
     </div>`
},2000);
}