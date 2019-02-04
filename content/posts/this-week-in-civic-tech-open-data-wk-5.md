+++
aliases = []
calendar_week_published = 5
categories = ""
date = "2019-01-30T14:05:41+01:00"
draft = true
hero = "https://res.cloudinary.com/civicvision/image/upload/c_fill,h_600,w_800/l_cincinatti_heroin_incidents,c_fill,h_600,w_800,x_800/c_fill,h_600,l_civil_forfeiture_sc,w_800,x_-400,y_600/c_fill,f_png,h_600,l_shops_england,w_800,x_400,y_300/snow-waterloo"
tags = []
title = "Volume 3: This week in Civic Tech/Open Data"
viz = false
volume = 2

+++
Volume 3 of my weekly roundup of visualizations, news and tweets in Civic Tech. The week was packed with great civic visualiations and fewer articles. Topics include Snow Clearing in Canada, civil forfeiture in SC, Cincinatti Heroin Incidents and more.

## Visualizations

This week we had plenty of great civic data visualizations and data stories from newspapers. That really made me happy :smile:

### Snow clearing complaints in Waterloo

![Map of sidewalk snow complaints in Kitchener.](https://pbs.twimg.com/media/Dx3VRxWVYAArgGq.jpg:large)

Mike Boos did an excellent visualization about sidewalk snow clearing complaints from 2008-2018 using Open Data from [City of Kitchener, Ontario, Canada](https://www.kitchener.ca)

The colors stick out and make the visualization compelling to look at. Morevoer, it also is a great starting point for discussions. As Mike pointed out:

> This dataset must not be complete - only 807 complaints over a decade is at least an order of magnitude too small, considering a staff report said winter of 2015/ 2016 alone, which was 'unseasonably mild' had 902 complaints.

This is a common problem I see with Open Data. Although it is published, it is not always complete nor clean.

Link to dataset: [http://open-kitchenergis.opendata.arcgis.com/datasets/842cf2f223d543f4baff434dbdaa961e](http://open-kitchenergis.opendata.arcgis.com/datasets/842cf2f223d543f4baff434dbdaa961e "Service Requests")

{{< tweet 1089262296487116800 >}}

### Polar Vortex

Stunning visualization from Tim Wallace using GFS forecast data. It has gorgeous colors and almost looks like art. I would print this out and hang it on the wall. Also, there are plenty more where this awesome thing came from:

{{< tweet 1090071529818214401 >}}

### TAKEN: How police departments make millions by seizing property

Anna Lee and Nathaniel Cary and Mike Ellis from _The Greenville News_ spent 2 years reporting and looking at every civil forfeiture in SC.

It is a great article, very lengthy and very detailed. It has some visualiations in it but they're more hidden. You need to click on the dots of the map to see them.

![](https://res.cloudinary.com/civicvision/image/upload/v1549185666/civil_forfeiture_sc.png)

_I would have loved if they would include those graphs into the story because they're very powerful. And they're very clean as well which makes them easy to read and to understand._

_The one critique that I have is that the map does not include Attribution where the data/basemap is coming from._

[Article](https://www.greenvilleonline.com/in-depth/news/taken/2019/01/27/civil-forfeiture-south-carolina-police-property-seizures-taken-exclusive-investigation/2457838002)

### Cincinnati Heroin Incidents

Recent work is done with Mapbox in Tableau Public by Allan Walker (@AllanWalkerIT) for the Cincy Tableau User Group meeting.

I admit I like black as a background color if you want to make your data the central part. It makes it easier to see the data, but you lose a little bit of the location context. This is a drawback you need to think about. But I think in this visualization it serves its purpose.

It is a nice starting point to lead a discussion, and that seems to be the intent as suggested in his tweets.

_I could not find the source dataset, but he said in that (embedded below) tweet it was using Open Data, so I suspect this would an Open Dataset published by the City of Cincinnati.  
It seems to be data from 2016 - 2019 but again, no detailed information was provided._

![](https://res.cloudinary.com/civicvision/image/upload/v1549185675/cincinatti_heroin_incidents.png)

[Dashboard](https://public.tableau.com/views/CinciHeroin/CincinattiHeroinIncidents?:embed=y&:display_count=yes&:showVizHome=no)

{{< tweet 1090651413410127875 >}}

### 1 in 12 shops closed in five years: England, UK

> 88 major town centres across England and Wales were included in the Guardian’s analysis of Ordnance Survey data.

This is a lovely and well rounded data story with nicely done visualizations that help understand the problem of declining shops in England.

_What I think stands out is the added section at the end of the article about their Methodology. I think everybody should include that (myself included)._

![](https://res.cloudinary.com/civicvision/image/upload/v1549185675/shops_england.png)

[Article](https://t.co/P9ZfLpFr3p?amp=1)

### How Illinois Bet on Video Gambling and Lost

A great lengthy story from ProPublica about gambling in Illinois. This is one part of a multipart story and it has just a few visualizations in it. This is great work by ProPublica and I love their lengthy (data) stories and use of visuals and visualizations.

> Legalizing video poker and slots was supposed to generate billions of dollars for the state. A decade later, that hasn’t happened. Now, legislators want to double down on gambling.

That is the summary of the story and they use a map in the middle of the story to show the revenue.

![](https://res.cloudinary.com/civicvision/image/upload/v1549185675/gambling_illinois.png)

I'm not sure if bar charts inside the map and the 3D look help in understanding the data. I think the color usage is great, but I think a hexmap would have worked a little better.

The map has a few visual flaws which I should dive into deeper in a separate post. 

They included some animations in it which are cute but make the underlying data hard to read without stopping the animation.  
If you look closer you see a nice visualization about the projected and actual revenue:

![](https://res.cloudinary.com/civicvision/image/upload/v1549185675/projected_vs_actual_revenue.png)

It's hard to see but it indicates the year in the graph as well and you can click on it. Nice big numbers show the projected revenue and the actual. Would have loved to see the actual difference (I can calculate, but it's tedious for every year).  
The amount gambled is not as interested to me to be honest so I would have left that out.

_What is great about this story is that they included their methodology at the end as well._

<hr />

## Open Data

### City of Kingston Open Data Portal

A new city is welcomed to the Open Data family. The City of Kingston in Canada launched a new Open Data Portal. They're using OpenDataSoft.

[Portal](https://opendatakingston.cityofkingston.ca/pages/welcome/)  
[Article](https://www.opendatasoft.com/2019/01/16/a-new-data-portal-for-the-city-of-kingston-from-increasing-transparency-to-engaging-citizens/)

### How Los Angeles Controller Ron Galperin Brings Data to Life

Some awesome quotes from him and the article on Socrata's Blog.

> Galperin’s mission is to bring that data to life.

What a great statement and this should be ingrained in every government.

> Galperin focused on _The Three Ts_— transparency, trust, and transformation.

They mapped a year of domestic violence reports and the result was a change in Policy. Before the domestic violence programs were underfunded, disjointed, and inconsistent, after his effort:

> “We all have an incentive to try to do something about it,” he said. “Today we do have a domestic abuse response team in every police division.”

> “We’re trying to do more than just look at numbers, but also how we present it,” Galperin said.

[Article](https://socrata.com/blog/how-los-angeles-comptroller-ron-galperin-brings-data-to-life/)

### New York City, St. Petersburg, Fla., Ramp Up Data Storytelling

The city of St Petersburg Florida was using mapping to find areas where the most code violations were occuring. Using storytelling they were able to show wordload of code investigators and get upper-level buy-in. The result was a redraw of the districts to make besser use of resources.

> Better software has made the job of interpreting and analyzing city data easier.

[Article](https://t.co/4y1Y4f7JY1?amp=1)

<hr />

## Articles
- [Winter Haven, Fla., Looks to Smart City Opportunities](http://www.govtech.com/network/Winter-Haven-Fla-Looks-to-Smart-City-Opportunities.html)
- [Why user researchers and service designers should be best friends - User research in government](https://userresearch.blog.gov.uk/2019/01/29/why-user-researchers-and-service-designers-should-be-best-friends/)
- [Why we’re so impressed by Argentina’s digital services team – Public Digital](https://public.digital/2018/06/01/why-were-so-impressed-by-argentinas-digital-services-team/)
- [Data Foundation report reveals overwhelming optimism about the state of open data - FedScoop](https://www.fedscoop.com/data-foundation-report-reveals-overwhelming-optimism-state-open-data/)
- [How will Ottawa build a successful digital government?](http://policyoptions.irpp.org/magazines/january-2019/how-will-ottawa-build-a-successful-digital-government/)

<hr />

## Tools

{{< tweet 1090284278703968261 >}}

<hr />

## Tweets

{{< tweet 1090790651443044352 >}}

{{< tweet 1090769507642212352 >}}

{{< tweet 1089852993120419840 >}}

{{< tweet 1089235344300470272 >}}

{{< tweet 1090329064446091264 >}}

{{< tweet 1089993813182033922 >}}

{{< tweet 1089936029564526593 >}}

{{< tweet 1090669734461431809 >}}

{{< tweet 1090289819115311104 >}}

{{< tweet 1091037674050334722 >}}

<hr />

## Jobs

* [Software Engineering Apprentice, Code for America](https://www.codeforamerica.org/jobs?gh_jid=1500593&utm_campaign=Oktopost-2019-01+General+Campaign&utm_content=Oktopost-twitter&utm_medium=social&utm_source=twitter)
* [NYC Mayor's Office of Data Analytics is hiring four summer interns this year!](https://twitter.com/postkxj/status/1090061225621360640)