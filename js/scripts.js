/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



  $('.flag').click(function(e) {
    const country = e.target.getAttribute('data-country');

    if(country==="poland"){
      $('#nawAboutMe').html('O mnie');
      $('#nawSkills').html('Umiejętności');
      $('#nawExperience').html('Doświadczenie');
      $('#nawPortfolio').html('Portfolio');
      $('#nawContact').html('Kontakt');
      $('#moreInfo').html('DOWIEDZ SIĘ WIĘCEJ');
      $('#ownDescript').html('Cześć nazywam się Maksymilian Dąbrowski i jestem frontend developerem. Swoją przygodę z nauką programowania rozpocząłęm w 2018 roku, a od połowy 2019 czasu pracuję w IT, i z każdym dniem poszerzam swoją wiedzę, zarówno w czasie pracy jak i w czasie wolnym. Posiadam pełne wykształcenie wyższe na kierunku Budownictwo, a w kierunku programowania zacząłem rozwijać się z pasji, i udało mi się pójść w tym kierunku. W tym momencie chciałbym wykonać kolejny krok, i dalej rozwijać się w technologiach, które mnie interesują, są nimi React, Redux oraz Node (express.js) lub PHP (symfony). Zapraszam do zapoznamnia się z moimi umiejętnościami oraz projektami.');
      $('#ownDescriptProjects').html('Projekty');
      $('#skilsSection').html('Umiejętności');
      $('#experienceSection').html('Doświadczenie');
      $('#april2018').html('Kwiecień 2018');
      $('#april2018Tittle').html('Początek nauki');
      $('#april2018Body').html('Początek zainteresowania nauką programowania, kursy internetowe CodeBerry, Udemy (Samuraj programowania) i wiele innych. ');
      $('#august2018').html('Sierpień 2018');
      $('#august2018Tittle').html('Kurs Develop Web Applications');
      $('#august2018Body').html('Odbyłem 2-miesięczny kurs sponsorowany przez Unię Europejską: JavaScript and HTML5: Develop Web Applications i Java SE 8 Programming, (połączenie tych dwóch kursów było wymogiem odbycia kursu), gdzie mogłem zdobyć nową wiedzę, usystematyzować ówczesną, a po skończeniu dalej kontynuować naukę.');
      $('#july2019').html('Lipiec 2019');
      $('#july2019Tittle').html('Staż w PZU.SA');
      $('#july2019Body').html('1 Lipca 2019 roku zacząłem 3-miesięczy staż w dziale IT w PZU.SA. Do moich obowiązków należało pomoc w utrzymaniu i rozwoju aplikacji dla Agentów, aplikacje te służą do obsługi klientów, udostępnianych im kontaktów, raportowaniu działań. Używane technologie to JavaScript, Html, Css, JQuery, React+Redux, PHP(symfony)')
      $('#october2019').html('Paździerinik 2019');
      $('#october2019Tittle').html('Specjalista - Projektant Programista w PZU.SA');
      $('#october2019Body').html('Po odbytym stażu zostałem w zespole jako pełnoprawny programista. Do moich obowiązków należą dalszy rozwój i utrzymanie aplikacji. Napisałem apliację do zgłaszania błędów w witrynach i raportach wykonywanych przez nasz zespól. Dodatkowo zdobyłem częściową wiedzę analityczną, w ramach pracy na bazach danych (Ms SQL). Dążę w kierunku fullstack developera, rozwijąjać się w technolgiach backendowych, oraz pogłębiam umiejętności pisania frontu używająć freamworków.')
      $('#joinMyHistory').html('Dołącz do mojej historii !!');
      $('#CessareAppBody').html('Aplikacja, która ma na celu pomóc w zarządzaniu pizzerią, stworzona do użytku wśród pracowników i osób zarządzających małą pizzerią');
      $('#websiteAppBody').html('Aplikacja służaca do dokonywania zamówień online');
      $('#guitarAppTittle').html('TabulApptury gitarowe')
      $('#guitarAppBody').html('Aplikacja służąca do wyszukiwanie tabulatór gitarowych')
      $('#leadAppTittle').html('Sklep z kontaktami dla agnetów')
      $('#leadAppBody').html('Aplikacja służy jako sklep, obsługa, porfel kontaktów dla agentów ubezpieczeniowych')
      $('#moreProject').html('Więcej małych projektów znadzjesz na starszej wersji mojego portfolio, a wszystkie kody na moim githubie. Kliknij poniżej.')
      $('#inConact').html('Zostańmy w kontakcie!')
      $('#footer').html('Spodobały Ci się moje projekty? Jestem otwary na każdą formę współpracy, zadzwoń, napisz, lub podrzuć moje CV swojemu szefowi!')
      $("#cv").attr("href", "data/Maksymilian_Dabrowski_CV-pol.pdf")
    }else if(country==="england"){
      $('#nawAboutMe').html('About me');
      $('#nawSkills').html('Skills');
      $('#nawExperience').html('Experience');
      $('#nawPortfolio').html('Portfolio');
      $('#nawContact').html('Contact');
      $('#moreInfo').html('MORE INFO');
      $('#ownDescript').html('Hi, my name is Maksymilian Dąbrowski and I am a frontend developer. I started my adventure with learning programming in 2018, and since mid-2019 I have been working in IT, and every day I am expanding my knowledge, both at work and in my free time. I have a complete university education in the field of Construction, and I started to develop my passion towards programming, and I managed to go in this direction. At this point I would like to take the next step and develop further in the technologies that interest me, they are React, Redux and Node (express.js) or PHP (Symfony). Please see my skills and projects.');
      $('#ownDescriptProjects').html('Projects');
      $('#skilsSection').html('Skills');
      $('#experienceSection').html('Experience');
      $('#april2018').html('April 2018');
      $('#april2018Tittle').html('The beginning of learning');
      $('#april2018Body').html('Start of interest in learning programming, CodeBerry, Udemy (Samurai programming) online courses and many more.');
      $('#august2018').html('August 2018');
      $('#august2018Tittle').html('Develop Web Applications Course');
      $('#august2018Body').html('I took a 2-month course sponsored by the European Union: JavaScript and HTML5: Develop Web Applications and Java SE 8 Programming, (combining these two courses was a requirement for the course), where I could gain new knowledge, systematize the then, and continue my education after graduation.');
      $('#july2019').html('July 2019');
      $('#july2019Tittle').html('Internship in PZU.SA');
      $('#july2019Body').html('On July 1, 2019, I started a 3-month internship in the IT department at PZU.SA. My duties included assistance in the maintenance and development of applications for Agents, these applications are used to service clients, contacts made available to them, and report activities. Technologies used are JavaScript, Html, Css, JQuery, React + Redux, PHP (symfony)')
      $('#october2019').html('October 2019');
      $('#october2019Tittle').html('Programmer at PZU.SA');
      $('#october2019Body').html('After the internship, I stayed in the team as a full-fledged programmer. My responsibilities include the further development and maintenance of the application. I wrote an application for reporting bugs on websites and reports made by our team. Additionally, I gained some analytical knowledge while working on databases (Ms SQL). I strive towards a fullstack developer, develop myself in backend technologies, and deepen my skills of writing fronts using framworks.')
      $('#joinMyHistory').html('Join to my story !!');
      $('#CessareAppBody').html('An application that aims to help in managing a pizzeria, created for use among employees and people managing a small pizzeria');
      $('#websiteAppBody').html('Online ordering application');
      $('#guitarAppTittle').html('Guitar tabs')
      $('#guitarAppBody').html('Application for searching guitar tabs')
      $('#leadAppTittle').html('Contact store for agnets')
      $('#leadAppBody').html('The application serves as a store, service, and contact portfolio for insurance agents')
      $('#moreProject').html('You can find more small projects on the older version of my portfolio and all the codes on my github. Click below.')
      $('#inConact').html("Let's stay in touch!")
      $('#footer').html('Did you like my designs? I am open to any form of cooperation, call, write or give my CV to your boss!')
      $("#cv").attr("href", "data/Maksymilian_Dabrowski_CV-ang.pdf")
    }
  });

})(jQuery); // End of use strict
