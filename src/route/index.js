// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: {
    country: 'Ukraine',
    town: 'Mykolaiv',
    street: 'Soborna',
    number: '12',
  },
}

var footer = {
  social: {
    email: {
      text: 'ivanivanov@mail.com',
      href: 'mailto:ivanivanov.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. 
        Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / skills',
    },

    header,

    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handlebars', point: 5, isTop: true },
        { name: 'VS Code', point: 7 },
        { name: 'Git', point: 8 },
        { name: 'Terminal', point: 9 },
        { name: 'NPM', point: 8 },
        { name: 'React.js', point: 0 },
        { name: 'PHP', point: null },
      ],
      hobbies: [
        { name: 'music', isMain: true },
        { name: 'footbal', isMain: true },
        { name: 'cross stitch', isMain: false },
      ],
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / education',
    },

    header,

    main: {
      education: [
        { name: 'Школа', isEnd: true },
        { name: 'MДПІ', isEnd: true },
        { name: 'Семінар', isEnd: true },
        { name: 'Веб-семінар', isEnd: false },
      ],
      certificates: [
        { name: 'Сертифікат', id: 15455 },
        { name: 'Диплом', id: 514726 },
        { name: 'Медалька', id: 021014 },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume / work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.10',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/resume/',
              about: 'Smells like teen spirit',
              stackAmount: 100,
              awardAmount: 500,

              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Anybody seen my baby',
                },
                {
                  name: 'Stranger is the night ',
                },
                {
                  name: 'The Show must go on',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
