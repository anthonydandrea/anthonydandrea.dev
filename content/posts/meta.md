---
title: "My Experience Working at Meta as a Software Engineer"
date: 2026-08-27
draft: true
---

As my stint at Meta is coming to an end after 1.5 years, I wanted to write another reflection similar to my reflection [after leaving Amazon](https://anthony-dandrea.medium.com/reflecting-on-a-4-year-journey-at-amazon-as-a-software-engineer-d6d1c1e75a58).

This reflection is less inspiring and maybe more callous than my first one. This may be a combination of being a different company, working on product rather than infrastructure, or my own perspective shifting as I've gained more experience and seniority in my career.

Take this with a grain of salt. Once again, I mostly want to write this for my own remembrance. If it is useful or interesting to you, that is simply a bonus.

Obviously, viewpoints are my own and not a reflection of Meta in any official way.

## Show Me The Data

Meta is data-driven. To a fault, I would say. So here's some of mine!

- 996 diffs
- 119,271 SLoC (significant lines of code) added
- 78,115 LoC deleted
- 3 SEVs caused (2 logging sevs + insta-crashing the [Meta Business Suite](https://play.google.com/store/apps/details?id=com.facebook.pages.app&hl=en_US) app for Android on startup... oops!)
- 7 high level projects (15 workstreams -> 1.2 months / workstream average)
- 37 experiments ran
- 2 managers
- 1 promotion

Along with some fun ones like,

- 4 onsites in Menlo Park, CA 
- 3rd place in team Go-Karting
- ~630 Lime scooter rides (> 557 miles of travel) for commuting to work

## The Meat and Potatoes

### Before Starting

As an outsider, I viewed Meta as a highly prestigious place to work as a software engineer. I acknowledge this is vain, but I feel most may be able to relate to this feeling (about Meta or another company) on some level. Having Meta on the resume no doubt made my next job search a lot easier.

As an outsider, I also believed I would get to work with many great engineers at Meta. This turned out to be true! Different archetypes of engineering felt way more apparent here than I had previously experienced, I will say. Most engineers here indentify as a particular type (Android, iOS, server, etc.) and I always disliked being called an Android developer. In my mind, I'm an engineer and I happened to working on Android at the moment. Regardless, there is no shortage of talent here.

I was most interested in joining Messenger as I had no moral qualms working on that product (unlike, say, newsfeed ranking). Some may say working for the company in any capacity is evil, and I respect that opinion. I simply have a different line in my sand for what I'm willing to work on. I got incredibly lucky in matching with a Messenger team and have no regrets joining that org! It has great people and a fun energy and I continue to enjoy that product.

### Bootcamp: an Aptly Named Omen

Bootcamp is the first week you join and get to fly down to HQ in Menlo Park, CA. It was inspring and surreal. The campus is huge, the food is all free, and the content of lectures feels fascinating.

Chris Cox, the Chief Product Officer, gave a talk to the newcomers about the history of communcation, how Meta plays its role, and the anticipated challenges of its future. Having a C-suite member onboard newcomers made it feel like the leadership values its people and sees them as bright coworkers worth their time rather than computer monkeys. That was really cool. He is easily the most well-liked of the leadership internally, for what it's worth.

### Post-Bootcamp: Welcome to the Battlefield


### Lessons

Meta forced me to prove that I can succeed in a guerilla-style development environment. With no long-term stability, no domain expertise, and no prior Android experience, I was able to continually deliver and get promoted in less than a year to senior level. While frequently not very enjoyable, I've gained a new level of confidence in myself which I am grateful for. I feel prepared to be dropped in to any environment and make things work. And that's pretty cool!



## Thoughts and Reflections

** caveat: my experience and lens is from a product engineering perspective (working on user facing features and changes) in Messenger and Facebook. these observations may differ greatly for infra teams or other products



Performance review driven culture handicaps the company significantly
- short term incentive structure + permanent fear of layoffs since 2022 
- the cycle of "build 0->1 in H1 -> get credit -> clean it up in H2 -> get credit" is real
- in my experience this doesn't show up in people's willingness to help (vast majority are actually well-intentioned and happy to help if you message them) but certainly saw battles for scope and people starting work well before anything was agreed upon to secure the credit early


The company has no regard for engineer stability.
- the philosophy is hire talented engineers and treat them as a worker bee, moving them without regard and expecting results repeatedly
- this honestly generally works; self-selects very driven people who want to work hard and get rewarded for it 
- reorgs/new charters are common; I was re-org'd or given a new team charter 5 times in 18 months (less than 4 months each assignment)


Low red tape for engineering projects, high red tape for anything user-facing


The engineering culture is very much "figure it out as you go":
- due to constant ownership churn from re-assignments, there are sparse experts in any product areas
- it was rare to see any eng design work done up front 
- "show me the code" culture leads to very quick progress but not always in the right direction




## Extended Story

I learned that I had passed my onsite interview early in January 2025. I searched the internet far and wide to figure out what team matching might look like and how long it could take. I was concerned that I could get stuck in the pipeline; many people online said there was a huge influx of E4 (mid level) engineers and matching might not happen for months, if ever. In order to give myself the best shot, I took to LinkedIn and searched for managers in the Seattle area that had any recent activity, with bonus points if they had any mention of hiring.

I reached out to maybe a dozen managers, a few responded with no openings on their end, but one did and said he respected my hustle in being proactive with the search. He had an opening and offered me a video chat along with chatting with 2 eng on his team. When I joined the call, he had bright, rainbow-colors glasses and a lime green wall background. The 2 eng on his team I spoke to seemed friendly and not at all awkward or cold. It was an Android position working in Messenger. I had done nearly 0 Android development in my life, but was a fan of the Messenger app and had no moral qualms working on it (unlike something like newsfeed ranking, which I would never want to work on). It was a mutual fit and I agreed to start March 3rd, 2025.

The team I joined was called Unconnected Messaging. Their mission was to make it easier for unconnected users (people with no prior relationship or contact in the app) to connect for the first time. It turns out if you meet a stranger and want to chat on Messenger, it can be very hard to find each other via first and last name on Facebook, particularly in places like Southeast Asia (a major Messenger market) where its not uncommon for loads of people to have the same or very similar names.

> Due to my experience being very close to product development, I'm not sure how much I can or should reveal. So I'll keep things fairly vague but hopefully still interesting.

When I joined in March, the whole team was working together on a very large and challenging project. It was a new way for people to message each other without knowing the other user's Facebook account (think QR codes, usernames, the like). It was privacy-sensitive and required implementing new messagaging infrastructure adjacent to the existing infrastructure at almost every layer of the stack. This was very complicated and challenging work. 

People who had been on the team were generally not very excited by the project, or at the least had serious doubts about it. I was naive to Meta's culture in both 1) short term incentives, as well as 2) very often not shipping large product changes. Myself and the other new eng to the team both really enjoyed the fact it was a highly technical and challenging project.

We worked hard to get to company dogfooding stage, where the feature was available to employees only for testing and debugging. We were weeks away from public testing. Then, at the org onsite in July, we were informed the project was being cancelled and we would all be re-assigned a new mission.

This was very unfortunate, and definitely the longest I had worked on a project that didn't end up launching. We were well-assured by our skip manager that the lack of shipping this project wouldn't negatively affect our performance reviews. This was rather eye-opening to me; in my mind, of course this shouldn't affect our performance reviews? Clearly, I had more to learn about Meta and its culture.

My team remained a unit thankfully and we got re-org'd to work on the Facebook Sharesheet (the UI that pops up when you click "Share" on basically any content in the Facebook app). The eng team wasn't thrilled as it didn't seem exciting, however our EM was thrilled due to the impactfullness this sheet has on the FB ecosystem (he was right about this, its actually very imporant).

The codebase was a mess, to be blunt. Obscure state management, dozens of copy-pasted pieces of logic, and tons of dead code from prior years' experiments. This was another lesson about Meta's culture and impliciations: the thrash in engineering ownership provides no incentive for engineers to improve the state of their own codebase, since it's unlikely they'll still be working on it in 6 months. The incentive is to land impact and move on with other costs mostly disregarded.

I saw this as an opportunity to gain points in the "Better Engineering" performance axis, and did several refactors that deleted thousands of lines and made future changes a lot simpler.





