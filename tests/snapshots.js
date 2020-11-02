const ps = require('@percy/script');


const options = {headless:false};
ps.run( async (page,percySnapshot) => {

	await page.goto("http://localhost:8000/");

	await page.waitFor(1000);

	await percySnapshot("homepage",{widths:[992,120]});

},options);
