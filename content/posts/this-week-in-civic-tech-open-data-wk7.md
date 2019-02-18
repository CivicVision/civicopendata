+++
articles = []
calendar_week_published = 7
categories = ["This Week in Civic Tech"]
date = "2019-02-16T17:39:46+01:00"
draft = true
hero = ""
tags = ["civic tech", "open data"]
title = "Volume 5: This Week in Civic Tech/Open Data"
tweets = []
volume = 5

+++
This week is heavy on visualisations and maps again. Lot's of interesting things were released last week. 

## Visualizations

### Fighting Opioid Misuse by Monitoring Community Health

![](https://res.cloudinary.com/civicvision/image/upload/v1550335436/Volume%205/tempe-opiod.png)

This is a cool project by the city of Tempe, AZ using ArcGIS storymap and dashboard to explain opioids in waste water collection.

_If you only look at the dashboard it is not immediately obvious why only three areas have graphs and three don‘t. But if you read the story map it will be explainbed. My question with dashboards always is: Who is the audience. Is it the general public and is the dashboard to be used as a standalone project? Then a lot of explanations are missing.
If it is for city workers and only shared for the sake of sharing and showing transparency I would argue that a dedicated dashboard for the public would be in order._

**Takeaway:**
**_Always ask yourself who is the audience of my visualization._**

### [San Diego Launches 'Sim City' Planning Tool For Clairemont](https://www.clairemontplan.org/online-community-engagement-tool)

![](https://res.cloudinary.com/civicvision/image/upload/v1550507772/Volume%205/san-diego-clairmont-planning-tool.png)

The City of San Diego launched a new tool to invite the community to help update the Clairemont Community Plan. It invites residents to provide input for additional housing. The goal is to add 5,000 new housing units above the current plan. 

> In an ongoing effort to provide innovative approaches to improving the quality of life for residents and businesses, the City of San Diego’s Planning Department has developed a new online community engagement tool. This tool will allow the community to engage in the planning process from any computer or mobile device 24 hours a day, this solves many of the traditional challenges associated with attending an in-person workshop.

_What I like about this tool is that the map only focusses on the area of interest and greyed out the rest of the city. I'm not sure why satellite imagery is necessary. I would argue a lighter street background would be valuable as well. Once you zoom into the specific areas the satellite map makes sense and provides extra context what is already visible. But you could have used a map that is easier to navigate on higher zoom levels.   
The color choices are also interesting. :)_ 

**Takeaway**:  
**_Every zoom level does not need the same basemap. You can switch the basemap depending on the context of the application._**

[Tool](https://www.clairemontplan.org/online-community-engagement-tool)

### Infographic: Transit and Emerging Technologies

![](https://res.cloudinary.com/civicvision/image/upload/v1550507021/Volume%205/right-of-way-capacity.jpg)

[http://nelsonnygaard.com/transit-and-emerging-technologies/](http://nelsonnygaard.com/transit-and-emerging-technologies/ "http://nelsonnygaard.com/transit-and-emerging-technologies/")

### [People's Perception Of Crime Rates Vs. Actual Crime Rates, Visualized](http://digg.com/2019/crime-rates-perceptions-vs-reality?utm_source=ifttt)

![](https://res.cloudinary.com/civicvision/image/upload/v1550335783/Volume%205/crime-perception.png)

Nice use of small multiples but as the source on digg added:

> It's worth noting that these graphs, while persuasive, are slightly misleading, since the y-axes don't start at 0 and use different scales. In other words, all of the crimes named above have decreased significantly in prevalence since 1991... but they haven't all decreased the same amount, as the visualization seems to imply.

_I would not go that far that’s all scales should start at zero but at least the percentage between the min and max on the y-scale should have been the same. The you could at least see the percentage of drops._

_And the last chart about the perception is not very clear, I get why they choose it but it takes some time to get your head around it._

_I would have used slope graphs with three dates 1990 - 2001 - 2017 since 2001 was the year the perception of the public changed and you should see that clearly in a slope chart_

**Takeway**:  
**_Using the right scale is important._**

[Source: Digg](http://digg.com/2019/crime-rates-perceptions-vs-reality?utm_source=ifttt)

### ActNow After School programs

![](https://res.cloudinary.com/civicvision/image/upload/v1550389887/Volume%205/Illinois-prek-programs.png)

Small little map about after-school programs in the state of Illinois. 

_I like that they included a legend and a "How do I use this map" to help users with the interpretation_. _I'm not sure how much more value a map adds to the data. If you dive deeper into the data you see actual locations which might add value, but the chroropleth map could have been a list with dots as indicators._ 

**Takeaway:   
_Before you make a map, think about if the spatial components adds value._** 

[Source: ActNow]()

### The Early Childhood Workforce Index 2018

![](https://res.cloudinary.com/civicvision/image/upload/v1550506866/Volume%205/early-childhood-workforce-index.png)

Nice visual representation of the workforce index. Nice looking colors and explanations.

_Just as the previous map as well I would argue that the map does not add value. You could easily have a list of the states. People usually know where the states are and don't need a reminder where they are located. If you want to make an argument that a specific region is performing worse and you use this map to make it more obvious than a map adds value._

**Takeaway:   
_Before you make a map, think about if the spatial components adds value._** 

[http://cscce.berkeley.edu/2018-index-map/?fbclid=IwAR2THMkrFmaNLKgBsW0ogh1clcEDJS7VrWi5iHESCzNk6MaNZ55_u0bcyvk](http://cscce.berkeley.edu/2018-index-map/?fbclid=IwAR2THMkrFmaNLKgBsW0ogh1clcEDJS7VrWi5iHESCzNk6MaNZ55_u0bcyvk "http://cscce.berkeley.edu/2018-index-map/?fbclid=IwAR2THMkrFmaNLKgBsW0ogh1clcEDJS7VrWi5iHESCzNk6MaNZ55_u0bcyvk")

### [Uber Opens Travel Time Data to the Public](https://movement.uber.com/explore/boston/travel-times/query?lang=en-AU&lat.=42.3584308&lng.=-71.1007732&z.=12&si=1116&ti=&ag=censustracts&dt[tpb]=ALL_DAY&dt[dr][sd]=2018-01-01&dt[dr][ed]=2018-01-31&dt[wd;]=1,2,3,4,5,6,7&cd=&sa;=&sdn=)

![](https://res.cloudinary.com/civicvision/image/upload/v1550512747/Volume%205/uber-movement-boston.png)

> Starting today, Uber has announced that they have opened access to their travel times data to the public (for selected cities, including Melbourne and Sydney). Previously, Uber required users to sign in before they could explore and download Movement data. By making travel times data more accessible to the public, Uber hopes to see more research and insights that will help shape the cities of the future.



### [New Census Data: Record Illinois Population Loss For The Year, 5th Straight Annual Loss](https://wirepoints.org/shrinking-illinois-loses-population-five-years-in-a-row/)

![](https://res.cloudinary.com/civicvision/image/upload/v1550506860/Volume%205/illinois-population.png)

These charts would make Cole Nusbaumer very happy. 

The use of colors in all but one chart is very good and focuses the reader on the one bar that is important to the story: Illinois. 

I would have made the other color not back but a darker grey.

**Takeaway:**   
**_Use color sparingly and only to focus the reader on the things you want to highlight. It makes it easier for the reader._** 

**_Think about what if all charts had either the same color or all different colors. It would be harder to find Illinois and then compare and always need to find it again._**

[Source: Wirepoints](https://wirepoints.org/shrinking-illinois-loses-population-five-years-in-a-row/)

### [Snow days in Germany](https://interaktiv.waz.de/winter-vergleich-deutschland/)

![](https://res.cloudinary.com/civicvision/image/upload/v1550511088/Volume%205/snow-days-germany.png)

Nice visualization and nice use of small multiples. 

_But I am not sure about the color usage. Darker hues usually refer to more and in this visualization it‘s used for the opposite._

[Source: WAZ newspaper](https://interaktiv.waz.de/winter-vergleich-deutschland/)

<hr />

## Open Data

<hr />

## Articles

### Civic Tech/Community

### Open Government/Open Data

<hr />

## Tools

<hr />

## Tweets

<hr />

## Videos

<hr />

## Jobs

<hr />

## Upcoming Events