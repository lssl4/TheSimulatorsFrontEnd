
<b>COVID-19 Impact Visualizer</b>

<b>Summary</b>

Our idea is a simple one: Take COVID-19 tracking data from around the world at various time periods (days), combine it with the environmental and social datasets and plot it concurrently with satellite imagery taken from the GIBS API. The concept is to give anyone the ability to see any relationships between the virus and the environmental and social factors. We also aim to provide a tool which is capable of detecting high risk areas in real time using visuals which anyone can understand.

<b>How We Addressed This Challenge</b>

COVID-19 Impact Visualizer does this in two ways. Firstly, its a front end web tool built with React.js. This tool gives anyone (including policy makers) an easy to use and understand tool from which to interpret COVID-19 spread better. It allows them to visualise the spread while also seeing how its spread may also be related to the environmental and social factors (i.e. the states' temperature and humidity, the number of flights going in and out of the state, air quality, seasonality, etc.).

The second is that it attempts to consolidate various sources of data from various fields into a single API. This GraphQL API takes COVID-19 tracking data from around the world, historic and current, combines them with environmental data matching the location and time of the COVID-19 cases, and make it possible to read and digest it via an easy to request and read JSON like endpoint. This service is designed to not make this as our sole project, but also any other project that requires this data.


<b>Members:</b>

Madelyne Mazzaferro
Ethan Pui
David Lawson
Siong Leong


<b>Link:</b>

https://covid19.spaceappschallenge.org/challenges/covid-challenges/where-theres-a-link-theres-a-way/teams/the-simulators/project
