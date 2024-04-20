let number = document.getElementById('number');
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + '%';
  }
}, 30);

function ProgessSkills() {
  return (
    <div className="mainSkills">
      <div className="skillContainer">
        <div class="skill">
          <div class="outer">
            <div class="inner">
              <div id="number">75%</div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
        <h5>Front End Development</h5>
      </div>
      <div className="skillContainer">
        <div class="skill">
          <div class="outer">
            <div class="inner">
              <div id="number">60%</div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>{' '}
        <h5>Back End Development</h5>
      </div>
      <div className="skillContainer">
        <div class="skill">
          <div class="outer">
            <div class="inner">
              <div id="number">80%</div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
        <h5>Full Stack Development</h5>
      </div>
    </div>
  );
}
export default ProgessSkills;
