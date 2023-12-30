// const btn = document.querySelector("#button-addon2");
// const detBox = document.querySelector(".det");
// const inp = document.querySelector(".inp");

// btn.addEventListener("click",async ()=>{
//     const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=${inp.value}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3713b5c57dmsh58d5578eb3f38f4p10db1bjsncef90a773431',
// 		'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//     detBox.innerHTML =  `

    
//     `;
//     location.href =result.link;
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// });
// //<iframe width="719" height="404" src="https://www.youtube.com/embed/vNGOEkYSDuk" title="You Won&#39;t Believe What He Did for her..🤣❤️|Elvish Vs Munawar Fans, Ranbir, Sandeep Vs Vivek,Thugesh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// // <img src="..." class="img-fluid" alt="...">
async function  downloadAudio() {
    var youtubeUrl = document.getElementById('youtubeUrl');
    var videoId = 69;
 
    if (videoId) {
        // Perform download or display result
        var downloadResult = document.getElementById('downloadResult');

        // Add your download logic here, e.g., redirect to a download link or trigger a backend download process
            const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=${youtubeUrl.value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3713b5c57dmsh58d5578eb3f38f4p10db1bjsncef90a773431',
		'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    
    downloadResult.innerHTML = '<div class="alert alert-success" role="alert">Audio downloaded successfully!</div>';
   
    location.href =result.link;
	console.log(result);
} catch (error) {
	console.error(error);
}
     
    }
     else {
        // Display error if the URL is invalid
        var downloadResult = document.getElementById('downloadResult');
        downloadResult.innerHTML = '<div class="alert alert-danger" role="alert">Invalid YouTube Video URL</div>';
    }
}

