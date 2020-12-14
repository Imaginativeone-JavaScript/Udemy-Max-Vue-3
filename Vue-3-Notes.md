# Vue - The Complete Guide (with Router, Vuex, Composition API)
## Coming Up
### Props (8-2), Parent to Child
### Emitting (8-7) Child to Parent
### *.vue Files (7-6), (7-7), (7-8)
### vue-cdn-example Convert to Vue3/vue@next

- [ ] Vue - The Complete Guide (with Router, Vuex, Composition API)
	## S01 01/44: Getting Started
	- [ ] S01: Getting Started 0/11 | 43min 10/10/20
		- [x] 001 01-01 Welcome to the Course! | 2min
		  - From Novice to Expert
			- Why do we need Vue?
			- Next: What, exactly, is VueJS?
		- [x] 002 01-02 What is "Vue.js"? | 8min (07:51)
			- VueJS (Vue) is a JavaScript framework that makes building interactive & reactive web frontends 
				(browser-side web applications) easier.
			- Framework is a library that (also) gives you a set of rules
			  - Utility functions + the rules
			- [03:52/07:51] Mobile Applications give us a very pleasant experience
			- Reactivity
			- The only thing that might be loaded behind the scenes is DATA.
			- Vanilla JavaScript is much less fun
		- [x] 003 01-03 Different Ways of Using Vue | 3min (2:35)
		  - Some parts of an HTML page are controlled by Vue 00:34
			- The entire HTML page is controlled by Vue 01:21
			  - Single Page Application (SPA)
		- [x] 004 01-04 Exploring Vue Alternatives | 3min (03:11)
			- [00:30] A bit less popular than React and Angular
			- Test
		- [x] 005 01-05 Building A First App With Just JavaScript | 7min (07:26)
			- See Vanilla JavaScript demo app
		- [x] 006 01-06 Re-building the App with Vue | 11min (10:51)
			- See Vue demo app
		- [x] 007 Vue vs "Vanilla JavaScript" (just JavaScript) | 1min (01:10)
			- Comparison
		- [x] 008 Setting Up the Course Development Environment | 2min (02:04)
			- VSC
			- Dark Plus Color Theme
			- Preferences > Keyboard Shortcuts > Format Document > Shift + Alt + F
			- "Prettier" Extension
		- [x] 009 Course Outline & What's In The Course | 3min (02:58)
			- No prior Vue knowledge is required
				- Basics: Core Syntax, Templates, Directives, Data, Methods, Computed Properties, Watchers
				- Intermediate Concepts: Components, Component Communication, Behind the Scenes, Forms, HTTP, Routing, Animations
				- Vuex (State Management), Authentication, Deployment & Optimizations, **Composition API**, Re-using Code
		- [x] 010 How To Get The Most Out Of This Course | 3min (03:23)
			- Watch the Videos
			- Code Along
			- Repeat Concepts
			- Google, Stackoverflow
			- Ask and Answer in the Q&A Section
			- Errors in my code - Compare to Max's
		- [x] 011 Module Resources | 1min (00:08)
	## S02: Basics & Core Concepts - DOM Interaction w Vue
	- [x] S02: Basics & Core Concepts - DOM Interaction with Vue 0/30 | 2hr 9min
		- [x] 012 02-01 Module Introduction | 1min
		- [x] 013 02-02 Creating and Connecting **Vue App Instances** | 9min
		- [x] 014 02-03 **Interpolation** and **Data Binding** | 4min
		- [x] 015 02-04 Binding Attributes with the "v-bind" Directive | 6min
		- [x] 016 02-05 Understanding "methods" in Vue Apps | 6min
		- [x] 017 02-06 Working with Data inside of a Vue App | 3min
		- [x] 018 Outputting Raw HTML Content with v-html | 4min
		- [x] 019 A First Summary | 4min
		- [x] 000 Assignment 1: Time to Practice: Data Binding
		- [x] 020 Understanding Event Binding | 7min
		  - 02:30 Vue gives us an easy way to add Event Listeners to HTML
			  Elements - "v-on"
		```html
		<button v-on:click="counter++">Add</button>
		```
		- [x] 021 **Events & Methods** | 6min
		- [x] 022 Working with **Event Arguments** | 3min
		- [x] 023 Using the Native Event Object | 9min
		- [x] 024 Exploring Event Modifiers | 10min
		- [x] 025 Locking Content with **v-once** | 2min
		- [x] 000 Assignment 2: Time to Practice: Event Binding
		- [x] 026 **Data Binding + Event Binding = Two-Way Binding** | Extremely Important!! | 7min
		- [x] 027 02-18 Methods used for Data Binding: How It Works | 7min
		  - Advanced Reactivity
		- [x] 028 Introducing Computed Properties | 6min
		  - With Computed Properties, Vue is aware of their dependencies and
			  change ONLY when the dependencies change
		- [x] 029 Working with Watchers | 11min
		  - Why do we have watchers, if we can use them but they're worse?
			- Property Conditionals
		- [x] 030 Methods vs Computed Properties vs Watchers | 2min
		  - Methods
			  - Event binding
				- Data binding
				  - Method executed for every "re-render" cycle of the component
				- Use for events that really need to be re-evaluated all the time
			- Computed
			  - Use with Data Binding (not event binding)
				- Only re-evaluated if a "used value" has changed
				- Use for data that depends on other data
			- Watch(er)
			  - Not directly used in template
				- Allows you to run any code in reaction to some changed data
				  - HTTP Requests, etc
				- Use for any NON DATA update you want to make
		- [ ] 031 v-bind and v-on Shorthands | 2min
		  - v-on   >> @
			- v-bind >> :
		- [ ] 000 Assignment 03: Time to Practice: Reactivity
		- [ ] 032 Dynamic Styling with Inline Styles | 7min
		- [ ] 033 Adding CSS Classes Dynamically | 7min
		- [ ] 034 Classes & Computed Properties | 2min
		- [ ] 035 Dynamic Classes: Array Syntax | 1min
		- [ ] 000 Assignment 04: Time to Practice: Dynamic Styling
		- [ ] 036 Module Summary | 4min
		- [ ] 037 Module Resources | 1min
	## S03: Rendering Conditional Content & Lists
	- [x] S03: Rendering Conditional Content & Lists 12 00:43:00
		- [x] 038 03-01 01:35 Module Introduction | 2min
			- Rendering Content with Conditions
				- Outputting Lists of Data
				- A First Look Behind the Scenes
		- [x] 039 03-02 03:16 Understanding the Problem | 3min
		  - Work on Memorizing Topics
		- [x] 040 03-03 05:09 Rendering Content Conditionally | 5min
			- Show Goals Array OR Show paragraph about no Goals
			- v-if Directive
		- [x] 041 03-04 04:18 v-if, v-else and v-else-if | 4min
		- [x] 042 03-05 02:25 Using v-show Instead Of v-if | 2min
		- [x] 043 03-06 06:20 Rendering Lists of Data | 6min
		- [x] 044 03-07 05:12 Diving Deeper Into v-for | 5min
		- [x] 045 03-08 03:59 Removing List Items | 4min
		- [x] 046 03-09 08:26 Lists & Keys | 8min
		- [x] 000 03-00 00:00 Assgnmt 5: Practice: Condl Content & Lists
		- [x] 047 03-11 02:15 Module Summary | 2min
		- [x] 048 03-00 00:06 Module Resources | 1min
	## S04: Course Project: The Monster Slayer Game
	- [ ] S04: Course Project: The Monster Slayer Game 00/09 | 1hr 2min
		- [ ] 049 04-01 01:18 Module Introduction | 1min
		- [ ] 050 04-02 12:27 Project Setup & First Methods | 12min
		- [ ] 051 04-03 07:07 Updating the Health Bars | 7min
		- [ ] 052 04-04 06:23 Adding a "Special Attack" | 6min
		- [ ] 053 04-05 04:46 Adding a "Heal" Functionality | 5min
		- [ ] 054 04-06 09:37 Adding a "Game Over" Screen | 10min
		- [ ] 055 04-07 06:08 Finishing the Core Functionality | 6min
		- [ ] 056 04-08 14:11 Adding a Battle Log | 14min
		- [ ] 057 04-09 00:06 Module Resources | 1min
	## S05: Vue: Behind the Scenes
	- [x] S05: Vue: Behind the Scenes 00/10 | 48min
		- [x] 058 05-01 01:31 Module Introduction | 2min
		- [x] 059 05-02 04:26 An Introduction to Vue's Reactivity | 4min
		  - Vue turns my data object into a Reactive Data Object by essentially wrapping my properties into a JavaScript feature called 'Proxies'.
			- Vue is notified whenever I assign a new value to my data property(ies).
		- [x] 060 05-03 08:10 Vue Reactivity: A Deep Dive | 
		  - A deeper exploration of Proxies
			- https://board.academind.com/
			- JavaScript, by default, is NOT Reactive
			- Proxies

			```javascript
			const data = {
				message: 'Hello!'
			}

			const handler = {
				set(target, key, value) {} // This is a SET TRAP
				console.log(target);
				console.log(key);
				console.log(value);
			};

			const proxy = new Proxy(data, handler);

			proxy.message = 'Hello!!!!';
			```

		- [x] 061 05-04 03:53 One App vs Multiple Apps | 4min
		  - I can set up an entirely different app on the same page.
		- [x] 062 05-05 03:56 Understanding Templates | 4min
			- template option to my app configuration object

			```javascript
			const app2 = Vue.createApp({
				template: `<p>{{ favoriteMeal }}</p>`,
				data() {
					return {
						favoriteMeal: 'Pizza'
					}
				}
			});

			// Still need to mount this app
			```

		- [x] 063 05-06 05:21 Working with Refs | 5min

		```html
		<input type="text" ref="userText">
		```

		```javascript
		methods: {
			...
			setText() {
				...
				this.message = this.$refs.userText.value;
				...
			},
		},
		```

		- [x] 064 05-07 06:26 How Vue Updates the DOM | 6min
		  - The Virtual DOM
			- Optimized Diffs are sent to the Real DOM
		- [x] 065 05-08 04:46 Vue App Lifecycle - Theory | 5min
		  - Lifecycle Hooks
			- createApp({...})
			- beforeCreate()
			- created()
			  - nothing on the screen yet
				- template is compiled
			- beforeMount()
			  - right before we can see something on the screen
			- mounted()
			  - Now we see something on the screen
				- Mounted Vue Instance
			- Data Changed
			  - beforeUpdate()
				- updated()
			- Sometimes, an Instance can be Unmounted
			  - All content is removed from the screen and the app is dead
				- beforeUnmount()
				- unmounted()
				  - cleanup code
		- [x] 066 05-09 09:48 Vue App Lifecycle - Practice | 10min
		- [x] 067 05-00 00:06 Module Resources | 1min
	## S06: Introducing Components
	- [x] S06: Introducing Components 00/06 | 23min
		- [x] 068 06-01 01:30 Module Introduction | 01:30
		  - Multi-app example is useful here
		- [x] 069 06-02 08:39 Understanding the Problem | 08:39
		- [x] 070 06-03 10:54 Introducing Components | 11min
		  - A Vue Component is just "an app that belongs to another app".
		- [x] 071 06-04 01:00 The Why: Bldg Complex UIs w Components | 1min
		- [x] 072 06-00 00:57 Multiple Vue Apps vs Multiple Components | 1min
		- [x] 073 06-00 00:06 Module Resources | 1min
	## Sec 07: Moving to Better Dev Setup & Wkflow w Vue CLI
	- [ ] Sec 07: Moving to Better Dev Setup & Wkflow w Vue CLI 00/14 | 1hr
		- [x] 074 07-01 01:35 Module Introduction | 2min
		  - I want to build bigger Vue apps - AT SCALE.
		- [x] 075 07-02 03:29 Why We Need A Development Server | 3min
		- [x] 076 07-03 05:50 Why We Want A Better Dev Experience | 6min
		- [x] 077 07-04 08:26 Installing & Using the Vue CLI | 8min
		  - NodeJS
			- npm (Node Package Manager)

			```javascript
			npm install -g @vue/cli
			```

			```javascript
			vue create vue-first-app
			```
		- [x] 078 07-05 05:59 Inspecting the Created Project | 6min
		  - public folder
			  - index.html file
				- id="app"
		- [x] 079 07-06 06:04 Inspecting the Vue Code & ".vue" Files | 06:04
		  - src folder
			- main.js

			```javascript
			import { createApp } from 'vue'
			import App from './App.vue'

			createApp(App).mount('#app') // see public folder index.html
			```
			.vue files allow us to write Vue Components in a much nicer way
			- Three Sections
			- tags
				- template
				- script
				- style
			- Using a "Build Workflow"
		- [x] 080 07-07 01:15 Adding the "Vetur" Extension to VS Code | 1min
		  - Autocompletion
		- [x] 081 07-08 01:40 More on ".vue" Files | 2min
		- [x] 082 07-09 05:05 A New Vue Project | 5min
		  - npm install
		- [x] 083 07-10 09:32 Creating a Basic Vue App | 10min
		- [x] 084 07-11 08:14 Adding a Component
		- [x] 085 07-12 02:16 Adding Styling
		  - Every Component is like a mini-app
		- [x] 086 07-00 00:13 A Small Addition
		- [x] 087 07-00 00:06 Module Resources
	## S08: Component Communication
	- [ ] S08: Component Communication 18 | 1hr 33min
		- [x] 088 08-01 01:41 Module Introduction | 2min
		- [x] 089 08-02 10:03 Intrg "Props" (P=> Child Comm) | 10m
		  - I can think of "props" as "custom html attributes"
		- [x] 090 08-03 06:30 Prop Behavior & Changing Props
		  - Props typically should not be mutated.
			- 02:23 Techniques for mutating data within a Child Component
			  - Technique #1: Notify the Parent Component
				- Technique #2: Make a new data property within the Child Component 01:57
		- [x] 091 08-04 07:14 Validating Props
		  - See FriendContact.vue
		- [x] 092 08-05 00:09 Supported Prop Values | 1min
		- [x] 093 08-06 05:37 Working with Dynamic Prop Vals | 6min
		- [x] 094 08-07 11:15 Emitting Custom Events (Child=>Parent) ****
		  - 02:35 How do I send info back to the Parent?
			- 03:05 Emit an EVENT for which the parent can listen.
			- 03:09 I can emit custom events inside of my Vue Components.
			- 03:40 this.$emit()
			- 04:45 Set up the listener in the Parent; 
			- 05:00 @toggle-favorite="codeInParent"
			- Useful derivation of an arrow function is here.
		- [x] 095 08-08 04:05 Defining & Validating Custom Events
		  - emits: [] is the counterpart to props
			- In its most basic form, serves as an "emit map"
			- Validation is also available
		- [x] 096 08-09 01:19 Prp/Evt Flthru & Bindg All Props
		- Props and events added on a custom component tag automatically fall through to the root component in the template of that component. In the above example, type and @click get added to the <button> in the BaseButton component. You can get access to these fallthrough props on a built-in $attrs property (e.g. this.$attrs ).
		- [x] 097 08-10 13:15 Demo: Adding Components & Connecting Them
		- [x] 098 08-11 06:24 Demo: Adding More Components Comm, Delete
		- [skipped] 000 08-12 00:00 Asnmt 06: Tme 2 Prc: Prps & Cstm Evts
		- [x] 099 08-13 06:26 A Potential Problem
		  - Introduction to "Pass Through Components"
			- Revisit this
		- [x] 100 08-14 08:16 Provide + Inject To The Rescue
		  - Revisit this
		- [x] 101 08-15 03:59 Provide + Inject 4 Funcs/Mthds
		- [x] 102 08-16 02:06 Provide + Inject vs Props & Custom Events
		- [x] 103 08-17 04:44 Module Summary
		- [x] 104 08-18 00:06 Module Resources
	## S09: Diving Deeper Into Components
	- [ ] S09: Diving Deeper Into Components 18 01:24:00
		- [x] 105 09-01 01:38 Module Introduction
		  - Component Registration and Styling
			- Slots
			- Dynamic Components
			- Naming and Folder Structures
		- [x] 106 09-02 02:38 Project Setup
		  - File Overview
		- [x] 107 09-03 09:22 Global vs Local Components
		  - Global Components
			- Too many to load initially
		- [x] 108 09-04 05:15 Scoped Styles
		  - Local styling without the 'scoped' keyword affects all files
		- Slots
			- [x] 109 09-05 06:23 Introducing Slots
			  - UserInfo.vue and BadgeList.vue both have a <section> with concomitant styling with sub-content that is variable.
				- An alternative would be to make a component that has a section with the attached styling and which then is flexible, 
				regarding the content that it receives.
				- BaseCard.vue
				- 02:32, explanation of problem with making an ordinary component, instead of a slot container.
				- 03:27, Register BaseCard.vue globally
				  - main.js
					  - import BaseCard from './components/BaseCard.vue'
						- app.component('base-card', BaseCard);
					- UserInfo.vue
					  - <base-card> wrapper	
				- props do not contain/deliver markup content
				- 05:04, Introduction of the <slot> tag
				  - 01:03 Sometimes you have the scenario that your custom component should have multiple slots.
			- [x] 110 09-06 05:35 Named Slots
			  - See the code
			- [x] 111 09-07 02:26 Slot Styles & Compilation
			  - When working with slots, and when sending content into another components' slots - destination styles apply to en-route markup
			- [x] 112 09-08 07:19 More on Slots | Current Work
			  - Default slot content
			- [x] 113 09-09 09:34 Scoped Slots
			  - Customizable
				- List transport example
		- Dynamic Components
			- [x] 114 09-10 07:06 Dynamic Components
			  - I can have components with just templates
				- Locally sourced in App.vue (not main.js)
				- Tabs!!!
			- [x] 115 09-11 02:44 Keeping Dynamic Components Alive
		- [ ] 116 09-12 09:24 Applying What We Know & A Problem
		  - 02:21 Building my own modal
			- Need for teleport
		- [x] 117 09-13 03:50 Teleporting Elements
		  - 'teleport' is a built-in Vue Component
			  - just like "Component" and "keepalive"
		  - Semantic location of modal HTML
		- [x] 118 09-14 01:23 Working with Fragments
		  - Multiple top-level html elements are now supported
			- A single root element, per-template, is no longer necessary
		- [x] 119 09-15 03:02 The Vue Style Guide
		  - Optimal folder structure
			- Names of Components
			- Vue Style Guide: https://v3.vuejs.org/style-guide/
		- [x] 120 09-16 02:56 Moving to a Different Folder Structure
		  - UI (Base Components)
			- layout (headers, footers)
			- by-feature
			  - cart, checkout, products
		- [x] 121 09-17 03:38 Module Summary
		- [x] 122 09-00 00:06 Module Resources
	## S10: Course Prj: The Learning Rsrces App
	- [ ] S10: Course Prj: The Lrng Rsrces App 00/14 | 1hr 24min
		- [ ] 123 10-01 01:37 Module Introduction | 2min
		- [ ] 124 10-02 05:24 Setup & First Steps | 5min
		- [ ] 125 10-03 10:46 First Components & Props | 11min
		- [ ] 126 10-04 07:19 Styling and More Components | 7min
		- [ ] 127 10-05 07:00 Header & BaseCard Components | 7min
		- [ ] 128 10-06 05:19 Adding a Base Button | 5min
		- [ ] 129 10-07 08:37 Dynmc Compnts & Attr Fallthru | 9min
		- [ ] 130 10-08 04:58 Adding & Styling Tabs | 5min
		- [ ] 131 10-09 04:12 Adding a Form | 4min
		- [ ] 132 10-10 08:27 Fetching User Input | 8min
		- [ ] 133 10-11 12:19 Adding a Modal Dialog | 12min
		- [ ] 134 10-12 06:42 Deleting Items | 7min
		- [ ] 135 10-13 01:42 Adding "Teleport" | 1min
		- [ ] 136 10-00 00:06 Module Resources | 1min
	## S11: Forms
	- [x] S11: Forms 10 | 43min
		- [x] 137316 11-01-10 0033 Module Introduction
		- [x] 138316 11-02-10 0603 v-model & Inputs
		- [x] 139316 11-03-10 0654 Working w v-model Modifiers and Numbers 
		- [x] 140316 11-04-10 0225 v-model and Dropdowns 
		- [x] 141316 11-05-10 0713 Using v-model w Checkboxes & Radiobuttons 
		- [x] 142316 11-06-10 0513 Adding Basic Form Validation
		- [x] 143316 11-07-10 0627 Building a Custom Control Component 
		- [x] 144316 11-08-10 0648 Using v-model on Custom Components 
		- [x] 145316 11-09-10 0114 Module Summary
		- [x] 146316 11-10-10 0006 Module Resources

	## S12: Sending Http Requests
	- [ ] S12: Sending Http Requests 15 | 55min
		- [x] 147316 12-01-15 0109 Module Introduction
		  - Connect to a Backend
			- What is a Backend?
			- Set up a dummy backend
			- Sending HTTP Requests from our Vue to the Backend
		- [x] 148316 12-02-15 0504 Starting App & Why we need a Backend
		- [x] 149316 12-03-15 0321 Adding a Backend
		  - Firebase
			- https://console.firebase.google.com/project/vue-http-demo-2a51d/database/vue-http-demo-2a51d-default-rtdb/data
		- [x] 150316 12-04-15 0523 How To (Not) Send Http Requests
		  - How do I communicate with Firebase now?
			- <form @submit.prevent> // Prevented from sending an HTTP request
			- Remove the prevent
			- HTTP Requests sent to the local computer (and thus, the void)
			- https://vue-http-demo-2a51d-default-rtdb.firebaseio.com/
			- npmjs.com; Axios
			- fetch('https://vue-http-demo-2a51d-default-rtdb.firebaseio.com/'); // Fetch AND Serve data
			- from now on, HTTP requests sent to backend, behind the scenes
		- [x] 151316 12-05-15 0545 Sending a POST Request to Store Data
		  - How does fetch work?
			- Demo App, line 6
		- [x] 152316 12-06-15 0037 Http Requests & Http Methods (Verbs)
		- [x] 153316 12-07-15 0047 Using Axios Instead Of "fetch()"
		- [x] 154316 12-08-15 0951 Getting Data (GET Req) & Transfg Rsp Data
		  - Get the data stored on the server
			- fetch() returns a promise
			- Showing the results on the screen
		- [x] 155316 12-09-15 0200 Loading Data When a Component Mounts
		  - Fetch all data from the server automatically
			- Vue component lifecycle graphic
			- mounted() {} hook
			  - triggered when the vue app is fully initialized and ready to get started
		- [ ] 156316 12-10-15 0255 Showing a "Loading..." Message
		  - New property in data() { return { isLoading: false } }
		- [ ] 157316 12-11-15 0300 Handling the "No Data" State
		  - Deleted survey data
		- [ ] 158316 12-12-15 0641 Handling Technical & Browser-side Errors
		- [ ] 159316 12-13-15 0649 Handling Error Responses
		- [ ] 160316 12-14-15 0132 Module Summary
		- [ ] 161316 12-15-15 0006 Module Resources

	## Sec 13: Routing: Bldg "Multi-Pg" Sgl Pg Apps
	- [ ] Sec 13: Routing: Bldg "Multi-Pg" Sgl Pg Apps 25 01:58:00
		- [ ] 162316 13-01-26 0041 Module Introduction
		- [ ] 163316 13-02-26 0439 What & Why?
		- [ ] 164316 13-03-26 0436 Routing Setup
		- [ ] 165316 13-04-26 0625 Registering & Rendering Routes
		- [ ] 166316 13-05-26 0455 Navigating with router-link
		- [ ] 167316 13-06-26 0305 Styling Active Links
		- [ ] 168316 13-07-26 0401 Programmatic Navigation
		- [ ] 169316 13-08-26 1046 Passing Data w Route Params (Dynamic Segs)
		- [ ] 170316 13-09-26 0300 Navigation & Dynamic Paths ***
		- [ ] 171316 13-10-26 0013 A Vue Bug
		- [ ] 172316 13-11-26 0530 Updating Params Data with Watchers
		- [ ] 173316 13-12-26 0337 Passing Params as Props
		- [ ] 174316 13-13-26 0750 Redirecting & "Catch All" Routes
		- [ ] 175316 13-14-26 0534 Using Nested Routes
		- [ ] 176316 13-15-26 0521 More Fun w Named Routes & Location Objects
		- [ ] 177316 13-16-26 0359 Using Query Params
		- [ ] 178316 13-17-26 0551 Rendering Mult Routes w Named Router Views
		- [ ] 179316 13-18-26 0617 Controlling Scroll Behavior
		- [ ] 180316 13-19-26 0731 Introducing Navigation Guards
		- [ ] 181316 13-20-26 0650 Diving Deeper Into Navigation Guards
		- [ ] 182316 13-21-26 0127 The Global "afterEach" Guard
		- [ ] 183316 13-22-26 0713 Beyond Entering: Route Leave Guards
		- [ ] 184316 13-23-26 0214 Utilizing Route Metadata
		- [ ] 185316 13-24-26 0449 Organizing Route Files
		- [ ] 186316 13-25-26 0212 Summary
		- [ ] 187316 13-26-26 0006 Module Resources
	## S14: Animations & Transitions
	- [ ] S14: Animations & Transitions 19 01:47:00
		- [ ] 187 Module Introduction | 1min
		- [ ] 188 Animation Basics & CSS Transitions | 7min
		- [ ] 189 Understanding CSS Animations | 4min
		- [ ] 190 Why Is "Just CSS" Not Enough? | 4min
		- [ ] 191 Playing CSS Animations with Vue's Help | 5min
		- [ ] 192 Using the Transition Component | 5min
		- [ ] 193 CSS Animations with the Transition Component | 2min
		- [ ] 194 Using Custom CSS Class Names | 4min
		- [ ] 195 Example: Animating a Modal | 9min
		- [ ] 196 Transitioning Between Multiple Elements | 9min
		- [ ] 197 Using Transition Events | 9min
		- [ ] 198 Building JavaScript Transitions (instead of CSS) | 15min
		- [ ] 199 Disabling CSS Transitions | 3min
		- [ ] 200 Getting Started with Animated Lists | 7min
		- [ ] 201 Animating Lists with "transition-group" | 5min
		- [ ] 202 Animate List Item Movement | 4min
		- [ ] 203 Animating Route Changes | 12min
		- [ ] 204 An Important Note on Animated Route Changes | 1min
		- [ ] 205 Module Resources | 1min
	## S15: Vuex 00/21 | 1hr 50min
	- [ ] S15: Vuex 00/21 | 1hr 50min
		- [ ] 206 Module Introduction | 1min
		- [ ] 207 What & Why? | 7min
		- [ ] 208 Creating & Using a Store | 5min
		- [ ] 209 Connecting Components to State | 3min
		- [ ] 210 Intro-ing Mutations - A Better Way of Changing Data | 7min
		- [ ] 211 Passing Data to Mutations with Payloads | 4min
		- [ ] 212 Introducing Getters - A Better Way Of Getting Data | 8min
		- [ ] 213 Running Async Code with Actions | 8min
		- [ ] 214 Understanding the Action "Context" | 2min
		- [ ] 215 Using Mapper Helpers | 6min
		- [ ] 216 Example: Adding More State | 8min
		- [ ] 217 Organizing your Store with Modules | 4min
		- [ ] 218 Understanding Local Module State | 4min
		- [ ] 219 Namespacing Modules | 5min
		- [ ] 220 Structuring Vuex Code & Files | 9min
		- [ ] 221 A Challenge! | 2min
		- [ ] 222 Challenge Solution (1/3) | 12min
		- [ ] 223 Challenge Solution (2/3) | 11min
		- [ ] 224 Challenge Solution (3/3) | 3min
		- [ ] 225 Summary | 1min
		- [ ] 226 Module Resources | 1min
	## S16: Main Project: "Find a Coach" Web App 00/29 | 3hr 58min
	- [ ] S16: Main Project: "Find a Coach" Web App 00/29 | 3hr 58min
		- [ ] 227 Module Introduction | 3min
		- [ ] 228 Planning the Project / Web App | 4min
		- [ ] 229 Planning the Data Requirements | 5min
		- [ ] 230 Planning the Layout / Components | 5min
		- [ ] 231 Registering Routes | 6min
		- [ ] 232 Adding Route Page Components | 5min
		- [ ] 233 Working on the Main Layout & Styling | 8min
		- [ ] 234 Wiring Up Pages | 5min
		- [ ] 235 Adding Vuex and Coach Data | 12min
		- [ ] 236 Working on the Coaches List and List Items | 11min
		- [ ] 237 Addg Base Comps (Base Card, Base Btn, Base Badge) | 13min
		- [ ] 238 Building the Coach Detail Component | 8min
		- [ ] 239 Filtering Coaches | 11min
		- [ ] 240 Registering as a Coach: The Form | 10min
		- [ ] 241 Adding Coaches to Vuex | 14min
		- [ ] 242 Adding Form Validation | 13min
		- [ ] 243 Working on the Contact Form | 8min
		- [ ] 244 Storing Requests (Messages) With Vuex | 9min
		- [ ] 245 Outputting Incoming Requests (Messages) | 10min
		- [ ] 246 Filtering Requests for the Active Coach | 5min
		- [ ] 247 Sending a PUT Http Request to Store Coach Data | 11min
		- [ ] 248 Fetching Coach Data (GET HTTP Request) | 8min
		- [ ] 249 Rendering a Loading Spinner | 7min
		- [ ] 250 Adding Http Error Handling | 9min
		- [ ] 251 Sending Coaching Requests Http Requests | 16min
		- [ ] 252 Caching Http Response Data | 8min
		- [ ] 253 Adding Route Transitions | 10min
		- [ ] 254 The "Not Found" Page & Summary | 2min
		- [ ] 255 Module Resources | 1min
	## S17: Vue & Authentication 00/16 | 1hr 33min
	- [ ] S17: Vue & Authentication 00/16 | 1hr 33min
		- [ ] 256 Module Introduction | 1min
		- [ ] 257 How Authentication Works in Vue Apps (or any SPA) | 6min
		- [ ] 258 Locking / Protecting Backend Resources | 6min
		- [ ] 259 Adding an Authentication Page (Login & Signup) | 10min
		- [ ] 260 Preparing Vuex | 4min
		- [ ] 261 Adding a "Signup" Action & Flow | 9min
		- [ ] 262 Better UX: Loading Spinner & Error Handling | 6min
		- [ ] 263 Adding a "Login" Action & Flow | 3min
		- [ ] 264 Attaching the Token to Outgoing Requests | 4min
		- [ ] 265 Updating the UI Based on Auth State | 4min
		- [ ] 266 Adding a "Logout" Action & Flow | 4min
		- [ ] 267 Authentication & Routing (incl. Navigation Guards) | 12min
		- [ ] 268 Adding "Auto Login" | 9min
		- [ ] 269 Adding "Auto Logout" | 14min
		- [ ] 270 Summary | 1min
		- [ ] 271 Module Resources | 1min
		- [ ] 272 Module Introduction | 1min
		- [ ] 273 What To Deploy? | 3min
		- [ ] 274 Optimization: Using Asynchronous Components | 12min
		- [ ] 275 Building the Project For Production | 4min
		- [ ] 276 Deploying a Vue App | 9min
		- [ ] 277 Module Resources | 1min
	## S18: Optimizing & Deploying Vue Apps 00/06 | 29min
	- [ ] S18: Optimizing & Deploying Vue Apps 00/06 | 29min
		- [ ] 272 Module Introduction | 1min
		- [ ] 273 What To Deploy? | 3min
		- [ ] 274 Optimization: Using Asynchronous Components | 12min
		- [ ] 275 Building the Project For Production | 4min
		- [ ] 276 Deploying a Vue App | 9min
		- [ ] 277 Module Resources | 1min
	## S19: Composition API - Replacing Options API | 00/26 | 02:23:00
	- [ ] Sec 19: Composition API - Replacg Options API | 26Ls | 02:23:00
		- [ ] 278 Module Introduction | 2min
		- [ ] 279 Which Problem Does The Composition API Solve? | 7min
		- [ ] 280 Replacing "data" with "refs" | 12min
		- [ ] 281 Building "reactive" Objects | 11min
		- [ ] 282 Reactivity: A Deep Dive | 8min
		- [ ] 283 Replacing "methods" with Regular Functions | 7min
		- [ ] 000 Assignment 7: Time to Practice: Data & Functions
		- [ ] 284 Replacg "Computed Properties" w the "computed" Fn | 8min
		- [ ] 285 Two-Way-Binding and the Composition API | 3min
		- [ ] 286 Working with Watchers | 6min
		- [ ] 000 Assgnmt 8: Practice: Composition API Core Building Blocks
		- [ ] 287 A First Summary | 2min
		- [ ] 288 How To Use Template Refs | 5min
		- [ ] 289 Components, Props & The Composition API | 8min
		- [ ] 290 Emitting Custom Events | 3min
		- [ ] 291 Working with Provide/ Inject | 4min
		- [ ] 292 Lifecycle Hooks in the Composition API | 5min
		- [ ] 293 Migrating f Options API 2 Composition API - An Ex Proj 2min
		- [ ] 294 Migrating a First Component | 7min
		- [ ] 295 Migrating a Big Component | 13min
		- [ ] 296 Migrating the Remaining Components | 12min
		- [ ] 297 Routing, Params & The Composition API | 7min
		- [ ] 298 The Route & Router Objects and the Composition API | 5min
		- [ ] 299 Using Vuex with the Composition API | 5min
		- [ ] 300 Summary | 3min
		- [ ] 301 Module Resources | 1min
	## S20: Reusing Fnality: Mixins & Custom Cmposn Fns | 14 | 01:03:00
	- [ ] S20: Reusing Functionality: Mixins & Custom Composition Functions
		- [ ] 302 Module Introduction | 1min
		- [ ] 303 Reusability Concepts | 5min
		- [ ] 304 Using Mixins | 5min
		- [ ] 305 Understanding Mixin Merging | 3min
		- [ ] 306 Global Mixins | 3min
		- [ ] 307 Disadvantages of Mixins | 3min
		- [ ] 308 Custom Hooks / Composables & The
		- [ ] 309 More Custom Composition Functions | 4min
		- [ ] 310 Why Hooks / Composables Beat
		- [ ] 311 Example: Creating a "Search" Hook | 11min
		- [ ] 312 Custom Hooks Gotchas | 9min
		- [ ] 313 More Thoughts on Custom Hooks /
		- [ ] 314 Example: A Custom "Sort" Hook | 5min
		- [ ] 315 Module Resources | 1min
	## S21: Roundup & Next Steps 00/01 | 3min
	- [ ] S21: Roundup & Next Steps 0/1|3min
		- [ ] 316 Course Roundup & Next Steps 3min
	## S22: Vue 2 to Vue 3 Migration 00/07 | 1hr 4min
	- [ ] S22: Vue 2 to Vue 3 Migration 0/7|1hr 4min
		- [ ] 317 Vue 3 - Overview | 7min
		- [ ] 318 Important Changes & Migration Steps | 18min
		- [ ] 319 Vue 3: New Features | 5min
		- [ ] 320 The New Composition API (Optional!) | 24min
		- [ ] 321 Further Migration Resources | 1min
		- [ ] 322 About this Course & Vue 3 | 6min
		- [ ] 323 About this Course & Vue 3 (Written Summary) | 4min