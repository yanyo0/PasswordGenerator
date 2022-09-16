const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


//  VARIABLES  -------------------------------------------------------------------

// VERSION NORMAL

const $keyGeneratorNormal = $(".key-generatorNormal")
const $$copy = $$(".copy")
const $arrowNormal = $(".arrowNormal")
const $$passwordSecurity = $$(".passwordSecurity")
const $btnSubtract = $("#btn-subtract")
const $btnAdd = $("#btn-add")
const $numberP = $("#numberP")
const $range = $("#range")
const $uppCase = $("#uppCase")
const $lowerCase = $("#lowerCase")
const $number = $("#number")
const $symbol = $("#symbol")
const $generatorNormal = $("#generatorNormal")
const $btnFunnyVersion = $(".btn-funnyVersion")

 

let uppCaseValue, lowerCaseValue, numberValue, symbolValue,rangeValue


const characters = [
    ["ABCDEFGHIJKLMOPQRSTUVWXYZ"],
    ["abcdefghyjklmnopqrstuvwxys"],
    ["0123456789"],
    [".?,;-_¡!¿*%&$/()[]{}|@<>"],
    []
]

// VERSION FUNNY 

const $btnPreviousVersion = $(".btn-previousVersion")
const $generatorFunny = $("#generatorFunny")
const $keyGeneratorFunny = $(".key-generatorFunny")
const $arrowFunny = $(".arrowFunny")
const arrayFanny = [
    ["humanidad","humano","persona","gente","hombre","mujer","bebe","niño, niña","adolescente","adulto","adulta","anciano","anciana","señor","señora","caballero","dama","individuo","cuerpo","pierna","espinilla","rodilla","muslo","cabeza","cara","boca","labio","diente","ojo","nariz","barba","bigote","cabello","oreja","cerebro","estomago","brazo","codo","hombro","mano","palma","dedo","abdomen","higado","musculo","cuello","corazon","mente","alma","espiritu","pecho","cintura","cadera","espalda","sangre","carne","piel","hueso","resfriado","gripe","diarrea","salud","enfermedad","familia","amigo, amiga","conocido","conocida","colega","pareja","esposo","esposa","matrimonio","amor","padre","madre","hermano","hermana","hijo","hija","abuelo","abuela","bisabuelo","bisabuela","nieto","nieta","bisnieto","bisnieta","primo","prima","sobrino","sobrina","criatura","especie","ser","vida","nacimiento","reproduccion","muerte","naturaleza","campo","bosque","selva", "jungla","desierto","costa","playa","laguna","lago","mar","oceano","cerro", "monte","luz","energia","animales","animal","perro","gato","vaca","cerdo","caballo","yegua","oveja","mono","raton","rata","tigre","conejo","dragon","ciervo","rana","leon","jirafa","elefante","pajaro","gallina","gorrion","cuervo","aguila","halcon","pez","camaron","langosta","sardina","atun","calamar","pulpo","insecto","bicho","mariposa","polilla","saltamontes","mosca","mosquito","cucaracha","caracol","babosa","lombriz","marisco","molusco","lagarto","serpiente","cocodrilo","alimento","comida","bebida","vegetal","planta","pasto","cesped","flor","fruta","semilla","arbol","hoja","raiz","tallo","hongo","ciruela","pino","bambu","nuez","almendra","castaña","arroz","avena","cebada","trigo","verdura","patatas","papas","judias","guisantes","porotos","rabano","zanahoria","manzana","naranja","platano","pera","castaño","durazno","tomate","sandia","carne","gaseosa","tiempo","calendario","edad","epoca","era","fecha","instante","momento","segundo","minuto","hora","dia","semana","mes","año","decada","siglo","milenio","ayer","hoy","amanecer","mediodia","tarde","anochecer","noche","lunes","martes","miercoles","jueves","viernes","sabado","domingo","ambiente","espacio","entorno","area","superficie","volumen","region","zona","lado","mundo","planeta","sol","luna","estrella","galaxia","universo","clima","despejado","nublado","lluvia","nieve","viento","trueno","rayo","tormenta","cielo","este","oeste","sur","norte","derecha","izquierda","diagonal","exterior","interior"],
    ["-","_","+","*","@","="] , 
    ['blanco','negro','gris','rojo','naranja','anaranjado','amarillo','verde','celeste','azul','violeta','rosa','rosado','marron','cafe','bueno','buen','malo','superior','inferior','central','lateral','frontal','trasero','posterior','cierto','real','falso','mayor','menor','importante','necesario','absoluto','relativo','caro','barato','viejo','joven','nuevo','cada','cualquier','dado','actual','reciente','capaz','facil','simple','sencillo','dificil','complicado','posible','imposible','probable','improbable','estricto','serio','general','particular','comun','especial','usual','unico','raro','extranio','fuerte','debil','correcto','acertado','incorrecto','desacertado','contrario','opuesto','inverso','igual','diferente','distinto','parecido','similar','diverso','manual','automatico','universal','mundial','continental','internacional','nacional','regional','local','urbano','rural','social','politico','cultural','artistico','propio','ajeno','publico','privado','alto','bajo','grande','pequenio','amplio','angosto','compacto','delgado','grueso','caliente','frio','ligero','pesado','suave','firme','flexible','duro','blando','caluroso','frio','fresco','delicioso','apetitoso','horrible','dulce','picante','salado','amargo','anterior','posterior','siguiente','cercano','lejano','junto','unido','separado','alejado','feliz','triste','solo','solitario','contento','tranquilo','enojado','enfadado','calmo','agitado','ansioso','interesado','aburrido','encantado','cansado','sorprendido','asustado','atemorizado','doloroso','picante','ardiente','apestoso','maloliente'],
    ["!","#","$","%","&","/","(",")","?","¡","¿"],
    [0,1,2,3,4,5,6,7,8,9]
    ] 


// FUNCIONES ---------------------------------------------------------------------------

// VERSION NORMAL

const longitude = () => $numberP.innerText = $range.value


const valueCharacters = () => {
    longitude()
    rangeValue = $range.value
    uppCaseValue = $uppCase.checked
    lowerCaseValue = $lowerCase.checked
    numberValue = $number.checked
    symbolValue = $symbol.checked
    
}


 const generatorData = (valueUpp,valueLower,ValueNumber,valueSymbol) => {
    characters[4] = []
   if(valueUpp){
    characters[4] += characters[0]
   }
   if(valueLower) {
    characters[4] += characters[1]
   }
   if(ValueNumber) {
    characters[4] += characters[2]
   }
   if(valueSymbol) {
    characters[4] += characters[3]
   }
 }

 const generatorPassword = (array, long) => {
    let password = ""
    for (i = 0 ; i < long ; i++) {
        password += array.charAt(Math.floor(Math.random() * array.length))
    }
    return password
 }



const paswordSecurity = (long,i,key) => {
  $$passwordSecurity[i].innerText = ""
  if (long < 8){
    $$passwordSecurity[i].innerText = "CONTRASEÑA POCO SEGURA"
    $$passwordSecurity[i].classList.add("redColor")
    key.classList.add("redBorder")
  } else {
    $$passwordSecurity[i].classList.remove("redColor")
    key.classList.remove("redBorder")
  }
  if(long >= 8 && long <= 10) {
    $$passwordSecurity[i].innerText = "CONTRASEÑA SEGURA"
    $$passwordSecurity[i].classList.add("yellowColor")
    key.classList.add("yellowBorder")
  } else {
    $$passwordSecurity[i].classList.remove("yellowColor")
    key.classList.remove("yellowBorder")
  }
  if(long > 10){
    $$passwordSecurity[i].innerText = "CONTRASEÑA MUY SEGURA"
    $$passwordSecurity[i].classList.add("greenColor")
    key.classList.add("greenBorder")
  } else {
    $$passwordSecurity[i].classList.remove("greenColor")
    key.classList.remove("greenBorder")
  }
}

const generalGenerator = () => {
    password = ""
    valueCharacters()
    generatorData(uppCaseValue,lowerCaseValue,numberValue,symbolValue)
    $keyGeneratorNormal.innerText = generatorPassword(characters[4],rangeValue)
    paswordSecurity(rangeValue, 0, $keyGeneratorNormal)
}

const copyKey = (key) => {
    var copyPass = key.innerText
    navigator.clipboard.writeText(copyPass)

}


//    VERSION  FUNNY

const createFunnyPass = (array) =>{
    let pass = ""
    for (let arr of array) {
       pass += arr[Math.floor(Math.random() * arr.length)]
    } 
    pass += array[4][Math.floor(Math.random() * array[4].length)]
    return pass[0].toUpperCase() + pass.substring(1)
   } 

const funnyPass =() => {
    $keyGeneratorFunny.innerText = createFunnyPass(arrayFanny)
    paswordSecurity(createFunnyPass(arrayFanny).length, 1, $keyGeneratorFunny)
}

const toggleVersion = () => {
    $generatorNormal.classList.toggle("displayNone");
    $generatorFunny.classList.toggle("displayNone");
}

//EVENTOS  ------------------------------------------------------


// VERSION NORMAL

$range.addEventListener("change", (e) => {
    generalGenerator()
} )

$btnSubtract.addEventListener("click", (e) => {
    $range.value--
    generalGenerator()
})

$btnAdd.addEventListener("click", (e) => {
    $range.value++
    generalGenerator()
})

$uppCase.addEventListener("change", (e)=> {
    generalGenerator()
})

$lowerCase.addEventListener("change", (e)=> {
    generalGenerator()
})

$number.addEventListener("change", (e)=> {
    generalGenerator()
})

$symbol.addEventListener("change", (e)=> {
    generalGenerator()
})

$arrowNormal.addEventListener("click", (e) => { 
    generalGenerator()
})


$$copy[0].addEventListener("click", (e) => {
    copyKey($keyGeneratorNormal)  
})

//  VERSION FUNNY 

$btnFunnyVersion.addEventListener("click", (e) => { 
    toggleVersion()
    funnyPass()
})

$btnPreviousVersion.addEventListener("click", (e) => { 
    toggleVersion()
})
$arrowFunny.addEventListener("click", (e) => { 
    funnyPass()
})
$$copy[1].addEventListener("click", (e) => {
    copyKey($keyGeneratorFunny)  
})