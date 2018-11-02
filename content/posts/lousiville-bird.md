---
title: Louisville Bird Data published
date: 2018-11-01 06:08:58 +0000
viz: true
draft: true

---
Bird has finally released it's first [Open Data set](https://data.louisvilleky.gov/dataset/bird-scooter) which we can use to analyze scooter usages.

The City of Louisville in Kentucky is the first city to publish Bird Scooter Data as CSV in their [Open Data Portal](https://data.louisvilleky.gov/dataset/bird-scooter). They claim that they will update the data if more comes out. We will take a closer look.

First let's look at which time frame the data is available:

<div id="days" height="400"></div> {{% viz data="louisville_bird/days" id="#days" mode="vega" width="700" %}}

## People ride in the afternoon

An interesting winkle in this dataset is the trip time. Most of the trips start after 12pm. People seem to ride scooters to and after lunch but not in their morning (commute).

Which might make sense, since most people that use scooters work downtown (where most scooters are located) but may not live downtown.

Although the data is only available for a month so we need to wait for more data to really see patterns emerge.

<div id="time" height="400"></div>{{% viz data="louisville_bird/hour_of__day" id="#time" mode="vega" width="700" %}}