+++
calendar_week_published = 11
categories = ["This Week in Civic Tech"]
date = "2019-03-18T17:51:49+01:00"
hero = ""
images = ["https://res.cloudinary.com/civicvision/image/upload/c_fill,h_600,w_800/c_fill,h_600,w_800,x_800,l_TWICT:Volume%209:melbourne-transit/c_fill,h_600,w_800,x_-400,y_600,l_TWICT:Volume%209:hudson-yard-nyt/c_fill,h_600,w_800,x_400,y_300,l_TWICT:Volume%209:ny-de-blasio-plan-flood/TWICT/Volume%209/shape-of-cities"]
tags = ["civic tech", "open data"]
title = "Volume 9: This Week in Civic Tech/Open Data"
tweets = ["1105619082760646656", "1106271182305796096"]
volume = 9
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Getting the Work Done: What Government Innovation Really Looks Like"
url = "https://www.newamerica.org/public-interest-technology/reports/problem-solving-government/"
[[articles]]
category = "Civic tech/Community"
template = "article"
title = "Mapping the impact of dockless vehicles"
url = "https://www.smartcitiesdive.com/news/mapping-the-impact-of-dockless-vehicles/539263/"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Predictive Policing Using AI Tested by Bay Area Cops"
url = "https://www.govtech.com/public-safety/Predictive-Policing-Using-AI-Tested-by-Bay-Area-Cops.html"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "New Mexico Legislators Want Crime Data-Sharing Network"
url = "https://www.govtech.com/public-safety/New-Mexico-Legislators-Want-Crime-Data-Sharing-Network.html"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "A Different Kind of Smart City Project Revs Up in Lima, Ohio"
url = "https://www.govtech.com/fs/A-Different-Kind-of-Smart-City-Project-Revs-Up-in-Lima-Ohio.html"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "How data collected from mobile phones can help electricity planning"
url = "https://thelivinglib.org/how-data-collected-from-mobile-phones-can-help-electricity-planning/"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Utah to shut down its innovation incubator"
url = "https://statescoop.com/utah-to-shut-down-its-innovation-incubator/"
[[articles]]
category = "Civic tech/Community"
template = "article"
title = "The Value Proposition of Circular City Data for Economic Development GovLab Unveils Work at NewLab’s Circular City Public Showcase"
url = "http://thegovlab.org/the-value-proposition-of-circular-city-data-for-economic-development-govlab-unveils-work-at-newlabs-circular-city-public-showcase/"
[[articles]]
category = "Civic tech/Community"
template = "article"
title = "Gov404: The Web Integrity Project’s Censorship Tracker"
url = "https://sunlightfoundation.com/gov404/"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "How open is your government? Find out."
url = "https://www.muckrock.com/place/"
[[articles]]
category = "Open Data/Open Government"
template = "article"
title = "Eight years in, LAPD can’t measure PredPol’s effect on crime"
url = "https://www.muckrock.com/news/archives/2019/mar/12/algorithms-lapd-predpol/"

+++
Not much was going on last week, so this roundup will be short and include some more data-driven journalism. The Baltimore Sun is busy producing data-driven stories, and I love that they share their process and code. The National Geographic is known for beautiful visualizations, and they show it off again :)

## Visualizations

### [The Shape of cities](https://www.nationalgeographic.com/magazine/2019/04/maps-show-how-public-transit-and-geography-shape-cities/)

![](https://res.cloudinary.com/civicvision/image/upload/v1552926593/TWICT/Volume%209/shape-of-cities.png)

A TALE OF FIVE CITIES AND HOW THEY GREW

> Rail, roads, and real estate play a role in the physical shape of cities. So does geography. To track how metropolitan regions have developed, Shlomo Angel and his colleagues at New York University used historical maps and satellite imagery to create the Atlas of Urban Expansion. The atlas defines city parameters to include the entire built area beyond a city’s jurisdictional boundaries and into surrounding municipalities.

_These beautiful 4 maps of cities, three of them even with animation over time are nice to look at and show interesting patterns. The National Geographic has added some explanations to the graphs, and the dark theme works very well for the color scheme. Unfortunately, there is no information about the data sources they used._

**Takeaway: Even wonderful and hand-crafted maps have room for explanations and a legend :)**

### [A day of transit in Melbourne, Australia](https://www.notion.so/civicvision/438bce420d314a46b38f6d4a7cf39062#7eeab4f4b3bd4035bf7cd76e35ac76c5)

![](https://res.cloudinary.com/civicvision/image/upload/v1552926510/TWICT/Volume%209/melbourne-transit.png)

Saw this one on LinkedIn and has no source or anything but it is beautiful to watch, and since I was recently in Melbourne I found it fascinating to look at.

_I made a list in my last post about "What should be included in a map," and this map is missing all of it._

**Takeaway: At least include the source of your data on your map and a legend.**

### [Mayor's Plan to Climate-Proof Lower Manhattan]()

![](https://res.cloudinary.com/civicvision/image/upload/v1552926191/TWICT/Volume%209/ny-de-blasio-plan-flood.png)

> Under the mayor’s new $10 billion plan, the waterfront of the Financial District will be built up to 500 feet into the East River to protect against flooding.

This is a nice visually appealing map with great use of annotations. Some of them are harder to read and don't offer too much information on their own, you have to read a text to know what's going on with this map. I would have reduced the number of visible streets even further, they're still distracting from the important data.

**Takeaway: Too much supporting data can distract from your important data. Think about what needs to be included in a map and what might be a distraction.**

### [Vacant property demolishions in Baltimore](https://www.baltimoresun.com/news/maryland/politics/bs-md-ci-vacant-demolition-20190214-story.html)

![](https://res.cloudinary.com/civicvision/image/upload/v1552926216/TWICT/Volume%209/vacant-demolished-baltimore.png)

> The number of vacant houses in Baltimore has remained at almost 17,000 for years but housing officials have pledged to tear down large numbers of vacant buildings by June 30, 2020.

I love that the Baltimore Sun is producing more data-driven content and sharing they're experience and code with all of us. Keep up the excellent work.

_I'm not sure how much value the point map adds here though. A heatmap or a hexmap would be more appropriate. It's hard to see where significant clusters are. You can see it a little bit, but a different map type would have made the point more clearly. You would lose the interactivity but not sure it is necessary here. The map is embedded inside the story but is not referenced in the text._

**Takeaway: Think about your map type choices. The default is often not the best choice. Think which type adds what kind of value to your data.**

### [Hudson Yard](https://www.nytimes.com/interactive/2019/03/14/arts/design/hudson-yards-nyc.html)

![](https://res.cloudinary.com/civicvision/image/upload/v1552936522/TWICT/Volume%209/hudson-yard-nyt.png)

> Hudson Yards Is Manhattan’s Biggest, Newest, Slickest Gated Community. Is This the Neighborhood New York Deserves?

Very nice scrollytelling architecture critique with 3D animations by the NYT. They zoom into each individual building and add explanations as shown above.

**Takeaway: Scrollytelling is an excellent technique when done right.**

### Transit in Brooklyn

![](https://res.cloudinary.com/civicvision/image/upload/v1552926721/TWICT/Volume%209/D1pb9cbX4AE12K6.jpg)

> Interesting results from Bronx bus rider surveys conducted at MTA's workshops for redesigning the bus network.

<hr />

## Civic Tech/Open Data

### [Why Californians need food assistance](https://snapstories.codeforamerica.org/)

> Californians who receive food assistance come from all backgrounds, but many share a similar story: they were barely getting by financially when they were tipped into crisis by an unexpected expense or loss of income. This site shares their stories.

A well-done story about food assistance in California by Code for America.

### [From Open Data to Data Collaboratives: Panel Reflects on the Case for Data Stewardship](http://thegovlab.org/from-open-data-to-data-collaboratives-panel-reflects-on-the-case-for-data-stewardship/)

> The GovLab hosted an official New York City Open Data Week panel on Monday, March 4th.

### [Three Takeaways from Open Data Day 2019](https://medium.com/code-for-america/three-takeaways-from-open-data-day-2019-7929370e01e1?source=rss----5afc915f85d2---4)

> But perhaps the most important part of Open Data Day is not the technology. It’s not the data, it’s not the APIs—it’s the people.

### [Findings from the Africa Open Data Index and Africa Data Revolution Report](https://blog.okfn.org/2019/03/05/how-open-is-government-data-in-africa/)

> his regional version of our Global Open Data Index collected baseline data on open data publication in 30 African countries to provide input for the second Africa Data Revolution Report.

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