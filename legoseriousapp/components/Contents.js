import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import OptionScreen from './Screens/OptionScreen';

//import legoHead from '~/assets/Layer5.png';

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
    },
    mindGame: {
      questions: [
        {
          question: 'Caption the image',
          picture: require('./../assets/mindGameImages/man_with_fire.jpg') ,
          answers: [{text:'Story'},{text:'Canvas'},{text:'Color'},{text:'Solitude'}]
        },
        {
          question: 'Help me!',
          picture: require('./../assets/mindGameImages/roof.jpg'),
          answers: [{text:'Closeness'},{text:'Cookie'},{text:'Coverage'},{text:'Roof'}]
        },
        {
          question: 'What do you see?',
          picture: require('./../assets/mindGameImages/bear.jpg'),
          answers: [{text:'Life'},{text:'Robot'},{text:'Bear'},{text:'Nature'}]
        },
        {
          question: 'Caption the image!',
          picture: require('./../assets/mindGameImages/apple.jpg'),
          answers: [{text:'Sour'},{text:'Bounce'},{text:'Apple'},{text:'Knife'}]
        },
        {
          question: 'Help me!',
          picture: require('./../assets/mindGameImages/piano.jpg'),
          answers: [{text:'Piano'},{text:'Play'},{text:'Sensations'},{text:'Teeth'}]
        },
        {
          question: 'Title the image',
          picture: require('./../assets/mindGameImages/door.jpg'),
          answers: [{text:'Mystery'},{text:'Door'},{text:'Music'},{text:'Knock'}]
        },
        {
          question: 'Title the image',
          picture: require('./../assets/mindGameImages/mouse.jpg'),
          answers: [{text:'Scientist'},{text:'Nasty'},{text:'Cheese'},{text:'Mouse'}]
        },
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
      title: 'Mind Game',

      contentType: 'mindGame',
      contentData: {
      questions: contents.core.mindGame.questions
    }
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

// Main Routes 
export const mainRoutes = [
  // icons from: https://octicons.github.com/
  { 
      title: 'Profile', 
      screen: null, 
      mainColor: '#FF8674', 
      secondaryColor: null,
      content: [],
      icon: "person"
  },
  { 
    title: 'Core', 
    screen: "Core", 
    mainColor: '#FF8674', 
    secondaryColor: null,
    content: [],
    icon: 'database'
  },
  { 
    title: 'Personal', 
    screen: null, 
    mainColor: '#FF8674', 
    secondaryColor: null,
    content: [],
    icon: 'heart'
  },
  { 
    title: 'Education', 
    screen: null, 
    mainColor: '#FF8674', 
    secondaryColor: null,
    content: [],
    icon: 'mortar-board'
  },
  { 
    title: 'Business', 
    screen: null, 
    mainColor: '#FF8674', 
    secondaryColor: null,
    content: [],
    icon: 'briefcase'
  },
  /*{ 
      title: 'Team', 
      screen: 'Team', 
      mainColor: '#f9c137', 
      secondaryColor: '#bf942a',
      content: coreContent,
      icon: 'database'
  },*/
  /*{ 
      title: 'Personal', 
      screen: 'Personal', 
      mainColor: '#88c9b3', 
      secondaryColor: '#699a89',
      content: [ [{ title: 'Tutorial' }], [{ title: 'Video' }], [{ title: 'Infograpic' },{ title: 'Infographic' }], [
            { 
            title: 'Mind Game',
            contentType: 'MindBasic',
            contentData: {
              questions : contents.core.mindGame.questions
            },
          
            }
            , 
            { 
              title: 'Collab Game', 
              contentType: 'CollabBasic', 
              contentData: {
                questions: contents.core.collabGame.questions,
                share: {
                  contentType: '',//'link',
                  contentUrl: "http://seriousplaypro.com/",//"https://facebook.com",
                  contentDescription: 'Facebook sharing is easy!'
                }
              }
          
          },{ title: 'Practical Game' }] ],
      icon: 'person'
  }*/,
  { 
      title: 'Settings', 
      screen: 'Settings', 
      mainColor: '#4c4c4c', 
      secondaryColor: null,
      content: [],
      icon: 'gear'
  },
  // // Sound

  // // About
  { 
    title: 'About', 
    screen: 'About', 
    mainColor: '#4c4c4c', 
    secondaryColor: null,
    content: [],
    icon: ""
}

] 