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

	if (HULItem.relatedItem
		&& HULItem.relatedItem.location
		&& HULItem.relatedItem.location.length
		&& HULItem.relatedItem.location[0].url
		&& HULItem.relatedItem.location[0].url.length > 1
	) {
		HULItem.relatedItem.location[0].url[1]['#text']
	}


	return imgSrc;
};


export { getHULItemName, getHULItemRecordIdentifier, getHULItemImgSrc };
