# eBay eBay API Product Search Chat Bot

### [Go to the live app](https://ebay-chat-bot.herokuapp.com/)

A simple NodeJS chat bot that allows you to search for eBay products using the eBay Finding API. There are two types of product keyword searches: new condition and used condition. Both responses include the product title, current bid price and eBay product URL. To search used products you need to include "used" in the message. To search used products you need to include "new" in the message. If you do not include the condition, it will default to new.

Sample Messages

* I want to buy VR goggles
* I need a new computer
* find used laptop
* I'm looking for a used chandelier
* search iphone
* do you have guitars
* tell me a joke

Sample Bot Response

`I found this new "iphone" for you on eBay: Brand New Sealed Apple iPhone 6 32GB - Space Gray (Total Wireless) Smartphone The current bid price is $179.99. Here's the link: http://www.ebay.com/itm/Brand-New-Sealed-Apple-iPhone-6-32GB-Space-Gray-Total-Wireless-Smartphone-/322922642596`

## Prerequisites

Dialogflow:

* Agent
* Web hook for fulfillment
* Client API key

## Web Service

To enable the Dialogflow agent to make a third-party api call, I build a simple web service.

* URL `https://ai-chat-bot-webhook.herokuapp.com/`
* [View source code](https://github.com/christylaguardia/ai-chat-bot-webhook)

## Built With

* [Bulma](https://bulma.io/) - UI framework
* [Express](http://expressjs.com/) - Web framework
* [socket.io](https://socket.io/) - Real-time chat engine
* [Dialogflow](https://dialogflow.com/) - Chat bot platform and API
* [eBay Finding API](http://developer.ebay.com/DevZone/finding/CallRef/findItemsByKeywords.html) - eBay inventory keyword search
* [icanhazdadjoke API](https://icanhazdadjoke.com/) - Because this is a funny bot

## References

* [socket.io tutorial](https://socket.io/get-started/chat/)
* [girliemac tutorial](https://github.com/girliemac/web-speech-ai)
* [Axle Web Technologies YouTube video](https://www.youtube.com/watch?v=1cD9vU7Ubyg)