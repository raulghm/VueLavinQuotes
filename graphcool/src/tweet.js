const Twit = require('./twit')

const getRandom = max => Math.floor(Math.random() * max)

export default async () => {
  const tweets = await Twit()
  const result = tweets.data[getRandom(tweets.data.length)].text

  return {
    data: {
      result
    }
  }
}
