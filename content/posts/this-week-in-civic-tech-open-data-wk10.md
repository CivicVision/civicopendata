+++
calendar_week_published = 10
categories = ["This Week in Civic Tech"]
date = "2019-03-09T07:02:09+01:00"
draft = true
hero = ""
tags = ["civic tech", "open data"]
title = "Volume 8: This Week in Civic Tech/Open Data"
tweets = ["1103024836396359680", "1104112055945175045", "1100416579676844032", "1102681373964414979", "1103650491978969088"]
volume = 8
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "US takes tentative steps toward opening up government data"
url = "https://gcn.com/articles/2019/03/07/open-data.aspx"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "How Tech Helped Chicago Police Solve the Jussie Smollett Case"
url = "http://www.govtech.com/analytics/How-Tech-Helped-Chicago-Police-Solve-the-Jussie-Smollett-Case.html"
[[articles]]
category = "Civic tech/Community"
template = "article"
title = "Proof Points for Human-Centered Benefits Administration"
url = "https://medium.com/code-for-america/proof-points-for-human-centered-benefits-administration-8832c63a4034"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "E-Scooter Bans Show Cities Are Hesitant to Embrace Innovation"
url = "http://www.govtech.com/opinion/E-Scooter-Bans-Show-Cities-Are-Hesitant-to-Embrace-Innovation.html"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Why States Need a Data Officers Leadership Network (Contributed)"
url = "http://www.govtech.com/opinion/Why-States-Need-a-Data-Officers-Leadership-Network-Contributed.html"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Little Rock Uses Community Data to Light Underserved Areas"
url = "http://www.govtech.com/civic/Little-Rock-Uses-Community-Data-to-Light-Underserved-Areas.html"

+++
## Visualizations

### [Syracuse Snow Map](https://cityofsyracuse.github.io/snowmap/snowmap/snowplow_map.html)

![](https://res.cloudinary.com/civicvision/image/upload/v1552111402/Volume%208/syracuse-snow-map.png)

What I love about this project is this comprehensive writeup of how they built it: [http://www.innovatesyracuse.com/blog/snowplowmapdevelopment](http://www.innovatesyracuse.com/blog/snowplowmapdevelopment)

And everything is Open Source on [GitHub](https://github.com/CityofSyracuse/snowmap) available for everyone to check out the code or reimplement it.

_It would be great if they included the link to the explanation on the map somewhere. The colors, especially the one for "Not yet plowed" does not work great with the basemap. It's hard to see.  
The layer switcher should have a legend included, so the color of the lines should be next to the labels. And I would not turn on everything by default. Maybe start with the plowed streets and guide the user to click the others._

**Takeaway**:  
**Don't overload your map. Show the most important thing first and educate your user how they can find more.**

### [Atlas of Inequality](https://inequality.media.mit.edu)

![](https://res.cloudinary.com/civicvision/image/upload/v1552112269/Volume%208/atlas-of-inequality.png)

> "Atlas of Inequality" a map of how unequal are places in our cities. Because economic inequality isn't just limited to neighborhoods. The restaurants, stores, and other places we visit in cities are all unequal in their own way.

This is a great looking map. The dot density style works really nice and they included a how to use the map right from the start:  
![](https://res.cloudinary.com/civicvision/image/upload/v1552113573/Volume%208/atlast-of-inequality-explanation.png)

They also included their research method and more explanation of how the data was produced and presented.

_The only critique that I would have is that labels are not readable and do not add any value._

**Takeaway**:  
**If you have a lot of stuff going on in your map including an explanation right at the start helps your users understand how to interact with your interactive.**

### Cats in the World

![](https://res.cloudinary.com/civicvision/image/upload/v1552227793/Volume%208/cats-in-the-world.png)

> This project explores two uses of the internet: one that promotes sharing for the sociable and humorous appreciation of domesticated felines, and one in which the status quo of personal data usage is exploited by startups and international mega-corporations, who are riding the wave of decreased privacy for all.

The project is a great civic tech project and is funny and creepy at the same time. I'm sorry to use them but their charts offer a great way to shoe some something.

_The maps for one are population maps and do not show where cats live but mostly where their owner's life. On a global scale, you can see that there are not as many cats in India or China although they have a high population. If you had used a cat per 1000 resident or similar, it would give you more insight.  
These charts are a good example for a more comprehensive post._ 

**Takeaway**:  
**If you have data that can closely be related to population use a ratio scale and not an absolute scale; otherwise you make a population map.**

### Height and growth trend of skyscrapers in 9 US metro areas

![](https://res.cloudinary.com/civicvision/image/upload/v1552214548/Volume%208/building-height-us-metros.jpg)I like the data and the way it is represented. The small multiple approach works great to see at first glance, the city with the highest buildings and the trend of building heights over the years.

_There are a few points though:   
The first year label is 1925, but there is data available for a few cities for earlier years. I would have either removed the data and start by 1925 or start with the correct label. The space between the axis and the year 1925 is confusing.   
The labels of the cities are too close to the previous chart which confused me the first time I saw the chart. Either increase the space between the charts or move the headline closer to the chart it represents.   
The black line which represents the smoothing of the data should have been labeled; otherwise, you have to guess as a reader.   
For the source, Wikipedia is a very broad source description. I get that the available space is limited, but something more descriptive would be great. And metro areas are also not as clear to an outsider (especially people living overseas)._

<hr />

## Open Data

### [Predicting E. coli concentrations using limited qPCR deployments at Chicago beaches](https://www.sciencedirect.com/science/article/pii/S2589914718300161)

A group of civic activists with the City of Chicago published a paper about a project they did in Chicago in cooperation with Chicago Hacknight and the City. The whole project is a huge success and well known in the civic tech world. But that they published a paper about it is pretty awesome. Congrats. 

### [Assist veterans with their job search through the Opportiunity Project](https://medium.com/civis-analytics/the-opportunity-project-a-new-model-for-civic-tech-1ca6846d2e82)

> The Opportunity Project is a process for engaging government, communities, and the technology industry to create digital tools that address our greatest challenges as a nation. This process helps to empower people with technology, make government data more accessible and user-friendly, and facilitate cross-sector collaboration to build new digital solutions with open data.
https://opportunity.census.gov

One particular project was about helping returning veterans find registered apprenticeships. Go check out the blog post form the creators.

### [Miami Open Data Portal](http://datahub-miamigis.opendata.arcgis.com)

Presented at the Open Data Day the City of Miami released a new Open Data portal featuring mostly geospatial datasets! Welcome! 

### [Student Data Challenge: Make an Impact with Open Data](https://www.tableau.com/impact-open-data?utm_content=buffer6c683&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)

A great initiative by Tableau and Mapbox. 

The topics are

* Veteran Education Benefits
* Homelessness

Go check it out and participate if you're a student or share with a student. 

<hr />

## Articles

### Civic Tech/Community

{{< articles "Civic tech/Community" >}}

### Open Government/Open Data

{{< articles "Open Data/Open Government" >}}
<hr />

## Tweets

{{< tweets >}}
<hr />


## Jobs
<{{ tweet 1098660264751226880 }}>
