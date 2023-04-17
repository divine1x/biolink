class _app {
    id = 0;
    videoElement = null;
    audioElement = null;
    musicVolume = 0.12;
    musicFadeIn = 4000;
    skippedIntro = false;
    backgroundToggler = false;
    shouldIgnoreVideo = false;
    effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
    brandDescription = ['/draken', 'pop smoke 🐐', '#0911', 'front-end developer', 'the discordian', '#0911'];
 
    titleChanger = (text, delay) => {
      if (!text) return;
  
      delay = delay || 850;
  
      let counter = 0;
  
      setInterval(() => {
        if (counter < text.length) document.title = text[counter++];
        else document.title = text[(counter = 0)];
      }, delay);
    };
  
    iconChanger = (urls, delay) => {
      if (!urls) return;
  
      delay = delay || 2000;
  
      let counter = 0;
  
      setInterval(() => {
        if (counter < urls.length) {
          const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  
          link.type = 'https://cdn3.emoji.gg/emojis/3866_Gun_right.png';
          link.rel = 'shortcut icon';
          link.href = urls[counter];
  
          document.getElementsByTagName('head')[0].appendChild(link);
        } else counter = 0;
  
        ++counter;
      }, delay);
    };
  }
  
  const app = new _app();
  
  const body = document.getElementsByTagName('body');
  window.addEventListener("keydown", (event)=>{
      if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
          event.preventDefault();
          body[0].innerHTML = "bro tried to skid... "
      }
      if (event.ctrlKey && (event.key === "C")) {
          event.preventDefault();
          body[0].innerHTML = "bro tried to skid... "
      }
      if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
          event.preventDefault();
          body[0].innerHTML = "bro tried to skid... "
      }
      if (event.ctrlKey && (event.key === "I" || event.key === "i" || event.key === "Ä±")) {
          event.preventDefault();
          body[0].innerHTML = "bro tried to skid... ";
      }
      if (event.ctrlKey && (event.key === "K" || event.key === "k")) {
          event.preventDefault();
          body[0].innerHTML = "bro tried to skid... ";
      }
      if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
          event.preventDefault();
          body[0].innerHTML = "bro tried to skid... ";
      }
  }
  );