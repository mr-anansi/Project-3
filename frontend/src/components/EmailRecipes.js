import React from 'react'



const EmailRecipes = () => {


  return console.log('this is a test')



  // const Mailjet = require('node-mailjet')
  //   .connect('5e10cd55037ef3aea5fbea7cc52de463', '01519c1e84ea59dc7a0673feab04c1fd')
  // const request = Mailjet
  //   .post('send', { 'version': 'v3.1' })
  //   .request({
  //     'Messages': [
  //       {
  //         'From': {
  //           'Email': 'riada125@hotmail.com',
  //           'Name': 'Michael'
  //         },
  //         'To': [
  //           {
  //             'Email': 'riada125@hotmail.com',
  //             'Name': 'Michael'
  //           }
  //         ],
  //         'Subject': 'Greetings from Mailjet.',
  //         'TextPart': 'My first Mailjet email',
  //         'HTMLPart': '<h3>Dear passenger 1, welcome to <a href=\'https://www.mailjet.com/\'>Mailjet</a>!</h3><br />May the delivery force be with you!',
  //         'CustomID': 'AppGettingStartedTest'
  //       }
  //     ]
  //   })
  // request
  //   .then((result) => {
  //     console.log(result.body)
  //   })
  //   .catch((err) => {
  //     console.log(err.statusCode)
  //   })

}

export default EmailRecipes


