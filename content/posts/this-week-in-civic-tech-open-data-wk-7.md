+++
calendar_week_published = 7
categories = ["This Week in Civic Tech"]
date = "2019-02-06T15:34:24+01:00"
draft = true
hero = ""
tags = ["civic tech", "open data"]
title = "Volume 4: This Week in Civic Tech/Open Data"
tweets = ["1091749710061277185", "1091376345836384256"]
volume = 4
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Top Datasets for U.S. Cities"
url = "https://socrata.com/papers-and-guides/top-datasets-us-cities/"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Chicago PD Launches ‘Intelligence Hub’ in Logan Square Area"
url = "http://www.govtech.com/public-safety/Chicago-PD-Launches-Intelligence-Hub-in-Logan-Square-Area.html"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Unveiling the Government of Canada's Standards on APIs"
url = "https://open.canada.ca/en/blog/unveiling-government-canadas-standards-apis"

+++
This week includes data visualisations about Trees in New York, Wildfires in California, Housing in Boston and Scooters in San Diego. 

I'm still figuring out the best approach to it, and if you have any suggestions please let me know :) 

## Visualizations

### [NYC Street Tree Map](https://tree-map.nycgovparks.org/)

![](https://res.cloudinary.com/civicvision/image/upload/v1549897694/Volume%204/ny-trees.png)

This one is not totally new but worth checking out and sharing. 

> The New York City Street Tree Map brings New York City’s urban forest to your fingertips. For the first time, you have access to information about every street tree in New York City. Learn about the trees that make up our city’s urban forest, mark trees as favorites and share them with your friends, and record and share all of your caretaking and tree stewardship activities.

[https://tree-map.nycgovparks.org/](https://tree-map.nycgovparks.org/ "Tree Map NYC Government")

### A History Of California Wildfires

![](https://res.cloudinary.com/civicvision/image/upload/v1549898069/Volume%204/ca-fires.png)

Capital Public Radio (CPR) mapped wildfires have from the last 100-plus years in California.   
“A History Of California Wildfires,” uses data sets from the California Department of Forestry and Fire Protection (Cal Fire) (dating back to 1878), as well as the U.S. Geological Survey’s 2018 data set.

_I love maps as you might have realized and this one looks great. It's great that they included the source data and more information about its usefulness._  

_But I do not like the color changes. Especially with fires, you would assume that the red areas where the more severe but they're the most recent one. And overlaying all of them looks kinda weird. But if you scroll to the dates is pretty intense. I would have used a time slider and a play button to show the severity of the fires. And I would use one color for all of them.   
Maybe add a second color if you have more information to encode. Or add a heatmap to show the regions that are hit the hardest in the last 100 years._ 

### Boston Neighborhood Change Interactive Map

![](https://res.cloudinary.com/civicvision/image/upload/v1549903525/Volume%204/boston-gentrification.png)

> The Joint Center for Housing Studies of Harvard University has released a new Boston Neighborhood Change Interactive Map, which allows visualizations of demographic, social and economic changes in the Boston Metropolitan Statistical Area.

They offer a recommended maps section which includes maps about Racial and Ethnic Diversity, Modestly-Priced Homes and Gentrifying Neighborhoods. 

_I took a closer look at the Gentrifying Neighborhoods map. And it took me some time to figure them out. They have the typical red, yellow, green color scale, which makes it easy to spot good and bad parts. I would have wished more explanation. I clicked on Gentrifying Neighborhoods, but I am not sure if a green or a red district is gentrified. here is a detailed screenshot of the map:_ 

![](https://res.cloudinary.com/civicvision/image/upload/v1549903939/Volume%204/boston-gentrification-detail.png)

_While I'm writing this, I realise this should be a longer post diving into the visualisations more deeply. Keep an eye out for those posts in the upcoming weeks._ 

### Motorized scooter tickets leap in San Diego

![](https://res.cloudinary.com/civicvision/image/upload/v1549898094/Volume%204/sd-scooter-violations.png)

A news article from the San Diego Union Tribune about scooter tickets in San Diego.   
San Diego saw a rise in Scooters and Scooter usage over the last year and I enjoyed riding the scooter there a lot :)   
The article includes three visualisations and a map. The map naturally caught my eye. 

_It's using Carto as a provider and therefore really great basemaps which help emphasize the data and not the streets. On a first glance at the map, you can see that most tickets were issued downtown and most of the scooters are in downtown San Diego. So no surprise there. I would have loved seeing actual scooter usage numbers, but we have to take what we get :)  
One thing that stands out and could confuse readers is the color choice. They used red, green, yellow and added a blue. But the colors do not match the ticket description very good. You would not expect a green dot being a scooter without adequate brakes. But I applaud the Union-Tribune of using data analysis and visualizations to support their stories._ 

### Chicago Pre-K Community Programs

![](https://res.cloudinary.com/civicvision/image/upload/v1549908695/Volume%204/chicago-pre-k-community-programs.png)

> El Valor runs the second-largest network of early childhood education centers in Chicago, after the public school system itself. Until this fall, several of its centers on the city’s South and Southwest sides had long waitlists.

This article is about the change of then-Mayor Rahm Emanuel announcing that Chicago would embrace universal education for 4-year-olds. And community education Center El Valor struggles to fill its places. 

_I love the small multiples approach, showing seats filled at the public school and the community programs. The typical red, yellow, green color for empty to full works well and adding a fourth color in blue to show overcapacity works excellent. Especially since it stands out right away. The cited their source, but I would have loved to look into the data myself so a link to the source would have been even better._ 

### Child care cost in the Bay Area

![](https://res.cloudinary.com/civicvision/image/upload/v1549897780/Volume%204/child-care-bay-area.jpg)

The article [**"You think Bay Area housing is expensive? Child care costs are rising, too"**]() also includes a nice visual to show the change in cost. 

_I would have used less color and maybe even used a slope chart instead of the bar chart. It takes some time to see the rise and the percentages. They are huge, but the visual does not really support it. I will probably do a makeover of this one since it is fascinating data and could use a great visual._ 

<hr />

## Open Data

### New Data: Portland Police Department

We have a nice new dataset from the Police department of Portland

[https://www.portlandoregon.gov/police/71673](https://www.portlandoregon.gov/police/71673?utm_content=bufferd5272&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer "https://www.portlandoregon.gov/police/71673?utm_content=bufferd5272&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer")

{{< tweet 1092466319746875392 >}}

### Great thread from last week about illegal parking

{{< tweet 1091026922170142721 >}}

### **The State of the Union of Open Data**

> 93.6% of #SOTUofopendata survey respondents believe we’ll see an improvement in the standardization, sharing, & use of #opendata in the immediate future - 14.4% increase over last year! Learn what’s behind the numbers in our report

[Report](https://www.datafoundation.org/the-state-of-the-union-of-open-data-ed-3)

<hr />

## Articles

### Civic Tech/Community

{{< articles "Civic tech/Community" >}}

### Open Government/Open Data

{{< articles "Open Data/Open Government" >}}

<hr />

## Tweets

{{< tweets >}}