# Copernico


## _Challenge: Leveraging Earth Observation Data for Informed Agricultural Decision-Making_


## _Introduction_


Agriculture, a fundamental pillar for the survival and development of human communities, today faces increasingly complex challenges on a global scale. Phenomena such as **climate change**, with *unpredictable* weather patterns, **pest** infestations, **livestock** diseases, and even *political* tensions,put **food security** and the livelihoods of **farmers** at risk. Additionally, there is growing difficulty in accessing *essential resources*, exacerbated by the lack of *adequate tools* to manage these challenges effectively. In this scenario, the integration of **advanced scientific data** could represent a crucial turning point to make agricultural practices more *resilient* and **sustainable**. It is in this context that **Copernico** was born, an innovative app designed to offer farmers a **simple and intuitive tool** that connects them to **geospatial data** and  **Earth observation data** provided by **NASA**. 

Through more *accurate* forecasts, tools for **risk management**, and **decision support**, the app aims to offer concrete and easily accessible solutions to farmers.Despite the opportunities provided by **satellite data**, translating complex information into **practical advice** usable by agricultural communities remains a challenge. Often, current technologies fail to adequately integrate the data into a **"farmer-centric"** context, limiting the adoption of such resources due to their complexity or the lack of an *adequate design*. **Copernico** aims to overcome these barriers by providing a tool that allows the visualization of *data* in a comprehensible, **intuitive**, and **relevant** way, thereby helping farmers make **informed decisions** based on **real-time** information.

<br>

## _Copernico Goals_

1. **Impact**

   Copernico has a significant potential impact both in terms of **quality** and **quantity**, as the project aims to solve a central problem for global agriculture: **resource management**, a crucial issue for agricultural productivity and **food security**. Furthermore, Copernico aims to support not only small farmers but also large agricultural producers, helping them optimize **water usage**, manage **environmental risks**, and improve the sustainability of their practices. In this way, the project can inspire a broad audience and bring tangible benefits to many, as it provides a tool capable of influencing the **efficiency** of large-scale agricultural operations.

2. **Creativity**

   Copernico’s approach aims to be highly innovative. While there are solutions that use **satellite data** for agriculture, it stands out for its ability to translate **complex data** into **accessible** and **usable** information for farmers, particularly by providing practical and relevant advice. The app leverages a **user-friendly interface**, making information available on a local and temporal basis, integrating real-time **forecasts** and in-depth analyses. This novel approach not only improves existing technologies but also opens new opportunities for the use of satellite data by the agricultural community.

3. **Validity**

   The project is based on **solid scientific data**, utilizing datasets from **NASA**, one of the most reliable sources of Earth observation.  
   Copernico aims to provide accurate information on phenomena such as **water availability** and **quality**, using advanced predictive models to enhance farmers' decision-making abilities. Thanks to the use of established technologies such as **satellite monitoring** and data analysis tools, the project boasts a high level of scientific validity and can function effectively in the real world.

4. **Relevance**

   The project is highly relevant to the challenge for which it was created, directly addressing the need to provide farmers with better tools to understand and manage resources through the integration of **NASA data**. Copernico presents itself as a technically feasible and intuitive solution, which must be further developed to improve its **scalability**.

<br>

## _Tech Stack_

   - **Frontend**: _Expo_, _React Native_, _Nativewind_.
   - **UI/UX**: _Figma_.
   
<br>


## _How to Run_

**Requirements**

Make sure you have **_Node.js_** and **_npm_** installed on your computer.


Follow these steps to execute the project:

1. Clone the repository:

```git clone <repository-url>```

2. Move to the project directory you have just cloned:

```cd <directory-name>```

3. Install all necessary dependencies with the following command:

```npm install```

4. Start the application with Expo

```npx expo start```

<br>


## _System Architecture and Features_

**Registration - Login**

Registration and login allow the user to access **advanced features**, including:

- **Integration into the community** and access to the proximity chat
- **Personalized and accurate statistics** with practical advice on individual cultivated products and farmed livestock
- Monitoring of multiple specific areas of interest
- **Real-time notification alerts** to better manage crops and/or livestock
- **Task Manager** with Gamification
- Saving of preferences
- **Personalized feedback**
    
<br>

The **registration process** consists of a **gradual onboarding** that requires quick and simple data:

- **Language selection** and automatic setting of the corresponding unit of measurement
- **Mandatory Data**: First Name, Last Name, Email, Password, Phone Number
- **Optional Data**: Farm Name

Next, users proceed with an easy identification of their **area of interest** through a geolocation and search system, allowing them to accurately and precisely trace the perimeter. 

<br>

**Home Page**

The **Home Page** includes a brief summary of some features, such as:

- **Advanced Reporting System** with Daily/Monthly/Semi-Annual views
- **Reports of the most relevant advice and practices** to implement throughout the day

Through a **bottom bar**, users can navigate to the pages dedicated to specific features.

<br>

**Statistics**

The **statistics section** presents solutions and practical advice, including a limited amount of data, in such a way that the end user perceives a high degree of **intuitiveness** in utilizing and implementing actions taken based on informed decisions.

Each piece of data is accompanied by **_practical advice_** that can be implemented in the user's selected area of interest. Additionally, two advanced features are accessible within the **statistics area**:

- **_Agriculture Statistics_**: through the cataloging of each individual cultivated product and using a predictive model, users can receive advice on every cataloged product.

- **_Livestock Statistics_**: through the cataloging of each farmed animal and using a predictive model, users can receive a series of personalized actions aimed at increasing the **well-being of the animals**.

<br>

**Proximity Chat**

The **Proximity Chat** feature enables users to engage with a _location-based social feed_. It encourages **community interactions** by showing posts and media shared by individuals within a _defined distance_ from the user’s location. The **proximity range is configurable** (e.g., within a _100 km radius_), fostering **local connectivity** and _real-time updates_ about the surrounding community.

Users can interact with posts in various ways:

- **Like Posts:** _Show appreciation or agreement_ by liking posts.
- **Comment on Posts:** _Join conversations_ by leaving comments.
- **Text Posts:** _Share simple updates_, such as “_Today I found a FOX in my area… stay focused!_”
- **Media Posts:** _Upload images or videos_ relevant to the community (e.g., pictures of _local events, projects_).


<br>


**Task Manager with Gamification**


The _Task Manager with Gamification_ is a tool designed to help farmers manage their daily and long-term tasks more effectively and in a more engaging way, 
turning farm work into a motivating experience through game mechanics.

Every time a user completes a task, they earn **experience points (XP)**, which allow them to level up, unlock new features and receive **badges** that highlight their progress. For example, completing a week's worth of activities without delay can earn you a ‘Perfect Week’ badge. In addition to badges, users can receive **virtual rewards**, such as access to exclusive tips or advanced platform features. In addition, the Task Manager is integrated with the platform's **farming community**, allowing users to share their results, demonstrating their expertise. 


<br>


**Feedback Collection**

After the system provides a prediction, users have the opportunity to offer feedback on the **_accuracy of the forecast_**. This could be done through a simple **rating scale** (for example, from 1 to 5, where 1 indicates a **very inaccurate prediction** and 5 a **highly accurate** one). Additionally, users could provide _optional comments_ to give more context about what went wrong if needed.

<br>

## _Data Source and Processing_


The **NASA POWER API** provides meteorological data useful for various applications, including _climate analysis_, _agricultural studies_, and _environmental monitoring_. This documentation describes how to correctly construct URLs to access the data offered by the API and presents the main datasets available through **NASA Earthdata**.

The _base URL_ for **accessing daily data** from the API is: https://power.larc.nasa.gov/api/temporal/daily/point

To construct a complete URL for data access, several parameters need to be specified. Below are the main parameters that can be used:

- **lat**: Latitude of the geographic point of interest.
- **lon**: Longitude of the geographic point of interest.
- **start**: Start date for data retrieval (format _YYYY-MM-DD_).
- **end**: End date for data retrieval (format _YYYY-MM-DD_).
- **params**: Specific parameters requested (e.g., _temperature_, _precipitation_, _soil moisture_).
- **format**: Format of the response (e.g., _JSON_, _XML_).


The **NASA POWER API** offers immediate benefits in terms of **speed** and **ease of use**. It is ideal for quick access to daily meteorological data for various applications. However, **NASA Earthdata** offers a more strategic option for the future, particularly for advanced research requiring complex, multidimensional datasets.


NASA Earthdata provides access to key datasets that are invaluable for advanced research and applications. Some of the main datasets include:

- **Air Temperature (T2M)**: Near-surface air temperature in degrees Celsius, useful for understanding daily temperature variations and trends for agricultural applications.
- **Precipitation (PRECTOT)**: Total daily precipitation in millimeters, essential for irrigation planning, drought monitoring, and water resource management.
- **Soil Moisture (SOILM)**: Available as a percentage, providing crucial data for understanding soil water content, which is vital for crop health and irrigation management.
- **Soil Temperature (SOILTEMP)**: Soil temperature at different depths (typically 0-10 cm), important for understanding planting conditions and crop root zone temperatures.
- **Wind Speed (WS2M)**: Wind speed at 2 meters above ground in meters per second, useful for planning wind-sensitive agricultural activities or renewable energy applications.
- **Relative Humidity (RH2M)**: Humidity at 2 meters above ground level, valuable for understanding atmospheric moisture levels and their impact on crop health and disease.
- **Solar Radiation (ALLSKY_SFC_SW_DWN)**: Downward shortwave radiation (MJ/m²/day), crucial for solar energy applications and plant photosynthesis analysis.
- **Dew/Frost Point (DEW2M)**: Dew point temperature, which is essential for understanding frost risk and its impact on crops.

These datasets provide **_real-time information_** that enhances our understanding of various environmental factors, supporting deeper analysis and applications. 


Here are some examples that illustrate how the datasets from NASA can be used to derive important conditions and provide **_practical advice_** for farmers, resource managers, and environmental planners:


- **Potential Evapotranspiration (ETP)**
   - **Required Data**: Air temperature, solar radiation, wind speed, relative humidity.
   - **Derived Condition**: _Potential evapotranspiration_ measures water loss through evaporation and plant transpiration. This is critical for irrigation planning and water resource management.

- **Drought Index**
   - **Required Data**: Precipitation, soil moisture, air temperature.
   - **Derived Condition**: By combining precipitation and soil moisture data, a _drought index_ can be derived, helping to monitor periods of water stress for crops and managing agricultural risks.

- **Frost Prediction**
   - **Required Data**: Air temperature, dew point temperature, relative humidity.
   - **Derived Condition**: Monitoring minimum air temperatures and the dew point allows for _frost prediction_, which can help in taking preventive measures to protect crops from frost damage.

- **Crop Growth Conditions**
   - **Required Data**: Soil temperature, air temperature, solar radiation.
   - **Derived Condition**: _Crop growth conditions_ can be estimated by analyzing soil temperature and solar radiation, providing insights into the optimal times for planting and harvesting.

- **Plant Disease Risk Assessment**
   - **Required Data**: Relative humidity, air temperature, precipitation.
   - **Derived Condition**: High humidity combined with specific temperature ranges can promote the development of fungi or other plant diseases. Monitoring these factors allows for proactive measures in _plant disease prevention_.

- **Soil Water Balance**
   - **Required Data**: Soil moisture, precipitation, evapotranspiration.
   - **Derived Condition**: With soil moisture, precipitation, and evapotranspiration data, the _soil water balance_ can be calculated, aiding in irrigation strategy and water resource management.

- **Solar Energy Forecast**
   - **Required Data**: Solar radiation (ALLSKY_SFC_SW_DWN).
   - **Derived Condition**: Solar radiation data can be used to estimate _solar energy production_, optimizing the operation of photovoltaic systems and planning renewable energy usage.

- **Livestock Climate Comfort Index**
   - **Required Data**: Air temperature, relative humidity, wind speed.
   - **Derived Condition**: Using these data, a _livestock comfort index_ can be derived, helping to assess the risk of heat stress in animals, improving welfare and management in farming.

- **Flood Prediction**
   - **Required Data**: Total precipitation, soil moisture, wind speed.
   - **Derived Condition**: Combining precipitation and soil moisture data allows for _flood predictions_, helping to make timely decisions for hydrological risk management.

- **Plant Water Stress**
   - **Required Data**: Soil moisture, air temperature, evapotranspiration.
   - **Derived Condition**: By monitoring soil moisture and calculating evapotranspiration, the _water stress levels of plants_ can be derived, supporting decisions on whether irrigation is necessary.

<br>


## _Resources and Credits_

- [NASA Power API](https://power.larc.nasa.gov/)
- [NASA Earthdata Search Portal](https://search.earthdata.nasa.gov)

<br>