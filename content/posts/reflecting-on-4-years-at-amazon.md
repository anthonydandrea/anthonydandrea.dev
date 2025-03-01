---
title: "Reflecting on a 4 Year Journey at Amazon as a Software Engineer"
date: 2025-02-28
draft: false
summary: " "
redirectUrl: https://anthony-dandrea.medium.com/reflecting-on-a-4-year-journey-at-amazon-as-a-software-engineer-d6d1c1e75a58
---

After 4 years as a full-time software engineer at Amazon, I’ve decided to take a leap and try something new.

TL;DR

- I learned way more here than I could have imagined.
- 95% of people were both highly competent and enjoyable to work with.
- Based on my experience, I would highly recommend working as an SDE at Amazon, especially for early-career individuals.
 
For my own remembrance, I figured I should document my experience. If anyone else finds it helpful or interesting, that’s just a bonus!

---

To start with some concrete data, here are some metrics (at the time of writing) about things I got to build:

- Heartbeat processing service handling ~8,100,000 heartbeats / minute globally
- Metrics service ingesting ~3,000,000,000 metrics / day globally
- 157 datasets managed in a data catalog
- 57,000,000 network link tests validated with 1,500,000 dangerous tests blocked since 2020
- 138 engineers using my tools to build 103 Rust packages about ~5000 times / week

Some personal stats which don’t really matter, but were interesting to collect and see nonetheless:

- 726 Code Reviews published
- 155 unique packages committed to
- 1.25 revisions per CR (average)
- 1322 commits
- 1 Slack bot (with 3 users 😎)
- 557 Google Chrome bookmarks (this one is **disturbing**)

---

I was an intern during the summer of 2020, received a return offer, and worked full-time from February 2021 until February 2025.

During this time, I worked on three teams:

**Network Product Development** (NPD)— Service team for testing network connectivity and stability when replacing or adding servers to the network backbone.

**Security Analytics and AI Research** (SAAR) — Research team consisting of software engineers, security engineers, and applied scientists tackling security problems with AI.

**FireTV Experience** (Millibyte) — Performance team owning the cross-platform API layer for native services as well as the build and development tools for cross-platform Rust projects.

---

I was nervous but eager to prove myself during my internship. I was lucky to be given an easier project due to Covid making the internship experience more challenging.

I remember my mentor Fernando explaining the service we owned and the problem I was tasked with solving. I *immediately* began coding a solution and proudly thought I was done a few days later. I had no idea who used our service, how it was deployed, how my code impacted our customers, or the failure scenarios I introduced.

I don’t think I ever showed this code to Fernando. I realized there was going to be a lot more to do before shipping *any* code. That realization probably saved me some embarrassment.

Fernando met with me daily to chat. I would pick his brain and try to understand a little more each day. I got lucky having Fernando as my mentor: he was attentive and committed to helping me succeed.

I became familiar with Amazon’s notorious document-driven culture and had my first design doc review. I learned the value of bringing data to the table and that confidence is a requirement for a successful review. If you’re not confident, you didn’t think things through enough.

I learned to seek customer buy-in and did my best to field questions from the full-time engineers myself, not hiding behind my mentor. My answers weren’t always right, but Fernando usually let me speak first and would correct me as needed.

Taking the lead like this gave me a sense of what it’s like to be a software engineer at a big company, and not just a “code monkey.” It turns out groups of people building software can be messy, confusing, and riddled with incorrect assumptions. It requires working together, knowing your stuff, and being willing to be challenged on your beliefs.

With the support of Fernando, my manager, and the rest of my team, I delivered a well-tested, well-documented library running in production by the end. I was able to create some dashboards with metrics and even included a nifty CLI tool.

I got a return offer to come back full-time.

---

After 6 months full-time back at NPD, I interviewed and internally transferred to the SAAR team under AWS GuardDuty. NPD had great people, but I wasn’t very interested in the work. Amazon granted me a relocation bonus to move from my home in Connecticut to New York City, where my office was right across the street from the Empire State Building.

Joining SAAR was intimidating. I had to assimilate to a new domain (security) which was tough. I don’t know if “imposter syndrome” is what I felt, but I certainly felt like the dumb one in the room when everyone on this team was an expert in their field (half the team had PhDs.).

My self-doubt turned out to be silly. The people were kind, extremely intelligent, and collaborative. The engineering portion of the team was small and tight-knit. The problems were interesting and every individual had a lot of room to own their projects.

The majority of work on the team was greenfield which meant gaining a disproportionate amount of design experience as an L4 (junior level). The first big initiative I was a part of was designing a multi-service threat intel platform with senior managers and engineers.

During meetings and brainstorms, I always felt treated as an equal, even with so little experience or domain expertise. This gave me room to bring my ideas to the table and empowered me to challenge others, leading to valuable discussions and improvements to the big picture.

I spent over a month planning a design and writing my first 6-pager (Amazon lingo for a non-trivial and very detailed proposal). I was proud of how much thought and consideration I put into every detail.

My manager Jeff and I met with Shane, the Principal Engineer of the org, to review the doc. He stopped reading after taking issue with the first bullet-point under “Requirements.” The rest of the time was a discussion mostly between Jeff and Shane, working to align their visions. This design would be the first of several required to build the platform, and it was important we built it correctly.

We never looked at the rest of the design doc. Jeff and I had a laugh about that doc review later. (No hard feelings, Shane!)

Jeff was a massive asset for my development. The organization (AWS GuardDuty) put a lot of trust in him, and he put a lot of trust in me. Because of him, I was given many opportunities to deliver impact as an L4. This impact led to my promotion to L5 in October 2022.

After my promotion, there was a period of ~5 months of serious crunch mode to bring the GuardDuty Runtime Monitoring project to production. This was one of my most focused, no bullshit periods of engineering in my career. There was no time to waste - at any given moment, every team member was either in a meeting debating critical details with others or heads-down writing code. Many people would decline all their meetings when they felt they needed more time to build.

Those 5 months were tiring. At the same time, it was hands-down one of the most gratifying and *just fun* work experiences I’ve had to-date. I may be romanticizing a bit, and it may not have been that intense…but I look back on it fondly. We successfully launched the project on time. The hard work really paid off.

After some post-launch R&R, I had the idea for a data broker service to help my research team track all our data, experiments, and models. It was a surprisingly ad-hoc process at the time, and I thought it would be useful.

The new Principal Engineer coincidentally had a similar idea in mind but less geared towards scrappy research and more catered toward engineering. Even though we had a very different design and were already a few weeks into development, we pivoted to achieve his vision instead. This pivot was painful, but it was the correct business decision.

I got assigned to help another team with a new project after that. The people were nice, but the project was not going well. I spent a lot of time trying to be productive which ended up with thrown away work due to poor communication and planning. The project was going to last several more months.

This new project was a significant factor in my searching for new jobs internally, though it wasn’t the sole reason. I had grown very comfortable on my team building pipelines and services that all used the same foundational AWS components. I wanted a radically new challenge and I wanted to continue using Rust, a language I grew to love while at SAAR.

---

I interviewed internally and in December 2023 joined the Millibyte team as part of FireTV. Once again, this transfer came with a relocation bonus to move across the country from New York City to downtown Seattle (the “Amazon Mecca”, as I like to call it).

This was a big change: I went from a team that used many machines to handle tons of data to a team trying to achieve the best performance of small data on individual pieces of commodity hardware.

All I really knew coming into this team was that,

1. I really liked the manager, John
1. They used a lot of Rust
1. They had a great website for documentation

It turns out I made an excellent choice due to these three data points!

The team was a diverse group of individuals, each with a unique personality and expertise they brought to the table.

It was clear early-on that the relationships on this team were more personal and not strictly professional. There were more details shared about people’s lives outside of work and many curious conversations about cultural differences. Several on-sites a year where everyone got together meant a lot of opportunity for bonding.

The team owned the cross-platform API layer to support building for multiple device and OS combinations across the suite of Amazon devices. This was a deeply technical framework that enabled services to run much more efficiently. The types of problems these engineers talked about daily were nearly the polar opposite from the cloud domain I came from.

When I joined, there was an urgent need to recreate our core build and development tools from scratch due to a major upstream deprecation. I had no idea what it meant to make build tools, but it seemed like an important project and I said I’d do it.

John said I picked a tough one to volunteer for and smiled.

I had to do a lot of reading and re-reading of frankly awful makefiles to figure out how the builds worked and the semantics of it all. Slowly over time, I was somehow able to build the mental model of “what’s really happening.”

The Principal Engineer for this team, Val, was incredibly accessible and helpful. Like the relationship with my mentor during my internship, I would regularly chat with Val, pick his brain, and ask the dumb questions I knew I needed to ask. He could tell when I struggled to figure out what to ask and would give me the time of day with him that I needed to succeed.

The work was quite isolating. It required a lot of iterative code reviews where few people on the team were really following exactly what was being built. Most often, my code reviews went straight to Val. This was a unique situation, as Principal Engineer bandwidth is typically reserved for critical technical discussions and cross-functional alignment.

But here I was, tagging Val on several code reviews a week. And amazingly, he would find the time to review quickly! One of his many superpowers, no doubt.

Rebuilding all our tooling gave me an interesting perspective and niche value-add for the organization. It turns out building feature-gated code using FFI bindings and statically linked C-code on potentially multiple developer machine environments targeting multiple platforms and hitting unexpected linker errors… is a pain in the ass! But I was in the position to solve these problems and unblock numerous engineers quickly.

After almost a year on the team, I was reached out to by external recruiters. John had left to build his own escape room ([check it out, opens soon!](https://www.escapegallery.net/)), Amazon had announced RTO 5 days a week, and I was coming up on 4 years at the company. All these things combined with the opportunity to try something exciting ultimately led me to choose to accept an external offer.

There was definitely a visible path to an L6 (senior) promotion. Maybe some would say in this 2025 market and while being on a great team, leaving is a mistake. Maybe one day, I’ll agree! Only time will tell.

For now, though, I’m excited for the future.

---

If I had to list the most valuable lessons from these 4 years at Amazon, I would say this:

1. The smartest people are willing to ask their dumbest questions. This is how they became smart.
1. Having more seniority doesn’t mean you know the answer, but it does mean you should be more capable of figuring out the answer. Get better at finding the answers to your own questions.
1. For most domains, there are diminishing returns on technical excellence. The soft skills’ ceiling of value is significantly higher.
1. All the company values (known as [Leadership Principals](https://www.amazon.jobs/content/en/our-workplace/leadership-principles)) are actually just “Earn Trust” in disguise. Do great work, keep your word, admit fault, and people will enjoy working with you. The inverse is even more true.
1. The company wouldn’t blink an eye if you got hit by a bus and died. Don’t overextend for the sake of the company. Feel good about taking time off and investing in your life outside of work.
1. Work hard and do your best for your own sake. It’s way more fun that way.

---

To wrap things up —

I didn’t know what I was getting into as a software engineer at Amazon when I accepted that internship offer back in college. Based on online forums, one can easily be fooled into believing Amazon is some brutal environment full of backstabbing, ego, and despair.

While I’m sure some people have had a bad time, I can definitively say that **this is not the case for most.**

I have immense gratitude for the technical skills I’ve gained, the opportunities I’ve been granted, and the confidence I’ve developed.

But most importantly, I have immense gratitude for the people I’ve gotten to know, the people I’ve gotten to build really cool shit with, and the people who I always felt had my back.

Thanks to you all and good luck!

I’m rooting for you.
