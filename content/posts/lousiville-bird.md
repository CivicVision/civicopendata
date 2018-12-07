---
title: Louisville Bird Data published
date: 2018-11-01 06:08:58 +0000
viz: true
draft: true

---
We have to thank Bird for releasing data so that we can finally study how people use scooters in cities.

This is just a partial analysis since we only have data for one city and only for a limited time frame.

Some results were expected, or at least I expected them. And there are others that were surprising.

\*Update: The City of Lousiville updated the dataset. Now we have three month worth of data*

Let’s begin with the surprising.

People drive far with their scooters. I would not have imagined that people drive a scooter for longer than 3 hours. But they do, probably not the whole three hours at once but they seem to have them close by and then drive.

Would be interesting to see if that were all either first rides (which are typically free) or maintenance rides that got falsely flagged as regular rides.

Another surprising maybe not so surprising thing is most rides begin after lunch-time. I suspect that people work in downtowns but don’t live there, and most of the scooters get distributed downtown. Therefore they use them to drive to lunch and after work to drive home or to the next transit stop. But they cannot drive from home to work. Or at least that seems to be the case.

But again this dataset is very narrow, only one month of data and only one city.

The not so surprising result is that most rides occur on Saturdays. Again most scooters are probably downtown and get used more often when people are downtown, for example for lunch or on Saturday for shopping or wandering around.

This was a first exciting dive into the dataset, and I look forward to the release of more data and maybe even more cities releasing their data. Also interesting would be if Lime and other Scooter providers would release their data.

Bird has finally released it's first [Open Data set](https://data.louisvilleky.gov/dataset/bird-scooter) which we can use to analyze scooter usages.

The City of Louisville in Kentucky is the first city to publish Bird Scooter Data as CSV in their [Open Data Portal](https://data.louisvilleky.gov/dataset/bird-scooter). They claim that they will update the data if more comes out. We will take a closer look.

First let's look at which time frame the data is available:

<div id="days" height="400"></div> {{% viz data="louisville_bird/days" id="#days" mode="vega" width="700" %}}

## People ride in the afternoon

An interesting winkle in this dataset is the trip time. Most of the trips start after 12pm. People seem to ride scooters to and after lunch but not in their morning (commute).

Which might make sense, since most people that use scooters work downtown (where most scooters are located) but may not live downtown.

Although the data is only available for a month so we need to wait for more data to really see patterns emerge.

<div id="time" height="400"></div>{{% viz data="louisville_bird/hour_of_day" id="#time" mode="vega" width="700" %}}