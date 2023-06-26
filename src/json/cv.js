import AwsPng from '../images/aws.png';
import SaabPng from '../images/saab.png';

export default [
	{
		title: 'Amazon Web Services',
		timeframe: 'Feb 2021 - Present',
		roles: [
			'Software Development Engineer II (Sept 2022 - Present)',
			'Software Development Engineer I (Feb 2021 - Sept 2022)',
		],
        imageUri: AwsPng,
		bullets: [
			{
				text: 'Contributed to the successful delivery of the AWS GuardDuty Runtime Threat Detection Agent, which was announced at re:Invent 2022',
				bullets: [
                    {
                        "text": 'Designed and built a critical service for tracking the aliveness of agents and billing customers accordingly',
                    },
                    {

                        "text": 'Designed and built a backend service for metrics ingestion and dashboarding to ensure operational readiness',
                    },
                    {
                        "text": 'Led a team of 4 engineers in the metrics collection and end-to-end strategy, efficiently getting data from agents into the metrics service'
                    }
				],
			},
			{
				text: 'Led the requirement gathering and system design of an automated malware collection and analysis platform',
				bullets: [
                    {
                        "text": 'Collaborated with cross-functional teams to disambiguate the microservices architecture, resulting in a highly scalable and secure system that supports multiple organizational use cases.',
                    },
                    {
                        "text": 'Delivered the Sample Ingestion service, an extensible ECS service that ingests files from different sources.',
                    },
                    {
                        "text": 'Led design and implementation of Feature Extraction Service and its development framework to allow researchers to easily add feature extractors to analyze datasets and develop ML models',
                    }
				],
			},
            {
                text: "Rapidly onboarded to adjacent team’s project and built out the Blue/Green deployment infrastructure for an internal GuardDuty API averaging ~76k TPS, delivered on time for GA deadline",
            },
            {
                text: "Automated migration of large number of S3 buckets across accounts via bash scripting and AWS DataSync API"
            },
		],
	},
	{
		title: 'Amazon Web Services',
		timeframe: 'June 2020 - Aug 2020',
		roles: [
			'Software Development Engineer Intern',
		],
        imageUri: AwsPng,
		bullets: [
            {
                text: 'Designed, implemented, and integrated an internal library for determining the operational states of ~100,000 links/month to block testing on active links in the network'
            },
            {
                text: 'Phased in rollout to silently capture metrics of runtimes to ensure additional latencies were non-disruptive for customer use-cases'
            },
            {
                text: 'Filtering feature deployed to production and has received positive recognition from customers for keeping AWS network safe by blocking roughly ~3500 dangerous executions per month',
            }
		],
	},
	{
		title: 'Saab - Air Traffic Management',
		timeframe: 'Aug 2018 - May 2019',
		roles: [
			'Software Engineer Intern - R&D Application Prototyping',
		],
        imageUri: SaabPng,
		bullets: [
            {
                text: 'Architected and implemented the full stack of a pluggable PWA which displayed customized layouts of plugins based on workstation IP address'
            },
            {
                text: 'Developed front-end of PWA demoed during bid for $2.3 million contract '
            },
            {
                text: 'Developed several administrative plugins for creating new layouts, themes, workstation arrangements, toolset groups, data subscriptions, and settings for plugins based on workstation type and operator permissions',
            },
            {
                text: 'Developed three operator plugins for streaming ITW and NOTAM data via a socket.io streaming service, and rendering/navigating PDF documents fetched from a document server',
            },
            {
                text: 'Created several software management scripts for creating a fresh development environment, creating a system release, deploying and extracting the system, managing databases, tagging components, and publishing API documentation',
            },
		],
	},
];
