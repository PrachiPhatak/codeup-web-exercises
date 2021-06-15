// TODO: using fetch(), make a simple GET request to this api: “https://dog.ceo/api/breeds/image/random”
//  and append this image to the image element with an id of “random-dog-image”


const myRequest = new Request('https://dog.ceo/api/breeds/image/random');
fetch(myRequest)
    .then(response => response.json())
    .then(data => {
            $("img").attr("src", data.message)
    })