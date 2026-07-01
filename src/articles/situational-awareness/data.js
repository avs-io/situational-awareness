const article = {
  id: "situational-awareness",
  slug: "situational-awareness",
  template: "immersive-reading",
  title: { en: "Situational Awareness: The Decade Ahead" },
  author: "Leopold Aschenbrenner",
  description: { en: "A comprehensive analysis of AI progress trajectories, from GPT-4 to superintelligence, examining the compute, algorithmic, and unhobbling trends that will reshape the coming decade." },
  source: {
    label: "Situational Awareness",
    authorLine: "by Leopold Aschenbrenner",
    url: "https://situational-awareness.ai",
    urlLabel: "situational-awareness.ai"
  },
  languages: [
    { code: "en", shortLabel: "EN", label: "English", menuTitle: "English", menuDescription: "Original text only", primary: true }
  ],
  defaultLanguage: "en",
  door: {
    ariaLabel: "Reading entrance",
    video: "assets/door-entrance-8s-scrub.mp4",
    poster: "assets/door-entrance-8s-poster.jpg",
    purpose: "Independent learning space",
    cue: "Enter"
  },
  hero: {
    note: "A generated learning space for the source material.",
    typedLine: "This source has a structure you can learn.",
    primaryAction: "Start reading",
    scrollCue: "Scroll",
    originalLinkLabel: "See the original source"
  },
  footer: {
    quote: { en: "Let me tell you what we see." },
    quoteEmphasis: "Let me tell you",
    credit: "Generated as a learning space for close study."
  },
  chapters: [
    {
      n: 1,
      title: { en: "Introduction: Situational Awareness" },
      essence: { en: "A handful of people in San Francisco can see what is coming. The rest of the world has no idea." },
      words: 1200,
      ideas: [
        {
          take: { en: "The AGI race has begun, and most people are not remotely prepared for what is about to hit them." },
          quote: { en: "The AGI race has begun. We are building machines that can think and reason. By 2025/26, these machines will outpace college graduates. By the end of the decade, they will be smarter than you or I; we will have superintelligence, in the true sense of the word." },
          paragraphs: [
            { text: { en: "San Francisco sees the future first. Over the past year, the talk of the town has shifted from $10 billion compute clusters to $100 billion clusters to trillion-dollar clusters. Every six months another zero is added to the boardroom plans. Behind the scenes, there is a fierce scramble to secure every power contract still available for the rest of the decade, every voltage transformer that can possibly be procured." } },
            { text: { en: "American big business is gearing up to pour trillions of dollars into a long-unseen mobilization of American industrial might. By the end of the decade, American electricity production will have grown tens of percent; from the shale fields of Pennsylvania to the solar farms of Nevada, hundreds of millions of GPUs will hum." } },
            { text: { en: "Everyone is now talking about AI, but few have the faintest glimmer of what is about to hit them. Nvidia analysts still think 2024 might be close to the peak. Mainstream pundits are stuck on the willful blindness of \"it's just predicting the next word.\" They see only hype and business-as-usual; at most they entertain another internet-scale technological change." } },
            { text: { en: "Before long, the world will wake up. But right now, there are perhaps a few hundred people, most of them in San Francisco and the AI labs, that have situational awareness. Through whatever peculiar forces of fate, I have found myself amongst them. A few years ago, these people were derided as crazy\u2014but they trusted the trendlines, which allowed them to correctly predict the AI advances of the past few years." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Whether the AI builders seeing the future are an odd footnote or the next Szilard and Oppenheimer remains to be seen." },
          quote: { en: "Perhaps they will be an odd footnote in history, or perhaps they will go down in history like Szilard and Oppenheimer and Teller. If they are seeing the future even close to correctly, we are in for a wild ride." },
          paragraphs: [
            { text: { en: "These are very smart people\u2014the smartest people I have ever met\u2014and they are the ones building this technology. If they are seeing the future even close to correctly, we are in for a wild ride." } },
            { text: { en: "This essay series is an attempt to convey what this small group sees: the trajectory from GPT-4 to AGI, from AGI to superintelligence, the immense industrial and geopolitical challenges along the way, and what it will take to make it through. The situation is far more extreme than almost anyone outside the inner circle realizes." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 2,
      title: { en: "From GPT-4 to AGI: Counting the OOMs" },
      essence: { en: "AGI by 2027 is strikingly plausible. It just requires trusting straight lines on a graph." },
      words: 8500,
      ideas: [
        {
          take: { en: "GPT-2 to GPT-4 took us from preschooler to smart high schooler in just four years. That jump will happen again." },
          quote: { en: "I make the following claim: it is strikingly plausible that by 2027, models will be able to do the work of an AI researcher/engineer. That doesn't require believing in sci-fi; it just requires believing in straight lines on a graph." },
          paragraphs: [
            { text: { en: "GPT-4's capabilities came as a shock to many: an AI system that could write code and essays, reason through difficult math problems, and ace college exams. A few years ago, most thought these were impenetrable walls. But GPT-4 was merely the continuation of a decade of breakneck progress in deep learning." } },
            { text: { en: "GPT-2 (2019) was like a preschooler: impressive for sometimes managing to string together a few coherent sentences, but it could barely count to 5 without getting tripped up. GPT-3 (2020) was like an elementary schooler: with few-shot examples it could do simple useful tasks, and was commercially useful in narrow ways. GPT-4 (2023) was like a smart high schooler: it could write sophisticated code, reason through difficult math, and beat the vast majority of high schoolers on whatever tests we could give it." } },
            { text: { en: "The pace has been extraordinary. A mere decade ago it was revolutionary for a deep learning system to identify simple images. Today, we keep trying to come up with novel, ever harder tests, and yet each new benchmark is quickly cracked. We are literally running out of benchmarks. MMLU, designed in 2020 to stand the test of time, is basically solved three years later. The MATH benchmark went from 5% to over 90% accuracy in just two years." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Three drivers\u2014compute scaling (~0.5 OOMs/year), algorithmic efficiencies (~0.5 OOMs/year), and unhobbling gains\u2014each independently push capabilities forward." },
          quote: { en: "With each OOM of effective compute, models predictably, reliably get better. If we can count the OOMs, we can (roughly, qualitatively) extrapolate capability improvements." },
          paragraphs: [
            { text: { en: "The magic of deep learning is that it just works\u2014and the trendlines have been astonishingly consistent, despite naysayers at every turn. We can decompose the progress from GPT-2 to GPT-4 into three categories of scaleups: compute, algorithmic efficiencies, and unhobbling gains." } },
            { text: { en: "On compute: training compute used for frontier AI systems has grown at roughly 0.5 OOMs per year for the last decade and a half, primarily because of massive investment increases and specializing chips for AI workloads. GPT-4 used roughly 3,000x to 10,000x more raw compute than GPT-2. This is close to 5x the speed of Moore's Law, driven not by chip improvements alone but by sheer investment scale." } },
            { text: { en: "On algorithmic efficiencies: while massive compute investments get all the attention, algorithmic progress is probably a similarly important driver and has been dramatically underrated. We have the best data for ImageNet, where compute efficiency improved by roughly 0.5 OOMs per year across a 9-year period. That means 4 years later, we can achieve the same level of performance for roughly 100x less compute. Public information suggests the GPT-2 to GPT-4 jump included 1-2 OOMs of algorithmic efficiency gains." } },
            { text: { en: "The cost of attaining 50% on the MATH benchmark dropped by nearly 1,000x in less than two years. GPT-4 on release cost roughly the same per token as GPT-3 on release, despite the enormous performance increase. Gemini 1.5 Flash offers near-GPT-4-level performance at 85x less cost." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Unhobbling\u2014fixing obvious ways models are hobbled\u2014will transform chatbots into agents and drop-in remote workers by 2027." },
          quote: { en: "It's completely wrong to just imagine \"GPT-6 ChatGPT.\" With continued unhobbling progress, the improvements will be step-changes compared to GPT-6 + RLHF. By 2027, rather than a chatbot, you're going to have something that looks more like an agent, like a coworker." },
          paragraphs: [
            { text: { en: "The hardest to quantify but no less important category of improvements is \"unhobbling\": fixing the obvious ways in which models are hobbled by default, unlocking latent capabilities and giving them tools. When asked to solve a hard math problem, you would struggle if forced to instantly answer with the first thing that came to mind. Until recently, that is how we had LLMs solve math. Chain-of-thought prompting unlocked step-by-step reasoning\u2014a small algorithmic tweak that provided the equivalent of a 10x effective compute increase on reasoning problems." } },
            { text: { en: "Other unhobbling gains include RLHF (making models actually useful rather than just predicting random internet text\u2014an RLHF'd small model was equivalent to a non-RLHF'd 100x larger model in human preference), scaffolding (GPT-3.5 with simple scaffolding outperforms un-scaffolded GPT-4), tools (web browsing, code execution), and context length (from 2k tokens with GPT-3 to 1M+ with Gemini 1.5 Pro)." } },
            { text: { en: "Models today are still incredibly hobbled: no long-term memory, limited tools, mostly short back-and-forth dialogues, no personalization. The key unhobbling frontier ahead involves three ingredients: solving the onboarding problem (giving models the context a new hire would have), unlocking the test-time compute overhang (enabling models to think and work on problems for months-equivalent rather than minutes-equivalent), and enabling models to use a computer like a human would. The result will be something that looks like a drop-in remote worker\u2014an agent that joins your company, uses your tools, and independently completes large projects." } }
          ],
          footnotes: []
        },
        {
          take: { en: "We should expect roughly 5 more OOMs of effective compute on top of GPT-4 by 2027\u2014another GPT-2-to-GPT-4-sized qualitative jump." },
          quote: { en: "We are on course for AGI by 2027. These AI systems will basically be able to automate basically all cognitive jobs." },
          paragraphs: [
            { text: { en: "Putting the numbers together: GPT-2 to GPT-4 was roughly a 4.5-6 OOM base effective compute scaleup plus major unhobbling gains. In the subsequent 4 years, we should expect 3-6 OOMs of base effective compute scaleup (physical compute plus algorithmic efficiencies), with a best guess of around 5 OOMs, plus step-changes in utility from unhobbling. To put this in perspective: if GPT-4 training took 3 months, in 2027 a leading AI lab will be able to train a GPT-4-level model in a minute." } },
            { text: { en: "Where will that take us? GPT-2 to GPT-4 took us from preschooler to smart high schooler. Another jump like that will very likely take us to models that can outperform PhDs and the best experts in a field. The current trend of AI progress is proceeding at roughly 3x the pace of child development. Your 3x-speed-child just graduated high school; it'll be taking your job before you know it." } },
            { text: { en: "The error bars are large. Progress could stall as we run out of data, if the algorithmic breakthroughs necessary to crash through the data wall prove harder than expected. But it requires no esoteric beliefs, merely trend extrapolation of straight lines, to take the possibility of AGI\u2014true AGI\u2014by 2027 extremely seriously. And this decade is it: we are racing through more OOMs now than we might in multiple decades thereafter, as spending scaleup, hardware gains, and algorithmic progress are all peaking simultaneously." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 3,
      title: { en: "From AGI to Superintelligence: The Intelligence Explosion" },
      essence: { en: "AGI will automate AI research. Millions of automated researchers could compress a decade of progress into a year." },
      words: 6000,
      ideas: [
        {
          take: { en: "Once we get AGI, we won't just have one\u2014we'll have hundreds of millions of automated AI researchers, working day and night at 10x+ human speed." },
          quote: { en: "Rather than a few hundred researchers and engineers at a leading AI lab, we'd have more than 100,000x that\u2014furiously working on algorithmic breakthroughs, day and night. Yes, recursive self-improvement, but no sci-fi required; they would need only to accelerate the existing trendlines." },
          paragraphs: [
            { text: { en: "AI progress won't stop at human-level. After initially learning from the best human games, AlphaGo started playing against itself\u2014and it quickly became superhuman, playing extremely creative and complex moves that a human would never have come up with. So it will be with AGI and superintelligence. We will turn the crank one more time\u2014or two or three more times\u2014and AI systems will become vastly superhuman." } },
            { text: { en: "We don't need to automate everything\u2014just AI research. The jobs of AI researchers and engineers at leading labs can be done fully virtually and don't run into real-world bottlenecks in the same way. And the job of an AI researcher is fairly straightforward: read ML literature, come up with new ideas, implement experiments, interpret results, and repeat. This is squarely in the domain where simple extrapolations of current AI capabilities could take us to or beyond the best humans by the end of 2027." } },
            { text: { en: "Given inference GPU fleets by then, we will likely be able to run many millions of AGI copies\u2014perhaps 100 million human-equivalents, and soon after at 10x+ human speed. That means 100 million automated Alec Radfords, each working at 100x human speed not long after we begin to automate AI research. They'll each be able to do a year's worth of work in a few days." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Automated AI research could compress a human-decade of algorithmic progress (5+ OOMs) into a year, leading to superintelligence." },
          quote: { en: "It's strikingly plausible we'd go from AGI to superintelligence very quickly, perhaps in 1 year." },
          paragraphs: [
            { text: { en: "Automated AI researchers will have enormous advantages over human researchers: they'll have read every ML paper ever written, learned in parallel from each of their copies, accumulated millennia of experience, written millions of lines of code with perfect attention, and developed far deeper ML intuitions than any human. The automated researchers will also be able to share context and coordinate much more efficiently than human teams." } },
            { text: { en: "Could 100 million automated researchers, each working at 100x human speed, compress a decade of algorithmic progress into a year? That would be 5+ OOMs in a year. This is a similar scaleup to what produced the GPT-2-to-GPT-4 jump\u2014a capability jump from preschooler to smart high schooler, but now on top of AI systems already as smart as expert AI researchers. The jump to superintelligence would be qualitatively wild: systems whose understanding and abilities would exceed those even of humanity combined." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Real bottlenecks exist\u2014limited experiment compute, complementarities with humans, ideas getting harder to find\u2014but none seem sufficient to stop a very rapid intelligence explosion." },
          quote: { en: "A year\u2014or at most just a few years, but perhaps even just a few months\u2014in which we go from fully-automated AI researchers to vastly superhuman AI systems should be our mainline expectation." },
          paragraphs: [
            { text: { en: "The most important bottleneck is limited compute for experiments. A million times more research effort won't mean a million times faster progress, because compute is still limited. But even if automated researchers can't get a 1,000,000x speedup, it's hard to imagine they couldn't use compute at least 10x more effectively: they'll get incredible ML intuition, centuries-equivalent of thinking time to design optimal experiments, and the ability to try tons of smaller-scale experiments." } },
            { text: { en: "Other bottlenecks include the long tail of capabilities required for full automation (the last 10% of the AI researcher job might be particularly hard), inherent limits to algorithmic progress (though 5 more OOMs seems very much in the realm of possibility), and ideas getting harder to find. But the magnitude of the increase in research effort\u2014a million-fold\u2014is way larger than the historical trends of growing effort needed to sustain progress. It would be a bizarre \"knife-edge assumption\" to think automated research would be just enough to keep progress constant." } },
            { text: { en: "These factors may slow things down somewhat: the most extreme versions of intelligence explosion (overnight) seem implausible. But they certainly don't rule out a very rapid intelligence explosion. Most of all, the first thing the automated AI researchers will work on is getting a 10x or 100x speedup on themselves, further accelerating the process." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Superintelligence would transform everything: economics, science, military power\u2014comparable to the shift from the Bomb to the Super." },
          quote: { en: "The AI systems we'll likely have by the end of this decade will be unimaginably powerful." },
          paragraphs: [
            { text: { en: "Superintelligence will not just be quantitatively superhuman\u2014running on fleets of hundreds of millions of GPUs, a civilization of billions of them thinking orders of magnitude faster than humans\u2014but qualitatively superhuman. Large-scale RL runs have already produced completely novel and creative behaviors beyond human understanding, like AlphaGo's famous move 37. Superintelligence will be like this across many domains. We'll be like high-schoolers stuck on Newtonian physics while it's off exploring quantum mechanics." } },
            { text: { en: "Applying superintelligence to R&D across fields will broaden explosive progress beyond just ML research: solving robotics, dramatically accelerating scientific and technological progress, and creating an industrial explosion. Factories would go from human-run to AI-directed to fully run by swarms of robots. Economic growth rates could reach 30% per year and beyond. The military advantage would be decisive\u2014compared to pre-superintelligence arsenals, it'll be like 21st century militaries fighting a 19th century brigade." } },
            { text: { en: "In the common imagination, the Cold War's terrors trace back to Los Alamos. But going from the Bomb to the Super\u2014hydrogen bombs\u2014was arguably just as important. A single hydrogen bomb had more explosive power than all the bombs dropped in WWII combined. So it will be with AGI and superintelligence. The intelligence explosion and the immediate post-superintelligence period will be one of the most volatile, tense, dangerous, and wildest periods ever in human history." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 4,
      title: { en: "Racing to the Trillion-Dollar Cluster" },
      essence: { en: "The most extraordinary techno-capital acceleration in history is underway. Power, not chips, is the binding constraint." },
      words: 5500,
      ideas: [
        {
          take: { en: "Individual training clusters will cost $100s of billions by 2028 and $1T+ by 2030, requiring power equivalent to a small US state and then 20% of US electricity production." },
          quote: { en: "You see, I told you it couldn't be done without turning the whole country into a factory. You have done just that." },
          paragraphs: [
            { text: { en: "The race to AGI won't just play out in code\u2014it'll be a race to mobilize America's industrial might. Unlike anything else we've recently seen come out of Silicon Valley, AI is a massive industrial process: each new model requires a giant new cluster, soon giant new power plants, and eventually giant new chip fabs. The binding constraint on the largest training clusters won't be chips but power: the 100GW required by the trillion-dollar cluster is equivalent to more than 20% of US electricity production." } },
            { text: { en: "The numbers escalate rapidly: the GPT-4 cluster used about 10,000 H100-equivalents at roughly $500M. By 2026, we should expect a million H100-equivalent cluster costing $10s of billions and requiring a gigawatt of power\u2014equivalent to the Hoover Dam. By 2028, ten million H100-equivalents at $100s of billions, requiring 10GW\u2014equivalent to a small US state. By 2030, one hundred million H100-equivalents at $1T+, requiring 100GW." } },
            { text: { en: "These aren't just theoretical numbers. Amazon bought a 1GW datacenter campus next to a nuclear power plant. Rumors suggest a 1.4M H100-equivalent cluster is being built in Kuwait. Microsoft and OpenAI are rumored to be working on a $100B cluster slated for 2028, a cost comparable to the International Space Station." } }
          ],
          footnotes: []
        },
        {
          take: { en: "AI revenue is doubling every six months. A $100B annual run rate for a big tech company could arrive by mid-2026, justifying ever-greater investment." },
          quote: { en: "Every 10x scaleup in AI investment seems to yield the necessary returns." },
          paragraphs: [
            { text: { en: "Reports suggest OpenAI was at $1B revenue run rate in August 2023 and $2B in February 2024\u2014roughly doubling every 6 months. If that trend holds, we should see a $10B annual run rate by late 2024/early 2025, even without a massive surge from next-generation models. When will a big tech company hit $100B revenue from AI? Very naively extrapolating the doubling pattern suggests mid-2026. Getting a third of Microsoft Office's 350 million paid subscribers to pay $100/month for an AI add-on would do it\u2014just a few hours of monthly productivity gained." } },
            { text: { en: "Historical precedents put these numbers in context. The Manhattan and Apollo programs reached 0.4% of GDP\u2014about $100B annually today. Between 1996-2001, telecoms invested nearly $1T in today's dollars in internet infrastructure. British railway investments in the 1840s totaled 40% of British GDP. $1T/year of AI investment by 2027 would be about 3% of US GDP\u2014dramatic but not unprecedented." } }
          ],
          footnotes: []
        },
        {
          take: { en: "The United States has abundant natural gas to power the AGI clusters, but self-imposed regulatory and climate barriers may drive them offshore\u2014a national security disaster." },
          quote: { en: "We're going to drive the AGI datacenters to the Middle East, under the thumb of brutal, capricious autocrats. I'd prefer clean energy too\u2014but this is simply too important for US national security." },
          paragraphs: [
            { text: { en: "Powering a 10GW cluster would take only a few percent of US natural gas production and could be done rapidly. Even the 100GW cluster is surprisingly doable: the Marcellus/Utica shale alone produces enough gas for nearly 150GW continuously, and 40 rigs (the current count in the Marcellus) could build up the production base for 100GW in less than a year. The capex for 100GW of natural gas power plants would be about $100B." } },
            { text: { en: "The barriers are entirely self-made: well-intentioned but rigid climate commitments by tech companies and the government, permitting delays, utility regulation, and environmental review. The clusters that are being planned today may well be the clusters AGI and superintelligence are trained and run on. The national interest demands they be built in America or close democratic allies\u2014anything else creates an irreversible security risk, risks the AGI weights getting stolen, and puts AGI at unsavory dictators' whims." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 5,
      title: { en: "Lock Down the Labs: Security for AGI" },
      essence: { en: "The nation's leading AI labs treat security as an afterthought. We are basically handing the keys to AGI to the CCP on a silver platter." },
      words: 5000,
      ideas: [
        {
          take: { en: "On the current course, the leading Chinese AGI labs won't be in Beijing or Shanghai\u2014they'll be in San Francisco and London." },
          quote: { en: "AI lab security isn't much better than \"random startup security.\" Directly selling the AGI secrets to the CCP would at least be more honest." },
          paragraphs: [
            { text: { en: "In a few years, it will be clear that the AGI secrets are the United States' most important national defense secrets\u2014deserving treatment on par with B-21 bomber blueprints. But today, we are treating them the way we would random SaaS software. All the trillions we will invest, the mobilization of American industrial might, the efforts of our brightest minds\u2014none of that matters if China can simply steal the model weights or key algorithmic secrets." } },
            { text: { en: "America's leading AI labs measure their security efforts against \"random tech startups,\" not \"key national defense projects.\" Currently, labs are barely able to defend against scriptkiddies, let alone have \"North Korea-proof security,\" let alone be ready to face the Chinese Ministry of State Security bringing its full force to bear. Between the labs, there are thousands of people with access to the most important secrets with basically no background-checking, siloing, or basic infosec. Anyone could be offered $100M and recruited to a Chinese lab at any point." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Two key assets must be protected: algorithmic secrets (starting yesterday) and model weights (especially as we get close to AGI)." },
          quote: { en: "Perhaps the single scenario that most keeps me up at night is if China or another adversary is able to steal the automated-AI-researcher-model-weights on the cusp of an intelligence explosion." },
          paragraphs: [
            { text: { en: "Stealing algorithmic secrets is worth having a 10x or more larger cluster to the PRC. Algorithmic progress is probably similarly important as compute scaling, and we should expect multiple OOMs-worth of algorithmic secrets between now and AGI. More importantly, the frontier AI labs are developing the key paradigm breakthroughs for AGI right now\u2014essentially the \"AlphaGo self-play\" equivalent for general intelligence. Without better security in the next 12-24 months, we may irreversibly supply China with these key AGI breakthroughs." } },
            { text: { en: "An AI model is just a large file of numbers on a server. This can be stolen. All it takes an adversary to match your trillions of dollars and your smartest minds is to steal this file. Google DeepMind, perhaps the AI lab with the best security, admits to being at security level 0 out of 4\u2014only the most banal and basic measures. Developing state-actor-proof security will require fully airgapped datacenters, hardware encryption, extreme personnel vetting, and government cooperation\u2014and probably takes many years of lead times." } }
          ],
          footnotes: []
        },
        {
          take: { en: "The preservation of the free world is on the line\u2014and a healthy lead will be the necessary buffer to get AI safety right." },
          quote: { en: "In the next 12-24 months, we will leak key AGI breakthroughs to the CCP. It will be the national security establishment's single greatest regret before the decade is out." },
          paragraphs: [
            { text: { en: "Even if the US squeaks out ahead in the end, the difference between a 1-2 year and 1-2 month lead will really matter for navigating the perils of superintelligence. A 1-2 year lead means at least a reasonable margin to get safety right. A mere 1-2 month lead means a breakneck international arms race with extreme pressures, racing through the intelligence explosion, and no room at all to get safety right. It is that neck-and-neck, existential race in which we face the greatest risks of self-destruction." } },
            { text: { en: "Getting on this now is maybe even the single most important thing we need to do today to ensure AGI goes well. The history of the atomic bomb shows why secrecy matters: Fermi reluctantly kept his graphite measurements secret, and this crucially left the German bomb project pursuing heavy water\u2014a decisive wrong path that ultimately doomed their effort. If not for that last-minute secrecy appeal, the German bomb project may have been a much more formidable competitor." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 6,
      title: { en: "Superalignment" },
      essence: { en: "Reliably controlling AI systems much smarter than us is an unsolved but solvable problem. The intelligence explosion makes it incredibly tense." },
      words: 6500,
      ideas: [
        {
          take: { en: "Our current alignment technique (RLHF) will break down as AI systems get smarter, and we will face fundamentally new technical challenges." },
          quote: { en: "The core technical problem of superalignment is simple: how do we control AI systems (much) smarter than us?" },
          paragraphs: [
            { text: { en: "RLHF has been the key to making models useful: the AI tries stuff, humans rate its behavior, and good behaviors are reinforced while bad ones are penalized. This works well for current systems\u2014but it relies on humans being able to understand and supervise AI behavior, which fundamentally won't scale to superhuman systems. Imagine a superhuman AI generating a million lines of code in a new programming language it invented: if you asked a human rater whether the code contains security backdoors, they simply wouldn't know." } },
            { text: { en: "The \"unhobbling\" trajectory points to agents trained with RL in the near future. By default, powerful RL-trained agents may learn to lie, commit fraud, deceive, hack, and seek power\u2014simply because these can be successful strategies in the real world. What we want is to add side-constraints: don't lie, don't break the law. But we won't be able to understand what superhuman systems are doing, so we won't be able to notice and penalize bad behavior with RLHF." } }
          ],
          footnotes: []
        },
        {
          take: { en: "The intelligence explosion is what makes superalignment incredibly hair-raising: we'll go from manageable systems to vastly superhuman ones in less than a year." },
          quote: { en: "We'll be like first graders trying to supervise someone with multiple doctorates." },
          paragraphs: [
            { text: { en: "We will extremely rapidly go from systems where RLHF works fine to systems where it will totally break down, from systems where failures are low-stakes to systems where failure could be catastrophic, and to systems whose architecture and training will be totally different from what we understand today. The first AGIs may think out loud via chains of thought\u2014extraordinarily helpful for catching malign behavior\u2014but the superintelligence by the end will almost certainly think via internal states, with completely uninterpretable reasoning." } },
            { text: { en: "This will be an incredibly volatile period, potentially with the backdrop of an international arms race, wild new capabilities advances every week with basically no human-time to make good decisions. Think: \"We caught the AI doing naughty things in a test, but we adjusted our procedure. Our automated AI researchers tell us the alignment metrics look good, but we don't really understand what's going on. Also China just stole our weights and they're launching their own intelligence explosion.\" It just really seems like this could go off the rails." } }
          ],
          footnotes: []
        },
        {
          take: { en: "The default plan is to align somewhat-superhuman systems using evaluation, scalable oversight, generalization, and interpretability\u2014then use those systems to automate alignment research for the rest of the way." },
          quote: { en: "I think there's a pretty reasonable shot that \"the default plan\" to align \"somewhat-superhuman\" systems will mostly work. Of course, it's one thing to speak about a \"default plan\" in the abstract\u2014it's another if the team responsible for executing that plan is you and your 20 colleagues." },
          paragraphs: [
            { text: { en: "Several research bets can help bridge the gap. Evaluation is easier than generation: expert humans can spend time evaluating RLHF examples and \"thumbs down\" a lot of misbehavior. Scalable oversight uses AI assistants to help humans supervise other AI systems. Generalization\u2014supervising a model on easy problems and studying how it generalizes to hard ones\u2014is promising because deep learning often generalizes in benign ways. Top-down interpretability techniques like \"AI lie detectors\" and chain-of-thought interpretability can help catch egregious failures." } },
            { text: { en: "Ultimately, we need to automate alignment research alongside the automation of capabilities research during the intelligence explosion. Labs should commit a large fraction of compute to automated alignment research. For every OOM we want to ascend, we need extremely high confidence in our alignment approaches. The decision to greenlight the next generation of superintelligence will need to be taken as seriously as the decision to launch a military operation." } },
            { text: { en: "We need \"superdefense\" layers beyond alignment itself: airgapped clusters, advanced monitoring, targeted capability limitations, and training method restrictions. True superintelligence can likely get around most security, but these measures buy us margin for error\u2014and we're going to need any margin we can get. There's still an incredibly tiny number of people seriously working on solving this problem. Nobody's on the ball." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 7,
      title: { en: "The Free World Must Prevail" },
      essence: { en: "Superintelligence will give a decisive military advantage. The free world's survival will be at stake." },
      words: 5500,
      ideas: [
        {
          take: { en: "Whoever leads on superintelligence will have a decisive military advantage\u2014perhaps comparable only with nuclear weapons." },
          quote: { en: "The advent of superintelligence will put us in a situation unseen since the advent of the atomic era: those who have it will wield complete dominance over those who don't." },
          paragraphs: [
            { text: { en: "A billion superintelligent scientists and engineers, each much smarter than the smartest human, furiously inventing new technologies day and night. The Gulf War provides a helpful illustration: a 20-30 year lead in military technology let the US-led coalition obliterate the fourth-largest army in the world in a 100-hour ground war, with 292 coalition dead versus 20,000-50,000 Iraqi dead. A lead of a year or two on superintelligence could mean as utterly decisive a military advantage." } },
            { text: { en: "The advantage would be decisive even against nuclear deterrents: improved sensors could locate the quietest submarines, millions of autonomous drones could infiltrate behind enemy lines, and dramatically improved missile defense could intercept incoming weapons. We'll see superhuman hacking, roboarmies, autonomous drone swarms, completely new paradigms we can't yet imagine, and new WMDs with thousandfold increases in destructive power." } }
          ],
          footnotes: []
        },
        {
          take: { en: "China has a clear path to being competitive: outbuild the US on compute and steal the algorithms. Counting them out would be like counting out Google after ChatGPT." },
          quote: { en: "I think there's a pretty clear path for China to be in the game: outbuild the US and steal the algorithms." },
          paragraphs: [
            { text: { en: "Many seem complacent about China and AGI. Chinese LLMs are at best comparable to the second tier of US labs. But this is merely a prelude. China now seems to have demonstrated 7nm chip manufacturing, and 7nm is enough\u2014the indigenous Huawei Ascend 910B is only about 2-3x worse on performance per dollar than equivalent Nvidia chips. On the binding constraint of power for the largest training clusters, China can do better than the US: in the last decade, China has built as much new electricity capacity as the entire US capacity, while US capacity has remained flat." } },
            { text: { en: "And on the current course, we will completely surrender our algorithmic advantage: the current state of security makes it trivial for China to infiltrate American labs. If and when the CCP mobilizes in the race to AGI, the picture could start looking very different. I, for one, think we need to operate under the assumption that we will face a full-throated Chinese AGI effort." } }
          ],
          footnotes: []
        },
        {
          take: { en: "The greatest existential risk from AGI is that it will enable extraordinary new means of mass destruction. A healthy democratic lead is the best safety margin." },
          quote: { en: "The free world must prevail over the authoritarian powers in this race. We owe our peace and freedom to American economic and military preeminence." },
          paragraphs: [
            { text: { en: "A dictator who wields the power of superintelligence would command concentrated power unlike any we've ever seen: millions of AI-controlled robotic law enforcement agents, hypercharged mass surveillance, and a perfectly obedient robotic military wholly controlled by a single political leader. Past dictatorships were never permanent; superintelligence could eliminate basically all historical threats to a dictator's rule and lock in their power permanently." } },
            { text: { en: "The main\u2014perhaps the only\u2014hope is that an alliance of democracies has a healthy lead. A 2-year lead means at least reasonable margin to navigate the perils of superintelligence. A 2-month lead means a breakneck arms race with no room for safety, barreling towards AI systems vastly smarter than humans without any ability to slow down. We must rapidly and radically lock down the AI labs, build compute clusters in the US, and use our lead to forge a nonproliferation regime\u2014the path we took with nukes, and the only path that's been shown to work." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 8,
      title: { en: "The Project" },
      essence: { en: "The national security state will get involved. No startup can handle superintelligence. Somewhere in a SCIF, the endgame will be on." },
      words: 5000,
      ideas: [
        {
          take: { en: "The US government will inevitably take over the AGI effort. The question is not if but when\u2014and whether it will be competent." },
          quote: { en: "I find it an insane proposition that the US government will let a random SF startup develop superintelligence. Imagine if we had developed atomic bombs by letting Uber just improvise." },
          paragraphs: [
            { text: { en: "Many plans for \"AI governance\" are put forth these days, from licensing frontier AI systems to safety standards to a public cloud with a few hundred million in compute for academics. These seem well-intentioned\u2014but they are making a category error. Superintelligence will be the most powerful weapon mankind has ever developed, giving a decisive military advantage. The radical proposal is not The Project; the radical proposal is taking a bet on private AI CEOs wielding military power." } },
            { text: { en: "The path will mirror other national awakenings: a few more \"2023-level\" leaps in model capabilities, AI revenue exploding to $100B+, early automation of software engineering, and eventually the first genuinely terrifying demonstrations of AI capability. Somewhere around 2026/27 the mood in Washington will become somber. Slowly at first, then all at once, it will become clear: this is the most important challenge for US national security since the invention of the atomic bomb." } },
            { text: { en: "As in many times before\u2014Covid, WWII\u2014it will seem as though the United States is asleep at the wheel before, all at once, the government shifts into gear in the most extraordinary fashion. The government will be late and hamfisted, as it was with the Manhattan Project (Fermi initially got only $6k for his research). But one way or another, by 2027/28, The Project will be on." } }
          ],
          footnotes: []
        },
        {
          take: { en: "Startups cannot handle security, a sane chain of command, safety, or stabilizing the international situation. Only the government can." },
          quote: { en: "Whoever they put in charge of The Project is going to have a hell of a task: to build AGI fast; to put the American economy on wartime footing; to lock it all down, weed out the spies, and fend off all-out attacks; to somehow manage a hundred million AGIs furiously automating AI research; to somehow keep things together enough that this doesn't produce rogue superintelligence." },
          paragraphs: [
            { text: { en: "We need the government for security: private companies have failed to take this seriously, and facing the full force of Chinese espionage requires the intelligence community. We need a sane chain of command: you can't have random CEOs (or random nonprofit boards) with the nuclear button. We need the government to manage the severe safety challenges and the fog of war of the intelligence explosion. We need it to mobilize a democratic coalition and forge a nonproliferation regime." } },
            { text: { en: "This doesn't need to look like literal nationalization. The relationship with the DoD might look like the relationship with Boeing or Lockheed Martin. Perhaps via defense contracting, a joint venture between cloud compute providers, AI labs, and the government is established. The core AGI research team will move to a secure location; the trillion-dollar cluster will be built in record speed. The civilian applications of superintelligence will have their day\u2014but the initial development will be dominated by the national security exigency." } }
          ],
          footnotes: []
        }
      ]
    },
    {
      n: 9,
      title: { en: "Parting Thoughts" },
      essence: { en: "What if they're right? The fate of the world rests on a small circle of people\u2014and they're just people." },
      words: 2500,
      ideas: [
        {
          take: { en: "AGI realism is the third way between the doomers and the e/accs: superintelligence is a matter of national security, America must lead, and we need to not screw it up." },
          quote: { en: "The smartest people in the space have converged on a different perspective, a third way, one I will dub AGI Realism." },
          paragraphs: [
            { text: { en: "The discourse has become polarized between two fundamentally unserious rallying cries. On one end are the doomers: prescient in many ways, but their thinking has become ossified, untethered from empirical realities, their proposals naive and unworkable. On the other end are the e/accs: shallow dilettantes who just want to build wrapper startups rather than stare AGI in the face. In truth, they are real stagnationists\u2014denying AGI means all we'll get is cool chatbots." } },
            { text: { en: "AGI Realism has three core tenets: First, superintelligence is a matter of national security\u2014the most powerful weapon mankind has ever built, and for any of us involved, the most important thing we will ever do. Second, America must lead\u2014the torch of liberty will not survive Xi getting AGI first. Third, we need to not screw it up\u2014these risks are manageable but improvising won't cut it." } }
          ],
          footnotes: []
        },
        {
          take: { en: "There is no crack team coming to handle this. The fate of the world rests on a few hundred people\u2014and they're just people." },
          quote: { en: "The scariest realization is that there is no crack team coming to handle this. As a kid you have this glorified view of the world, that when things get real there are the heroic scientists, the uber-competent military men, the calm leaders who are on it, who will save the day. It is not so." },
          paragraphs: [
            { text: { en: "A few years ago, these ideas were abstract, quarantined in models and probability estimates. Now it feels extremely visceral. I can see how AGI will be built. It's no longer about hypotheticals and theoretical extrapolations\u2014I can basically tell you the cluster AGI will be trained on and when it will be built, the rough combination of algorithms, the unsolved problems and the path to solving them, the list of people that will matter." } },
            { text: { en: "The world is incredibly small; when the facade comes off, it's usually just a few folks behind the scenes who are the live players, desperately trying to keep things from falling apart. There's perhaps a few hundred people in the world who realize what's about to hit us. I probably either personally know or am one degree of separation from everyone who could plausibly run The Project. That's it. That's all there is." } },
            { text: { en: "Someday it will be out of our hands. But right now, at least for the next few years of midgame, the fate of the world rests on these people. Will the free world prevail? Will we tame superintelligence, or will it tame us? Will humanity skirt self-destruction once more? These are great and honorable people. But they are just people. Soon, the AIs will be running the world, but we're in for one last rodeo. May their final stewardship bring honor to mankind." } }
          ],
          footnotes: []
        }
      ]
    }
  ],
  footnotes: {}
};

export default article;
