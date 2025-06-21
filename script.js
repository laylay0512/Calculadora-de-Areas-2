function calcTriangulo() {
  const b = parseFloat(document.getElementById('baseTri').value);
  const h = parseFloat(document.getElementById('altTri').value);
  document.getElementById('areaTri').value = (b * h / 2) || '';
}

function calcQuadrado() {
  const l = parseFloat(document.getElementById('ladoQua').value);
  document.getElementById('areaQua').value = (l * l) || '';
}

function calcCirculo() {
  const r = parseFloat(document.getElementById('raioCir').value);
  document.getElementById('areaCir').value = (Math.PI * r * r).toFixed(2) || '';
}

function calcTrapezio() {
  const b1 = parseFloat(document.getElementById('baseMaior').value);
  const b2 = parseFloat(document.getElementById('baseMenor').value);
  const h = parseFloat(document.getElementById('altTra').value);
  document.getElementById('areaTra').value = ((b1 + b2) * h / 2) || '';
}

function calcRetangulo() {
  const b = parseFloat(document.getElementById('baseRet').value);
  const h = parseFloat(document.getElementById('altRet').value);
  document.getElementById('areaRet').value = (b * h) || '';
}
