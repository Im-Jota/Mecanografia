import './App.css'

function App() {
  document.addEventListener('keydown', (event) => {
    switch(event.key){
      case 'a':
        const A = document.getElementById('a');
        const B = document.getElementById('b');
        A.removeAttribute('class');
        B.setAttribute('class', 'active');
        break;
      case 'v':
        const Va = document.getElementById('v');
        Va.removeAttribute('class');

        const W = document.getElementById('w');
        W.setAttribute('class', 'active');
        break;
      case 'z':
        const Z = document.getElementById('z');
        Z.removeAttribute('class');
        const V = document.getElementById('v');
        V.setAttribute('class', 'active');
        break;
      default:
        break;
    }
  }, false)

  return (
    <>
      <button id="a">A</button>
      <button id="b">B</button>
      <button id="c">C</button>
      <button id="d">D</button>
      <button id="e">E</button>
      <button id="f">F</button>
      <button id="g">G</button>
      <button id="h">H</button>
      <button id="i">I</button>
      <button id="j">J</button>
      <button id="k">K</button>
      <button id="l">L</button>
      <button id="m">M</button>
      <button id="n">N</button>
      <button id="ñ">Ñ</button>
      <button id="o">O</button>
      <button id="p">P</button>
      <button id="q">Q</button>
      <button id="r">R</button>
      <button id="s">S</button>
      <button id="t">T</button>
      <button id="u">U</button>
      <button id="v">V</button>
      <button id="w">W</button>
      <button id="x">X</button>
      <button id="y">Y</button>
      <button id="z" className='active'>Z</button>
    </>
  )
}

export default App
