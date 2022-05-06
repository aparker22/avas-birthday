var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/aparker22/avas-birthday.git', // Update to point to your repository  
        user: {
            name: 'aparker22', // update to use your name
            email: 'aparker7698@att.net' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)