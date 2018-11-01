---
title: "Gov Data"
date: 2018-10-30T17:08:58+01:00
draft: true
viz: true
---

I was playing around with Vega and CKAN at the same time and came across a nice little way to visualize data right from CKAN or any API with vega.

It is fast and updates automatically because it is using the API rather than a static file.

For Example here are the formats for datasets on gov.data:

<div id="govdata-formats"></div>
{{% viz data="govdata/formats" id="#govdata-formats" width="700" %}}

Or let's take a look at the licences used by gov.data:

<div id="govdata-licenses"></div>
{{% viz data="govdata/licenses" id="#govdata-licenses" width="700" %}}


