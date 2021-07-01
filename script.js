 function SmoothVerticalScrolling(time) {
  const eTop = document.querySelector("body").getBoundingClientRect().top;
  const eAmt = eTop / 100;
  let curTime = 0;
  const SVS_B = (eAmt) => window.scrollBy(0, eAmt);
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt);
    curTime += time / 100;
  }
}
