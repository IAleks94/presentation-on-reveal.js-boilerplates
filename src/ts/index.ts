import Reveal from 'reveal.js';
import '../sass/main.scss';

document.body.innerHTML = `<div class="reveal">
<div class="slides">
    <section>
     <section>
      <p>Phaser 3 в наше время</p>
      <img data-src="images/phaserLogo.png">
      </section>
      <section>
      <iframe src="http://phaser.io/" width='1800px', height='650px'></iframe>
      </section>
      </section>
    <section>
    <p>Phaser Hint</p>
      <section>
      <img data-src="images/phaserHint.png">
      </section>
      <section>
      <img data-src="images/phaserHint2.png">
      </section>
    </section>
    <section>
    <section>
    <p>Phaser примеры</p>
    <iframe src="http://phaser.io/examples" width='1800px', height='550px'></iframe>
    </section>
    <section>
    <p>Phaser шаблоны</p>
    <img data-src="images/phaserGitHub.PNG">
    </section>
    </section>
    <section>
    <section>
    <p>ES 6 в Phaser</p>
    <img data-src="images/ES6.png" width='650px', height='350px'>
    </section>
    <section>
    <p>ES6 vs ES5</p>
    <h5>config игры</h5>
    <div class="container">
      <div class="item">
      <h5>ES6<h5>
      <img data-src="images/ES6s1.PNG">
      </div>
      <div class="item">
      <h5>ES5<h5>
      <img data-src="images/ES5s1.PNG">
      </div>
    </div>
    </section>
    <section>
    <h5>Создание сцены</h5>
      <div class="container">
        <div class="item">
        <h5>ES6<h5>
        <img data-src="images/ES6scene.PNG">
        </div>
        <div class="item">
        <h5>ES5<h5>
        <img data-src="images/ES5s1.PNG">
        </div>
      </div>
    </section>
    <section>
    <h5>Создание игровых элементов</h5>
      <div class="container">
        <div class="item">
        <h5>ES6<h5>
        <img data-src="images/ES6create.PNG">
        </div>
        <div class="item">
        <h5>ES5<h5>
        <img data-src="images/ES5create.PNG">
        </div>
      </div>
    </section>
    </section>
</div>
</div>`;

Reveal.initialize();