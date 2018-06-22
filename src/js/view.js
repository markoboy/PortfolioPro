/**
 * @file view.js
 * This is the object file that will receive any
 * wanted datas from model.js through the octopus.js
 * file in order to render it to the screen and 
 * create the page view.
 *
 * @author - Athanasios Markou.
 * @date - June 2018
 */
const view = {
	// Initialize the view.
	init: function() {
		// Store month names to be used for date stringify.
		this.monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		// Initialize the current page.
		this[octopus.getCurrentPage()].init();
	},

	// Render the page.
	render() {

	},

	// Create the home view object.
	home: {
		// Initialize the view.
		init: function() {
			this.main = document.querySelector('.main_content');

			this.render();
		},

		// Render the view.
		render: function() {
			// Get allFeeds.
			let allFeeds = octopus.getFeedsData();
			let home = this;

			// Append allFeeds to the view.
			allFeeds.forEach(function(feed) {
				home.createFeedEntry(home.main, feed);
			});
		},

		/**
		 * Create the feeds-entry div.
		 * @param {object} el - The element to append the entry.
		 * @param {object} obj - The object from which to get the data.
		 */
		createFeedEntry: function(el, obj) {
			// Create the container element.
			let container = document.createElement('div');
			container.classList.add('container');

			// Store the user data and the objects feed data.
			let user = octopus.getProp('profile'),
				feed = obj.obj;

			// Store the feeder image.
			let feedImg;
			obj.ongoing ? feedImg = feed.feedImg[0] : feedImg = feed.feedImg[1];

			// Create the feeds_header msg.
			let msg = this.createHeaderMsg(obj);

			// Create the template for the container.
			let htmlContent = `
				<div class="bio_pic_thumb">
					<img src="${user.bioPic}" alt="Bio picture thumbnail">
				</div>
				<div class="feeds_header">
					<p>${user.fullName} ${msg} ${feed.name}.</p>
					<p class="feeds_date">${this.dtToString(obj.date)}</p>
				</div>
				<div class="feeds_container">
					<img src="${feedImg}" width="42px" height="42px">
					<h3><a href="#">${feed.header}</a></h3>
					<p class="location"><a href="${feed.locURL}" target="_blank">${feed.location}</a></p>
				</div>`;

			// Insert the html content to the container.
			container.insertAdjacentHTML('beforeend', htmlContent);
			// Append the content to the element.
			el.appendChild(container);
		},

		/**
		 * Create the header message for the feed container.
		 * @param obj {object} - The object from which to check the data.
		 */
		createHeaderMsg: function(obj) {
			// Get the status of the feed and its type.
			let type = obj.obj.type,
				status = obj.ongoing,
				msg;

			// Check the type of the object and if it is starting or it has ended.
			switch(type) {
				case 'online':
				case 'school':
					status ? msg = 'is studying at' : msg = 'graduated from';
					break;
				case 'project':
					status ? msg = 'started a new project -' : msg = 'finished a project -';
					break;
				case 'work':
					status ? msg = 'started a new job at' : msg = 'left job from';
					break;
				default:
					msg = `no type was defined, please check ${obj.obj}`;
			}

			return msg;
		},

		/**
		 * Converts a date to string.
		 * @param {object} dt - The date to convert into string.
		 * @return {string}
		 */
		dtToString: function(dt) {
			// Get the date - month - year of the dt.
			let day  = dt.getDay(),
				date = dt.getDate(),
				month = dt.getMonth(),
				year  = dt.getFullYear();

			// Convert date to string and add the date's prefix.
			let dateStr = date.toString(),
				len = dateStr.length - 1,
				pref;

			if ( date > 3 && date < 14 ) {
				pref = 'th';
			} else {
				dateStr[len] === '1' ? pref = 'st' :
					dateStr[len] === '2' ? pref = 'nd' :
					dateStr[len] === '3' ? pref = 'rd' :
					pref = 'th';
			}

			// Return the date into string.
			return `${date}${pref} of ${view.monthName[month]}, ${year}`;
		}
	}
}

octopus.init();