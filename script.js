/* Copyright...meh?
 * If you use this...that's your own fault. That's on you.
 * Aaron Tagliaboschi<aaron.tagliaboschi@gmail.com> 
 */

// These are the response code each "bucket" represents
let buckets = [
	200,
	301,
	302,
	304,
	307,
	308,
	400,
	401,
	403,
	404,
	500,
	0,   // "Other" bucket, being excluded
	0    // I have no idea why there's an extra 0 appended to the histogram
	     // array. Yet here we are...
];

// Multiply each bucket in the histogram by its "weight"
let bucket_weighted = histogram => 
	// TIL map also provides index. Shows how often I use JS
	histogram.map((x,i) => x * buckets[i]);

// Let me just say that it's super nutty this isn't a built in function...
let sum = arr => arr.reduce((a,b) => a+b, 0);

// If someone finds the REST API documentation, please let me know so I can link 
// it here. I had to dig through the code for their automatic dashboard maker
// thing to find these URLs
let tele_url = ver_date => "https://aggregates.telemetry.mozilla.org/aggregates_by/submission_date/channels/nightly/" +
	"?metric=HTTP_RESPONSE_STATUS_CODE" +
	"&version=" + ver_date["version"] +
	"&dates=" + ver_date["date"];

// This URL returns a json list of the most recent dates of histograms with the
// nightly version associated with it.
fetch("https://aggregates.telemetry.mozilla.org/aggregates_by/build_id/channels/nightly/dates/").then(response => response.json())
	// Grab the most recent collection and use that to build the URL
	.then(json => fetch(tele_url(json[0]))).then(response => response.json())
	.then(json => {
		histogram = json.data[0].histogram;
		bwh = bucket_weighted(histogram);
		population = sum(histogram);
		// Remove the "other" and mystery buckets from the population
		// The "mystery" bucket has been 0 every time I've seen it, but I'm not 
		// taking chances...
		population -= (histogram[11] + histogram[12]);
		average_response = sum(bwh) / population;
		ar_dom = document.getElementById("average_response");
		// Slap that greasy pig in the oven!
		ar_dom.innerHTML=average_response.toPrecision(4);
	});
