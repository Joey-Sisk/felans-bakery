export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'xxxyyyxxxyyyyxxxyyy',
            name: 'sanity-gatsby-blog-20-studio',
          },
          {
            title: 'felansbakery',
            apiId: '9939f4a8-7731-4382-ab0d-1021462397de',
            buildHookId: 'yyyyxxxxxyyyxxdxxx',
            name: 'sanity-gatsby-blog-20-web'
          }
        ]
      }
    }
  ]
}