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
		bioPic  : '',
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
			location : 'Ilion, Greece',
			startDate: new Date(2009, 8, 11),
			endDate  : new Date(2012, 6, 15),
			type     : 'school'
		}
	],

	// Store online schools.
	onlineSchool: [
		{
			name     : 'Udacity',
			course   : 'Front-End Web Developer Nanodegree',
			url      : 'https://udacity.com',
			startDate: new Date(2018, 1, 15),
			endDate  : 'Present',
			desc     : 'Provide a desc for the course.',
			type     : 'online'
		}
	],

	// Store all projects in an array.
	projects: [
		{
			name     : 'Project Name',
			desc     : 'Project\'s description',
			startDate: new Date(2018, 5, 1, 3),
			endDate  : 'Present',
			url      : 'url.project.com',
			img      : '',
			type     : 'project'
		}
	],

	// Store wroks in an array.
	works: [
		{
			name     : 'Company\'s name',
			role     : 'Work title',
			startDate: new Date(2017, 3, 25),
			endDate  : 'Present',
			desc     : 'Work description and duties.',
			type     : 'work'
		}
	]
}