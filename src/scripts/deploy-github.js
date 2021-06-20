const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/AkhileshAdithya/OldWebsite',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
