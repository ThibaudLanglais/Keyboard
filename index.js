var array = ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 
'Cursor', 'Delete', 'Lightbulb', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6',
'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'PageUp', 'Tab', 'KeyQ', 'KeyW', 
'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Slash', 'PageDown', 'CapsLock', 'KeyA', 'KeyS', 
'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'Home', 'ShiftLeft', 
'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'IntlBackslash', 'Comma', 'Period', 'ShiftRight', 'ArrowUp', 'End',
'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

var trad = {
   'Escape': 'esc',
   'Delete': 'del',
   'PageUp': 'page<br>up',
   'PageDown': 'page<br>down',
   'Home': 'home',
   'End': 'end',
   'Backquote': '²',
   'Digit1': '1<br>&',
   'Digit2': '2<br>é ~',
   'Digit3': '3<br>" #',
   'Digit4': '4<br>\' {',
   'Digit5': '5<br>( [',
   'Digit6': '6<br>- |',
   'Digit7': '7<br>è `',
   'Digit8': '8<br>_ \\',
   'Digit9': '9<br>ç ^',
   'Digit0': '0<br>à @',
   'Minus': '°<br>) ]',
   'Equal': '+<br>= }',
   'AltLeft': 'alt',
   'AltRight': 'alt',
   'Backspace': '<span style="display:block;text-align: center;">⟵</span>',
   'Tab': 'tab',
   'KeyQ': 'A',
   'KeyW': 'Z',
   'KeyE': 'E',
   'KeyR': 'R',
   'KeyT': 'T',
   'KeyY': 'Y',
   'KeyU': 'U',
   'KeyI': 'I',
   'KeyO': 'O',
   'KeyP': 'P',
   'KeyA': 'Q',
   'KeyS': 'S',
   'KeyD': 'D',
   'KeyF': 'F',
   'KeyG': 'G',
   'KeyH': 'H',
   'KeyJ': 'J',
   'KeyK': 'K',
   'KeyL': 'L',
   'KeyZ': 'Z',
   'KeyX': 'X',
   'KeyC': 'C',
   'KeyV': 'V',
   'KeyB': 'B',
   'KeyN': 'N',
   'KeyM': '?<br>,',
   'Comma': '.<br>;',
   'Period': '/<br>:',
   'ControlLeft': 'ctrl',
   'ControlRight': 'ctrl',
   'Quote': '%<br>ù',
   'Semicolon': 'M',
   'BracketLeft': '¨<br>^',
   'BracketRight': '£<br>$ ¤',
   'Slash': '<span style="display:block;text-align: center;">/</span>',
   'CapsLock': 'caps lock',
   'ShiftLeft': 'shift',
   'ShiftRight': 'shift',
   'Enter': '<span style="display:block;text-align: center;">↩</span>',
   'ArrowLeft': '<span style="display:block;text-align: center;">←</span>',
   'ArrowRight': '<span style="display:block;text-align: center;">→</span>',
   'ArrowUp': '<span style="display:block;text-align: center;">↑</span>',
   'ArrowDown': '<span style="display:block;text-align: center;">↓</span>',
   'MetaRight': '<img src="./w.svg">',
   'MetaLeft': '<img src="./w.svg">',
}

softSound = new Audio('./soft.wav');
hardSound = new Audio('./hard.wav');

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyQ', 'Enter']
const sendNudes = ['KeyS', 'KeyE', 'KeyN', 'KeyD', 'KeyN', 'KeyU', 'KeyD', 'KeyE', 'KeyS']
var konamiIndex = 0

var keyboard = document.querySelector('.keyboard')

array.forEach((key)=>{
   keyboard.innerHTML += `         <div class="keycap ${key}">
   <div class="top">${trad[key] ? trad[key] : key}</div>
</div>`
})

window.addEventListener('keydown', (e)=>{
   e.preventDefault()
   document.querySelector(`.${e.code}`)?.classList.add('pressed')
   e.code == 'Space' ? hardSound.cloneNode(true).play() : softSound.cloneNode(true).play()
   e.code == konami[konamiIndex] ? konamiIndex++ : konamiIndex = 0
   if(konamiIndex == konami.length - 1){
      konamiIndex = 0
      sendNudes.forEach((key, i)=>{
         setTimeout(() => {
            const el = document.querySelector(`.${key}`)
            el?.classList.add('animate')
            setTimeout(()=>{
               el?.classList.remove('animate')
            },500)
         }, i * 500);
      })
   }
})
window.addEventListener('keyup', (e)=>{
   e.preventDefault()
   document.querySelector(`.${e.code}`)?.classList.remove('pressed')
})