# eBay eBay API Product Search Chat Bot

### [Go to the live app](https://ebay-chat-bot.herokuapp.com/)

A simple NodeJS chat bot that allows you to search for eBay products using the eBay Finding API. There are two types of product keyword searches: top result and top deal result. Both responses include the product title, current bid price and eBay product URL.

Sample Message | Type of Bot Response
-- | --
`I want to buy VR goggles` | top product search
`I need a new computer` | top product search
`search iPhone` | top product search
`what's the best deal on cameras` | top product deals search
`find me a deal on nike shoes` | top product deals search
`what are you` | small talk
`tell me a joke` | random dad joke

Sample Bot Response

`I found this deal on "laptop" for you on eBay: HP - 15.6" Laptop - AMD A6-Series - 4GB Memory - AMD Radeon R4 - 500GB Hard D... The current bid price is $279.99. Here's the link: http://www.ebay.com/itm/HP-15-6-Laptop-AMD-A6-Series-4GB-Memory-AMD-Radeon-R4-500GB-Hard-D-/322837881101`

## Prerequisites

* Dialogflow Client API key
* Dialogflow agent with web hook
  * Web Service URL `https://ai-chat-bot-webhook.herokuapp.com/`
  * [View source code](https://github.com/christylaguardia/ai-chat-bot-webhook)

## Built With

* [Bulma](https://bulma.io/) - UI framework
* [Express](http://expressjs.com/) - web framework
* [socket.io](https://socket.io/) - Real-time chat engine
* [Dialogflow](https://dialogflow.com/) - Chat bot platform and API
* [eBay Finding API](http://developer.ebay.com/DevZone/finding/CallRef/findItemsByKeywords.html) - eBay inventory keyword search
* [icanhazdadjoke API](https://icanhazdadjoke.com/) - Because this is a funny bot

## References

* [socket.io tutorial](https://socket.io/get-started/chat/)
* [girliemac tutorial](https://github.com/girliemac/web-speech-ai)
* [Axle Web Technologies YouTube video](https://www.youtube.com/watch?v=1cD9vU7Ubyg)