console.log("HOLA MUNDO");
let btnCopy: HTMLButtonElement = (document.getElementById("copyBtn")) as HTMLButtonElement;
let defInput: HTMLInputElement = (document.getElementById("defInput")) as HTMLInputElement;
let tassRecursBtn: HTMLButtonElement = (document.getElementById("tass-recurs")) as HTMLButtonElement;
let buscarForaBtn : HTMLButtonElement = (document.getElementById("buscar-fora")) as HTMLButtonElement;
let informoAcBtn : HTMLButtonElement = (document.getElementById("informo-ac")) as HTMLButtonElement;
let incidentRelBtn: HTMLButtonElement = (document.getElementById("incident-rel")) as HTMLButtonElement;
let passoAdminBtn: HTMLButtonElement = (document.getElementById("passo-admin")) as HTMLButtonElement;
let informoPrioritatBtn: HTMLButtonElement = (document.getElementById("informo-prioritat")) as HTMLButtonElement;
let rebuigAABtn: HTMLButtonElement = (document.getElementById("rebuig-aa")) as HTMLButtonElement;
let lmsBtn: HTMLButtonElement = (document.getElementById("lms")) as HTMLButtonElement;
let confirmoAdresaBtn: HTMLButtonElement = (document.getElementById("confirmo-adresa")) as HTMLButtonElement;

btnCopy.addEventListener('click', copy);
passoAdminBtn.addEventListener('click', () => copyToClipboard("PASSO A ADMIN"));
tassRecursBtn.addEventListener('click', () => copyToClipboard("TRUCA TASS PER SABER RECURS"));
buscarForaBtn.addEventListener('click', () => copyToClipboard("SURTO PER BUSCAR PER FORA"));
informoAcBtn.addEventListener('click', () => copyToClipboard("INFORMO AC"));
incidentRelBtn.addEventListener('click', () => copyToClipboard("INCIDENT RELACIONAT %"));
informoPrioritatBtn.addEventListener('click', () => copyToClipboard("INFORMO A LA PRIORITAT"));
rebuigAABtn.addEventListener('click', () => copyToClipboard("REBUIG AA // VOL CONSULTAR"));
lmsBtn.addEventListener('click', () => copyToClipboard("INDICA PROBLEMES D\'ACCÉS A LMS"));
confirmoAdresaBtn.addEventListener('click', () => copyToClipboard("CONFIRMO ADREÇA"));

function copy() {
  defInput.select();
  copyToClipboard(defInput.value);
}

// Source - https://stackoverflow.com/a/65996386
// Posted by Simon Dehaut, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-13, License - CC BY-SA 4.0
async function copyToClipboard(textToCopy : string) {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(textToCopy);
    else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
            
        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
        addNotification(textArea.value);
    }
}

// Source - https://stackoverflow.com/a/75354411
// Posted by ProgramistaZaDyche
// Retrieved 2026-08-13, License - CC BY-SA 4.0

function addNotification(content : string){
  removeOldNotification();
//create notification
const NotiElement = document.createElement("div");
NotiElement.id = "stickyNotification";
NotiElement.style.display = "block";
NotiElement.style.position = "absolute";
NotiElement.style.width = "290px";
NotiElement.style.height = "90px";
NotiElement.style.padding = "10px";
NotiElement.style.borderRadius = "5px";
NotiElement.style.border = "1px solid black";
NotiElement.style.backgroundColor = "lightgreen";
NotiElement.style.right = "10px";
//NotiElement.style.bottom = "10px";
NotiElement.innerHTML = " <span><strong>COPIED:</strong><br>" + content + "</span><div id='closeBtn'>X</div>";
document.body.appendChild(NotiElement);
//keep it always at the bottom corner of the window
document.addEventListener("scroll", (event) => {
    let btmPos = -window.scrollY + 10;
    NotiElement.style.bottom = btmPos + "px";
  });
  //add close event to remove child
document.getElementById("closeBtn")!.addEventListener("click", (event) => {
    document.body.removeChild(NotiElement);
  });
}

function removeOldNotification()
{
  let notification = document.getElementById("stickyNotification");
  if (notification != null)
    document.body.removeChild(notification);
  console.log("removed child");
}

// Source - https://stackoverflow.com/a/58606168
// Posted by ADyson
// Retrieved 2026-08-13, License - CC BY-SA 4.0

if (document.querySelector('input[name="tass-sexe"]')) {
  document.querySelectorAll('input[name="tass-sexe"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      generateTass();
    });
  });
}
if (document.querySelector('input[name="tass-sol"]')) {
  document.querySelectorAll('input[name="tass-sol"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      generateTass();
    });
  });
}
if (document.querySelector('input[name="tass-porta"]')) {
  document.querySelectorAll('input[name="tass-porta"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      generateTass();
    });
  });
}
let tassHomeLabel : HTMLLabelElement= document.getElementById("tass-sexe-home-label") as HTMLLabelElement;
let tassHome : HTMLInputElement = document.getElementById("tass-sexe-home") as HTMLInputElement;
let tassDona: HTMLInputElement = document.getElementById("tass-sexe-dona") as HTMLInputElement;
let tassInputResult: HTMLTextAreaElement = (document.getElementById("tassInputResult")) as HTMLTextAreaElement;
let tassSimptomes: HTMLInputElement = (document.getElementById("tassSimptomes")) as HTMLInputElement;
let tassAfectatSolNo : HTMLInputElement = document.getElementById("tass-sol-no") as HTMLInputElement;
let tassAfectatSolSi : HTMLInputElement = document.getElementById("tass-sol-si") as HTMLInputElement;
let tassObrirPortaSi: HTMLInputElement = document.getElementById("tass-porta-si") as HTMLInputElement;
let tassObrirPortaNo: HTMLInputElement = document.getElementById("tass-porta-no") as HTMLInputElement;
let inputTassNumeros : HTMLInputElement = document.getElementById('inputTassNumeros') as HTMLInputElement;

tassSimptomes.addEventListener('keydown', () => generateTass);
tassSimptomes.addEventListener('keyup', () => generateTass);
tassInputResult.addEventListener('input', () => generateTass);
tassHomeLabel.addEventListener('input', () => generateTass);
tassHome.addEventListener('input', () => generateTass);
tassDona.addEventListener('click', () => generateTass);
tassAfectatSolNo.addEventListener('click', () => generateTass);
tassAfectatSolSi.addEventListener('click', () => generateTass);
inputTassNumeros.addEventListener('keydown', () => generateTass);
let btnCopyTass: HTMLButtonElement = (document.getElementById("copyBtnTass")) as HTMLButtonElement;
btnCopyTass.addEventListener('click', () =>{ 
  generateTass();
  copyToClipboard(tassInputResult.value)}
);

generateTass();
function generateTass()
{
  let isHome : boolean = tassHome.checked;
  let frase : string = "TRUCA TASS INDICA ";
  if (isHome)
    frase += "AFECTAT";
  else
    frase += "AFECTADA"; 
  let isAlone : boolean = tassAfectatSolSi.checked;
  frase += " AMB " + tassSimptomes.value.toUpperCase();
  frase += "\n"
  if (isHome && isAlone)
    frase += "SOL";
  else if (isHome && !isAlone)
    frase += "ACOMPANYAT";
  else if (!isHome && isAlone)
    frase += "SOLA";
  else if (!isHome && !isAlone)
    frase += "ACOMPANYADA";
  frase += " // ";
  let openDoor : boolean = tassObrirPortaSi.checked;
  if (openDoor && isAlone)
    frase += "POT OBRIR PORTA";
  else if (!openDoor && isAlone)
    frase += "NO POT OBRIR PORTA";
  else if (openDoor && !isAlone)
    frase += "PODEN OBRIR PORTA";
  else if (!openDoor && !isAlone)
    frase += "NO PODEN OBRIR PORTA";
  if (inputTassNumeros.value.length > 0)
    frase +="\nTEL: " + inputTassNumeros.value;
  console.log(inputTassNumeros.value);
  tassInputResult.value = frase;
}