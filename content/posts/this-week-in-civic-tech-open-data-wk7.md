+++
calendar_week_published = 7
categories = ["This Week in Civic Tech"]
date = "2019-02-16T17:39:46+01:00"
draft = true
hero = ""
tags = ["civic tech", "open data"]
title = "Volume 5: This Week in Civic Tech/Open Data"
tweets = ["1091597785219108864", "1095364465556627466", "1095396763278737410"]
volume = 5
[[articles]]
category = "Civic tech/Community"
template = "article"
title = "Navigating the field of civic tech: A guide for newcomers and explorers"
url = "https://medium.com/tradecraft-traction/navigating-the-field-of-civic-tech-c1f9670c8f69"

+++
This week is heavy on visualisations and maps again. Lot's of interesting things were released last week.

## Visualizations

### [Fighting Opioid Misuse by Monitoring Community Health](https://tempegov.maps.arcgis.com/apps/Cascade/index.html?appid=92073d7f6a6a498b987f2afdab1b9471)

![](https://res.cloudinary.com/civicvision/image/upload/v1550335436/Volume%205/tempe-opiod.png)

This is a cool project by the City of Tempe, AZ using ArcGIS storymap and dashboard to explain opioids in wastewater collection.

_If you only look at the dashboard, it is not immediately obvious why only three areas have graphs, and three don‘t. But if you read the story map, it will be explained. My question with dashboards always is: Who is the audience. Is it the general public and is the dashboard to be used as a standalone project? Then a lot of explanations are missing.  
If it is for city workers and only shared for the sake of sharing and showing transparency, I would argue that a dedicated dashboard for the public would be in order._

[Source: City of Tempe, AZ](https://tempegov.maps.arcgis.com/apps/Cascade/index.html?appid=92073d7f6a6a498b987f2afdab1b9471)

**Takeaway:**
**_Always ask yourself who is the audience of my visualization._**

### [San Diego Launches 'Sim City' Planning Tool For Clairemont](https://www.clairemontplan.org/online-community-engagement-tool)

![](https://res.cloudinary.com/civicvision/image/upload/v1550507772/Volume%205/san-diego-clairmont-planning-tool.png)

The City of San Diego launched a new tool to invite the community to help update the Clairemont Community Plan. It encourages residents to provide input for additional housing. The goal is to add 5,000 new housing units above the current plan.

> In an ongoing effort to provide innovative approaches to improving the quality of life for residents and businesses, the City of San Diego’s Planning Department has developed a new online community engagement tool. This tool will allow the community to engage in the planning process from any computer or mobile device 24 hours a day, this solves many of the traditional challenges associated with attending an in-person workshop.

_What I like about this tool is that the map only focusses on the area of interest and greyed out the rest of the city. I'm not sure why satellite imagery is necessary. I would argue a lighter street background would be valuable as well. Once you zoom into the specific areas, the satellite map makes sense and provides_ additional context of what _is already visible. But you could have used a map that is easier to navigate on higher zoom levels.  
The color choices are also interesting. :)_

**Takeaway**:  
**_Every zoom level does not need the same basemap. You can switch the basemap depending on the context of the application._**

[Source: City of San Diego](https://www.clairemontplan.org/online-community-engagement-tool)

### [People's Perception Of Crime Rates Vs. Actual Crime Rates, Visualized](http://digg.com/2019/crime-rates-perceptions-vs-reality?utm_source=ifttt)

![](https://res.cloudinary.com/civicvision/image/upload/v1550335783/Volume%205/crime-perception.png)

Excellent use of small multiples but as the source on Digg added:

> It's worth noting that these graphs, while persuasive, are slightly misleading, since the y-axes don't start at 0 and use different scales. In other words, all of the crimes named above have decreased significantly in prevalence since 1991... but they haven't all decreased the same amount, as the visualization seems to imply.

_I would not go that far that all scales should start at zero but at least the percentage between the min and max on the y-scale should have been the same. You could at least see the rate of drops._

_And the last chart about the perception is not very clear, I get why they choose it, but it takes some time to get your head around it._

_I would have used slope graphs with three dates 1990 - 2001 - 2017 since 2001 was the year the perception of the public changed, and you should see that clearly in a slope chart_

**Takeaway**:  
**_Using the right scale is essential._**

[Source: Digg](http://digg.com/2019/crime-rates-perceptions-vs-reality?utm_source=ifttt)

### [ActNow After School programs](https://map.actnowillinois.org/map)

![](https://res.cloudinary.com/civicvision/image/upload/v1550389887/Volume%205/Illinois-prek-programs.png)

A map about after-school programs in the state of Illinois. 

_I like that they included a legend and a "How do I use this map" to help users with the interpretation.   
The basemap makes it hard to read the data correctly. I would change it, and Google has a nice grey scheme basemap which could be used.  
Also, I would be interested in hearing why they let the user select multiple geographies or if they are using it internally to asses their success?   
Overall I'm not sure how much more value a map adds to the data, to be honest. If you dive deeper into the data, you see actual locations which might add value, but the choropleth map could have been a list with dots as indicators._

**Takeaway:  
_Before you make a map, think about if the spatial components add value._**

[Source: ActNow](https://map.actnowillinois.org/map)

### [The Early Childhood Workforce Index 2018](http://cscce.berkeley.edu/2018-index-map/?fbclid=IwAR2THMkrFmaNLKgBsW0ogh1clcEDJS7VrWi5iHESCzNk6MaNZ55_u0bcyvk)

![](https://res.cloudinary.com/civicvision/image/upload/v1550506866/Volume%205/early-childhood-workforce-index.png)

Nice visual representation of the workforce index. Nice looking colors and explanations.

_Just as the previous map as well I would argue that the map does not add value. You could easily have a list of the states. People usually know where the states are and don't need a reminder where they are located. If you want to make an argument that a specific region is performing worse and you use this map to make it more obvious than a map adds value._

**Takeaway:  
_Before you make a map, think about if the spatial components add value._**

[Source: University of Berkeley](http://cscce.berkeley.edu/2018-index-map/?fbclid=IwAR2THMkrFmaNLKgBsW0ogh1clcEDJS7VrWi5iHESCzNk6MaNZ55_u0bcyvk)

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

Nice visualization of winter in Germany for the last 60 years from am german newspaper. 

Nice use of small multiples and color scheme. _But I am not sure about the color usage. Darker hues usually refer to more, and in this visualization it‘s used for the opposite. I asked them about their choice but have not heard back yet._

{{< tweet 1096501264005775360 >}}

**Takeaway:  
Color scales and their hues matter. Think about what people are used to already and decide if you want to go against the norm. There are good reasons why you might want to do it but try to avoid it.** 

[Source: WAZ newspaper](https://interaktiv.waz.de/winter-vergleich-deutschland/)

### [Infographic: Transit and Emerging Technologies](http://nelsonnygaard.com/transit-and-emerging-technologies/)

![](https://res.cloudinary.com/civicvision/image/upload/v1550507021/Volume%205/right-of-way-capacity.jpg)

[Source: Nelson Nygaard Consulting Associates](http://nelsonnygaard.com/transit-and-emerging-technologies/)

### [Uber Opens Travel Time Data to the Public](https://movement.uber.com/explore/boston/travel-times/query?lang=en-AU&lat.=42.3584308&lng.=-71.1007732&z.=12&si=1116&ti=&ag=censustracts&dt%5Btpb%5D=ALL_DAY&dt%5Bdr%5D%5Bsd%5D=2018-01-01&dt%5Bdr%5D%5Bed%5D=2018-01-31&dt%5Bwd;%5D=1,2,3,4,5,6,7&cd=&sa;=&sdn=)

![](https://res.cloudinary.com/civicvision/image/upload/v1550512747/Volume%205/uber-movement-boston.png)

> Starting today, Uber has announced that they have opened access to their travel times data to the public (for selected cities, including Melbourne and Sydney). Previously, Uber required users to sign in before they could explore and download Movement data. By making travel times data more accessible to the public, Uber hopes to see more research and insights that will help shape the cities of the future.

<hr />

## Open Data

### [Toronto Fire Services releases high-rise violations inspections data – with notable holes](https://signaltoronto.com/toronto-fire-services-releases-high-rise-violations-inspections-data-with-notable-holes/)

> Toronto Fire Services released the results of “fire prevention inspections” of high-rise residential buildings in 2017 on the city’s website on late Tuesday afternoon.

I wanted to make a visualization out of it, but did not find the time yet. The data is not immediately visible and Open Data but I found the underlying data:  
[Data Link](https://secure.toronto.ca/c3api_data/v2/DataAccess.svc/fireprevention/extractProperty)

Hopefully later this week I can update this post and maybe share a more detailed one how I used the data.

### [Since Parkland](https://github.com/mcclatchy/gun-deaths)

A very sad but important dataset, released by McClatchy, the Miami Herald and The Trace.

> The organizations pulled information on gun-involved deaths of school-age children from the nonprofit research group Gun Violence Archive, which culls reports of gun-involved incidents from more than 2,000 media sources. To compare deaths in the year since Parkland to those before, McClatchy classified each year as starting on Feb. 14 and ending on Feb. 13.

[Story](https://www.miamiherald.com/news/nation-world/national/article225548170.html)
[Dataset](https://github.com/mcclatchy/gun-deaths)

### [New San Diego County Crime Data](https://www.sandiegodata.org/2019/02/new-san-diego-county-crime-data/)

The San Diego Regional Library updated their crime data collection with files for 2016 and 2017. Their crime data collection now runs from 2006 to 201.

### [Data Common](https://datacommon.mapc.org)

> MAPC's DataCommon has hundreds of downloadable datasets specific to Mass. and our region - with many broken down by municipality.

### Missed last week: Illegal parking reporting NYC

{{< tweet 1091026922170142721 >}}

<hr />

## Articles

### Civic Tech/Community

### Open Government/Open Data

<hr />

## Tools

### [Dedupe](https://dedupe.io)

Dedupe got a design refresh and an explainer video.

{{< youtube UcXaBnTb_t8 >}}

<hr />

## Tweets

{{< tweets >}}

<hr />

## Videos

<hr />

## Jobs

<hr />

## Upcoming Events

* [GO CODE COLORADO 2019](https://gocode.colorado.gov)
* [Hackathon CHARLOTTE NC,22.-23.3.2019](http://hackathonclt.org)