

export default contents = {
  core: {
    collabGame: {
      questions: [
        {
          question: 'Build a tower with 5 blocks',
          answers: [{text: "It's ready"}] 
          },
          {
          question: 'Now pass it to the next person to you',
          answers: [{text: 'OK!'}, {text: "Got it!"}]
          },
          {
          question: 'Tell a story about the building',
          answers: [{text: "It's done"}]
          },
          {
          question: 'Change the building so that it is taller',
          answers: [{text: "It's done"}]
          },
          {
          question: 'Ask the next person to close their eyes \n\n Do 3 changes on the building',
          answers: [{text: "It's done"}]
          },
          {
          question: 'Now, pass it to the person next to you! \n\n Ask them to explain the building while blindfolded',
          answers: [{text: 'OK!'}]
          },            
          {
          question: 'Ask them to open their eyes',
          answers: [{text: 'Reveal all the instructions'}]
          },            
          {
          question: 'Instruction recieved: \n\n1. Build a tower with 10 bricks \n2. Tell a story about the building \n3. Change the building so that is taller \n4. Do 3 changes on the building \n5. Explain when blindfolded'
          ,
          answers: [{text: 'Play again!'}, {text:'Quit'}]
          }
      ]
    }
  },
  personal: {

  },
  education: {

  },
  business: {

  }
}

// // // Contents of given routes
const coreContent = [
  // // First row - Tutorial
  [{ title: 'Tutorial' }], 
  [{ title: 'Video' }], 
  // // Third row - Slides
  [
    { 
      title: 'Infograpic' 
    },
    { 
      title: 'Infographic' 
    }
  ], 
  // // Fourth row - Games
  [
    { 
      title: 'Mind Game' 
    },
    { 
      title: 'Collab Game', 

      contentType: 'questionGame',
      contentData: {
        questions: contents.core.collabGame.questions,
        share: {
          contentType: '',//'link',
          contentUrl: "http://seriousplaypro.com/",//"https://facebook.com",
          contentDescription: 'Facebook sharing is easy!'
        }
      }
    },{ 
      title: 'Practical Game'  
    }
  ]
]

// // // Main Routes 
export const mainRoutes = [
  // // Profile
  { 
      title: 'Profile', 
      screen: null, 
      mainColor: '#FF8674', 
      secondaryColor: null,
      content: [],
      icon: 'dash'
  },
  { 
      title: 'Team', 
      screen: 'Team', 
      mainColor: '#f9c137', 
      secondaryColor: '#bf942a',
      content: coreContent,
      icon: 'database'
  },
  // Personal
  { 
      title: 'Personal', 
      screen: 'Personal', 
      mainColor: '#88c9b3', 
      secondaryColor: '#699a89',
      content: [ [{ title: 'Tutorial' }], [{ title: 'Video' }], [{ title: 'Infograpic' },{ title: 'Infographic' }], [{ title: 'Mind Game' },{ title: 'Collab Game' },{ title: 'Practical Game' }] ],
      icon: 'person'
  },
  // Settings
  { 
      title: 'Settings', 
      screen: 'Game',//'Settings', 
      mainColor: '#4c4c4c', 
      secondaryColor: null,
      content: [],
      icon: 'gear'
  }
  // // Sound

  // // About
]