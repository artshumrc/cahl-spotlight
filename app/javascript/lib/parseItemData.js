import s from 'underscore.string';

const getItemName = item => {
	let name = '';

	if (Array.isArray(item.data.name)) {
		item.data.name.forEach(_name => {
			if (Array.isArray(_name.namePart)) {
				_name.namePart.forEach(_n => {
					if (typeof _n === "string") {
						name = `${name} ${_n}`;
					}
				});
			} else {
				name = `${name} ${_name.namePart}`;
			}
		});
	} else if (item.data.name) {
		if (Array.isArray(item.data.name.namePart)) {
			item.data.name.namePart.forEach(_n => {
				if (typeof _n === "string") {
					name = `${name} ${_n}`;
				}
			});
		} else {
			name = `${name}${item.data.name.namePart}`;
		}
	}

	return s.trim(name);
};

const getItemRecordIdentifier = item => {
	let recordIdentifier = '';

	recordIdentifier = item.data.recordInfo.recordIdentifier['#text'];

	return recordIdentifier;
};


const getItemImgSrc = item => {
	let imgSrc = false;

	// TODO: adapt with DRS extension
	// file delivery url
	// same as Full image
	// parameters to get the thumbnail

	if (item.data.relatedItem
		&& item.data.relatedItem.length
		&& item.data.relatedItem[0].location
		&& item.data.relatedItem[0].location.length > 1
		&& item.data.relatedItem[0].location[0].url
		&& item.data.relatedItem[0].location[0].url.length > 1
	) {
		imgSrc = item.data.relatedItem[0].location[0].url[0]['#text']
	}

	return imgSrc;
};

const getItemImgThumbnailSrc = item => {
	let imgSrc = false;

	if (item.data.relatedItem
		&& item.data.relatedItem.length
		&& item.data.relatedItem[0].location
		&& item.data.relatedItem[0].location.length > 1
		&& item.data.relatedItem[0].location[0].url
		&& item.data.relatedItem[0].location[0].url.length > 1
	) {
		imgSrc = item.data.relatedItem[0].location[0].url[1]['#text']
	}

	return imgSrc;
};


export { getItemName, getItemRecordIdentifier, getItemImgSrc, getItemImgThumbnailSrc };
