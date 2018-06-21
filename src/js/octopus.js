/**
 * @file octopus.js
 * This is the object file that will collect all
 * the data from model.js in order for the view
 * to access it so that it can be displayed.
 *
 * Every interaction between the view and the
 * datas will occur by this file only.
 *
 * @author - Athanasios Markou.
 * @date - June 2018
 */
const octopus = {
	// Initialize the page.
	init: function() {
		// Check the page URL.
		this.checkPageURL();

		// Initialize the view.
		view.init();
	},

	// Get the the property data from the model obj.
	getProp: function(propName) {
		return model[propName];
	},

	/**
	 * Store all datas(school, onlineSchool, projects and works)
	 * into a sorted array based on the dates to show them as
	 * a feeds collection.
	 *
	 * @return - An array with all feeds data based on their date.
	 */
	getFeedsData: function() {
		// Store which data are needed from the model.
		let feedsData = ['school', 'onlineSchool', 'projects', 'works'];
		
		// Create the allFeeds to store the datas.
		let allFeeds = [],
			feedData = {};

		// Loop through each data and push the needed datas to the allFeeds.
		feedsData.forEach(function(prop) {
			octopus.getProp(prop).forEach(function(feed) {
				feedData = {
					date: feed.startDate,
					ongoing: true,
					obj: feed
				}

				allFeeds.push(feedData);

				if (feed.endDate !== 'Present') {
					feedData = {
						date: feed.endDate,
						ongoing: false,
						obj: feed
					}

					allFeeds.push(feedData);
				}
			});
		});

		// Sort the feeds in descending order.
		return allFeeds.sort(function(a, b){return b.date - a.date});
	},

	// Get current page to render.
	getCurrentPage: function() {
		return model.currentPage;
	},

	// Change the current page to render.
	changeCurrentPage: function(page) {
		model.currentPage = page;

		view.render();
	},

	// Check the url to set the current page.
	checkPageURL: function() {
		// Store the URL ID tag to change the page view.
		let hash = location.hash;

		// Check if the ID is a correct value else set the
		// currentPage to render the home page.
		if (hash) {
			let page = hash.replace('#', '');

			if (page === 'projects' || page === 'resume' || page === 'home') {
				model.currentPage = page;
			}
		} else {
			model.currentPage = 'home';
		}
	}
}