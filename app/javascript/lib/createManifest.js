const createManifest = async (manifest) => {
	try {
		const res = await fetch(`http://localhost:3001/createManifest`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(manifest)
		});
		return await res.json();
	} catch (err) {
		throw err;
	}
};

export {createManifest};
