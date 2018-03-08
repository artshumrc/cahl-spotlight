import s from 'underscore.string';

const getHULItemName = HULItem => {
	let name = '';

	if (Array.isArray(HULItem.name)) {
		HULItem.name.forEach(_name => {
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
	} else if (HULItem.name) {
		if (Array.isArray(HULItem.name.namePart)) {
			HULItem.name.namePart.forEach(_n => {
				if (typeof _n === "string") {
					name = `${name} ${_n}`;
				}
			});
		} else {
			name = `${name}${HULItem.name.namePart}`;
		}
	}

	return s.trim(name);
};

const getHULItemRecordIdentifier = HULItem => {
	let recordIdentifier = '';

	recordIdentifier = HULItem.recordInfo.recordIdentifier['#text'];

	return recordIdentifier;
};


const getHULItemImgSrc = HULItem => {
	let imgSrc = false;

	// TODO: adapt with DRS extension
	// file delivery url
	// same as Full image
	// parameters to get the thumbnail


	if (HULItem.relatedItem
		&& HULItem.relatedItem.length
		&& HULItem.relatedItem[0].location
		&& HULItem.relatedItem[0].location.length > 1
		&& HULItem.relatedItem[0].location[0].url
		&& HULItem.relatedItem[0].location[0].url.length > 1
	) {
		imgSrc = HULItem.relatedItem[0].location[0].url[0]['#text']
	}

	return imgSrc;
};

const getHULItemImgThumbnailSrc = HULItem => {
	let imgSrc = false;

	if (HULItem.relatedItem
		&& HULItem.relatedItem.length
		&& HULItem.relatedItem[0].location
		&& HULItem.relatedItem[0].location.length > 1
		&& HULItem.relatedItem[0].location[0].url
		&& HULItem.relatedItem[0].location[0].url.length > 1
	) {
		imgSrc = HULItem.relatedItem[0].location[0].url[1]['#text']
	}

	return imgSrc;
};


export { getHULItemName, getHULItemRecordIdentifier, getHULItemImgSrc, getHULItemImgThumbnailSrc };
