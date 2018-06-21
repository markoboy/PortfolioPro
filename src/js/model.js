/**
 * @file model.js
 * This will be the model of the portfolio site
 * it will contain all the datas that are needed
 * to be displayed over the site.
 *
 * All datas from this file will be gained by the
 * octopus.js file which it will connect it with
 * the page view.
 *
 * @author - Athanasios Markou.
 * @date - June 2018
 */
const model = {
	// Set the current page to load.
	currentPage: '',

	// Store the personal data.
	profile: {
		fullName: 'Athanasios Markou',
		role    : 'Junior Front-End Developer',
		summary : 'Personal summary',
		bioPic  : 'img/biopic.png',
		backPic : ''
	},

	// Store the contact info.
	contact: {
		location: 'Newcastle upon Tyne',
		phone   : '+44 7742 204371',
		email   : 'thanasismarko@gmail.com',
		github  : 'github url',
		linkedin: 'linkedin url'
	},

	// Store skills achieved.
	skills: [
		{
			name : 'Skill name',
			level: 'Skill level'
		}
	],

	// Store school.
	school: [
		{
			name     : '4th Geniko Lykeio (Greek High School)',
			degree   : 'Apolytirion of Geniko Lykeio',
			header   : 'Higher secondary education',
			location : 'Ilion, Greece',
			locURL   : 'https://www.google.com/maps/place/Ilion,+Greece/@38.0337439,23.6709191,13z/data=!3m1!4b1!4m5!3m4!1s0x14a1a3a80afcf365:0x400bd2ce2b979a0!8m2!3d38.0307786!4d23.7038541',
			startDate: new Date(2009, 8, 11),
			endDate  : new Date(2012, 6, 15),
			type     : 'school',
			feedImg  : ['img/book.svg', 'img/graduate.svg'] // Starting feed image, End feed image.
		}
	],

	// Store online schools.
	onlineSchool: [
		{
			name     : 'Udacity',
			course   : 'Front-End Web Developer Nanodegree',
			header   : 'Front-End Web Developer Nanodegree',
			location : 'Udacity, Online',
			locURL   : 'https://udacity.com',
			startDate: new Date(2018, 1, 15),
			endDate  : new Date(2018, 7, 15, 8),
			desc     : 'Provide a desc for the course.',
			type     : 'online',
			feedImg  : ['img/book.svg', 'img/certificate.svg']
		}
	],

	// Store all projects in an array.
	projects: [
		{
			name     : 'Project Name',
			header   : 'Project\'s header',
			desc     : 'Project\'s description',
			startDate: new Date(2018, 5, 1, 3),
			endDate  : 'Present',
			location : 'GitHub',
			locURL   : 'url.project.com',
			img      : '',
			type     : 'project',
			feedImg  : ['img/pencil_rubber.svg', 'img/code_branch.svg']
		}
	],

	// Store wroks in an array.
	works: [
		{
			name     : 'Company\'s name',
			role     : 'Work title',
			header   : 'Work title',
			startDate: new Date(2017, 3, 25),
			endDate  : 'Present',
			location : 'Newcastle upon Tyne',
			locURL   : 'https://www.google.com/maps/place/Newcastle+upon+Tyne/@55.0022917,-1.7969253,11z/data=!3m1!4b1!4m5!3m4!1s0x487d857e0c6f64cd:0xbe252b072a76191!8m2!3d54.978252!4d-1.61778',
			desc     : 'Work description and duties.',
			type     : 'work',
			feedImg  : ['img/suitcase.svg', 'img/end_work.svg']
		}
	]
}