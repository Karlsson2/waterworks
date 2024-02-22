import anime from '../node_modules/animejs/lib/anime.es.js';


anime({
    targets: '#title',
    translateY: 10,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    transformOrigin: '50px 50px 0px',
    rotate: ['1deg', '-1deg'],
    duration: 1500
  });

  anime({
    targets: '#scooter1',
    translateY: 1000,
    direction: 'alternate',
    loop: false,
    easing: 'easeInOutQuad',
    rotate: '15deg',
    duration: 1000
  });


  anime({
    targets: '#lamp',
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: true,
    loopBegin: function() {
      document.querySelector('#lamp').style.display = 'block';
    },
    loopComplete: function() {
      document.querySelector('#lamp').style.display = 'none';
    },
    update: function(anim) {
      if(anim.progress > 15) {
        document.querySelector('#lamp').style.display = 'none';
      }
      if(anim.progress > 30) {
        document.querySelector('#lamp').style.display = 'block';
      }
      if(anim.progress > 60) {
        document.querySelector('#lamp').style.display = 'none';
      }
    }
  });

  anime({
    targets: '#scooter2',
    translateY: 940,
    loop: false,
    easing: 'easeInOutQuad',
    rotate: '5deg',
    delay: 200,
    duration: 1200
  });

  anime({
    targets: '#scooter3',
    translateY: 1000,
    loop: false,
    easing: 'easeInOutQuad',
    rotate: '-10deg',
    delay: 70,
    duration: 1000
  });

 

