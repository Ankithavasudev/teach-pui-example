// JS file for templating for Main Page 
// Content File

const shelter = {
    1: {
        "name": "HEX HOUSE",
        "year": 2016,
        "location": "Various",
        "architect": "Architects for Society",
        "description": "Hex House is a 431-square-foot (40-square-metre) unit is largely made of steel-and-foam Structural Insulated Panels (SIPs), which can be flat-packed and delivered by truck to a building site. It was developed by Minnesota-based Architects for Society as a <b>rapidly deployable dwelling that could house victims of catastrophic events</b>. The design is meant to be scalable, and each home is intended to be occupied for 15 to 20 years. The estimated cost for each unit is between $15,000 and $20,000 (£10,600 and £14,000). <b>Units can simply be arranged next to one another in appropriate patterns</b> or they can be joined and share walls for enhanced thermal performance.",
        "altText1": "Hex House",
        "altText2": "Hex House Modules",
    },
    2: {
        "name": "GERMAN REFUGEE CENTRE",
        "year": 2021,
        "location": "Berlin, Germany",
        "architect": "Students from University of Kaiserslautern",
        "description": "The war that broke out in Syria in 2011 displaced more than 6 million people; half a million of which sought asylum in Germany. At least 12,000 of them settled in a camp outside the Southwestern German city of Mannheim. Working with 25 refugees, 18 architecture students from the University of Kaiserslautern <b>built a latticed-wood refugee center within this camp</b>. The refugees are well provided with the bare essentials but the immediate area is quite desolate and lacking of quality common spaces,” said the student architects. The <b>stunning wooden complex with cross-laminated timber walls and shadow</b> plays now meets some of this need.",
        "altText1": "German Refugee Centre",
        "altText2": "German Refugee Centre right view interior",
    },
    3: {
        "name": "QUINTA MONROY HOUSING PROJECT",
        "year": 2016,
        "location": "Chile",
        "architect": "ELEMENTAL",
        "description": "ELEMENTAL was asked to solve a difficult equation: to <b>settle 100 families that during the last 30 years had illegally occupied a 0.5 hectare piece of land in the center of Iquique</b>, a city in the Chilean desert. The firm found a new way of looking at the problem, shifting our mindset from the scale of the best possible US$ 7,500 object to be multiplied a 100 times, to the scale of the best possible US$ 750,000 building capable of accommodating 100 families and their expansions.",
        "altText1": "Quinta Monroy Housing Project",
        "altText2": "Quinta Monroy Housing Project occupied by tentants",
    },
    4: {
        "name": "POST-TSUNAMI REHABILITATION",
        "year": 2006,
        "location": "Kirinda, Sri Lanka",
        "architect": "Shigeru Ban",
        "description": "The earthquake of 26 December 2004 caused a catastrophic tsunami that took the life of 38,000 people. One of the <b>devastated areas was Kirinda, a small community of fishermen</b> located in the southern coast of the country. <b>The reconstruction project, comprising fifty houses, was set forth as a collaborative process in which the population participated to adapt the design to its needs</b>. Though the master plan suggested placing kitchens and bathrooms outside the house, they were finally included and separated from the rest of the rooms by a covered space that opens up to the exterior. This area of transition functions also as a gathering place among neighbors or as a workshop to repair the fishing nets.",
        "altText1": "Post-tsunami Rehabilitation Housing Project",
        "altText2": "Post-tsunami Rehabilitation Housing Project at night",
    },
    5: {
        "name": "REBUILDING NGARANNAM",
        "year": 2022,
        "location": "Nigeria",
        "architect": "Tosin Oshninowo",
        "description": "Ngaranam was identified as an ideal place for piloting a township expansion program. <b>The community suffered extensive destruction and displacement following the insurgent group Boko Haram attacks in 2015</b>. The government identified this as a priority location due to the strong desire of the community members to return. The program hopes to <b>support communities that want to return home and to create conditions for prosperity and sustainability</b>. When completed, the project will include approximately 500 housing units, a marketplace, health clinic, community center, primary school and teacher’s quarters, a police outpost and residence, and water facilities, all of which will be solar-powered and fully equipped.",
        "altText1": "Rebuilding Ngarannam Interior View",
        "altText2": "Rebuilding Ngarannam Exterior View",
    },
    6: {
        "name": "SUPER ADOBE",
        "year": 1995,
        "location": "Baninajar Refugee Camp, Iran; Islamabad, Pakistan",
        "architect": "Cal-Earth",
        "description": "<b>SuperAdobe is a powerful tool in the fight against the global housing crisis</b>. It is currently used across the globe in ways that have helped rebuild communities facing housing crisis. The education provided by CalEarth has empowered hundreds of people to found humanitarian projects for those in need. In Iran, The refugees from Southern Iraq, as the eventual inhabitants, built the shelters supervised by the trained UN personnel. <b>Each shelter was built by a team of six refugees and took 7-11 days</b>--the cost of each shelter was $625. Adobe housing was also used in rebuilding housing in the aftermath of the Haiti Earthquake and Pakistan Earthquaker of 2005.",
        "altText1": "Super Adobe Housing Community Exterior View",
        "altText2": "Super Adobe Housing Project painted white",
    },
    7: {
        "name": "JINTAI VILLAGE RECONSTRUCTION",
        "year": 2021,
        "location": "Bazhong, China",
        "architect": "Rural Urban Framework",
        "description": "After the 2008 Wenchuan Earthquake in 200 total of <b>twenty-two houses were rebuilt including a community center</b>. The design strategy provides four types of houses, differing in size, function and their roof. These demonstrate new uses of local materials, a green stepped-roof, biogas technologies, and accommodation for pigs and chickens. A vertical courtyard increases light and ventilation and channels rainwater for collection. <b>By relating various programs of the village to an ecological cycle, environment responsiveness is heightened, transforming the village into a model for nearby areas.</b>",
        "altText1": "Jintai Village Reconstruction Exterior View",
        "altText2": "Jintai Village Reconstruction Annotated Axonometric Drawing",
    },
    8: {
        "name": "SHELTER FOR MIGRANTS",
        "year": 2016,
        "location": "Ivry-Sur-Seine",
        "architect": "Atleier RITA",
        "description": "This project is commissioned by the ONG Emmaüs Solidarité, as part of an attempt to provide a <b>solution to the refugees constant arrivals</b>. The project takes place in Ivry-sur-Seine, a suburban city, on an old water's factory. This large industrial site (90000m²), no longer used, is waiting for a new urban project to come. The emergency shelter is made for 400 people (350 refugees and 50 Roma community). Families, sometimes with children, and isolated women are hosted for 6 months maximum. <b>This humanitarian program is an unprecedented situation in France wich leads to think about the current world's state and appears to be a really challenging mission for the architects.",
        "altText1": "Walkway of Shelter for Migrants at Ivry-Sur-Seine",
        "altText2": "Top view overlooking Shelter for Migrants at Ivry-Sur-Seine",
    },
    9: {
        "name": "PAPER LOG HOUSE",
        "year": 1995,
        "location": "Various",
        "architect": "Shigeru Ban",
        "description": "<b>Shigeru Ban's novel innovation for emergency housing Paper Log House in Kobe, Japan was a thriving model</b>. Noticing the beneficial use of the innovation, he furthermore introduced it to other countries around the world. Following it, Paper Log Houses have been built for earthquake survivors in Turkey and India, and served as a precedent for building shelter for those uprooted by genocide in Rwanda and for the design of transitional houses for refugees in Kosovo. Paper Log Houses equipped victims with more affordable and hygienic housing. <b>The merit of the Paper Log House is not only the innovation of material but also the humanitarian concerns that it delivered to society.</b>",
        "altText1": "Paper Log House Community",
        "altText2": "Paper Log House close up",
    },
}

const community = {
    1: {
        "name": "GLASS CHAPEL",
        "year": 2000,
        "location": "Mason's Bend, AL, USA",
        "architect": "Rural Studio",
        "description": "Mason's bend, located deep in Alabama's cotton belt, is home to four extended families. Most live in trailers or poorly constructed homes. On a central site in Mason's Bend, <b>the Glass Chapel serves as a transportation stop, community gathering space, chapel for the local choral group, and distribution center for children's summer school meals</b>. Car windows salvaged from a Chicago scrap yard provide striking roofing material on the north side atop rammed earth walls. Anderson Harris, owner of the Butterfly House, donated the land for the center and before his recent death tended to its garden.",
        "altText1": "View of the Glass Chapel from the street",
        "altText2": "Interior Perspective of Glass Chapel",
    },
    2: {
        "name": "RUFISQUE WOMEN'S CENTRE",
        "year": 2001,
        "location": "Rufisque, Senegal",
        "architect": "Hollmen Reuter Sandman Architects",
        "description": "Designed by students from Helsinki University, this red building centered on an internal courtyard, <b>serves as the focal point for women's organisations</b>. The building lies on a bed of clay, with a solid pillar foundation. Emphasis was given to local materials and recycling, using wheel rims from cars for vents, and 'glass bricks' for fenestration from bottom parts of old bottles. <b>Run by local women, the complex provides facilities for social events and training, as well as a kindergarten and sewing school</b>. Women's level of schooling is improved through independent initiatives and literacy courses.",
        "altText1": "Courtyard of Rufisque Women's Centre",
        "altText2": "Women in Rufisque Women's Centre",
    },
    3: {
        "name": "GANDO PRIMARY SCHOOL",
        "year": 2001,
        "location": "Gando, Burkina Faso",
        "architect": "Kere Architecture",
        "description": "As a native of Burkina Faso, Francis Kere grew up with many challenges and few resources. When he was a child, <b>he travelled nearly 40 kilometers to the next village in order to attend a school with poor lighting and ventilation</b>. The experience of trying to learn in this oppressive environment affected him so much that when he began to study architecture in Europe, he decided to <b>reinvest his knowledge towards building a new school in his home village</b>. With the support of his community and funds raised through his foundation, Schulbausteine fuer Gando (Bricks for Gando,) Francis began construction of the Primary School, his very first building.",
        "altText1": "Exterior view of Gando Primary School",
        "altText2": "Children at Gando Primary School",
    },
    4: {
        "name": "DRUK WHITE LOTUS SCHOOL",
        "year": 2011,
        "location": "Shey, Ladakh, India",
        "architect": "Arup Associates",
        "description": "The school was started at the <b>request of the people of Ladakh who wanted a school that would help maintain their rich cultural traditions, based on Tibetan Buddhism, while equipping their children for a life in the 21st century</b>.The masterplan and school buildings, designed by architects and engineers from Arup Associates and Ove Arup & Partners, combine local building techniques and materials with leading edge environmental design to make them effective in the extreme climate. In 2012, landscape architects from the School of Architecture, Design and Construction at the University of Greenwich began work on a landscape master plan and garden for the DWLS School.",
        "altText1": "Exterior view of Druk White Lotus School",
        "altText2": "Exterior courtyard at Druk White Lotus School",
    },
    5: {
        "name": "FAVELA-BAIRRO PROJECTS",
        "year": "1994-Present",
        "location": "Rio de Janeiro, Brazil",
        "architect": "Jorge Mario Jauregui Architects",
        "description": "The Inter-American Development Bank funded this US $180 million “slum to neighborhood” project in 1995 in which it sought to <b>integrate existing favelas into the fabric of the city through infrastructure upgrading and service increases</b>. The project involves 253,000 residents in 73 communities. Key to the success of this large project was a committed and flexible city government and the use of intra- and extra-institutional partnerships with NGOs, the private sector, churches, and the general population. Especially instrumental was the <b>use of grass-roots level infrastructure upgrading experts as project managers who could work easily with both the government and with the community members.</b>",
        "altText1": "Favela-Bairro Projects in Rio de Janeiro",
        "altText2": "Football Field Redesign part of the Favela-Bairro Projects",
    },
    6: {
        "name": "CENTRE POUR LE BIEN-ETRE DES FEMMES (CBF)",
        "year": 2006-07,
        "location": "Ouagadougou, Burkina Faso, Africa",
        "architect": "FAREstudio",
        "description": "Focused on contrasting the diffusion of Female Genital Mutilation/Excision [FGM], the Centre pour le Bien-être des Femmes Women's Health Centre in Burkina Faso investigates the possibility of <b>creating a prototype for cooperation in development in Sub Saharan Countries</b>. The social/health-services program focuses on providing educational services, information and awareness about women's sexual and reproductive rights in Ouagadougou's Sector 27, a peripheral urban area settled by a once rural population. <b>The architectural project is a direct response to a social programme that called for the realisation of a building complex capable of hosting a variety of activities in very harsh circumstances.<b>",
        "altText1": "Centre pour le bien-etre des femmes",
        "altText2": "Grass courtyard at Centre pour le bien-etre des femmes",
    },
    7: {
        "name": "TIUNA EL FUERTE CULTURAL PARK",
        "year": 2006-10,
        "location": "El Valle, Caracas, Venezuela",
        "architect": "Lab.Pro.Fab",
        "description": "Tiuna El Fuerte is an <b>experimental collective and a cultural centre in a marginalised suburb of Caracas</b> (Venezuela). Over the past 15 years, our <b>goal is to foster social transformation in communities in need through artistic expression and musical events in critical and conflict urban areas</b>. It is meant to be a self-sufcient social environment based on participation protocols and community. Self-initiatives developed and built on an abandoned parking lot with local workers. This project emerges in a complex urban site; the area has been badly afected by slow infrastructure development and sufers from low quality social housing interventions by the state in the 70s.",
        "altText1": "Play structure at Tiuna El Fuerte Cultural Park",
        "altText2": "Reused shipping containers create new play structures at Tiuna El Fuerte Cultural Park",
    },
    8: {
        "name": "MAHIGA HOPE HIGH SCHOOL RAINWATER COURT",
        "year": 2009-10,
        "location": "Mahiga, Nyeri District, Central Province, Kenya",
        "architect": "Architecture for Humanity",
        "description": "<b>It started with a tree</b>. Joseph Mutongu, a local conservationist, wanted to introduce a tree growing program at the school his son attended. The Mahiga Hope School is located in a dusty rural village in the Aberdare Mountain Range in central Kenya. Most families are subsistence farmers and at the time were in the midst of a four-year drought. The <b>school needed water to allow the tree to grow, but more importantly to provide some clean drinking water to its students. Joseph took it upon himself to find a way to make it happen</b>.",
        "altText1": "Mahiga Hope High School Rainwater Court",
        "altText2": "Students playing football outside the high-school court",
    },
    9: {
        "name": "GIMNASIO VERTICALE",
        "year": 2001-04,
        "location": "Chacao, Caracas, Venezuela",
        "architect": "Urban-Think Tank",
        "description": "Urban-Think Tank's Vertical Gym is a <b>prefabricated kit of parts, adaptable to any location</b>. The base of the structure is superimposed upon an existing community basketball court, soccer field, or vacant lot, transforming it into a multi-level sports complex that can accommodate hundreds of people at a time. The design maximizes the potential of any city space, particularly areas with a dense urban fabric. <b>U-TT believes that engaging in exercise and social activity is a right of all citizens in the city, no matter their social and economic backgrounds.</b>",
        "altText1": "Exterior view of Gimnasio Verticale in Caracas, Venezuela",
        "altText2": "Interior Basketball Court at Gimnasio Verticale",
    },
}

const water = {
    1: {
        "name": "VENTILATED IMPROVED PIT LATRINE",
        "year": 2001,
        "location": "Shey, Ladakh, India",
        "architect": "Arup Associates",
        "description": "The waterless VIP (Ventilated Improved Pit) latrine, designed for a school on the remote Tibetian Plateau, <b>offers an improvement over the standard pit latrine</b>. These eliminate fly and odour problems and most importantly in a desert environment - do not require water. A double chamber system with an integrated solar flue allows their operation as composting toilets and produces humus that can be used as fertilizer.",
        "altText1": "Laborers building a Ventilated Improved Pit Latrine",
        "altText2": "Diagram of a waterless VIP",
    },
    2: {
        "name": "HIPPO WATER ROLLER",
        "year": "1993-present",
        "location": "Throughout Southern Africa",
        "architect": "Pettie Petzer & Johan Jonker",
        "description": "The Hippo water roller is a <b>device used to carry clean water more easily and efficiently than traditional methods</b>. It consists of a barrel-shaped container which holds the water and can roll along the ground, and a handle attached to the axis of the barrel. Currently deployed in rural Africa, <b>its simple and purpose-built nature makes it an example of appropriate technology</b>. The rollers cost around $125 each and they are mainly distributed by NGOs. The drum of the Hippo water roller is made from UV stabilized linear low-density polyethylene and is designed to cope with the rough surfaces found in rural areas. The drum's volume is 90 liters.",
        "altText1": "Children roll hippo water rollers across a field",
        "altText2": "Women roll hippo water rollers",
    },
    3: {
        "name": "WATERCONE",
        "year": 1999,
        "location": "Yemen",
        "architect": "Stephan Augustin",
        "description": "When water is evaporated and condensed, chemicals, sand, and most harmful organisms are left behind, making the water safe to drink. <b>A one-step distillation process</b>, the Watercone is composed of a clear plastic cone and a black plastic pan. Salty or brackish water is poured into the pan; the black plastic absorbs the heat from the sun, evaporating the water, which condenses on the walls of the cone then drips into the lip at the base of the cone, where it is collected. <b>When full, the cone can be turned upside down and the drinkable water funneled into containers</b>. Based on evaporation levels tested in Casablanca, Morocco, each cone can produce up to about 1.5 liters (3 pints) of clean water a day.",
        "altText1": "A watercone prototype",
        "altText2": "Villagers using watercones",
    },
    4: {
        "name": "MONEYMAKER PUMPS",
        "year": "1996-Present",
        "location": "Various",
        "architect": "IDEO",
        "description": "<b>MoneyMaker pumps are low-cost, high-quality irrigation technologies designed for small-scale farmers in Africa</b>. Entrepreneurial farmers are irrigating with KMoneyMaker irrigation pump to change their small subsistence farms into commercial enterprises. With irrigation, <b>farmers can grow and sell as many as three to four high value vegetable crops every year and ensure that the crop is ready for market when the price is high</b>. The MoneyMaker pressure pump provides farmers a pump that can push water uphill as well as simply pulling it up from the source. This means it is suitable for use on steeply sloping land where the water source may be at the bottom.",
        "altText1": "Villagers using moneymaker pumps",
        "altText2": "Close-up of a moneymaker pump",
    },
    5: {
        "name": "CLEAN HUB",
        "year": 2005,
        "location": "Minneapolis, Minnesota, USA",
        "architect": "John Dwyer, Architecture for Humanity",
        "description": "Clean Hub is a <b>sustainable housing design for areas with insufficient infrastructure</b>. The name fits its multipurpose sanitation and energy functions: the 10 x 20-foot unit includes a V-shaped roof that collects rainwater, an underground reverse-osmosis filtration system to recycle and store gray water from showers and laundry facilities, and 16 rooftop adjustable photovoltaic panels that can generate up to 2,600 watts of energy.",
        "altText1": "Clean Hub prototypes",
        "altText2": "Exploded axonometric of a 'Clean Hub'",
    },
    6: {
        "name": "SEBA DALKAI SOLAR CLASSROOM",
        "year": 2000,
        "location": "Seba Dalkai, Arizonam USA",
        "architect": "Kiss + Cathcart Architects",
        "description": "The Seba Dalkai School, in the Navajo Nation, is expanding from a K-8 boarding school into a K-12 facility for day students and boarders. This <b>outdoor classroom building integrates PVs into the roof structure, and is being used as the basis for a curriculum in sustainable energy as well as for general education</b>. The structure doubles as a stage for oudoor events. This is one of the inagural projects of Native American Photovoltaics (NAPV), a non profit group aiming to bring the benefits of electricity to the largest group of Americans who live without it.",
        "altText1": "Seba Dalkai Solar Classroom",
        "altText2": "Workers installing solar panels for a classroom",
    },
}

const politics = {
    1: {
        "name": "FAVELA PAINTING PROJECT",
        "year": "2006-Present",
        "location": "Villa Cruzeiro, Rio de Janeiro, Brazil",
        "architect": "Haas&Hahn",
        "description": "The Dutch art collective haas&hahn (jeroen koolhaas and dre urhahn), founded the favela painting project, which <b>aims at turning public urban spaces in communities facing social difficulties into monumental works of art</b>. The art of favela painting is not about cosmetically 'camouflaging' an area, but rather rejuvenating deprived areas of a city and creating a positive social effect on the general district at hand. <b>It is a means of imagination and rethinking, redesigning and rebranding a community at whole</b>.",
        "altText1": "Colorful, painted favelas",
        "altText2": "Public stairs painted as part of the Favela Painting Project",
    },
    2: {
        "name": "IN-SITU SLUM REHABILIATION",
        "year": "2008-11",
        "location": "Yerawada Slum, Pune, India",
        "architect": "Prasanna Desai Architects, Urban Nouveau",
        "description": "The Government of India, has initiated a housing scheme, BSUP (Basic Services for the Urban Poor) under JNNURM (Jawaharlal Nehru National Urban Renewal Mission),to <b>find housing & slum development strategies for 1,200 households</b>. Through the efforts and vision, the long term goal of the Pune Municipal Corporation is to achieve a “Sustainable slum less city”. <b>A sustained process of housing improvement is only possible with the beneficiary community's contribution, participation and consent</b>.",
        "altText1": "Collage of Slum Rehabilitation Proposal",
        "altText2": "Community participates in the design of the project",
    },
    3: {
        "name": "LET'S DO IT!",
        "year": "2007-Present",
        "location": "Estonia",
        "architect": "Let's Do It! World",
        "description": "Let's Do It World is a global civic organization that started from Estonia, <b>mobilizing people worldwide in joining local, national and regional clean-up events</b>. Among other projects, it is the founder of World Cleanup Day, on which a network of 180 countries, with over 21.2 million participants took place in 2019. The Let's Do It! organization was first conceived in Estonia in 2008, where a country clean-up action called Let's do it! cleaned up 10000 tons of illegal waste by more than 50000 volunteers in one day. <b>Following Estonia's lead, many countries also started their own country clean-up events</b>.",
        "altText1": "People participate in a 'Let's Do It!' clean up event",
        "altText2": "Volunteers clean up a beach as part of 'Let's Do It!'",
    },
    4: {
        "name": "FRESH MOVES MOBILE MARKET",
        "year": "2006-Present",
        "location": "Chicago Illinois, USA",
        "architect": "Architecture for Humanity - Chicago",
        "description": "In 2006 a local study labeled Steve Casey's Chicago neighborhood a <b>food desert—a term used to describe areas that lack affordable fresh produce</b> (but are usually awash in burger wrappers and French-fry containers). Fresh Moves Mobile Market is a single-aisle grocery store located in an unlikely venue: a retrofitted Chicago Transit Authority bus, which was purchased from the city for $1. Architecture for Humanity Chicago partnered with local nonprofit Food Desert Action to <b>design the bus, which brings fresh produce to the 500,000 Chicago residents living in neighborhoods that are classified as food deserts</b>.",
        "altText1": "A Fresh Moves Mobile Market van",
        "altText2": "Interior view of a Mobile Market",
    },
    5: {
        "name": "VIOLENCE PREVENTION THROUGH URBAN UPGRADING",
        "year": "2006-14",
        "location": "Khayelitsha, Cape Town, South Africa",
        "architect": "City of Cape Town",
        "description": "<b>Violence prevention through urban upgrading; using social engagement and town planning as tools in fighting crime</b>. The Violence Prevention through Urban Upgrading project (VPUU) is an urban planning design strategy in Cape Town Khayelitsha Township, which uses social engagement and town planning as tools in fighting crime. <b>The project is based on the belief that proper design and effective use of the built environment will lead to a reduction in crime and the fear of crime</b>.",
        "altText1": "Urban Upgrading of a playground at Khayelitsha, Cape Town",
        "altText2": "Urban Plan Proposal for Khayelitsha",
    },
    6: {
        "name": "TRAU KOD DAM",
        "year": "2007-08",
        "location": "Siem Reap, Cambodia",
        "architect": "Human Translation, Engineers Without Borders",
        "description": "<b>Water shapes a community. In many cases it defines it</b>. The Trau Kod Dam at the Balang commune is no different. It was built in the Angkor Period and has a long history. In 2007, Engineers Without Borders helped repair the dam that breached during the rainy season of 2000. <b>The rehabilitated reservoir impounds water on 65 ha of land, restoring irrigation service to over 3200 farmers. The project aims to strengthen the community's autonomous capacity and tangibly improve quality of life</b>.",
        "altText1": "Community members and workers atop the Trau Kod Dam",
        "altText2": "View of the Trau Kod Dam from the water",
    },
}