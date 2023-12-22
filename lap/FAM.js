let turn ='x',
e=document.getElementById('w');
let q1=document.getElementById('q1')
let q2=document.getElementById('q2')
let q3=document.getElementById('q3')
let q4=document.getElementById('q4')
let q5=document.getElementById('q5')
let q6=document.getElementById('q6')
let q7=document.getElementById('q7')
let q8=document.getElementById('q8')
let q9=document.getElementById('q9')


function win(){

    if(q1.innerHTML==q2.innerHTML&&q2.innerHTML==q3.innerHTML&&q1.innerText!=''&&q2.innerText!=''&&q3.innerText!=''){
        document.getElementById('q1').style='background-color:green;'
        document.getElementById('q3').style='background-color:green;'
        document.getElementById('q2').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else if(q4.innerHTML==q5.innerHTML&&q5.innerHTML==q6.innerHTMLq4.innerText!=''&&q5.innerText!=''&&q6.innerText!=''){
        document.getElementById('q4').style='background-color:green;'
        document.getElementById('q5').style='background-color:green;'
        document.getElementById('q6').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else    if(q7.innerHTML==q8.innerHTML&&q8.innerHTML==q9.innerHTML&&q7.innerText!=''&&q8.innerText!=''&&q9.innerText!=''){
        document.getElementById('q7').style='background-color:green;'
        document.getElementById('q8').style='background-color:green;'
        document.getElementById('q9').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else    if(q1.innerHTML==q4.innerHTML&&q4.innerHTML==q7.innerHTML&&q1.innerText!=''&&q4.innerText!=''&&q7.innerText!=''){
        document.getElementById('q1').style='background-color:green;'
        document.getElementById('q4').style='background-color:green;'
        document.getElementById('q7').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else    if(q2.innerHTML==q5.innerHTML&&q5.innerHTML==q8.innerHTML&&q2.innerText!=''&&q5.innerText!=''&&q8.innerText!=''){
        document.getElementById('q2').style='background-color:green;'
        document.getElementById('q5').style='background-color:green;'
        document.getElementById('q8').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else    if(q3.innerHTML==q6.innerHTML&&q6.innerHTML==q9.innerHTML&&q3.innerText!=''&&q6.innerText!=''&&q9.innerText!=''){
        document.getElementById('q3').style='background-color:green;'
        document.getElementById('q6').style='background-color:green;'
        document.getElementById('q9').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else    if(q3.innerHTML==q5.innerHTML&&q5.innerHTML==q7.innerHTML&&q3.innerText!=''&&q5.innerText!=''&&q7!=''){
        document.getElementById('q5').style='background-color:green;'
        document.getElementById('q3').style='background-color:green;'
        document.getElementById('q7').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }else    if(q1.innerHTML==q5.innerHTML&&q5.innerHTML==q9.innerHTML&&q1.innerText!=''&&q5.innerText!=''&&q9.innerText!=''){
        document.getElementById('q1').style='background-color:green;'
        document.getElementById('q5').style='background-color:green;'
        document.getElementById('q9').style='background-color:green;'
        setTimeout(function(){location.reload()},2000)
    }

}

function d(id){
    let h=document.getElementById(id); 
   if(turn =='x'&& h.innerText==''){
    h.innerHTML='X'
    turn='o'
    e.innerHTML='now O play'
   }else if(turn=='o'&&h.innerText==''){
    h.innerHTML='O'
    turn='x'
    e.innerHTML='now X play'
   }
    win()
}